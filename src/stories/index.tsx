/* eslint-disable unicorn/prefer-module */
import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from '@storybook/react/demo'

storiesOf('Atoms', module).add('Example', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
))

storiesOf('Molecules', module).add('Example', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
))

storiesOf('Organisms', module).add('Example', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
))
