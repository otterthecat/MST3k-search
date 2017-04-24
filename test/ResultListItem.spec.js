import React from 'react'
import {shallow} from 'enzyme'
import ResultListItem from '../src/results/ResultListItem'

let data = {
  name: 'foo',
  season: 1,
  episode: 2,
  rating: 5.6,
  released: '1988-12-04T05:00:00.000Z'
}

it('renders correctly', () => {
  const rli = shallow(
    <ResultListItem episode={data} />
  )

  expect(rli.find('.movie-title').text()).toEqual('foo')
  expect(rli.find('time').text()).toEqual('December 4th, 1988')
})
