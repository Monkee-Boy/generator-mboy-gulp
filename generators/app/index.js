'use strict';

var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var remote = require('yeoman-remote');
var s = require("underscore.string");

module.exports = class extends Generator {
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }
    async prompting() {
      const self = this;

      self.log(['\n',
        chalk.yellow(' ##     ##    #####    ##    ##   ##   ##  #######  #######         #####      #####   ##    ##'),
        chalk.yellow('###    ###   #######   ###   ##   ##  ##   #######  #######         ######    #######  ##    ##'),
        chalk.yellow('####   ###  ##     ##  ###   ##   ## ##    ##       ##              ##  ##   ##     ## ##    ##'),
        chalk.yellow('####  ####  ##     ##  ####  ##   ####     ##       ##              ##  ##   ##     ##  ##  ##'),
        chalk.yellow('## #### ##  ##     ##  ## ## ##   ####     ######   ######   ####   ######   ##     ##   ####'),
        chalk.yellow('##  ##  ##  ##     ##  ## ## ##   #####    ######   ######   ####   ######   ##     ##    ##'),
        chalk.yellow('##  ##  ##  ##     ##  ##  ####   ## ###   ##       ##              ##   ##  ##     ##    ##'),
        chalk.yellow('##      ##  ##     ##  ##   ###   ##  ##   ##       ##              ##   ##  ##     ##    ##'),
        chalk.yellow('##      ##   #######   ##   ###   ##   ##  #######  #######         #######   #######     ##'),
        chalk.yellow('##      ##    #####    ##    ##   ##   ### #######  #######         ######     #####      ##')].join('\n')
      );

    // Have Yeoman greet the user.
    self.log(yosay(
      'Welcome to the ' + chalk.green('MBoy Gulp') + ' v1.0 generator!'
    ));

    self.log('I am going to generate the default Monkee-Boy gulp setup. Reference https://github.com/Monkee-Boy/gulpfile for more details.\n\nFirst a couple of quick questions.\n');

    // remote('Monkee-Boy', 'gulpfile', function (err, remote) {
    //   remote.directory('.', '.');
    // });

    // var prompts = [
    //   {
    //     name: 'projectName',
    //     message: 'What would you like to call this project (typically client name)?',
    //     default: 'Project Name'
    //   }, {
    //     name: 'repoUrl',
    //     message: 'What is the git repo url for this project?',
    //     default: 'git@bitbucket.org:monkeeboy/PROJECTREPONAME.git'
    //   }
    // ];

    self.answers = await self.prompt([{
      type: 'input',
      name: 'projectName',
      message: 'What would you like to call this project (typically client name)?',
    }, {
      type: 'input',
      name: 'repoUrl',
      message: 'What is the git repo url for this project?',
      default: 'git@bitbucket.org:monkeeboy/PROJECTREPONAME.git'
    }]);

  }

  writing() {
    const self = this;
    
    self.fs.copyTpl(
      self.templatePath('package.json'),
      self.destinationPath('package.json'),
      { 
        projectName: self.answers.projectName, 
        repoUrl: self.answers.repoUrl
      }
    );
  }

  install() {
    this.installDependencies({
      yarn: true,
      bower: false,
      npm: false,
    });
    this.log('\nYour gulp files and structure are ready.\n' + chalk.green('May the code be with you.'));
  }

}
