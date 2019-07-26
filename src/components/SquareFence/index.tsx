import React, { FunctionComponent, ReactNode } from 'react'
import cns from 'classnames'

// @ts-ignore
import styles from './style.css'

type Props = {
  /** Custom class name */
  customClass?: string
  /** custom children node */
  children?: ReactNode
}

const SquareFence: FunctionComponent<Props> = ({ customClass, children }) => {
  return <div className={cns(styles.wrap, customClass)}>{children}</div>
}

export default SquareFence
