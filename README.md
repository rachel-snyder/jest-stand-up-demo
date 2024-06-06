# Jest Review (Week 1 | Day 4)


## Starting a New Project with Jest

`mkdir demo_directory` (create a new directory for your project)

`cd demo_directory` (change into that directory)

`touch demo_runner_file.js` (create a new JavaScript file)

`touch demo_runner_file.spec.js` (create a new JavaScript test file ending in .spec.js or .test.js)

`npm init` (initializes node package manager which creates a package.json file)

`npm install --save jest` (installs jest through npm which updates your package.json file to include a jest dependency)

Then change package.json so that there is a script that reads `"test": "jest"`.
This allows you to run the command `npm test` to run the tests you write in your demo_runner_file.spec.js file.










