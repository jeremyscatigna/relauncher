import { Command, flags } from "@oclif/command";
const path = require("path");
const chalk = require("chalk");
const copy = require("copy-template-dir");
const yarnOrNpm = require("yarn-or-npm");
const spawn = yarnOrNpm.spawn;

export default class Create extends Command {
  static description = "create your app";

  static examples = [
    `$ relauncher create myapp
`
  ];

  static flags = {
    help: flags.help({ char: "h" })
  };

  static args = [{ name: "dir" }];

  async run() {
    const { args, flags } = this.parse(Create);

    const dirName = args.dir;
    const vars = {
      currentYear: new Date().toISOString().slice(0, 4)
    };
    const templateDir = path.join(__dirname, "../templates/basic");
    const prettifiedDirToCreate = path.relative(process.cwd(), dirName);
    copy(templateDir, dirName, vars, async () => {
      this.log(`Welcome to ${chalk.magenta.bold("relauncher")}! 💪`);
      this.log(
        `${chalk.bold(
          "Time to setup a modern web app using every tools you love ❤️"
        )}`
      );
      this.log(
        `Scaffolding app to ${chalk.cyan.bold(prettifiedDirToCreate)} 👀`
      );

      process.chdir(prettifiedDirToCreate);
      const childproc = spawn(["install"], { stdio: "inherit" });
      childproc.on("exit", (code: number) => {
        if (code > 0) {
          console.error("Something bad happened");
        } else {
          this.log(
            `Scaffolded app to ${chalk.cyan.bold(prettifiedDirToCreate)} 👏`
          );
          this.log(`${chalk.bold("Please run: ")}`);
          this.log(`    ${chalk.cyan(`cd ${prettifiedDirToCreate}`)}`);
          this.log(`    ${chalk.cyan(`${yarnOrNpm()} start`)}`);
          this.log("");
          this.log(`${chalk.bold("Happy coding! 💻")}`);
        }
      });
    });
  }
}
