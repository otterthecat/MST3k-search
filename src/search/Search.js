import React, { Component } from 'react'
import data from './data'

class Search extends Component {

  constructor (props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }

  findMatch = (query) => {
    let trimmedQuery = query.trim()
    if (trimmedQuery.length === 0) {
      this.props.updateState([])
    } else {
      let regex = new RegExp(`^(The )?${trimmedQuery}`, "gi")
      let results = data.filter((item) => {
        return regex.test(item.name)
      })
      this.props.updateState(results)
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.findMatch(this.state.searchTerm)
    this.setState({searchTerm: ''})
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value}, () => {
      this.findMatch(this.state.searchTerm)
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='query' value={this.state.searchTerm} onChange={this.handleChange} placeholder='Enter a movie title...' />
      </form>
    )
  }
}

export default Search
