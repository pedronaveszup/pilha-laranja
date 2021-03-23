const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index.js')
  },
  mode: "none",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3002,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "foundation",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: { 
        "react": { singleton: true },
        "react-dom": { singleton: true }
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    })
  ]
};