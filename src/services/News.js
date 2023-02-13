//* News API
const ENDPOINT_NEWS = 'https://newsapi.org/v2/top-headlines?country=co&apiKey=fefc7870c1df411d82c22715f34cc1bd'
export const getNews = async (key = -1) => {
  try {
    const res = await fetch(ENDPOINT_NEWS)
    const data = await res.json()
    if (key === -1) {
      const { articles } = await data
      return articles
    } else {
      const { articles } = await data
      return articles[key]
    }
  } catch (error) {
    console.log(error)
  }
}
