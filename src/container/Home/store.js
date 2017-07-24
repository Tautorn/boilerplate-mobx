import { observable, action } from 'mobx'
import HomeProvider from 'core/provider/home'

class HomeStore {

  @observable msg = 'Test'
  @observable list = []

  constructor() {
    this.handleChange = this.handleChange.bind(this)
  }

  @action handleChange(value) {
    this.msg = value
  }

  loadStore() {
    HomeProvider.search()
      .then(({ res }) => this.list = res.data )
      .catch(( err ) => console.log('exception', err))
  }



}

export default HomeStore
