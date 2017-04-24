import React, { Component } from 'react'
import moment from 'moment'

class ResultListItem extends Component {

  parseDate = (str) => {
    return moment(str).format('MMMM Do, YYYY')
  }

  render () {
    return (
      <li>
        <h4 className='movie-title'>{this.props.episode.name}</h4>
        <span className='movie-season'>Season: {this.props.episode.season}, Episode {this.props.episode.episode}</span>
        <span className='movie-rating'>Rating:</span> {this.props.episode.rating}
        <time dateTime={this.props.episode.released}>{this.parseDate(this.props.episode.released)}</time>
      </li>
    )
  }
}

export default ResultListItem
