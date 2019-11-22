// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  publicPath: './',
  history: 'hash',
  // base: '/dist',
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          component: './Home',
          Routes: ['src/routes/Route.js'],
        },
        {
          path: '/login',
          component: './Login',
          Routes: ['src/routes/Route.js'],
        },
        {
          path: '/list/',
          component: './List',
          Routes: ['src/routes/AuthRoute.js'],
        },
        {
          path: '/list/:id',
          component: './Detail',
          Routes: ['src/routes/AuthRoute.js'],
        },
      ],
    },
  ],

  disableCSSModules: true,
  extraBabelIncludes: [],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'umi-test',
        dll: true,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
