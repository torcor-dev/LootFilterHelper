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


  const [armourDetails] = staticData.filter(data => data.name === "armourDetails");

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
      <WeaponSection />
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

  //let armourBaseTypes = await db.collection("itemBases")
  //  .aggregate([
  //    { $match: { release_state: "released", itemType: "armour" } },
  //    { $lookup: {
  //        from: "mods",
  //        localField: "implicits",
  //        foreignField: "identifier",
  //        as: "implicitsInfo"
  //      } 
  //    },
  //    { $project: {
  //        _id: 0,
  //        name: 1,
  //        item_class: 1,
  //        properties: 1,
  //        requirements: 1,
  //        "implicitsInfo.name": { $ifNull: ["$implicitsInfo.name", "null"] },
  //        "implicitsInfo.stats": { $ifNull: ["$implicitsInfo.stats", "null"] },
  //      }
  //    },
  //    { $project: { "properties.movement_speed": 0 } },
  //  ])
  //  .toArray()


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
    ]).toArray()


  armourBaseTypes = JSON.parse(JSON.stringify(armourBaseTypes))

  return {
    props: {
      defaultFilter,
      staticData,
      armourBaseTypes,
    }
  }

}
