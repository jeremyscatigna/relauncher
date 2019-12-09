import { Command, flags } from '@oclif/command'
const path = require('path')
const chalk = require('chalk')
const copy = require('copy-template-dir')
const yarnOrNpm = require('yarn-or-npm')
const spawn = yarnOrNpm.spawn
const inquirer = require('inquirer')

export default class Create extends Command {
  static description = 'create your app'

  static examples = [
    `$ relauncher create myapp
`
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    library: flags.string({ options: ['react', 'vue'] })
  }

  static args = [{ name: 'dir' }]

  async run() {
    const { args, flags } = this.parse(Create)

    const dirName = args.dir
    const vars = {
      currentYear: new Date().toISOString().slice(0, 4)
    }

    this.log(`Welcome to ${chalk.magenta.bold('relauncher')}! 💪`)
    this.log(`${chalk.bold('Time to setup a modern web app using every tools you love ❤️')}`)
    let library = flags.library
    if (!library) {
      let responses: any = await inquirer.prompt([
        {
          name: 'library',
          message: `${chalk.bold('Choose your favorite library!')} 👇`,
          type: 'list',
          choices: [{ name: 'react' }, { name: 'vue' }]
        }
      ])
      library = responses.library
    }
    if (library === 'react') {
      scaffoldProject(dirName, vars, this, library, '../templates/react/basic')
    } else if (library === 'vue') {
      scaffoldProject(dirName, vars, this, library, '../templates/vue/basic')
    } else {
    }
  }
}

function scaffoldProject(
  dirName: string,
  vars: object,
  command: Command,
  library: string,
  template: string
) {
  const templateDir = path.join(__dirname, template)
  const prettifiedDirToCreate = path.relative(process.cwd(), dirName)
  copy(templateDir, dirName, vars, async () => {
    command.log(
      `Scaffolding a ${chalk.magenta.bold(library)} app to ${chalk.cyan.bold(
        prettifiedDirToCreate
      )} 👀`
    )

    process.chdir(prettifiedDirToCreate)
    const childproc = spawn(['install'], { stdio: 'inherit' })
    childproc.on('exit', (code: number) => {
      if (code > 0) {
        console.error('Something bad happened')
      } else {
        command.log(`Scaffolded app to ${chalk.cyan.bold(prettifiedDirToCreate)} 👏`)
        command.log(`${chalk.bold('Please run: ')}`)
        command.log(`    ${chalk.cyan(`cd ${prettifiedDirToCreate}`)}`)
        command.log(`    ${chalk.cyan(`${yarnOrNpm()} start`)}`)
        command.log('')
        command.log(`${chalk.bold('Happy coding! 💻')}`)
      }
    })
  })
}
