import { storiesOf } from '@storybook/react'
import React from 'react'
import AspectRatioFence from '@components/AspectRatioFence'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, number } from '@storybook/addon-knobs'
// @ts-ignore
import style from './aspectRatioFence.stories.css'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      header: false,
      inline: true
    })
  )
  .add('AspectRatioFence', () => (
    <AspectRatioFence
      elementType={text('elementType', 'div')}
      ratio={number('ratio', 16 / 9)}
      className={text('className', style.wrap)}
    >
      <picture>
        <source
          media="(min-width: 769px)"
          srcSet="https://via.placeholder.com/1024x576"
        />
        <source
          media="(max-width: 768px)"
          srcSet="https://via.placeholder.com/768x432"
        />
        <img
          src="https://via.placeholder.com/16x9"
          alt="placeholder"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </picture>
    </AspectRatioFence>
  ))
