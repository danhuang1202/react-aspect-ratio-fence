import React, { FunctionComponent, ReactNode } from 'react'
import cns from 'classnames'

// @ts-ignore
import styles from './style.css'

interface Props {
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

const AspectRatioFence: FunctionComponent<Props> = ({
  ratio = 1,
  customClass,
  children
}) => (
  <div
    // @ts-ignore
    style={{ '--ratio': `(${ratio})` }}
    className={cns(styles.wrap, customClass)}
  >
    {children}
  </div>
)

export default AspectRatioFence
