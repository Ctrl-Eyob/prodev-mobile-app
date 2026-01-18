const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);
config.transformer.babelTransformerPath =
  require.resolve("nativewind/transformer");

module.exports = config;
