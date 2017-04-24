import React from 'react'
import {shallow, render} from 'enzyme'
import ResultList from '../src/results/ResultList'

let data = [{
  name: 'foo',
  season: 1,
  episode: 2,
  rating: 5.6,
  released: '1988-12-04T05:00:00.000Z'
}]

it('renders correctly', () => {
  const rl = render(
    <ResultList results={data} />
  )

  expect(rl.find('li').length).toEqual(1)
})
