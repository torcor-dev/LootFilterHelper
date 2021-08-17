import Layout from '../components/Layout'
import ArmorSection from '../components/sections/ArmorSection'
import WeaponSection from '../components/sections/WeaponSection'
import InputField from '../components/InputField'
import { useSession} from 'next-auth/client'
import { connectToDatabase } from '../utils/mongodb'
import { useEffect, useReducer, useState } from 'react'
import { dispatchWrapper, stateReducer, ObjectId, initialState } from '../utils/appState'

export default function Home({ 
  defaultFilter, 
  staticData, 
  armourBaseTypes, 
  weaponBaseTypes,
}) {
  const [session, loading] = useSession()
  const [state, dispatch] = useReducer(stateReducer, initialState)
  const [filter, setFilter] = useState(defaultFilter)
  //const [updater, forceUpdate] = useReducer(x => x + 1, 0);
  const [armourDetails] = staticData.filter(data => data.name === "armourDetails");
  const [weaponDetails] = staticData.filter(data => data.name === "weaponDetails");
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

  function scrollFill() {
    const fill = []
    for(let i = 0; i < 4000; i++) {
      fill.push("Lorem ipsum etc, etc...\n")
    }
    return fill
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
      className="input nameInput"
      />
      <WeaponSection 
      filter={filter} 
      data={weaponDetails} 
      filterId={state._id}
      weaponBaseTypes={weaponBaseTypes}
      />
      <ArmorSection 
      filter={filter} 
      data={armourDetails} 
      filterId={state._id}
      armourBaseTypes={armourBaseTypes}
      />
      <div className="pb-56"></div>
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

  async function getItemBases(type) {
    return await db.collection("itemBases")
    .aggregate([
      { $match: { release_state: "released", itemType: type } },
      { $lookup: {
          from: "mods",
          localField: "implicits",
          foreignField: "identifier",
          as: "implicits_info"
        } 
      },
      { $project: {
          _id: 1,
          name: 1,
          item_class: 1,
          properties: 1,
          requirements: 1,
          "implicits_info.translated_stats": { $ifNull: [ "$implicits_info.translated_stats", [""] ] },
        }
      },
      { $sort: { name : 1 } },
    ]).toArray()
  }

  let armourBaseTypes = await getItemBases("armour")
  let weaponBaseTypes = await getItemBases("weapon")

  function combineItemInfo(item) {
    const titleCase = (str) => str.replace(/\b\S/g, t => t.toUpperCase());
    const propertiesText = Object.keys(item.properties)
      .map((prop) => prop === "movement_speed" && item.properties[prop] <= 0 ? "" 
        : `${titleCase(prop.replace(/_/, " "))}: ${item.properties[prop]}`)

    const [translated_stats] = item.implicits_info
    let implicits = []
    let implicitsText = ""
    if (translated_stats){
      implicits = translated_stats.translated_stats[0]
      implicitsText = implicits.join(", ")
    }



    const itemTemplate = {
      id: item._id,
      itemClass: item.item_class,
      name: item.name,
      properties: item.properties,
      propertiesText,
      requirements: item.requirements,
      implicits,
      implicitsText
    }
    return itemTemplate
  }

  armourBaseTypes =  armourBaseTypes.map(base => combineItemInfo(base))
  armourBaseTypes = JSON.parse(JSON.stringify(armourBaseTypes))

  weaponBaseTypes =  weaponBaseTypes.map(base => combineItemInfo(base))
  weaponBaseTypes = JSON.parse(JSON.stringify(weaponBaseTypes))

  return {
    props: {
      defaultFilter,
      staticData,
      armourBaseTypes,
      weaponBaseTypes,
    }
  }

}
