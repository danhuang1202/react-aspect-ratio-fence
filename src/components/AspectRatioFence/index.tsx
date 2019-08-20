import { createElement, FunctionComponent, ReactNode } from 'react'
import cns from 'classnames'

// @ts-ignore
import styles from './style.css'

interface Props {
  /**
   *  html tag name
   *  @default div
   * */
  elementType?: string
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

const AspectRatioFence: FunctionComponent<Props> = ({
  elementType = 'div',
  ratio = 1,
  className,
  children
}) =>
  createElement(elementType, {
    style: { '--ratio': `(${ratio})` },
    className: cns(styles.wrap, className),
    children
  })

export default AspectRatioFence
