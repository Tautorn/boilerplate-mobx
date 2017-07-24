import React from 'react'
import { observer } from 'mobx-react'
import map from 'lodash/map'
import HomeStore from './store'

class Home extends React.Component {

  componentWillMount() {
    this.store = new HomeStore()
  }

  renderList({id, status, created, updated}, index) {
    return (
      <tr key={index}>
        <td>{id}</td>
        <td>{status}</td>
        <td>{created}</td>
        <td>{updated}</td>
      </tr>
    )
  }

  render() {

    const { handleChange, msg, list } = this.store

    return (
      <div>
        <span>Hello</span>
        <p>{msg}</p>
        <input type="text" onChange={(e) => handleChange(e.target.value)} />
        <table>
          <thead>
            <tr>
              <th>My List</th>
            </tr>
          </thead>>
          <tbody>
            {list && map(map, (val, index) => this.renderList(val, index))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default observer(Home)
