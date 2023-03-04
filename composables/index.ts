export const getAnimeReccomendation = () => {
  return useFetch('https://api.jikan.moe/v4/recommendations/anime')
}
export const getTopAnime = () => {
  return useFetch('https://api.jikan.moe/v4/top/anime')
}
export const getDetailAnime = (id: string|number) => {
  return useFetch(`https://api.jikan.moe/v4/anime/${id}`)
}