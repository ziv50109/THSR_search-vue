import dayjs from 'dayjs'
import { getNews } from '@/api/thsr'

export default {
  state: {
    news: []
  },
  mutations: {
    setNews (state, data) {
      state.news = data
    }
  },
  getters: {
    newsList: state => state.news.map(item => ({
      id: item.NewsID,
      date: dayjs(item.PublishTime).format('YYYY/MM/DD'),
      title: item.Title,
      url: item.NewsUrl
    }))
  },
  actions: {
    async getNews ({ commit }) {
      const res = await getNews()
      commit('setNews', res.data)
    }
  }
}
