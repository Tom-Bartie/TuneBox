# TuneboxApp

## Front-End

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4. This project also requires node.js v18.10.0.

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

## Back-End

The backend uses Spring Boot. Make sure you are running java version 14.0.2 or later

## How to run back-end

This project was built using [maven](https://repo.maven.apache.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.1.0/maven-wrapper-3.1.0.jar). To run back end code, run `mvn spring-boot:run`. To run test cases, run `mvn test`.

## *Note For Developers*

Follow the following steps:

1.	Set up your development environment: Install and configure the necessary software and tools for both Angular and Spring Boot development. This includes installing Node.js, Angular CLI, and a Java IDE such as vs code.
2.	Implement your backend RESTful API: Use Spring MVC to create RESTful endpoints for creating, updating, and retrieving reviews from the database.
3.	Implement your Angular front-end: Create an Angular project using the Angular CLI. Use Angular services to make HTTP requests to the Spring Boot API for creating and retrieving reviews.
4.	Create your review form and review display component: Use Angular templates and components to create a form for submitting reviews and a display component for showing reviews.
5.	Test and debug your application: Write test cases using JUnit for the Spring Boot API and Karma for the Angular application. 
6.	Deploy the application: Deploy your Angular app to a web server or hosting service, and deploy your Spring Boot app to a server or cloud platform like AWS or Azure.
