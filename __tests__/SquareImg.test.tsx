import React from 'react'
import renderer from 'react-test-renderer'
import SquareImg from '@components/SquareImg'

describe('[snapshot] SquareImg', () => {
  const defaultProps = {
    src: 'SquareImg.png',
    attributes: {
      alt: 'SquareImg',
      srcSet: `
        square-320w.jpg,
        square-480w.jpg 1.5x,
        square-640w.jpg 2x`
    }
  }
  
  it('SquareImg', () => {
    const dom = renderer.create(<SquareImg {...defaultProps} />)
    expect(dom).toMatchSnapshot()
  })

  it('SquareImg with tag', () => {
    const dom = renderer.create(
      <SquareImg {...defaultProps}>
        <span className="tag" />
      </SquareImg>
    )
    expect(dom).toMatchSnapshot()
  })
})
