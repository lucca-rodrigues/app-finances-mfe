const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const dotenv = require("dotenv").config();

const deps = require("./package.json").dependencies;
const environment = process.env.REACT_APP_ROOT || "http://localhost:3000/";

module.exports = {
  mode: "development",
  entry: "./src/index.js", // Seu ponto de entrada
  output: {
    publicPath: environment,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  devServer: {
    port: process.env.PORT || 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app_finances_root",
      filename: "remoteEntry.js",
      remotes: {
        app_my_account: `app_my_account@${process.env.REACT_APP_MY_ACCOUNT}/remoteEntry.js`,
      },
      exposes: {
        "./Components": "./src/Components",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
};
