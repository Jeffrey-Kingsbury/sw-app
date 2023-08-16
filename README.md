# The Galactic Starship Database

This project was built with the [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0 and the [Star Wars API](https://swapi.dev/).



## Running this application locally
To run this application locally you will need to clone this repository or clone a fork of this repository.

Make sure to run `npm install` or `npm i` to install all dependencies neeed for this project.

Assuming you have the angular CLI installed, run `ng serve` for a local dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

If you are missing the angular CLI you will need to install it globally in your environment using the following command via npm. This command will only work on the assumption you have node and npm installed.

`npm install -g @angular/cli`
As this application is built with TypeScript, you will also need to install TypeScript `npm install -g typescript` if you haven't done so already.

## Features
- View a list of starships and specifications on the homepage 

- Click on a starship to view more details 

- If the starship has any known pilots, clicking on the pilot's name will navigate the user to the pilots details.

- Custom loading icons based on the Light/Dark theme preferences of the users browser