import { createElement, FunctionComponent, ReactNode } from 'react'
import cns from 'classnames'

// @ts-ignore
import styles from './style.css'

interface Props {
  /**
   *  outter html tag name
   *  @default div
   * */
  outerElementType?: string
  /**
   *  inner html tag name
   *  @default div
   * */
  innerElementType?: string
  /**
   *  The aspect ratio of an image describes the proportional
   *  relationship between width and height.
   *   @default 1
   **/
  ratio: number
  /** Custom class name */
  className?: string
  /** custom children node */
  children?: ReactNode
}

const AspectRatioFenceLegacy: FunctionComponent<Props> = ({
  outerElementType = 'div',
  innerElementType = 'div',
  ratio = 1,
  className,
  children
}) =>
  createElement(
    outerElementType,
    {
      className: cns(styles.wrap, className)
    },
    createElement(innerElementType, {
      style: {
        paddingBottom: `${100 / ratio}%`
      },
      className: styles.container,
      children
    })
  )

export default AspectRatioFenceLegacy
