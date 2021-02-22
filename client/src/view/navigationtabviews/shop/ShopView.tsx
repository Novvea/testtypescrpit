
import { useState, useEffect } from 'react'
import StarWarsAPIService from '../../../shared/api/service/StarWarsAPIService'

export const ShopView = () => {
  const [starWarsData, setStarWarsData] = useState<any>()
  const [count, setCount] = useState(1)

  const countNeverLessThan1 = () => {
    (count <= 1) ? setCount(1) : setCount(count - 1) 
  }

  const getDataFromStarWarsAPI = async () => {
    try {
      const response = await StarWarsAPIService.getStarWarsCharacter(count)
      setStarWarsData(response)
    } catch (error) {
      console.log(error)
    }
  }

/*   const getDataFromStarWarsAPI = () => {
    Axios.get(`https://swapi.dev/api/people/${count}/`)
      .then(response => setStarWarsData(response))
      .catch(error => console.log(error))
  } */
/* 
  const getDataFromStarWarsAPI = async () => {
    try {
      const serverResponse = await Axios.get(`https://swapi.dev/api/people/${count}/`)
      setStarWarsData(serverResponse)
    } catch (error) {
      console.log(error)
    }
  } */

  useEffect(() => {
    getDataFromStarWarsAPI()
  }, [count])

  return (
    <div>
{/*       <h1>Egentligen shopview</h1>
 */}  <h1>Name: {starWarsData?.data?.name}</h1>
      <h1>Hair color: {starWarsData?.data?.hair_color}</h1>
      <h1>Gender: {starWarsData?.data?.gender}</h1>
      <h1>Birth year: {starWarsData?.data?.birth_year}</h1>
      <h1>Height: {starWarsData?.data?.height}</h1>
{/*       <button onClick={() => console.log(starWarsData)}>Get Star Wars info</button>
 */}       <h2>count = {count}</h2>
       <button onClick={() => countNeverLessThan1()}>Get previous character</button>
       <button onClick={() => setCount(count + 1)}>Get next character</button>
       {/* <h2>{starWarsData?.data && JSON.stringify(starWarsData?.data)}</h2> */} {/* mitt egna test */}    
    </div>
  )
}
