Welcome to the front-end development pre-assignment. In this file, you can find useful information about the whole project. Hope you enjoy it :)
# Table of Contents

1. [How to launch the project](#how-to-launch-the-project)
2. [Extra Feature](#extra-feature)
2. [Structure Information](#structure-information)
3. [Future Work](#future-work)

# How to launch the project
First, in the project directory, run:

### `npm install`


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Extra Feature
For the extra feature, I have added a sorting system for the songs based on their level. There is an additional dropdown under the main header with three options:
1. Easiest First
2. Hardest FIrst
3. None

By using this feature, you can sort the whole songs based on their levels. I have used useMemo() for this feature to prevent calling the API again and sort them using API.  
# Structure Information

[Component Diagram](Diagram.png)


# Future Work
There are still some other things that can be done in this project to make it better/optimized. In order to make the project ready in the provided time, I decided to list all these next steps here and prevent implementing them. Here I'm going to give some possible future works for this project:

1. Using React-Window and Virtualization for infinite scrolling instead of current method.
2. Adding more detailed tests that cover various aspects of each component.
3. Adding a modal error box to show errors while fetching data (instead of console.error).
4. Disable level indicators in the filter box while all the filtered data is being loaded.
5. Solve the problem with test configuration. I couldn't find the root cause of it till now.