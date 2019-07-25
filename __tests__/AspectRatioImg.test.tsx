import React from 'react'
import renderer from 'react-test-renderer'
import AspectRatioImg from '@components/AspectRatioImg'

describe('[snapshot] AspectRatioImg', () => {
  const defaultProps = {
    ratio: 16 / 9,
    src: 'aspect-ratio-640w.jpg',
    attributes: {
      alt: 'AspectRatioImg',
      srcSet: `
        aspect-ratio-320w.jpg,
        aspect-ratio-480w.jpg 1.5x,
        aspect-ratio-640w.jpg 2x`
    }
  }

  it('AspectRatioImg in modern browser', () => {
    const dom = renderer.create(<AspectRatioImg {...defaultProps} />)
    expect(dom).toMatchSnapshot()
  })

  it('AspectRatioImg in legacy browser', () => {
    const props = {
      ...defaultProps,
      isModern: false
    }

    const dom = renderer.create(<AspectRatioImg {...props} />)
    expect(dom).toMatchSnapshot()
  })
})
