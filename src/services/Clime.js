
//* Clime API
export const getClime = async (city, country) => {
  const ENDPOINT_WHEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=bb24676df5515d8e7ed2eb840659b999&lang=es`

  try {
    if (!city || !country) return
    const res = await fetch(ENDPOINT_WHEATHER)
    const data = await res.json()
    const newData = await data
    return newData
  } catch (error) {
    console.log(error)
  }
}
