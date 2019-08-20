import { createElement, FunctionComponent, ReactNode } from 'react'
import cns from 'classnames'

// @ts-ignore
import styles from './style.css'

type Props = {
  /**
   *  html tag name
   *  @default div
   * */
  elementType?: string
  /** Custom class name */
  className?: string
  /** custom children node */
  children?: ReactNode
}

const SquareFence: FunctionComponent<Props> = ({
  elementType = 'div',
  className,
  children
}) =>
  createElement(
    elementType,
    {
      className: cns(styles.wrap, className)
    },
    children
  )

export default SquareFence
