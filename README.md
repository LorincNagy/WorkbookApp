# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.3.

# CLI Deep Dive & Troubleshooting


## Troubleshooting

If you encountered issues during the installation of the CLI or setup of a new Angular project, here are some steps you can take:

- **Ensure Node.js, npm, and Angular CLI are up to date:**
  - Updating Node.js: Go to [nodejs.org](https://nodejs.org/) and download the latest version. Uninstall all installed versions on your machine first.
  - Updating npm: Run `[sudo] npm install -g npm` (sudo is only required on Mac/Linux).
  - Updating the CLI: 
    ```
    [sudo] npm uninstall -g angular-cli @angular/cli
    npm cache verify
    [sudo] npm install -g @angular/cli
    ```

- **Common Issues & Solutions:**
  - **Creation of a new project takes forever (longer than 3 minutes):**
    - This occasionally happens on Windows. Try running the command line as administrator.
  - **EADDR error (Address already in use):**
    - You might already have another `ng serve` process running. Make sure to quit that or use `ng serve --port ANOTHERPORT` to serve your project on a new port.
  - **Changes are not reflected in the browser (App is not compiling):**
    - Check if the window running `ng serve` displays an error. If not, ensure you're using the latest CLI version and try restarting your CLI.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

