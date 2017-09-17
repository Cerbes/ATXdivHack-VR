# VR Immersion Therapy by ALT-EX

## Project Members
- Courtney Erbes
- Chase Cloutier
- [Stephen Mayeux](https://www.thebestjs.com)
- [Karen Ding](https://linkedin.com/in/karen-ding)
- Melissa Reeve

## Project Description
VR tool for exposure therapy to help people overcome their fears.

## Routes
1. The root `/` will open the VR experience right away.
2. `/setup` will open a page with some sliders and drop down menus.
3. `/panel` will open a blank page.

## Tech Used

1. Mozilla's A-Frame and `aframe-react` to render landscapes and freaking spiders!
2. React and Redux for the views
3. `react-router` for... routing.
4. Webpack Dev server with CSS modules
5. Node.js and Express to serve production build

## Running the React Client

1. fork and clone repo
2. cd into project directory and `cd client`
3. Install dependencies with `yarn` or `npm install`
4. Start webpack dev server with `yarn start` or `npm start`
5. Open browser and go to `localhost:8080`
6. To view on your phone and Google Cardboard, ensure your computer and mobile device or on the same WiFi network. Then find your computer's IP address and go to `IP_ADDRESS:8080` to experience it yourself. This only works on Android devices at the moment.

# Production Build

1. run `webpack` and `yarn server` and then go to `localhost:3030`
