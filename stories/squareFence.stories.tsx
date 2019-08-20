import { storiesOf } from '@storybook/react'
import React from 'react'
import SquareFence from '@components/SquareFence'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'
// @ts-ignore
import style from './squareFence.stories.css'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      header: false,
      inline: true
    })
  )
  .add('SquareImg', () => (
    <SquareFence
      elementType={text('elementType', 'div')}
      className={text('className', style.wrap)}
    >
      <img alt="placeholder" src="https://via.placeholder.com/1024x1024" />
    </SquareFence>
  ))
