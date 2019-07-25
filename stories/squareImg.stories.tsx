import { storiesOf } from '@storybook/react'
import React from 'react'
import SquareImg from '@components/SquareImg'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, object } from '@storybook/addon-knobs'
// @ts-ignore
import style from './squareImg.stories.css'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      header: false,
      inline: true
    })
  )
  .add('SquareImg', () => (
    <SquareImg
      src={text(
        'src',
        'https://via.placeholder.com/1024x1024'
      )}
      attributes={object('attributes', {
        alt: 'placeholder'
      })}
      customClass={text('customClass', style.wrap)}
    />
  ))
  