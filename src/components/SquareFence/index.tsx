import React, { FunctionComponent } from 'react'
import cns from 'classnames'

// @ts-ignore
import styles from './style.css'

type Props = {
  /** Custom class name */
  customClass?: string
}

const SquareFence: FunctionComponent<Props> = ({ customClass, ...props }) => {
  return <div className={cns(styles.wrap, customClass)} {...props} />
}

export default SquareFence
