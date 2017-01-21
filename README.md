# Template Github Pages site

Angular 1.5 and bootstrap 3 template site, includes gulp build scripts to publish to gh-pages, run protractor tests unit tests and full End2End feature tests. 

Usual github process should be used, with regular commits and pushes to `master` branch.

## Dev Machine Instructions

open terminal and change to directory of where the repo has been cloned to i.e

`cd ~\source\template-github-pages`

You will need both `npm` and `gulp` installed globally on your machine. Google is your friend here. :-)

```bash
npm install
```

```bash
gulp install -g bower
```

```bash
bower install
```

The above will configure your local machine for development of the site.  

## Local development

A local webserver can be run to serve the compiled and generated js / css this will
allow you to test and verify your development.

```bash
gulp serve
```

This will still contain all of the browser mappings and access to the angular variables via the browser, this will be available on http://localhost:3000

The above will allow you change the raw source code and auto compilation happen in real time.

To see what the site will look like once deployed (hopefully it will look the same, but worth checking).

```bash
gulp serve:dist
```

## Deployment

When the your ready to deploy your app to github, you can use the commands below.

```bash
gulp clean
```

```bash
gulp build
```

```bash
gulp deploy
```

The above will create a branch called `gh-pages` and contains only the compiled css, generated html & js.

## Using your domain

Rename the file `./assets/EXAMPLECNAME` to `./assets/CNAME` and add your custom url to the file.

You will also need to update your A record with domain provider to point at github,

see [GitHub Instructions](https://help.github.com/articles/using-a-custom-domain-with-github-pages) for how to do this.

### Gulp Tasks Summary

* __gulp__ - build an optimized version of your application in folder `dist`
* __gulp serve__ to start BrowserSync server on your source files with live reload
* __gulp serve:dist__ to start BrowserSync server on your optimized application `dist` folder without live reload
* __gulp deploy__ compile latest code and push to `gh-pages` branch
* __gulp test__ to run your unit tests with Karma
* __gulp test:auto__ to run your unit tests with Karma in watch mode
* __gulp protractor__ to launch your e2e tests with Protractor
* __gulp protractor:dist__ to launch your e2e tests with Protractor on the `dist` files
