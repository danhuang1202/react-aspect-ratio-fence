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
  /** css style */
  style?: object
  /** Custom class name */
  customClass?: string
}

const AspectRatioFence: FunctionComponent<Props> = ({
  ratio = 1,
  style,
  customClass,
  ...props
}) => {
  const styleWithCustomProperty = {
    ...style,
    '--ratio': `(${ratio})`
  }
  return (
    <div
      // @ts-ignore
      style={styleWithCustomProperty}
      className={cns(styles.wrap, customClass)}
      ratio={ratio}
      {...props}
    />
  )
}

export default AspectRatioFence
