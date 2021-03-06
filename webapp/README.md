# Webapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Steps followed to create this project

Creating the project using the angular-cli

    ng new webapp --routing --style=scss

Modify the outputPath to generate the builds in the static folder. In the 'angular.json' change:
````json
"outputPath": "dist/webapp",

           to 

"outputPath": "../server/static",
````
    

Modify the build to include the `base-href` to `/app`. In the `package.json` change:
````json
"build": "ng build",

        to
        
"build": "ng build --base-href /app/ --prod",
````

Lets do a quick test to see if it works:

    yarn install
    yarn build  


Adding bootstrap

    npm install --save bootstrap
    npm install --save @ng-bootstrap/ng-bootstrap

Add octicons (NOT DONE IN EXXAMPLE YET)
https://stackoverflow.com/questions/41378939/how-to-use-octicon-with-angular-2

    npm install --save octicons    
    

Add styles in `src/styles.scss`:
`````typescript
@import '~bootstrap/scss/bootstrap.scss';
`````

Generating basic components:

    # Layout
    ng generate component layout/navbar
    ng generate component layout/content
    
    # Examples
    ng generate component main/exampleList
    ng generate component main/exampleForm
    
    # Auth
    ng generate component main/auth/login
    ng generate component main/auth/register

