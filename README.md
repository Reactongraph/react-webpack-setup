### `WEBPACK`
1) webpack: The main webpack plugin as an engine for its dependents.
2) webpack-cli: To access some webpack commands through CLI like starting dev server, creating production build, etc.
3) webpack-dev-server: A minimal server for client-side development purpose only.
4) html-webpack-plugin: Will help in creating HTML templates for our application.

### `BABEL`
1) babel-core: Well as the name suggests the main engine of babel plugin for its dependents to work.
2) babel-preset-env: This is the ES5, ES6 supporting part
3) babel-preset-react: Babel can be used in any framework that needs latest JS syntax support, in our case its “React”, hence this preset.
4) babel-loader: Consider this as a bridge of communication between Webpack and Babel

This code has everything that is needed for starting and running a React web app. You can clone this from out github repo and continue to work on.

### `Install`
$ git clone https://github.com/Reactongraph/react-webpack-setup.git<br>
$ cd react-webpack-setup<br>
$ npm install or yarn<br>

### `npm start or yarn start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
You can change the port by going in package.json file and change the port number under build
The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!