import Layout from '../components/Layout'
import ArmorSection from '../components/sections/ArmorSection'
import WeaponSection from '../components/sections/WeaponSection'
import InputField from '../components/InputField'
import { useSession} from 'next-auth/client'
import { connectToDatabase } from '../utils/mongodb'
import { useEffect, useReducer, useState } from 'react'
import { dispatchWrapper, stateReducer, ObjectId, initialState } from '../utils/appState'

export default function Home({ defaultFilter, staticData, armourBaseTypes }) {
  const [session, loading] = useSession()
  const [state, dispatch] = useReducer(stateReducer, initialState)
  const [filter, setFilter] = useState(defaultFilter)
  //const [updater, forceUpdate] = useReducer(x => x + 1, 0);
  const [armourDetails] = staticData.filter(data => data.name === "armourDetails");
  const {
    startLoading, 
    setId, 
    setName, 
    createId, 
    finishLoading
  } = dispatchWrapper(dispatch)

  useEffect(() => {
    startLoading()
    const existingFilter = localStorage.getItem("curFilter")
    if (existingFilter) {
      fetch(`api/filter/${existingFilter}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then(response => response.json())
        .then(setFilter)
        .then(setId(filter._id), setName(filter.name),)
        .catch(e => console.log(e))
    } else {
      createId()
      setName("Default Filter")
    }

   const timer = setTimeout(() => {
      finishLoading()
    }, 500)
    return () => clearTimeout(timer)
  }, [filter._id, filter.name])



  function handleClick() {
    startLoading()
    fetch("api/filter/defaults/defaults")
      .then(response => response.json())
      .then(response => {
        localStorage.removeItem("curFilter")
        setFilter(response)
        createId()
        setName("Default Filter")
      })
     setTimeout(() => {
        finishLoading()
      }, 500)
    }

  return (
    <Layout session={session} key={state._id}>
    {state.isLoading ? (
      <div className="flex w-screen h-screen justify-center items-center">
        <p>Loading...</p>
      </div>
    ): (
      <>
      <h1>CURRENT FILTER: {state.name} - {state._id}</h1>
      <button onClick={handleClick}>Reset filter</button>
      <br />
      <InputField 
      field="name"
      defaultValue={state.name}
      filterId={state._id}
      className="filternameInput"
      />
      <ArmorSection 
      filter={filter} 
      data={armourDetails} 
      filterId={state._id}
      armourBaseTypes={armourBaseTypes}
      />
      </>
    )}
    </Layout>
  )
}

export async function getStaticProps() {
  const { db } = await connectToDatabase()

  const defaultFilter = JSON.parse(JSON.stringify(
    await db.collection("filter").findOne({})
  ))

  const staticData = JSON.parse(JSON.stringify(
    await db.collection("static").find({}).toArray()
  ))

  let armourBaseTypes = await db.collection("itemBases")
    .aggregate([
      { $match: { release_state: "released", itemType: "armour" } },
      { $lookup: {
          from: "mods",
          localField: "implicits",
          foreignField: "identifier",
          as: "implicitsInfo"
        } 
      },
      // FIXME: This lookup produces duplicate values if implicitsInfo has 2 or more ids?
      // also, need tighter coupling between ids, as they can be out of order as is.
      // probably need to use lookup pipeline.
      { $lookup: {
          from: "statTranslations",
          localField: "implicitsInfo.stats.id",
          foreignField: "ids",
          as: "implicitsInfoHR"
        } 
      },
      { $project: {
          _id: 0,
          name: 1,
          item_class: 1,
          properties: 1,
          requirements: 1,
          "implicitsInfo.stats": { $ifNull: [ "$implicitsInfo.stats", "null" ] },
          "implicitsInfo.name": { $ifNull: [ "$implicitsInfo.name", "null" ] },
          "implicitsInfoHR.English.string": { $ifNull: [ "$implicitsInfoHR.English.string", "null" ]},
          "implicitsInfoHR.English.format": { $ifNull: [ "$implicitsInfoHR.English.format", "null" ]},
        }
      },
      { $sort: { name : 1 } },
    ]).toArray()


  armourBaseTypes = JSON.parse(JSON.stringify(armourBaseTypes))

  function combineImplicitInfo(item) {
    const titleCase = (str) => str.replace(/\b\S/g, t => t.toUpperCase());
    const propertiesText = Object.keys(item.properties)
      .map((prop) => prop === "movement_speed" && item.properties[prop] <= 0 ? "" 
        : `${titleCase(prop.replace(/_/, " "))}: ${item.properties[prop]}`)

    const itemTemplate = {
      itemClass: item.item_class,
      name: item.name,
      properties: item.properties,
      propertiesText,
      requirements: item.requirements,
      implicits: [],
    }
    const implicitTemplate = {
      id: "",
      format: "",
      min: null,
      max: null,
      descr: "",
      fullDescr: "",
    }

    // Hmmm... Probably very inefficient.
    for (let i = 0; i < item.implicitsInfo.length; i++) {
      let stats = item.implicitsInfo[i].stats[0]
      let hrStats = item.implicitsInfoHR[i].English[0]
      for (let j = 0; j < stats.length; j++) {
        const implicit = { 
          ...implicitTemplate, 
          id: stats[j].id,
          min: stats[j].min,
          max: stats[j].max,
        }
        // Not sure where this is an issue...
        if (hrStats.string[j]) {
          implicit.format = hrStats.format[j][0][0] && hrStats.format[j][0][0] !== "ignore" ? hrStats.format[j][0][0] : ""
          implicit.descr = hrStats.string[j][0] !== "ignore" ? hrStats.string[j][0] : ""
        }
        itemTemplate.implicits.push(implicit)
      }
    }

    itemTemplate.implicits.forEach(implicit => {
      let descr = implicit.format.replace(/\#/, "")
      const valueRange = implicit.min === implicit.max ? 
        implicit.min : `${implicit.min}-${implicit.max}`
      descr += implicit.descr.replace(/\{.*\}/, valueRange)
      implicit.fullDescr = descr
    })

    return itemTemplate
  }

  armourBaseTypes =  armourBaseTypes.map(base => combineImplicitInfo(base))

  return {
    props: {
      defaultFilter,
      staticData,
      armourBaseTypes,
    }
  }

}
