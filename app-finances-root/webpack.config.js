const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    // publicPath: "http://localhost:3000/",
    publicPath: "auto",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    host: "0.0.0.0",
    port: 3000,
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
      // remotes: {
      //   // app_my_account: "app_my_account@http://localhost:3002/remoteEntry.js",
      //   // app_transactions: "app_transactions@http://localhost:3001/remoteEntry.js",
      //   app_my_account: "app_my_account@http://192.168.0.243:3002/remoteEntry.js",
      //   app_transactions: "app_transactions@http://192.168.0.243:3002/remoteEntry.js",
      // },
      remotes: {
        app_my_account: "app_my_account@http://192.168.0.243:3002/remoteEntry.js",
        app_transactions: "app_transactions@http://192.168.0.243:3001/remoteEntry.js",
      },

      exposes: {
        "./Components": "./src/Components",
        "./Utils": "./src/Utils",
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
});
