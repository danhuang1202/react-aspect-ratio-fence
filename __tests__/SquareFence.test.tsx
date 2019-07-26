import React from 'react'
import renderer from 'react-test-renderer'
import SquareFence from '@components/SquareFence'

describe('[snapshot] SquareFence', () => {
  it('SquareFence', () => {
    const props = {
      ratio: 16 / 9
    }

    const dom = renderer.create(
      <SquareFence {...props}>
        <img alt="SquareFence" src="SquareFence.png" />
      </SquareFence>
    )
    expect(dom).toMatchSnapshot()
  })

  it('SquareFence with custom elementType', () => {
    const props = {
      elementType: 'span',
      ratio: 16 / 9
    }

    const dom = renderer.create(
      <SquareFence {...props}>
        <img alt="SquareFence" src="SquareFence.png" />
      </SquareFence>
    )
    expect(dom).toMatchSnapshot()
  })
})
