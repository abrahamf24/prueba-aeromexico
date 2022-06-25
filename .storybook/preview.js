require("./styles.scss")
require("../src/assets/styles/main.scss")

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  viewport: {
    viewports: [
      {
        name: 'mobile',
        styles: {
          width: '399px',
          height: '700px'
        }
      },
      {
        name: 'xs',
        styles: {
          width: '639px',
          height: '700px'
        }
      },
      {
        name: 'sm',
        styles: {
          width: '767px',
          height: '700px'
        }
      },
      {
        name: 'md',
        styles: {
          width: '1023px',
          height: '700px'
        }
      },
      {
        name: 'lg',
        styles: {
          width: '1279px',
          height: '700px'
        }
      },
      {
        name: 'xl',
        styles: {
          width: '1535px',
          height: '700px'
        }
      },
      {
        name: 'xl2',
        styles: {
          width: '20000px',
          height: '700px'
        }
      }
    ]
  }
}