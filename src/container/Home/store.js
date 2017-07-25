import { observable, action } from 'mobx'
import HomeProvider from 'core/provider/home'

class HomeStore {

  @observable msg = 'Test'
  @observable list = []

  constructor() {
    this.loadStore()
    this.handleChange = this.handleChange.bind(this)
  }

  @action handleChange(value) {
    this.msg = value
  }

  loadStore() {
    HomeProvider.search()
      .then(({ data }) => this.list = data )
      .catch(( err ) => console.log('exception', err))
  }



}

export default HomeStore
