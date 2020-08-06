module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        alias: {
          '@images': './src/assets/images',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
