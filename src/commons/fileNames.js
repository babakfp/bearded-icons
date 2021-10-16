import {make} from "../helper.js";
import {webpack} from "../data/bundler.js";

export default {
	...make(webpack, "_f_webpack"),
	".angular-cli.json": "_f_angular",
	"angular-cli.json": "_f_angular",
	"angular.json": "_f_angular",
	".angular.json": "_f_angular",
	"api-extractor.json": "_f_api_extractor",
	"api-extractor-base.json": "_f_api_extractor",
	"appveyor.yml": "_f_appveyor",
	".appveyor.yml": "_f_appveyor",
	"aurelia.json": "_f_aurelia",
	"azure-pipelines.yml": "_f_azurepipelines",
	".vsts-ci.yml": "_f_azurepipelines",
	".babelrc": "_f_babel",
	".babelignore": "_f_babel",
	".babelrc.js": "_f_babel",
	".babelrc.cjs": "_f_babel",
	".babelrc.mjs": "_f_babel",
	".babelrc.json": "_f_babel",
	"babel.config.js": "_f_babel",
	"babel.config.cjs": "_f_babel",
	"babel.config.mjs": "_f_babel",
	"babel.config.json": "_f_babel",
	"vetur.config.js": "_f_vue",
	"vetur.config.ts": "_f_vue",
	".bzrignore": "_f_bazaar",
	".bazelrc": "_f_bazel",
	"bazel.rc": "_f_bazel",
	"bazel.bazelrc": "_f_bazel",
	"bitbucket-pipelines.yml": "_f_bitbucketpipeline",
	".bithoundrc": "_f_bithound",
	".bowerrc": "_f_bower",
	"bower.json": "_f_bower",
	".browserslistrc": "_f_browserslist",
	browserslist: "_f_browserslist",
	".buckconfig": "_f_buckbuild",
	gemfile: "_f_bundler",
	"gemfile.lock": "_f_bundler",
	"capacitor.config.json": "_f_capacitor",
	"cargo.toml": "_f_cargo",
	"cargo.lock": "_f_cargo",
	chefignore: "_f_chef",
	berksfile: "_f_chef",
	"berksfile.lock": "_f_chef",
	policyfile: "_f_chef",
	"circle.yml": "_f_circleci",
	".cfignore": "_f_cloudfoundry",
	".codacy.yml": "_f_codacy",
	".codacy.yaml": "_f_codacy",
	".codeclimate.yml": "_f_codeclimate",
	"codecov.yml": "_f_codecov",
	".codecov.yml": "_f_codecov",
	"config.codekit": "_f_codekit",
	"config.codekit2": "_f_codekit",
	"config.codekit3": "_f_codekit",
	".config.codekit": "_f_codekit",
	".config.codekit2": "_f_codekit",
	".config.codekit3": "_f_codekit",
	"coffeelint.json": "_f_coffeelint",
	".coffeelintignore": "_f_coffeelint",
	"commitlint.config.js": "_f_commitlint",
	"composer.json": "_f_composer",
	"composer.lock": "_f_composer",
	"conanfile.txt": "_f_conan",
	"conanfile.py": "_f_conan",
	".condarc": "_f_conda",
	".coveralls.yml": "_f_coveralls",
	"crowdin.yml": "_f_crowdin",
	".csscomb.json": "_f_csscomb",
	".csslintrc": "_f_csslint",
	".cvsignore": "_f_cvs",
	"cypress.json": "_f_cypress",
	"cypress.env.json": "_f_cypress",
	".boringignore": "_f_darcs",
	"dependabot.yml": "_f_dependabot",
	"dependencies.yml": "_f_dependencies",
	"devcontainer.json": "_f_devcontainer",
	"docker-compose.yml": "_f_docker",
	"docker-compose.ci-build.yml": "_f_docker",
	"docker-compose.override.yml": "_f_docker",
	"docker-compose.vs.debug.yml": "_f_docker",
	"docker-compose.vs.release.yml": "_f_docker",
	"docker-cloud.yml": "_f_docker",
	"docker-compose.test.yml": "_f_dockertest",
	".doczrc": "_f_docz",
	"docz.js": "_f_docz",
	"docz.json": "_f_docz",
	".docz.js": "_f_docz",
	".docz.json": "_f_docz",
	"doczrc.js": "_f_docz",
	"doczrc.json": "_f_docz",
	"docz.config.js": "_f_docz",
	"docz.config.json": "_f_docz",
	".dojorc": "_f_dojo",
	".drone.yml": "_f_drone",
	".drone.yml.sig": "_f_drone",
	".dvc": "_f_dvc",
	".editorconfig": "_f_editorconfig",
	"elm-package.json": "_f_elm",
	".ember-cli": "_f_ember",
	emakefile: "_f_erlang",
	".emakerfile": "_f_erlang",
	".eslintrc": "_f_eslint",
	".eslintignore": "_f_eslint",
	".eslintcache": "_f_eslint",
	".eslintrc.js": "_f_eslint",
	".eslintrc.mjs": "_f_eslint",
	".eslintrc.cjs": "_f_eslint",
	".eslintrc.json": "_f_eslint",
	".eslintrc.yaml": "_f_eslint",
	".eslintrc.yml": "_f_eslint",
	"app.json": "_f_expo",
	"app.config.js": "_f_expo",
	"app.config.json": "_f_expo",
	"app.config.json5": "_f_expo",
	"favicon.ico": "_f_favicon",
	".firebaserc": "_f_firebase",
	"firebase.json": "_f_firebasehosting",
	"firestore.rules": "_f_firestore",
	"firestore.indexes.json": "_f_firestore",
	".flooignore": "_f_floobits",
	".flowconfig": "_f_flow",
	".flutter-plugins": "_f_flutter",
	".metadata": "_f_flutter",
	"pubspec.lock": "_f_flutter_package",
	"pubspec.yaml": "_f_flutter_package",
	".packages": "_f_flutter_package",
	".fossaignore": "_f_fossa",
	"ignore-glob": "_f_fossil",
	"fuse.js": "_f_fusebox",
	"gatsby-config.js": "_f_gatsby",
	"gatsby-config.ts": "_f_gatsby",
	"gatsby-node.js": "_f_gatsby",
	"gatsby-node.ts": "_f_gatsby",
	"gatsby-browser.js": "_f_gatsby",
	"gatsby-browser.ts": "_f_gatsby",
	"gatsby-ssr.js": "_f_gatsby",
	"gatsby-ssr.ts": "_f_gatsby",
	".gitattributes": "_f_git",
	".gitconfig": "_f_git",
	".gitignore": "_f_git",
	".gitmodules": "_f_git",
	".gitkeep": "_f_git",
	".mailmap": "_f_git",
	".gitlab-ci.yml": "_f_gitlab",
	"glide.yml": "_f_glide",
	"go.sum": "_f_go_package",
	"go.mod": "_f_go_package",
	".gqlconfig": "_f_graphql",
	".graphqlconfig": "_f_graphql_config",
	".graphqlconfig.yml": "_f_graphql_config",
	".graphqlconfig.yaml": "_f_graphql_config",
	"greenkeeper.json": "_f_greenkeeper",
	"gridsome.config.js": "_f_gridsome",
	"gridsome.config.ts": "_f_gridsome",
	"gridsome.server.js": "_f_gridsome",
	"gridsome.server.ts": "_f_gridsome",
	"gridsome.client.js": "_f_gridsome",
	"gridsome.client.ts": "_f_gridsome",
	"gruntfile.js": "_f_grunt",
	"gruntfile.coffee": "_f_grunt",
	"gruntfile.ts": "_f_grunt",
	"gruntfile.babel.js": "_f_grunt",
	"gruntfile.babel.coffee": "_f_grunt",
	"gruntfile.babel.ts": "_f_grunt",
	"gulpfile.js": "_f_gulp",
	"gulpfile.coffee": "_f_gulp",
	"gulpfile.ts": "_f_gulp",
	"gulpfile.esm.js": "_f_gulp",
	"gulpfile.esm.coffee": "_f_gulp",
	"gulpfile.esm.ts": "_f_gulp",
	"gulpfile.babel.js": "_f_gulp",
	"gulpfile.babel.coffee": "_f_gulp",
	"gulpfile.babel.ts": "_f_gulp",
	"haxelib.json": "_f_haxe",
	"checkstyle.json": "_f_haxecheckstyle",
	".p4ignore": "_f_helix",
	".htmlhintrc": "_f_htmlhint",
	".huskyrc": "_f_husky",
	"husky.config.js": "_f_husky",
	".huskyrc.js": "_f_husky",
	".huskyrc.json": "_f_husky",
	".huskyrc.yaml": "_f_husky",
	".huskyrc.yml": "_f_husky",
	"ionic.project": "_f_ionic",
	"ionic.config.json": "_f_ionic",
	jakefile: "_f_jake",
	"jakefile.js": "_f_jake",
	"jest.config.json": "_f_jest",
	"jest.json": "_f_jest",
	".jestrc": "_f_jest",
	".jestrc.js": "_f_jest",
	".jestrc.json": "_f_jest",
	"jest.config.js": "_f_jest",
	"jest.config.cjs": "_f_jest",
	"jest.config.mjs": "_f_jest",
	"jest.config.babel.js": "_f_jest",
	"jest.config.babel.cjs": "_f_jest",
	"jest.config.babel.mjs": "_f_jest",
	".jpmignore": "_f_jpm",
	".jsbeautifyrc": "_f_jsbeautify",
	jsbeautifyrc: "_f_jsbeautify",
	".jsbeautify": "_f_jsbeautify",
	jsbeautify: "_f_jsbeautify",
	"jsconfig.json": "_f_jsconfig",
	".jscpd.json": "_f_jscpd",
	"jscpd-report.xml": "_f_jscpd",
	"jscpd-report.json": "_f_jscpd",
	"jscpd-report.html": "_f_jscpd",
	".jshintrc": "_f_jshint",
	".jshintignore": "_f_jshint",
	"karma.conf.js": "_f_karma",
	"karma.conf.coffee": "_f_karma",
	"karma.conf.ts": "_f_karma",
	".kitchen.yml": "_f_kitchenci",
	"kitchen.yml": "_f_kitchenci",
	".kiteignore": "_f_kite",
	"layout.html": "_f_layout",
	"layout.htm": "_f_layout",
	"lerna.json": "_f_lerna",
	license: "_f_license",
	licence: "_f_license",
	"license.md": "_f_license",
	"license.txt": "_f_license",
	"licence.md": "_f_license",
	"licence.txt": "_f_license",
	".lighthouserc.js": "_f_lighthouse",
	".lighthouserc.json": "_f_lighthouse",
	".lighthouserc.yaml": "_f_lighthouse",
	".lighthouserc.yml": "_f_lighthouse",
	"include.xml": "_f_lime",
	".lintstagedrc": "_f_lintstagedrc",
	"lint-staged.config.js": "_f_lintstagedrc",
	".lintstagedrc.js": "_f_lintstagedrc",
	".lintstagedrc.json": "_f_lintstagedrc",
	".lintstagedrc.yaml": "_f_lintstagedrc",
	".lintstagedrc.yml": "_f_lintstagedrc",
	manifest: "_f_manifest",
	"manifest.bak": "_f_manifest_bak",
	"manifest.skip": "_f_manifest_skip",
	".markdownlint.json": "_f_markdownlint",
	"maven.config": "_f_maven",
	"pom.xml": "_f_maven",
	"extensions.xml": "_f_maven",
	"settings.xml": "_f_maven",
	".hgignore": "_f_mercurial",
	"mocha.opts": "_f_mocha",
	".mocharc.js": "_f_mocha",
	".mocharc.json": "_f_mocha",
	".mocharc.jsonc": "_f_mocha",
	".mocharc.yaml": "_f_mocha",
	".mocharc.yml": "_f_mocha",
	modernizr: "_f_modernizr",
	"modernizr.js": "_f_modernizr",
	"modernizrrc.js": "_f_modernizr",
	".modernizr.js": "_f_modernizr",
	".modernizrrc.js": "_f_modernizr",
	"moleculer.config.js": "_f_moleculer",
	"moleculer.config.json": "_f_moleculer",
	"moleculer.config.ts": "_f_moleculer",
	".mtn-ignore": "_f_monotone",
	".nest-cli.json": "_f_nestjs",
	"nest-cli.json": "_f_nestjs",
	"nestconfig.json": "_f_nestjs",
	".nestconfig.json": "_f_nestjs",
	"netlify.toml": "_f_netlify",
	_redirects: "_f_netlify",
	"ng-tailwind.js": "_f_ng_tailwind",
	"nginx.conf": "_f_nginx",
	"build.ninja": "_f_ninja",
	".node-version": "_f_node",
	"nodemon.json": "_f_nodemon",
	".npmignore": "_f_npm",
	".npmrc": "_f_npm",
	"package.json": "_f_npm",
	"package-lock.json": "_f_npm",
	"npm-shrinkwrap.json": "_f_npm",
	".nsrirc": "_f_nsri",
	".nsriignore": "_f_nsri",
	"nsri.config.js": "_f_nsri",
	".nsrirc.js": "_f_nsri",
	".nsrirc.json": "_f_nsri",
	".nsrirc.yaml": "_f_nsri",
	".nsrirc.yml": "_f_nsri",
	".integrity.json": "_f_nsri-integrity",
	"nuxt.config.js": "_f_nuxt",
	"nuxt.config.ts": "_f_nuxt",
	".nycrc": "_f_nyc",
	".nycrc.json": "_f_nyc",
	".merlin": "_f_ocaml",
	"paket.dependencies": "_f_paket",
	"paket.lock": "_f_paket",
	"paket.references": "_f_paket",
	"paket.template": "_f_paket",
	"paket.local": "_f_paket",
	".php_cs": "_f_phpcsfixer",
	".php_cs.dist": "_f_phpcsfixer",
	phpunit: "_f_phpunit",
	"phpunit.xml": "_f_phpunit",
	"phpunit.xml.dist": "_f_phpunit",
	".phraseapp.yml": "_f_phraseapp",
	pipfile: "_f_pip",
	"pipfile.lock": "_f_pip",
	"platformio.ini": "_f_platformio",
	"pnpmfile.js": "_f_pnpm",
	"pnpm-lock.yaml": "_f_pnpm",
	"pnpm-workspace.yaml": "_f_pnpm",
	".postcssrc": "_f_postcssconfig",
	".postcssrc.json": "_f_postcssconfig",
	".postcssrc.yml": "_f_postcssconfig",
	".postcssrc.js": "_f_postcssconfig",
	"postcss.config.js": "_f_postcssconfig",
	".pre-commit-config.yaml": "_f_precommit",
	".prettierrc": "_f_prettier",
	".prettierignore": "_f_prettier",
	"prettier.config.js": "_f_prettier",
	"prettier.config.ts": "_f_prettier",
	"prettier.config.coffee": "_f_prettier",
	".prettierrc.js": "_f_prettier",
	".prettierrc.json": "_f_prettier",
	".prettierrc.yml": "_f_prettier",
	".prettierrc.yaml": "_f_prettier",
	procfile: "_f_procfile",
	"protractor.conf.js": "_f_protractor",
	"protractor.conf.coffee": "_f_protractor",
	"protractor.conf.ts": "_f_protractor",
	".jade-lintrc": "_f_pug",
	".pug-lintrc": "_f_pug",
	".jade-lint.json": "_f_pug",
	".pug-lintrc.js": "_f_pug",
	".pug-lintrc.json": "_f_pug",
	".pyup": "_f_pyup",
	".pyup.yml": "_f_pyup",
	qmldir: "_f_qmldir",
	"quasar.conf.js": "_f_quasar",
	rakefile: "_f_rake",
	"razzle.config.js": "_f_razzle",
	"readme.md": "_f_readme",
	".rehyperc": "_f_rehype",
	".rehypeignore": "_f_rehype",
	".rehyperc.js": "_f_rehype",
	".rehyperc.json": "_f_rehype",
	".rehyperc.yml": "_f_rehype",
	".rehyperc.yaml": "_f_rehype",
	".remarkrc": "_f_remark",
	".remarkignore": "_f_remark",
	".remarkrc.js": "_f_remark",
	".remarkrc.json": "_f_remark",
	".remarkrc.yml": "_f_remark",
	".remarkrc.yaml": "_f_remark",
	".renovaterc": "_f_renovate",
	"renovate.json": "_f_renovate",
	".renovaterc.json": "_f_renovate",
	".retextrc": "_f_retext",
	".retextignore": "_f_retext",
	".retextrc.js": "_f_retext",
	".retextrc.json": "_f_retext",
	".retextrc.yml": "_f_retext",
	".retextrc.yaml": "_f_retext",
	"robots.txt": "_f_robots",
	"rollup.config.js": "_f_rollup",
	"rollup.config.mjs": "_f_rollup",
	"rollup.config.coffee": "_f_rollup",
	"rollup.config.ts": "_f_rollup",
	"rollup.config.common.js": "_f_rollup",
	"rollup.config.common.mjs": "_f_rollup",
	"rollup.config.common.coffee": "_f_rollup",
	"rollup.config.common.ts": "_f_rollup",
	"rollup.config.dev.js": "_f_rollup",
	"rollup.config.dev.mjs": "_f_rollup",
	"rollup.config.dev.coffee": "_f_rollup",
	"rollup.config.dev.ts": "_f_rollup",
	"rollup.config.prod.js": "_f_rollup",
	"rollup.config.prod.mjs": "_f_rollup",
	"rollup.config.prod.coffee": "_f_rollup",
	"rollup.config.prod.ts": "_f_rollup",
	".rspec": "_f_rspec",
	".rubocop.yml": "_f_rubocop",
	".rubocop_todo.yml": "_f_rubocop",
	"rust-toolchain": "_f_rust_toolchain",
	".sailsrc": "_f_sails",
	".sentryclirc": "_f_sentry",
	".sequelizerc": "_f_sequelize",
	".sequelizerc.js": "_f_sequelize",
	".sequelizerc.json": "_f_sequelize",
	"serverless.yml": "_f_serverless",
	"snapcraft.yaml": "_f_snapcraft",
	".snyk": "_f_snyk",
	".solidarity": "_f_solidarity",
	".solidarity.json": "_f_solidarity",
	".stylelintrc": "_f_stylelint",
	".stylelintignore": "_f_stylelint",
	".stylelintcache": "_f_stylelint",
	"stylelint.config.js": "_f_stylelint",
	"stylelint.config.json": "_f_stylelint",
	"stylelint.config.yaml": "_f_stylelint",
	"stylelint.config.yml": "_f_stylelint",
	"stylelint.config.ts": "_f_stylelint",
	".stylelintrc.js": "_f_stylelint",
	".stylelintrc.json": "_f_stylelint",
	".stylelintrc.yaml": "_f_stylelint",
	".stylelintrc.yml": "_f_stylelint",
	".stylelintrc.ts": "_f_stylelint",
	".stylish-haskell.yaml": "_f_stylish_haskell",
	".svnignore": "_f_subversion",
	"package.pins": "_f_swift",
	"symfony.lock": "_f_symfony",
	"windi.config.ts": "_f_windi",
	"windi.config.js": "_f_windi",
	"tailwind.js": "_f_tailwind",
	"tailwind.coffee": "_f_tailwind",
	"tailwind.ts": "_f_tailwind",
	"tailwind.config.js": "_f_tailwind",
	"tailwind.config.coffee": "_f_tailwind",
	"tailwind.config.ts": "_f_tailwind",
	".testcaferc.json": "_f_testcafe",
	".tfignore": "_f_tfs",
	"tox.ini": "_f_tox",
	".travis.yml": "_f_travis",
	"tsconfig.json": "_f_tsconfig",
	"tsconfig.app.json": "_f_tsconfig",
	"tsconfig.base.json": "_f_tsconfig",
	"tsconfig.common.json": "_f_tsconfig",
	"tsconfig.dev.json": "_f_tsconfig",
	"tsconfig.development.json": "_f_tsconfig",
	"tsconfig.e2e.json": "_f_tsconfig",
	"tsconfig.prod.json": "_f_tsconfig",
	"tsconfig.production.json": "_f_tsconfig",
	"tsconfig.server.json": "_f_tsconfig",
	"tsconfig.spec.json": "_f_tsconfig",
	"tsconfig.staging.json": "_f_tsconfig",
	"tsconfig.test.json": "_f_tsconfig",
	"tslint.json": "_f_tslint",
	"tslint.yaml": "_f_tslint",
	"tslint.yml": "_f_tslint",
	".unibeautifyrc": "_f_unibeautify",
	"unibeautify.config.js": "_f_unibeautify",
	".unibeautifyrc.js": "_f_unibeautify",
	".unibeautifyrc.json": "_f_unibeautify",
	".unibeautifyrc.yaml": "_f_unibeautify",
	".unibeautifyrc.yml": "_f_unibeautify",
	vagrantfile: "_f_vagrant",
	".vimrc": "_f_vim",
	".gvimrc": "_f_vim",
	".vscodeignore": "_f_vscode",
	"launch.json": "_f_vscode",
	"tasks.json": "_f_vscode",
	"vscodeignore.json": "_f_vscode",
	".vuerc": "_f_vueconfig",
	"vue.config.js": "_f_vueconfig",
	"wallaby.json": "_f_wallaby",
	"wallaby.js": "_f_wallaby",
	"wallaby.ts": "_f_wallaby",
	"wallaby.coffee": "_f_wallaby",
	"wallaby.conf.json": "_f_wallaby",
	"wallaby.conf.js": "_f_wallaby",
	"wallaby.conf.ts": "_f_wallaby",
	"wallaby.conf.coffee": "_f_wallaby",
	".wallaby.json": "_f_wallaby",
	".wallaby.js": "_f_wallaby",
	".wallaby.ts": "_f_wallaby",
	".wallaby.coffee": "_f_wallaby",
	".wallaby.conf.json": "_f_wallaby",
	".wallaby.conf.js": "_f_wallaby",
	".wallaby.conf.ts": "_f_wallaby",
	".wallaby.conf.coffee": "_f_wallaby",
	".watchmanconfig": "_f_watchmanconfig",
	"wercker.yml": "_f_wercker",
	"wpml-config.xml": "_f_wpml",
	".yamllint": "_f_yamllint",
	".yaspellerrc": "_f_yandex",
	".yaspeller.json": "_f_yandex",
	"yarn.lock": "_f_yarn",
	".yarnrc": "_f_yarn",
	".yarnclean": "_f_yarn",
	".yarn-integrity": "_f_yarn",
	".yarn-metadata.json": "_f_yarn",
	".yarnignore": "_f_yarn",
	"yarn-error.log": "_f_yarnerror",
	".yo-rc.json": "_f_yeoman",
	"now.json": "_f_vercel",
	".nowignore": "_f_vercel",
	"vercel.json": "_f_vercel",
	".vercelignore": "_f_vercel",
	"vite.config.js": "_f_vite",
	"vite.config.ts": "_f_vite",
	".nvmrc": "_f_nvm",
	".env": "_f_env",
	".env.staging": "_f_env",
	".env.preprod": "_f_env",
	".env.production": "_f_env",
	".sql": "_f_sql",
	".jinja": "_f_jinja",
	"jenkins.yaml": "_f_jenkins",
	"jenkins.yml": "_f_jenkins",
};
