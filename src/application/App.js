import React, { Component } from 'react'
import ResultList from '../results/ResultList'
import Search from '../search/Search'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: []
    }
  }

  updateAppData = (newData) => {
    this.setState({data: newData})
  }


  render () {
    return (
      <div className='app'>
        <div className='search'>
          <h1>MST3K Episode Search</h1>
          <Search updateState={this.updateAppData} />
        </div>
        <div className='results'>
          <h3>Matches Found: {this.state.data.length}</h3>
          <ResultList results={this.state.data} />
        </div>
      </div>
    )
  }
}

export default App
