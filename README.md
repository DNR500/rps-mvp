# rps-mvp
Simple basic rock paper scissors game that can be played from the command line

## To build
Install dependencies

```
npm install
```
Do a build

```
grunt build
```

## To play...
To run the game in computer vs computer mode just run the following command in terminal from the root of the project.

```
node build/playrps.js
```

To run as player vs computer simply add your selected weapon either rock, paper, or scissors as an argument. e.g.

```
node build/playrps.js scissors
```

The result of the game will be printed to the console.

This is intended to be a very simple game - giving the barebones needed to play.

## List of useful grunt commands...
* **grunt node_mocha** - runs the back end tests
* **grunt eslint** - runs the listing task
* **grunt jsonlint** - lints the projects
* **grunt test** - runs all of the linting tasks and tests
* **grunt build** - does the production build of the project
* **grunt build-debug** - does a build to help with debugging/sourcemaps (this still needs a bit of work)

