import React from 'react'
import Search from '../src/search/Search'
import {mount} from 'enzyme'

let fauxFn = function () {

}

it('renders correctly', () => {
  const search = mount(
    <Search updateState={fauxFn} />
  )

  expect(search.state().searchTerm).toEqual('')

  search.find('input[type="text"]').simulate('change', {
    target: {
      value: 'Space Mutiny'
    }
  })

  expect(search.state().searchTerm).toEqual('Space Mutiny')

  search.simulate('submit')
  expect(search.state().searchTerm).toEqual('')

})
