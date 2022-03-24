const CracoLessPlugin = require('craco-less');

// eslint-disable-next-line no-undef
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#9d49ee' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
