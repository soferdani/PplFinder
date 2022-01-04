# Ppl Finder 

[Click to go to the deployed via github pages](https://soferdani.github.io/PplFinder/#/)

Welcome to the Ppl Finder application (link to the deployed). 
This app is a simple application which displays randomly generated user information in a list, using the `randomuser.me` API.
## Main features
   1. **Filter** - Allow the user to select up to 5 country's and also capable of handling multiple country selections, while unmark a country remove the filter. 
   2. **Favorites** - Every user has a small heart signing which appears when hovering on the user, while press the hard store the user in the local storage and all the user is automatic can be found on the favorites page
   3. **Infinity Scroll** - Loads content continuously as the user scrolls down the page. note this feature is without any additional library.

## Technologies

This React app use the following liberty's/api's (besides the standard useState and useEffect api's from React great library): 
* [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
* [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
* [useRef](https://reactjs.org/docs/hooks-reference.html#useref)
* [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)
* [Nano ID](https://www.npmjs.com/package/nanoid)
* [Material UI](https://mui.com/)
* [Styled-components](https://styled-components.com/)

## Installation
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
and requires [NPM](https://docs.npmjs.com/) to be installed.

    git clone https://github.com/soferdani/post-board
    cd notes-react-app
    npm install

## Usage 
    npm start