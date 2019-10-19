/**
 * Basic Webpack Setup  (Just Javascript compliation)
 * Directions for adding this to package.json build: 
 *      Either 
 *          - Rename the file to "webpack.config.js" and insert under the scripts object of package.json the following - "build": "webpack webpack.config.js"
 *          - Keep the name but add the --config flag like so - "build": "webpack --config webpack.basic.config.js"
 * Pseudo-code starts below:
 */

// add constant variable equal to the module 'path' (Node.js utlity module)


// set module.exports object equal to a new object


// fist, lets set the mode for your webpack output - "production" | "development" | "none"


//  set your entry point file. If multiple you can take an object or array


// set your output options and include the filename, publicPath to your output directory


// create your module configuration


// create a rule for your module to test for javascript


// within your rule remember to exclude your node_modules folder so webpack doesn't work on any extra files


