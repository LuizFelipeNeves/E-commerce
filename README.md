# E-commerce
This project has been created in course [Complete React Developer in 2020 (w/ Redux, Hooks, GraphQL)](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/) with [Create React App](https://github.com/facebook/create-react-app).

<p align="center">
  <a href="https://e-commerceluiz.netlify.com/">
      <img src="./public/preview.png" alt="E-commerce" width="600px"/>
  </a>
</p>

___
## Tech Stack:
- React
- Redux + Redux-Persist
- Reselect
- Styled-Components
- Redux-Logger
- Integrated Prettier + ESLint + Airbnb Style Guide in VSCode
- HOC Patterns = (WithSpinner component)
- Stripe-checkout
- Firebase

## Articles:
- [Integrating Prettier + ESLint + Airbnb Style Guide in VSCode](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a)
- [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html)

## Install in VSCode
- https://prettier.io/
- https://eslint.org/
___
## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### Deployment
### `npm run deploy`
The deployment is configured for github pages.<br />
PS: You must enter the login and password!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Env:
  STRIPE_SECRET_KEY
  REACT_APP_STRIPE_PUBLISHABLE_KEY