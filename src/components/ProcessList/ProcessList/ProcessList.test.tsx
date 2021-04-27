/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { render } from '@testing-library/react'

import { ProcessList } from '../ProcessList/ProcessList'
import { ProcessListItem } from '../ProcessListItem/ProcessListItem'

const testListItems = [
  <li key="one">some text</li>,
  <li key="two">some more text</li>,
  <li key="three">third item</li>,
]

describe('ProcessList component', () => {
  it('renders without errors', () => {
    const { getAllByRole, queryByText } = render(
      <ProcessList>{testListItems}</ProcessList>
    )

    expect(queryByText('third item')).toBeInTheDocument()
    expect(getAllByRole('listitem')).toHaveLength(3)
  })

  it('accepts a class name', () => {
    const { getByRole } = render(
      <ProcessList className="custom-class-name">{testListItems}</ProcessList>
    )

    expect(getByRole('list')).toHaveClass('usa-process-list custom-class-name')
  })

  it('accepts attributes passed in as props', () => {
    const { getByRole } = render(
      <ProcessList aria-label="Process list">{testListItems}</ProcessList>
    )

    expect(getByRole('list')).toHaveAttribute('aria-label', 'Process list')
  })

  it('renders when passed ProcessListItem', () => {
    const { getAllByRole } = render(
      <ProcessList>
        <ProcessListItem>item 1</ProcessListItem>
        <ProcessListItem>item 2</ProcessListItem>
        <ProcessListItem>
          <a href="#">item 3</a>
        </ProcessListItem>
        <ProcessListItem>
          <ul>{testListItems}</ul>
        </ProcessListItem>
      </ProcessList>
    )
    expect(getAllByRole('list')).toHaveLength(2)
    expect(getAllByRole('listitem')).toHaveLength(7)
  })
})
