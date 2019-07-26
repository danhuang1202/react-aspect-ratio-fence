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

const AspectRatioFenceLegacy: FunctionComponent<Props> = ({
  ratio = 1,
  customClass,
  children
}) => {
  return (
    <div className={cns(styles.wrap, customClass)}>
      <div
        style={{
          paddingBottom: `${100 / ratio}%`
        }}
        className={styles.container}
      >
        {children}
      </div>
    </div>
  )
}

export default AspectRatioFenceLegacy
