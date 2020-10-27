# CI/CD WITH TRAVIS CI AND HEROKU WITH EXAMPLE NODE_APP [![Build Status](https://travis-ci.com/CrashOverride97680/ci-cd-heroku-travis.svg?branch=main)](https://travis-ci.com/CrashOverride97680/ci-cd-heroku-travis)
The purpose of this project was to create an empty random project with a test, passing the test had to deploy the app on heroku, thus creating the flow of ci / cd ** (CI: Continus Integration) ** / ** (CD: Continus Deploy) ** automatically with the help of 3 fundamental tools which are:

 1. GitHub ------> ( Repository to save app )
 2. Travis CI -----> ( App for execute **CI** )
 3. Heroku ------> ( Where to deploy your app **CD** )

At the slightest change by pushing Travis CI checks if there is a difference between the one before and the one after, if you start to run tests to see if the app actually works, then keep Heroku the task of deploying the app on their servers.

## Steps to take:

 - [ ] Install Heroku-CLI
 - [ ] Install Travis-CLI

## Todo List:
1) Create a repository possibly on github/gitlab because travis.com is free only for open source
2) Create a travis file called .travis.yml
3) Go to heroku and create the project or create it from the command line
4) Associate it with a git if done as an interface, you must check this and enable autodeploy but first you must remember to create the travis file inside the project with the main parameters and commands to be executed
5) Using the command line, do the first push
6) And then to enable the ci / cd or the deploy when it passes the tests you need to give this specific command from the command line travis setup heroku
7) Give the token found on heroku in the account setting section and confirm after all the steps attention if the name of the git is different from the name of the heroku project because hindsight can give an error
8) DONE HAVE FUN VIIIIIIIII!


