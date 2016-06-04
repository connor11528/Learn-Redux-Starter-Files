# Learn Redux

- With Redux, all data is kept in a **Store**. Rather than holding our state in a component state we hold our state in a Redux Store. That way we don't have many different components with many different states. We have one giant object that contains all of our data for all of our components.



## Running

First `npm install` to grab all the necessary dependencies. 

Then run `npm start` and open <localhost:7770> in your browser.

This starts an express development server (**devServer.js**).

There is hot reloading for components. (Change components, no need to refresh web browser)

## Production Build

Run `npm build` to create a distro folder and a bundle.js file.
