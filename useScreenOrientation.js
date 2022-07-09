"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useScreenOrientation = () => {
    const calc = (window) => {
        const orientation = window.screen.orientation.type, angle = window.screen.orientation.angle;
        return [orientation, angle];
    };
    const [orientation, setOrientation] = (0, react_1.useState)([
        'portrait-primary',
        0,
    ]);
    const getOrientation = (windowParam = window) => {
        const result = windowParam ? calc(windowParam) : calc(window);
        setOrientation(result);
        return result;
    };
    const orientationEvent = (event) => {
        getOrientation(event.currentTarget);
    };
    (0, react_1.useEffect)(() => {
        if ('onorientationchange' in window) {
            window.addEventListener('orientationchange', orientationEvent);
            setOrientation(calc(window));
        }
        return () => {
            window.removeEventListener('orientationchange', orientationEvent);
        };
    }, []);
    return orientation;
};
exports.default = useScreenOrientation;
