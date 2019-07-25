import React from 'react'
import renderer from 'react-test-renderer'
import AspectRatioFenceLegacy from '@components/AspectRatioFenceLegacy'

describe('[snapshot] AspectRatioFence', () => {
  it('AspectRatioFenceLegacy', () => {
    const props = {
      ratio: 16 / 9
    }

    const dom = renderer.create(
      <AspectRatioFenceLegacy {...props}>
        <img alt="AspectRatioFence" src="AspectRatioFence.png" />
      </AspectRatioFenceLegacy>
    )
    expect(dom).toMatchSnapshot()
  })
})
