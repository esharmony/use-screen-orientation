To install either: 

- npm i use-screen-orientation
- yarn add use-screen-orientation

### What this does

use-screen-orientation is a react hook that observes the orientation of the browser window or mobile and tablet device screens and updates on change.

It uses the screen.orientation API but also checks for the window.orientation API to handle Safari on iOS.

To view this in action [click this link on your mobile or tablet](https://use-screen-orientation-example-mnsqxu00k-esharmony.vercel.app/)

If **viewing on a browser** in the dev tools, **ensure to refresh after switching to the mobile or tablet emulator** as the event listener will not be set via the switch to emulation from the browser alone. 
The event listener is set only on page load when the event **onorientationchange** is available.

If you wish to explore the example you can do so [here](https://github.com/esharmony/use-screen-orientation-example)

### To Use

    import useScreenOrientation from 'use-screen-orientation';

    function App() {
      const [orientation, angle] = useScreenOrientation();
 
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p style={{ background: 'white', color: 'black' }}> orientation: {orientation} angle: {angle}</p>
            </header>
        </div>
      );
    }

The two properties available are: 
  * orientation (type Orientation "landscape" | "portrait" )
  * angle (type number)

You can use angle if you require something more granular than landscape or portrait.







