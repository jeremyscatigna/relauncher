import { Command, flags } from "@oclif/command";
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const chalk = require("chalk");

function createWebpackConfig() {
  return {
    // webpack will take the files from ./src/index
    entry: "./src/index.tsx",

    // and output it into /dist as bundle.js
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "bundle.js"
    },

    // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },

    module: {
      rules: [
        // we use babel-loader to load our jsx and tsx files
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },

        // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ]
  };
}

export default class Build extends Command {
  static description = "build your app";

  static examples = [`$ relauncher build`];

  static flags = {
    help: flags.help({ char: "h" })
  };

  static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(Build);
    this.log(`${chalk.bold("Building app... 🧠")}`);
    const compiler = webpack(createWebpackConfig());
    compiler.run((err: string, stats: any) => {
      // Stats Object
      if (err || stats.hasErrors()) {
        this.log(
          `${chalk.bold(`OhOh something ${chalk.bold.red("bad")} happened!`)}`
        );
      }
      this.log(`${chalk.bold("App fully build! Yay 💪")}`);
    });
  }
}
