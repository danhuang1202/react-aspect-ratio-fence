import React, { FunctionComponent, ReactNode } from 'react'
import SquareFence from '../SquareFence'

// @ts-ignore
import styles from './style.css'

type Props = {
  /** Custom class name */
  customClass?: string
  /** The src attribute of <img /> tag */
  src: string
  /** Attributes of <img /> tag */
  attributes?: object
  /** custom children node */
  children?: ReactNode
}

const SquareImg: FunctionComponent<Props> = ({
  customClass,
  src,
  attributes = {},
  children,
  ...props
}) => {
  return (
    <SquareFence customClass={customClass} {...props}>
      <img alt="" src={src} className={styles.img} {...attributes} />
      {children}
    </SquareFence>
  )
}

export default SquareImg
