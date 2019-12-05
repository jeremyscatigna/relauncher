import { Command, flags } from "@oclif/command";
import { generateWebpackConfig } from "../helpers/generateWebpackConfig";
const webpack = require("webpack");
const chalk = require("chalk");

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
    const compiler = webpack(generateWebpackConfig());
    compiler.run((err: string, stats: any) => {
      // Stats Object
      if (err || stats.hasErrors()) {
        this.log(
          `${chalk.bold(`OhOh something ${chalk.bold.red("bad")} happened!`)}`
        );
        this.log(
          stats.toString({
            colors: true
          })
        );
      }
      this.log(
        stats.toString({
          colors: true
        })
      );
      this.log(`${chalk.bold("App fully build! Yay 💪")}`);
    });
  }
}
