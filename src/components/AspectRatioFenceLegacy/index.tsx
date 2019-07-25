import React, { FunctionComponent } from 'react'
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
}

const AspectRatioFenceLegacy: FunctionComponent<Props> = ({
  ratio = 1,
  customClass,
  ...props
}) => {
  return (
    <div className={cns(styles.wrap, customClass)}>
      <div
        style={{
          paddingBottom: `${100 / ratio}%`
        }}
        className={styles.container}
        {...props}
      />
    </div>
  )
}

export default AspectRatioFenceLegacy
