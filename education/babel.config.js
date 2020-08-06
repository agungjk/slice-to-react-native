module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        alias: {
          '@images': './src/assets/images',
          '@components': './src/components',
          '@screens': './src/screens',
          '@util': './src/util',
          '@data': './src/data',
        },
      },
    ],
  ],
};
