import React from 'react'
import renderer from 'react-test-renderer'
import AspectRatioFence from '@components/AspectRatioFence'

describe('[snapshot] AspectRatioFence', () => {
  it('AspectRatioFence', () => {
    const props = {
      ratio: 16 / 9
    }

    const dom = renderer.create(
      <AspectRatioFence {...props}>
        <img alt="AspectRatioFence" src="AspectRatioFence.png" />
      </AspectRatioFence>
    )
    expect(dom).toMatchSnapshot()
  })

  it('AspectRatioFence with custom elementType', () => {
    const props = {
      elementType: 'section',
      ratio: 4 / 3
    }

    const dom = renderer.create(
      <AspectRatioFence {...props}>
        <img alt="AspectRatioFence" src="AspectRatioFence.png" />
      </AspectRatioFence>
    )
    expect(dom).toMatchSnapshot()
  })
})
