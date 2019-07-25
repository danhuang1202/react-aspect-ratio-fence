import React, { FunctionComponent, ReactNode } from 'react'
import AspectRatioFence from '../AspectRatioFence'
import AspectRatioFenceLegacy from '../AspectRatioFenceLegacy'

// @ts-ignore
import styles from './style.css'

type Props = {
  /** Custom class name */
  customClass?: string
  /** The aspect ratio of an image describes the proportional relationship between width and height. */
  ratio: number
  /** The src attribute of <img /> tag */
  src: string
  /** Attributes of <img /> tag */
  attributes?: object
  /**
   *  is only support modern browser.
   *  AspectRatioFence use css new feature of custom property(css variable),
   *  which does not support in IE. Ths fallback solution is AspectRatioFenceLegacy
   *
   *  @default true
   **/
  isModern?: boolean
  /** custom children node */
  children?: ReactNode
}

const AspectRatioFenceImg: FunctionComponent<Props> = ({
  ratio,
  src,
  attributes,
  customClass,
  isModern = true,
  children
}) => {
  const Container = isModern ? AspectRatioFence : AspectRatioFenceLegacy
  return (
    <Container customClass={customClass} ratio={ratio}>
      <img alt="" src={src} className={styles.img} {...attributes} />
      {children}
    </Container>
  )
}

export default AspectRatioFenceImg
