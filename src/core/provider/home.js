import api from './api/core'

class Home {

  static search() {
    return api.get('/home/search')
  }
}

export default Home
