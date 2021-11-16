import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)

export default {
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    }
  }
}
