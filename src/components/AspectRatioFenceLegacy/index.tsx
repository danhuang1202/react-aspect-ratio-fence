import { createElement, FunctionComponent, ReactNode } from 'react'
import cns from 'classnames'

// @ts-ignore
import styles from './style.css'

interface Props {
  /**
   *  outter html tag neme
   *  @default div
   * */
  outerElementType?: string
  /**
   *  inner html tag neme
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
  customClass?: string
  /** custom children node */
  children?: ReactNode
}

const AspectRatioFenceLegacy: FunctionComponent<Props> = ({
  outerElementType = 'div',
  innerElementType = 'div',
  ratio = 1,
  customClass,
  children
}) =>
  createElement(
    outerElementType,
    {
      className: cns(styles.wrap, customClass)
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
