import { Command, flags } from "@oclif/command";
import { generateWebpackConfig } from "../helpers/generateWebpackConfig";
const chalk = require("chalk");
const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");

export default class Serve extends Command {
  static description = "serve your app";

  static examples = [`$ relauncher serve`];

  static flags = {
    help: flags.help({ char: "h" })
  };

  static args = [{ name: "file" }];

  private DEFAULT_PORT = process.env.PORT || 3000;
  private HOST = process.env.HOST || "0.0.0.0";

  async run() {
    const { args, flags } = this.parse(Serve);

    const compiler = webpack(generateWebpackConfig());

    const devServerOptions = {
      open: true,
      stats: {
        colors: true
      }
    };

    const devServer = new webpackDevServer(compiler, devServerOptions);

    // Launch WebpackDevServer.
    devServer.listen(this.DEFAULT_PORT, this.HOST, (err: string) => {
      if (err) {
        return console.log(err);
      }

      // We used to support resolving modules according to `NODE_PATH`.
      // This now has been deprecated in favor of jsconfig/tsconfig.json
      // This lets you use absolute paths in imports inside large monorepos:
      if (process.env.NODE_PATH) {
        console.log(
          chalk.yellow(
            "Setting NODE_PATH to resolve modules absolutely has been deprecated in favor of setting baseUrl in jsconfig.json (or tsconfig.json if you are using TypeScript) and will be removed in a future major release of create-react-app."
          )
        );
        console.log();
      }

      console.log(
        chalk.cyan(
          `Starting the development server on port ${this.DEFAULT_PORT}...\n`
        )
      );
    });

    ["SIGINT", "SIGTERM"].forEach(function(sig: any) {
      process.on(sig, function() {
        devServer.close();
        process.exit();
      });
    });
  }
}
