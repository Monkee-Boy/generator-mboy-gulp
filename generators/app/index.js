'use strict';

var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }
  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }
}

// module.exports = yeoman.Base.extend({
//   prompting: function () {
//     this.log(['\n',
//       chalk.yellow(' ##     ##    #####    ##    ##   ##   ##  #######  #######         #####      #####   ##    ##'),
//       chalk.yellow('###    ###   #######   ###   ##   ##  ##   #######  #######         ######    #######  ##    ##'),
//       chalk.yellow('####   ###  ##     ##  ###   ##   ## ##    ##       ##              ##  ##   ##     ## ##    ##'),
//       chalk.yellow('####  ####  ##     ##  ####  ##   ####     ##       ##              ##  ##   ##     ##  ##  ##'),
//       chalk.yellow('## #### ##  ##     ##  ## ## ##   ####     ######   ######   ####   ######   ##     ##   ####'),
//       chalk.yellow('##  ##  ##  ##     ##  ## ## ##   #####    ######   ######   ####   ######   ##     ##    ##'),
//       chalk.yellow('##  ##  ##  ##     ##  ##  ####   ## ###   ##       ##              ##   ##  ##     ##    ##'),
//       chalk.yellow('##      ##  ##     ##  ##   ###   ##  ##   ##       ##              ##   ##  ##     ##    ##'),
//       chalk.yellow('##      ##   #######   ##   ###   ##   ##  #######  #######         #######   #######     ##'),
//       chalk.yellow('##      ##    #####    ##    ##   ##   ### #######  #######         ######     #####      ##')].join('\n')
//     );

//     // Have Yeoman greet the user.
//     this.log(yosay(
//       'Welcome to the ' + chalk.green('MBoy Gulp') + ' v1.0 generator!'
//     ));

//     this.log('I am going to generate the default Monkee-Boy gulp setup. Reference https://github.com/Monkee-Boy/gulpfile for more details.\n\nFirst a couple of quick questions.\n');

//     this.remote('Monkee-Boy', 'gulpfile', function (err, remote) {
//       remote.directory('.', '.');
//     });

//     var prompts = [
//       {
//         name: 'projectName',
//         message: 'What would you like to call this project (typically client name)?',
//         default: 'Project Name'
//       }, {
//         name: 'repoUrl',
//         message: 'What is the git repo url for this project?',
//         default: 'git@bitbucket.org:monkeeboy/PROJECTREPONAME.git'
//       }
//     ];

//     return this.prompt(prompts).then(function (props) {
//       this.props = props;
//       this.props.projectName = string.slugify(props.projectName);
//     }.bind(this));
//   },

//   writing: function () {
//     // this.template('package.json', 'package.json');
//   },

//   install: function () {
//     this.log('\nYour gulp files and structure are ready.\n' + chalk.green('May the code be with you.'));
//   }
// });
