import React, { Component } from 'react'
import ResultListItem from './ResultListItem'

class ResultList extends Component {

  generateList = () => {
    return this.props.results.map((item, index) => {
      return <ResultListItem key={index} episode={item} />
    })
  }

  render () {
    return (
      <ul>
        {this.generateList()}
      </ul>
    )
  }
}

export default ResultList
