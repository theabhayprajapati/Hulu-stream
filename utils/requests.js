const API_KEY = process.env.API_KEY

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language-en-US`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language-en-US`,
  },
  fetchActionMovies: {
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchRomanaceMovies: {
    title: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language-en-US`,
  },
  fetchIndian: {
    title: 'Indian',
    url: `/trending/all/week?api_key=${API_KEY}&language-en-US`,
  },
  fetchPopularWeek: {
    title: "90's special",
    url: `/trending/all/week?api_key=${API_KEY}&language-en-US`,
  },
  fetchKidsg: {
    title: 'Kids',
    url: `/trending/all/week?api_key=${API_KEY}&language-en-US`,
  },
}
