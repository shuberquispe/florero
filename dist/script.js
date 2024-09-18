function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} 


class Bird extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "clickhandler",



















































































    () => {
      this.state.alarmSound.play();
      this.state.perchTime.pause();
      this.state.flyTime.
      to('#tail-torso', 0.1, { rotation: 0, transformOrigin: '50% 50%', ease: Power4.easeOut }, '0').
      to('#bird-svg', 0.05, { rotation: 70 }).
      to('#bird-svg', 7, {
        /* flight path */
        bezier: {
          type: 'soft',
          values: [{ x: 100, y: -150 }, { x: 800, y: 500 }, { x: 1800, y: -1000 }],
          autoRotate: false },

        ease: Power1.easeOut }).

      fromTo('#bird-wings', 0.1, { autoAlpha: 0 }, { autoAlpha: 1, repeat: 50 }, '.1').
      to('#bird-svg', 4, { scaleX: 0.2, scaleY: 0.4, ease: Power1.easeOut }, '-=7');
    });this.clickhandler = this.clickhandler.bind(this);this.state = { flyTime: new TimelineLite(), alarmSound: new Audio('https://www.dropbox.com/s/q4vsduf0kk7tl3k/alarm.mp3?raw=1'), flutterSound: new Audio('https://www.dropbox.com/s/um3n1tqve70dmhd/flutter.mp3?raw=1'), birdCallSound: new Audio('https://www.dropbox.com/s/shmyhyjgiu2nyvr/call.mp3?raw=1'), perchTime: new TimelineLite({ onComplete() {this.restart();} }) };}componentDidMount() {const playFlutter = () => {this.state.flutterSound.volume = 0.4;this.state.flutterSound.play();};const playCall = () => {this.state.birdCallSound.play();};this.state.perchTime.to('#bird-head-parts-test', 0.2, { rotation: 30, transformOrigin: '70% 50%', ease: Power4.easeOut }, '3').to('#bird-head-parts-test', 0.2, { rotation: 80, transformOrigin: '60% 50%', ease: Power4.easeOut }, '+=1').fromTo('#flutter', 0.1, { autoAlpha: 1 }, { autoAlpha: 0, repeat: 6 }, '0').to('#bird-head-parts-test', 0, { transformOrigin: '70% 50%', css: { scaleY: -1, rotation: 90 }, ease: Power4.easeOut }, '+=1').call(playCall, ['Call SOUND'], this, '+=0').to('#bird-head-parts-test', 1, { transformOrigin: '70% 50%', css: { rotation: 160 }, ease: Power4.easeOut }, '+=1').call(playFlutter, ['FLUTTER SOUND MID '], this, '-=1').fromTo('#flutter', 0.1, { autoAlpha: 1, ease: Power4.Linear }, { autoAlpha: 0, ease: Power4.Linear, repeat: 5 }, '-=1').to('#tail-torso', 0.2, { css: { rotation: 10, scaleX: -1, transformOrigin: '50% 50%' }, ease: Power4.easeOut }, '-=1').to('#bird-head-parts-test', 0.2, { transformOrigin: '70% 50%', css: { scaleY: 1, rotation: 40 }, ease: Power4.easeOut }, '-=1').to('#bird-head-parts-test', 0.2, { rotation: 0, transformOrigin: '70% 50%', ease: Power4.easeOut }, '+=1').to('#bird-head-parts-test', 0.5, { rotation: 40, transformOrigin: '70% 50%', ease: Power4.easeOut }, '+=2').call(playFlutter, ['FLUTTER SOUND A @0 '], this, '0');}

  render() {
    return /*#__PURE__*/(
      React.createElement("svg", { id: "bird-svg", onClick: this.clickhandler, viewBox: "60 0 100 80", preserveAspectRatio: "none" }, /*#__PURE__*/
      React.createElement("g", { id: "tail-torso" }, /*#__PURE__*/
      React.createElement("g", { id: "flutter" }, /*#__PURE__*/
      React.createElement("linearGradient", {
        id: "flutter-grad",
        x1: "64.9824",
        x2: "178.4746",
        y1: "-34.7041",
        y2: "-34.7041",
        gradientTransform: "matrix(.7428 -.4673 .2347 .8344 20.8838 125.198)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: "0", stopColor: "#444", stopOpacity: "0" }), /*#__PURE__*/
      React.createElement("stop", { offset: ".5", stopColor: "#242424" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "#444", stopOpacity: "0" })), /*#__PURE__*/

      React.createElement("path", { fill: "url(#flutter-grad)", d: "M147.5 20.6l-43.4 40.2-40.4 14.7 30.7-52.7z" })), /*#__PURE__*/


      React.createElement("path", {
        id: "bird-tail-test",
        fill: "none",
        stroke: "#332e26",
        strokeMiterlimit: "10",
        strokeWidth: "5.2459",
        d: "M108.6 35.8l27.6 11.3m-3.7 6.7l-26.3-14.1" }), /*#__PURE__*/

      React.createElement("path", {
        id: "bird-legs",
        fill: "none",
        stroke: "#1a1a1a",
        strokeMiterlimit: "10",
        strokeWidth: ".831",
        d: "M104.8 59.6l-6 17.3m17.9-22.4l2.5 16.2" }), /*#__PURE__*/


      React.createElement("path", {
        fill: "#332e26",
        d: "M98 58.5c-9.5-5.6-14.1-17.2-10.3-26 3.8-8.8 14.6-11.4 24.1-5.8 9.5 5.6 14.1 17.2 10.3 26-3.8 8.8-14.6 11.4-24.1 5.8z" }), /*#__PURE__*/

      React.createElement("linearGradient", {
        id: "chest-grad",
        x1: "152.5469",
        x2: "152.5469",
        y1: "29.8813",
        y2: "1.9185",
        gradientTransform: "rotate(-20.43 214.30190749 162.44998562)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: "0", stopColor: "#a78343", stopOpacity: ".6" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "#e2cca4", stopOpacity: "1" })), /*#__PURE__*/

      React.createElement("path", {
        fill: "url(#chest-grad)",
        d: "M104.6 32.3C99.5 35 95.3 38 91.8 40c-1 .6-4.8.1-4.5 2.2.7 3.1 5.3 10.2 9.6 13.9 3.7 3.2 8.2 4.7 12.8 3.7 3.9-.9 8.1-3.5 10.2-7.6 1.9-3.7 1.7-7.6-.7-10.9-2.7-3.8-8.3-7.4-12.4-8.5-.6-.2-1.3-.6-1.9-.9-.5.1-.8.5-1.2.9" }), /*#__PURE__*/

      React.createElement("g", { id: "bird-head-parts-test" }, /*#__PURE__*/
      React.createElement("path", { id: "bird-beak", fill: "#000", d: "M86.4 33.9L79 35.6l6.3-4.6z" }), /*#__PURE__*/
      React.createElement("path", {
        id: "bird-head",
        fill: "#1b1b1b",
        d: "M83.4 32.3c-1.4-4.4 1.8-9.9 7.3-12.3 5.4-2.4 11-.7 12.4 3.8 1.4 4.4-1.8 9.9-7.3 12.3-5.4 2.3-11 .6-12.4-3.8z" }), /*#__PURE__*/

      React.createElement("path", {
        id: "bird-mask",
        fill: "#e5e4db",
        d: "M82.6 30.4s.2-.3.6-.8c.4-.5 1-1.1 1.8-1.6.8-.6 1.8-1.1 2.9-1.6 1.1-.5 2.3-1.1 3.4-1.6 1.2-.5 2.4-1 3.5-1.4.6-.2 1.1-.4 1.6-.6.5-.2 1-.4 1.5-.5 1.9-.6 3.2-.9 3.2-.9l.4.8s-1 .9-2.5 2.1c-.4.3-.8.6-1.3 1-.5.3-.9.7-1.4 1-1 .7-2.1 1.4-3.2 2.1-1.1.7-2.2 1.4-3.2 2-1 .6-2 1.1-3 1.5-.9.3-1.7.5-2.4.6-.6.1-1 0-1 0l-.9-2.1z" }), /*#__PURE__*/

      React.createElement("path", { id: "bird-eye", d: "M89 27.7c.3.8-.1 1.8-.8 2.1-.7.3-1.5-.1-1.8-1-.3-.8.1-1.8.8-2.1.7-.3 1.5.1 1.8 1z" })), /*#__PURE__*/

      React.createElement("linearGradient", {
        id: "wings-grad",
        x1: "125.5967",
        x2: "169.5945",
        y1: "77.1357",
        y2: "81.5993",
        gradientTransform: "matrix(2.2957 -1.3123 1.4329 2.2224 -343.645 67.0742)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: "0", stopColor: "#786d58", stopOpacity: ".7" }), /*#__PURE__*/
      React.createElement("stop", { offset: ".46", stopColor: "#786d58", stopOpacity: ".8" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "#786d58", stopOpacity: ".7" })), /*#__PURE__*/

      React.createElement("path", { id: "bird-wings", fill: "url(#wings-grad)", d: "M152.5 6l-36.7 65.1-62.5-1.3 43.3-36.2z" }))));



  }}


/********************************************************/
/****************DUCK COMPONENT*************************/
/********************************************************/



class Duck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: new TimelineLite() };

  }

  componentDidMount() {
    this.state.timeline.fromTo('#duck-svg', 200, { x: 400, ease: Circ.easeOut }, { x: -700 });
    const rippleTime = new TimelineLite({ repeat: -1 });
    rippleTime.
    from('.ripple-1', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '3').
    from('.ripple-2', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=1').
    from('.ripple-3', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=1').
    from('.ripple-4', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=1').
    from('.ripple-5', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=1').
    from('.ripple-6', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=1').
    from('.ripple-7', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=1').
    from('.wake-1', 5, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '+=0').
    from('.wake-2', 5, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=5');
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("svg", { id: "duck-svg", viewBox: "0 0 809 120" }, /*#__PURE__*/

      React.createElement("linearGradient", {
        id: "reflection-grad",
        x1: "63.9648",
        x2: "63.9648",
        y1: "37.9043",
        y2: "118",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: "0", stopOpacity: ".5" }), /*#__PURE__*/
      React.createElement("stop", { offset: ".06747389", stopOpacity: ".4663" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopOpacity: "0" })), /*#__PURE__*/

      React.createElement("path", {
        fill: "url(#reflection-grad)",
        d: "M120 71.5c.4-.4.8-.8 1.2-1.1.3-.1.6.3 1 .6 2.2 2.4 4.1 5.5 5.7 9.4-.3-5.1-.6-10.2-1-15.2-1.7-6.4-4.6-10.9-6.2-17.4-1.2-3.2-2.6-6.1-4-8.7-3.8 0-74.4-1-90.4-1.2 0 .9-.1 1.7 0 2.5-1.5 5.3-2 11.7-1 19.7.2 5.9 1.9 13.1-.2 19.1-.5 1.1-1.1 1.9-1.8 2.5C15.5 96.6 6.6 66 0 66c3.2 16.6 14.3 22.2 15.6 41.8 3.5 11.9 12.7 14.6 19.1 1.6 3.2-6.5 4.2-14.7 4.2-22.4 0-2.8-2.2-23.1 2-19.6.9.1 1.7.6 2.4 1.7 2.7 4 5.5 7.4 9 9 1.1 1.2 2.4 1.6 3.7 2 3.2 2.2 6.9 4 10.5 3.9 6.5 2.3 14.7.1 21.6-1.4 4.9-1 9.8-2.7 14.7-4.8 3.3-1.4 7.2-4.8 10.3-3.1 2.9 2.7 6.5 3.5 9.1 6.6.2-4.2-.9-7.3-2.2-9.8z" }), /*#__PURE__*/


      React.createElement("g", { className: "ripple-wake-collection", fill: "none", stroke: "#333", strokeMiterlimit: "10" }, /*#__PURE__*/
      React.createElement("ellipse", { className: "ripple ripple-1", cx: "80.5", cy: "41", stroke: "#000", strokeWidth: "2.8528", rx: "61.2", ry: "4" }), /*#__PURE__*/
      React.createElement("ellipse", {
        className: "ripple ripple-2",
        cx: "90.9",
        cy: "41",
        stroke: "#1A1A1A",
        strokeWidth: "2.4053",
        rx: "68.3",
        ry: "5.7" }), /*#__PURE__*/

      React.createElement("ellipse", { className: "ripple ripple-3", cx: "106.7", cy: "41", stroke: "#333", strokeWidth: "1.483", rx: "84", ry: "8" }), /*#__PURE__*/
      React.createElement("ellipse", {
        className: "ripple ripple-4",
        cx: "121.8",
        cy: "41",
        stroke: "var(--darkMist)",
        strokeWidth: "1.8106",
        rx: "98.9",
        ry: "10.1" }), /*#__PURE__*/

      React.createElement("ellipse", {
        className: "ripple ripple-5",
        cx: "147.9",
        cy: "41",
        stroke: "#666",
        strokeWidth: "1.0665",
        rx: "124.7",
        ry: "10" }), /*#__PURE__*/

      React.createElement("ellipse", {
        className: "ripple ripple-6",
        cx: "186.4",
        cy: "41",
        stroke: "gray",
        strokeWidth: "1.3175",
        rx: "163",
        ry: "11.7" }), /*#__PURE__*/

      React.createElement("ellipse", {
        className: "ripple ripple-7",
        cx: "325.3",
        cy: "41",
        stroke: "#999",
        strokeWidth: "1.7514",
        rx: "301.3",
        ry: "11.2" }), /*#__PURE__*/


      React.createElement("path", {
        className: "wake wake-1",
        fill: "none",
        stroke: "gray",
        strokeMiterlimit: "10",
        strokeWidth: ".7595",
        d: "M40.2 33.2C145.3 22.3 217.8 9.6 426.4 7.3 548.9 5.9 745.6 11 804.1 1.1" }), /*#__PURE__*/

      React.createElement("path", {
        className: "wake wake-2",
        fill: "none",
        stroke: "#333",
        strokeMiterlimit: "10",
        strokeWidth: ".5918",
        d: "M41.8 46.8c103.8 10.5 175 24.5 380.4 31.5 120.6 4.1 327-2.7 384.8 6" })), /*#__PURE__*/


      React.createElement("path", {
        id: "duck-surfaced",
        fill: "#0e0c0b",
        d: "M125.4 31.1c-.1.1 0 .1 0 0-.4.2-.8.4-1.1.3-.4-.2-.8-.4-1.2-.5h.1c1.5-1.2 3-2.8 3.3-4.7-2.9 1.5-6.7 1.9-9.8 3.2-3.3.8-6.8-.8-10-1.5-4.7-1-9.4-1.9-14.2-2.4-6.8-.7-14.8-1.8-21.6-.7-3.6 0-7.5.8-10.9 1.9-1.4.2-2.7.4-3.9 1-3.7.8-6.9 2.4-10 4.4-.8.5-1.7.8-2.6.8-4.5 1.7-.2-8.2.1-9.6.8-3.7.6-7.8-1.9-10.9-5-6.3-14.6-5-19.4.8-3.3 9.6-15 12.3-20 20.4 6.6 0 18.7-15 24.9-7.7.6.3 1.1.7 1.5 1.2 1.5 2.9-.9 6.4-1.8 9.3-1.2 2.5-1.7 4.7-1.6 6.7 23.8-.3 76.7-.3 95.2.1.3-.3.6-.5.9-.8 2.3-3.2 5.7-5.4 8-8.5 1-2.4 1.8-4.9 2.6-7.4-1.9 2-4.2 3.5-6.6 4.6z" }), /*#__PURE__*/


      React.createElement("ellipse", {
        cx: "28.5",
        cy: "15.2",
        fill: "none",
        stroke: "#BBBBBC",
        strokeMiterlimit: "10",
        strokeWidth: "1.0266",
        rx: ".5",
        ry: ".5" }), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "duck-eye",
        cx: "28.5",
        cy: "15.2",
        fill: "none",
        stroke: "#BBBBBC",
        strokeMiterlimit: "10",
        strokeWidth: "1.0266",
        rx: ".5",
        ry: ".5" })));



  }}





/********************************************************/
/****************TREE Component*************************/
/********************************************************/
const Tree = () => /*#__PURE__*/
React.createElement("svg", { id: "tree-svg", viewBox: "0 0 1920 1080", preserveAspectRatio: "xMinYMid meet" }, /*#__PURE__*/
React.createElement("g", { className: "flowers-back-layer" }, /*#__PURE__*/
React.createElement("linearGradient", {
  id: "fbl1",
  x1: "-3725.7861",
  x2: "-3726.5129",
  y1: "1112.5498",
  y2: "1092.925",
  gradientTransform: "matrix(-.9907 -.136 -.136 .9907 -3116.6953 -1253.0684)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl1)",
  d: "M417.9 346.7c-.9 7 1.4 13.1 5 13.6 3.7.5 7.4-4.7 8.2-11.6.9-7-1.4-13.1-5-13.6-3.6-.6-7.3 4.6-8.2 11.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl2",
  x1: "-1696.8887",
  x2: "-1697.5615",
  y1: "3114.2744",
  y2: "3096.1089",
  gradientTransform: "scale(-1 1) rotate(78.275 639.13922592 2520.43404945)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl2)",
  d: "M408.3 359.2c6.3 1.4 12.1-.6 12.8-4.5.8-3.9-3.8-8.3-10.1-9.7-6.3-1.4-12.1.6-12.8 4.5-.8 3.9 3.7 8.2 10.1 9.7z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl3",
  x1: "-5007.395",
  x2: "-5008.792",
  y1: "1279.0469",
  y2: "1241.3275",
  gradientTransform: "scale(-1 1) rotate(-21.26 -4586.8616845 -11978.04295941)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl3)",
  d: "M165.9 509.5c-4.6 12.7-2.8 25.4 3.9 28.2 6.7 2.8 15.8-5.2 20.4-17.9 4.6-12.7 2.8-25.4-3.9-28.2-6.7-2.8-15.8 5.2-20.4 17.9z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl4",
  x1: "-182.96",
  x2: "-183.9286",
  y1: "-512.0186",
  y2: "-538.1709",
  gradientTransform: "matrix(.7939 -.608 -.608 -.7939 -162.7852 258.5985)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl14)",
  d: "M15.5 798.9C9.8 802.4.8 800.7-6 795.3v-24c6.4-1.7 14.9 1.2 20.7 7.3 6.8 7.2 7.2 16.3.8 20.3z" }), /*#__PURE__*/


React.createElement("linearGradient", {
  id: "fbl5",
  x1: "-3076.3784",
  x2: "-3077.5889",
  y1: "-536.0376",
  y2: "-568.7209",
  gradientTransform: "scale(-1 1) rotate(-56.46 -327.7166793 -2735.27989324)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl5)",
  d: "M15.3 755.7C3.6 762.1-3 770.9.4 775.4c3.5 4.4 15.7 2.8 27.4-3.7 11.7-6.4 18.3-15.2 14.9-19.7-3.5-4.4-15.8-2.7-27.4 3.7z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl6",
  x1: "199.1055",
  x2: "198.4979",
  y1: "263.0088",
  y2: "246.6046",
  gradientTransform: "matrix(1 0 0 -1 0 1019.8857)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("ellipse", { cx: "198.8", cy: "763.9", fill: "url(#fbl6)", rx: "11.4", ry: "10.6" }), /*#__PURE__*/
React.createElement("linearGradient", {
  id: "fbl7",
  x1: "-1946.5093",
  x2: "-1947.6499",
  y1: "-362.3467",
  y2: "-393.1443",
  gradientTransform: "matrix(0 -1 -1 0 -145.998 -1186.1121)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("ellipse", { cx: "229.5", cy: "760.9", fill: "url(#fbl7)", rx: "20", ry: "6.1" }), /*#__PURE__*/
React.createElement("linearGradient", {
  id: "fbl8",
  x1: "-2575.5601",
  x2: "-2576.1675",
  y1: "1791.6504",
  y2: "1775.2469",
  gradientTransform: "matrix(-1 0 0 1 -2351.9629 -1040.0752)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl8)",
  d: "M212.4 744.6c0 5.9 5.1 10.6 11.4 10.6 6.3 0 11.4-4.8 11.4-10.6 0-5.9-5.1-10.6-11.4-10.6-6.2 0-11.4 4.7-11.4 10.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl9",
  x1: "-417.7969",
  x2: "-418.9374",
  y1: "2412.3252",
  y2: "2381.5298",
  gradientTransform: "matrix(0 1 1 0 -2205.9648 1165.8474)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl9)",
  d: "M193.2 753.6c11 0 20-2.7 20-6.1 0-3.4-8.9-6.1-20-6.1-11 0-20 2.7-20 6.1.1 3.4 9 6.1 20 6.1z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl10",
  x1: "-989.2402",
  x2: "-990.3665",
  y1: "-1076.9458",
  y2: "-1107.354",
  gradientTransform: "matrix(.7947 -.607 -.607 -.7947 202.8003 -706.4766)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl10)",
  d: "M85.3 756.5C77 749 66.9 744.8 62.7 747c-4.2 2.2-.9 10 7.4 17.5s18.4 11.7 22.6 9.5c4.2-2.3.9-10.1-7.4-17.5z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl11",
  x1: "-3293.8271",
  x2: "-3294.687",
  y1: "832.0464",
  y2: "808.8289",
  gradientTransform: "matrix(-.607 -.7947 -.7947 .607 -1252.166 -2371.0537)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl11)",
  d: "M85.3 738.3c-7.3 3.8-9.4 10.4-4.7 14.7 4.7 4.3 14.5 4.6 21.8.8 7.3-3.8 9.4-10.4 4.7-14.7-4.7-4.3-14.5-4.7-21.8-.8z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl12",
  x1: "-1373.4619",
  x2: "-1374.5881",
  y1: "3130.0078",
  y2: "3099.6011",
  gradientTransform: "matrix(-.7947 .607 .607 .7947 -2916.6929 -916.0771)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl12)",
  d: "M59.6 731.2c8.3 7.5 18.4 11.7 22.6 9.5 4.2-2.2.9-10-7.4-17.5s-18.4-11.7-22.6-9.5c-4.2 2.2-.9 10.1 7.4 17.5z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl13",
  x1: "913.2012",
  x2: "912.3413",
  y1: "1216.2793",
  y2: "1193.0626",
  gradientTransform: "matrix(.607 .7947 .7947 -.607 -1461.7734 748.4395)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl13)",
  d: "M59.6 749.4c7.3-3.8 9.4-10.4 4.7-14.7-4.7-4.3-14.5-4.6-21.8-.8-7.3 3.8-9.4 10.4-4.7 14.7 4.7 4.3 14.5 4.6 21.8.8z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl14",
  x1: "494.6221",
  x2: "493.0747",
  y1: "1594.9463",
  y2: "1553.1664",
  gradientTransform: "matrix(.6038 .7972 .7972 -.6038 -1381.8948 1181.8748)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl14)",
  d: "M179.3 631.6c11.6-9.5 18.4-20.9 15.3-25.5-3.1-4.5-15.1-.5-26.7 9.1-11.6 9.5-18.4 20.9-15.3 25.5 3.2 4.5 15.1.4 26.7-9.1z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl15",
  x1: "-2865.0908",
  x2: "-2866.6382",
  y1: "452.272",
  y2: "410.4951",
  gradientTransform: "scale(-1 1) rotate(-52.86 -1368.25370817 -2134.97113633)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl15)",
  d: "M218.4 601.8c-11.6 9.5-18.4 20.9-15.3 25.4 3.1 4.5 15.1.5 26.7-9.1 11.6-9.5 18.4-20.9 15.3-25.5-3.2-4.4-15.1-.3-26.7 9.2z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl16",
  x1: "-1764.479",
  x2: "-1765.4785",
  y1: "2704.8262",
  y2: "2677.8398",
  gradientTransform: "scale(-1 1) rotate(37.14 2141.9909818 3967.60432307)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl16)",
  d: "M190.9 602.8c5.5 7.9 15.3 9.9 22 4.5 6.6-5.4 7.5-16.3 2-24.2-5.5-7.9-15.3-9.9-21.9-4.5-6.7 5.4-7.6 16.3-2.1 24.2z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl17",
  x1: "-209.2441",
  x2: "-210.1523",
  y1: "2532.2363",
  y2: "2507.717",
  gradientTransform: "matrix(.1691 .9856 .9856 -.1691 -2073.2773 1391.1262)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl17)",
  d: "M377.7 768.3c8.5-2.7 15-9.4 14.4-15-.5-5.6-7.8-8-16.3-5.3s-15 9.4-14.4 15c.5 5.6 7.8 7.9 16.3 5.3z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl18",
  x1: "-2160.2207",
  x2: "-2161.1289",
  y1: "-478.6514",
  y2: "-503.1698",
  gradientTransform: "matrix(-.1691 -.9856 -.9856 .1691 -440.625 -1275.262)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl18)",
  d: "M405.8 761.4c-8.5 2.7-15 9.4-14.4 15 .5 5.6 7.8 8 16.3 5.3s15-9.4 14.4-15c-.5-5.6-7.8-7.9-16.3-5.3z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl19",
  x1: "-2692.188",
  x2: "-2693.2073",
  y1: "1999.7588",
  y2: "1972.2367",
  gradientTransform: "scale(-1 1) rotate(9.735 5747.69582468 14827.5052861)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl19)",
  d: "M391.1 748.5c.9 9.8 5.6 16.5 10.4 14.9 4.9-1.5 8-10.7 7.1-20.5-.9-9.8-5.6-16.5-10.4-14.9-4.8 1.6-8 10.8-7.1 20.5z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl20",
  x1: "-3916.8994",
  x2: "-3917.5454",
  y1: "3594.6025",
  y2: "3577.158",
  gradientTransform: "scale(-1 1) rotate(37.871 2395.714011 7686.75810437)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl20)",
  d: "M61.6 583.2c3.6 5.1 10.7 5.7 15.8 1.4 5.1-4.3 6.3-11.9 2.7-17-3.6-5.1-10.7-5.7-15.8-1.4-5.1 4.3-6.3 11.9-2.7 17z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl21",
  x1: "957.54",
  x2: "956.866",
  y1: "-1208.0522",
  y2: "-1226.2528",
  gradientTransform: "matrix(.8656 -.5008 -.5008 -.8656 -1367.8269 29.314)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl21)",
  d: "M79.2 595.3c-2.4-6-8.6-7.8-13.9-3.9-5.3 3.9-7.7 11.9-5.4 18 2.4 6 8.6 7.8 13.9 3.9 5.4-3.9 7.8-12 5.4-18z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl22",
  x1: "-3688.9712",
  x2: "-3690.1348",
  y1: "-1722.4458",
  y2: "-1753.865",
  gradientTransform: "scale(-1 1) rotate(-63.858 -29.07174244 -3466.82481945)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl22)",
  d: "M86.2 575.1c-9.5 6.4-16.3 14.5-15.3 18.2 1 3.7 9.5 1.6 18.9-4.8 9.5-6.4 16.3-14.5 15.3-18.2-1-3.7-9.5-1.6-18.9 4.8z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl23",
  x1: "-1313.0996",
  x2: "-1314.2852",
  y1: "3323.6055",
  y2: "3291.595",
  gradientTransform: "scale(-1 1) rotate(79.502 894.5483709 2710.7546739)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl23)",
  d: "M91.6 658.5c11.9-1.4 23.9-6.9 26.8-12.3 2.9-5.3-4.5-8.5-16.4-7.1-11.9 1.4-23.9 6.9-26.8 12.3-2.9 5.3 4.5 8.5 16.4 7.1z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl24",
  x1: "1101.3281",
  x2: "1100.2433",
  y1: "1153.8311",
  y2: "1124.5393",
  gradientTransform: "matrix(.9833 .1822 .1822 -.9833 -1201.407 1595.7183)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl24)",
  d: "M101.3 672.6c5-9.4 3.5-16.3-3.3-15.5-6.8.8-16.4 9.1-21.4 18.4-5 9.4-3.5 16.3 3.3 15.5 6.8-.8 16.4-9.1 21.4-18.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl25",
  x1: "-3488.9751",
  x2: "-3490.0601",
  y1: "889.7363",
  y2: "860.4446",
  gradientTransform: "matrix(-.9833 -.1822 -.1822 .9833 -3138.6809 -858.2885)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl25)",
  d: "M120.2 641.5c-5 9.4-3.5 16.3 3.3 15.5 6.8-.8 16.4-9.1 21.4-18.4 5-9.4 3.5-16.3-3.3-15.5-6.8.8-16.4 9.1-21.4 18.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl26",
  x1: "1453.5225",
  x2: "1452.6807",
  y1: "1029.0547",
  y2: "1006.3254",
  gradientTransform: "matrix(.9957 .09223 .09223 -.9957 -1374.6147 1641.8865)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl26)",
  d: "M181.3 761.5c1.7-7.9-3.6-14.7-11.9-15-8.3-.3-16.3 5.8-18 13.8-1.7 7.9 3.6 14.7 11.9 15 8.2.3 16.3-5.9 18-13.8z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl27",
  x1: "-3513.4907",
  x2: "-3514.7732",
  y1: "-365.6123",
  y2: "-400.24",
  gradientTransform: "matrix(-.757 -.6534 -.6534 .757 -2727.7998 -1268.3806)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl27)",
  d: "M169.4 735.4c-11.4 6-15.5 12.9-9.2 15.4 6.3 2.5 20.6-.4 32-6.4 11.4-6 15.5-12.9 9.2-15.4-6.3-2.5-20.6.3-32 6.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl28",
  x1: "613.6934",
  x2: "613.0505",
  y1: "676.1074",
  y2: "658.751",
  gradientTransform: "matrix(1 0 0 -1 0 1019.8857)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "#2d473b" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "#8db593" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl28)",
  d: "M619.7 351.2c0-6.2-2.8-11.3-6.3-11.3s-6.3 5-6.3 11.3c0 6.2 2.8 11.3 6.3 11.3s6.3-5.1 6.3-11.3z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl29",
  x1: "91.3086",
  x2: "90.2",
  y1: "2964.8936",
  y2: "2934.9607",
  gradientTransform: "scale(1 -1) rotate(-48.645 -3483.3244108 797.1999944)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl29)",
  d: "M501.5 468.8c7.8-7.4 11.5-16.6 8.4-20.5-3.1-3.9-12-1-19.7 6.4s-11.5 16.6-8.4 20.5c3.1 3.9 12 1 19.7-6.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl30",
  x1: "410.1572",
  x2: "409.2459",
  y1: "-569.4307",
  y2: "-594.0369",
  gradientTransform: "matrix(.7939 -.608 -.608 -.7939 -162.7852 258.5985)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl30)",
  d: "M523.5 462.7c-4.9-7.3-12.7-9.9-17.4-6-4.6 4-4.4 13.1.6 20.4 4.9 7.3 12.7 9.9 17.4 6 4.6-4 4.4-13.2-.6-20.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl31",
  x1: "-3091.231",
  x2: "-3092.3235",
  y1: "-1131.4707",
  y2: "-1160.97",
  gradientTransform: "scale(-1 1) rotate(-56.46 -327.7166793 -2735.27989324)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl31)",
  d: "M523.9 439.8c-8.4 6.4-13.3 15.2-10.7 19.7 2.5 4.4 11.4 2.8 19.8-3.7 8.4-6.4 13.2-15.2 10.7-19.7-2.5-4.4-11.3-2.7-19.8 3.7z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl32",
  x1: "1194.4775",
  x2: "1193.3516",
  y1: "3224.4531",
  y2: "3194.0518",
  gradientTransform: "matrix(.6144 .5184 .4918 -.5829 -1939.0422 1805.3075)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl32)",
  d: "M381.7 559.3c5.2-6.5 5.9-14.9 1.5-18.8-4.3-3.9-12-1.8-17.2 4.8-5.2 6.5-5.9 14.9-1.5 18.8 4.3 3.9 12 1.8 17.2-4.8z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl33",
  x1: "1951.3428",
  x2: "1950.1819",
  y1: "-747.4043",
  y2: "-778.7496",
  gradientTransform: "matrix(.7232 -.3511 -.3331 -.686 -1274.6002 719.2329)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl33)",
  d: "M398.7 551.6c-3.6-7.8-10.6-12-15.7-9.4-5 2.6-6.2 10.9-2.6 18.7 3.6 7.8 10.6 12 15.7 9.4 5-2.5 6.2-10.9 2.6-18.7z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl34",
  x1: "-1184.3867",
  x2: "-1185.4867",
  y1: "-3089.1973",
  y2: "-3118.895",
  gradientTransform: "matrix(-.02727 -.8034 -.7622 .02587 -1997.418 -328.8916)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl34)",
  d: "M398.6 532c-8.1.2-14.5 5.2-14.2 11.2.2 6 7 10.6 15.1 10.4 8.1-.2 14.5-5.2 14.2-11.2-.2-6-7-10.6-15.1-10.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl35",
  x1: "-4487.3037",
  x2: "-4488.4502",
  y1: "-1019.4785",
  y2: "-1050.4385",
  gradientTransform: "matrix(-.7453 -.3012 -.2858 .707 -3248.7246 -93.8087)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl35)",
  d: "M381.6 523.7c-3 7.9-1.1 16.2 4.1 18.5 5.2 2.3 11.9-2.3 14.9-10.2 3-7.9 1.1-16.2-4.1-18.5-5.3-2.3-11.9 2.3-14.9 10.2z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl36",
  x1: "-2084.0391",
  x2: "-2084.5535",
  y1: "5663.1992",
  y2: "5649.3091",
  gradientTransform: "matrix(-.3406 .7281 .6908 .3231 -3927.8665 283.5253)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl36)",
  d: "M688 598.8c3.4 1.8 7 1.1 8-1.6 1.1-2.6-.7-6.2-4.1-7.9-3.4-1.8-7-1.1-8 1.6-1.1 2.6.7 6.1 4.1 7.9z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl37",
  x1: "2733.2676",
  x2: "2732.7395",
  y1: "3403.0547",
  y2: "3388.7991",
  gradientTransform: "matrix(.5271 .6069 .5757 -.5001 -2706.3091 642.4658)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl37)",
  d: "M693.2 606.2c2.8-2.7 3.7-6.7 2-8.9-1.7-2.2-5.3-1.7-8.1 1s-3.7 6.7-2 8.9c1.7 2.2 5.3 1.8 8.1-1z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl38",
  x1: "2728.2617",
  x2: "2727.7019",
  y1: "-2154.4248",
  y2: "-2169.5366",
  gradientTransform: "matrix(.7686 -.2354 -.2233 -.7292 -1882.3802 -328.1908)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl38)",
  d: "M701.4 603.8c-1.1-4-3.9-6.5-6.4-5.7-2.5.8-3.6 4.8-2.5 8.7 1.1 4 3.9 6.5 6.4 5.7 2.5-.8 3.6-4.7 2.5-8.7z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl39",
  x1: "-2091.5127",
  x2: "-2092.0161",
  y1: "-4405.9746",
  y2: "-4419.5645",
  gradientTransform: "matrix(.09691 -.798 -.7571 -.09194 -2434.9746 -1475.2183)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl39)",
  d: "M702.8 594.4c-3.7-.5-6.9 1.4-7.2 4.3-.3 2.9 2.4 5.6 6.1 6.1 3.7.5 6.9-1.4 7.2-4.3.3-2.9-2.4-5.6-6.1-6.1z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl40",
  x1: "314.7959",
  x2: "314.0676",
  y1: "528.2222",
  y2: "508.5583",
  gradientTransform: "matrix(1 0 0 -1 0 1019.8857)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("ellipse", { cx: "314.5", cy: "500", fill: "url(#fbl40)", rx: "6.7", ry: "12.8" }), /*#__PURE__*/
React.createElement("linearGradient", {
  id: "fbl41",
  x1: "-2004.2559",
  x2: "-2004.926",
  y1: "-956.8081",
  y2: "-974.9035",
  gradientTransform: "matrix(.06817 -.9977 -.9977 -.06817 -496.8735 -1572.0952)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl41)",
  d: "M329.2 486.3c-6.5-.5-11.9 2.4-12.2 6.4-.3 4 4.8 7.7 11.2 8.1 6.5.5 11.9-2.4 12.2-6.4.3-4-4.7-7.7-11.2-8.1z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl42",
  x1: "-3643.5703",
  x2: "-3644.2971",
  y1: "1254.9795",
  y2: "1235.3555",
  gradientTransform: "matrix(-.9907 -.136 -.136 .9907 -3116.6953 -1253.0684)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl42)",
  d: "M317.1 476.6c-.9 7 1.4 13.1 5 13.6 3.7.5 7.4-4.7 8.2-11.6.9-7-1.4-13.1-5-13.6-3.6-.6-7.3 4.6-8.2 11.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl43",
  x1: "-1549.1841",
  x2: "-1549.8568",
  y1: "3041.958",
  y2: "3023.7947",
  gradientTransform: "scale(-1 1) rotate(78.275 639.13922592 2520.43404945)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl43)",
  d: "M307.4 489.1c6.3 1.4 12.1-.6 12.8-4.5.8-3.9-3.8-8.3-10.1-9.7-6.3-1.4-12.1.6-12.8 4.5-.7 3.9 3.8 8.2 10.1 9.7z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl44",
  x1: "-3011.9458",
  x2: "-3012.8677",
  y1: "992.5518",
  y2: "967.6634",
  gradientTransform: "matrix(.2311 -.8011 .76 .2192 92.8159 -2208.9062)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl44)",
  d: "M145.7 410.4c6.8 2 11.1 7.7 9.6 12.9-1.5 5.1-8.1 7.7-14.9 5.7-6.8-2-11.1-7.7-9.6-12.9s8.1-7.7 14.9-5.7z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl45",
  x1: "-1691.2461",
  x2: "-1692.2371",
  y1: "2398.9502",
  y2: "2372.1943",
  gradientTransform: "matrix(.826 -.1141 .1082 .7836 1291.782 -1655.2848)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl45)",
  d: "M161.7 407c.8 7.5-2.4 14.3-7.3 15.1-4.9.8-9.5-4.6-10.3-12.2-.8-7.5 2.4-14.3 7.3-15.1 4.8-.8 9.5 4.6 10.3 12.2z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl46",
  x1: "63.1992",
  x2: "62.2348",
  y1: "1698.3857",
  y2: "1672.3478",
  gradientTransform: "matrix(.4395 .7085 -.6722 .417 1272.5527 -334.8182)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl46)",
  d: "M170.5 421.3c-6.1 4.1-13.1 3.9-15.6-.6s.4-11.4 6.5-15.6c6.1-4.1 13.1-3.9 15.6.6s-.4 11.5-6.5 15.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl47",
  x1: "169.4785",
  x2: "168.5475",
  y1: "-277.0322",
  y2: "-302.1703",
  gradientTransform: "matrix(-.4691 .6893 -.6539 -.445 57.9849 183.6642)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl47)",
  d: "M161.7 436.3c-5.8-4.2-8.2-11.2-5.3-15.6 2.8-4.4 9.8-4.6 15.6-.5 5.8 4.2 8.2 11.2 5.3 15.6-2.8 4.5-9.8 4.7-15.6.5z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "fbl48",
  x1: "-1500.9395",
  x2: "-1501.9415",
  y1: "-1180.8862",
  y2: "-1207.9427",
  gradientTransform: "matrix(-.8204 -.1489 .1412 -.7783 -908.9143 -715.8397)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#fbl48)",
  d: "M145.7 434.2c1.4-7.5 6.4-13 11.3-12.1 4.8.9 7.6 7.7 6.2 15.2-1.4 7.5-6.4 13-11.2 12.1-4.9-.9-7.7-7.7-6.3-15.2z" })), /*#__PURE__*/




React.createElement("g", { className: "tree-branches", fill: "#2F2F2F", stroke: "#2F2F2F" }, /*#__PURE__*/

React.createElement("g", { className: "branches-large" }, /*#__PURE__*/
React.createElement("path", { d: "M-.2 630s1.3.2 3.7.4c1.4.3 4.5.5 8.2.5 3.8 0 8.6-.3 14.2-1.3 2.8-.5 5.8-1.2 9-2.1 1.6-.4 3.3-.9 5-1.4 1.7-.5 3.5-1 5.3-1.5 3.7-1.1 7.5-2.3 11.3-4 3.8-1.7 7.5-4 10.9-6.8 1.7-1.4 3.4-2.9 5-4.6.4-.4.8-.8 1.2-1.3l1.1-1.3c.7-.9 1.5-1.8 2.2-2.8 2.8-3.8 5.5-7.9 8.5-11.6.8-.9 1.5-1.9 2.3-2.8.4-.5.8-.9 1.2-1.4l.5-.5.7-.7c1.8-1.9 3.6-3.7 5.6-5.3 1.9-1.6 3.9-3.1 6-4.6 2.1-1.5 4.3-3.1 6.4-4.7 4.2-3.2 8.1-6.9 11.2-11.1 3.3-4.1 6.1-8.6 8.5-13.3l1.8-3.5c.6-1.2 1.1-2.4 1.7-3.6.6-1.2 1.1-2.4 1.7-3.6l.4-.9.1-.2v-.1l.1-.1.2-.5.9-1.8c.6-1.2 1.2-2.4 1.8-3.5.5-1.1 1.2-2.3 1.8-3.4.6-1.1 1.2-2.3 1.8-3.4.6-1.1 1.3-2.2 1.9-3.3 2.4-4.5 4.9-8.9 7.2-13.3 2.4-4.4 4.5-8.8 6.5-13.1 2-4.4 3.6-8.8 5-13.3l.9-3.3c.3-1.1.6-2.2.8-3.3l.2-.7.2-.9c.1-.6.3-1.2.4-1.7.1-.6.2-1.1.4-1.7l.2-.9.1-.8c.8-4.2 1.4-8.5 1.9-12.7.5-4.2.7-8.2 1-12.1.1-2 .2-3.9.2-5.7 0-1.9.1-3.7.1-5.5.1-3.6.1-7 .2-10.2 0-6.4-.1-12.1 0-16.8.1-4.7.2-8.4.4-10.9.1-2.5.3-3.9.3-3.9l11.4-.8s.3 1.3.8 3.8 1.1 6.2 1.7 11c.6 4.7 1 10.5 1.2 17.2.1 3.4.2 6.9.2 10.7 0 3.8-.2 7.8-.3 11.9-.2 4.2-.5 8.5-1.1 13-.1 1.1-.3 2.3-.4 3.4-.2 1.1-.3 2.3-.5 3.5-.3 2.3-.7 4.7-1.1 7.2l-.1.9-.2.9c-.1.6-.2 1.1-.3 1.7s-.2 1.2-.3 1.7l-.2.9-.2 1c-.3 1.2-.5 2.4-.8 3.7-.3 1.2-.6 2.5-.9 3.7-.6 2.5-1.3 5-1.9 7.5-.3 1.3-.7 2.5-1 3.8-.4 1.3-.7 2.5-1.1 3.8-1.5 5.1-3.2 10.2-5.2 15.3-2 5.1-4.2 10.1-6.9 15-1.3 2.4-2.6 4.9-4.1 7.2-.7 1.2-1.5 2.4-2.3 3.5-.8 1.2-1.6 2.3-2.4 3.4-.4.6-.8 1.1-1.2 1.6l-.3.4-.1.1-.1.2-.2.2-.7.8c-.9 1.1-1.7 2.2-2.6 3.2-1.8 2.2-3.6 4.3-5.4 6.4l-2.6 3.2c-.9 1.1-1.8 2.1-2.6 3.2-1.7 2.2-3.3 4.4-4.9 6.6-3.2 4.4-6.1 9.1-8.5 14.2-1.3 2.5-2.5 5-3.8 7.5-1.4 2.5-2.8 4.9-4.4 7.2-1.5 2.2-3.2 4.1-4.9 6.1l-.7.7-.8.8c-.5.5-1 .9-1.4 1.4-.9.9-2 1.8-3 2.7-4.1 3.4-8.7 6.1-13.1 8.8-2.2 1.4-4.4 2.7-6.5 4-1.1.7-2 1.4-3.1 2.1-1 .7-2 1.4-2.9 2.2-7.7 5.8-14.5 12.1-21.2 18-1.7 1.5-3.4 2.8-5.1 4.1-1.7 1.3-3.4 2.5-5.2 3.7-3.4 2.3-6.9 4.4-10.2 6.2-6.7 3.6-13.1 6.3-18.6 8.2-5.6 1.8-9.9 3-13.7 3.6-1 .2-1.4.3-1.9.4-.5.1-.9.2-1.2.3-.7.1-1 .2-1 .2L-.2 630z" }), /*#__PURE__*/
React.createElement("path", { d: "M-1.7 747.8s.2 0 .5.1c.1 0 .2 0 .3.1-.1 0-.2.1-.4.1-.3.1-.7.3-.6.4 0 .4.9.7 2.6.5 1.6-.2 4-.7 6.6-1.7 1.4-.5 2.8-1.1 4.3-1.8.8-.4 1.5-.7 2.3-1.1.8-.4 1.6-.8 2.4-1.3 1.6-.9 3.3-1.8 5-2.9.8-.5 1.7-1.1 2.6-1.6.8-.6 1.7-1.2 2.6-1.8 3.5-2.5 6.9-5.4 10.4-8.4 3.5-3.1 7.2-6.2 11-9.3 3.8-3.1 7.7-6.3 11.5-9.5 3.9-3.2 7.8-6.4 11.6-9.5 1-.8 1.9-1.6 2.8-2.4 1-.8 1.9-1.5 2.9-2.3 1.9-1.5 3.8-3 5.7-4.4 1.9-1.4 3.8-2.8 5.5-4.3 1.7-1.5 3.5-2.9 5.1-4.3 3.2-2.9 6.3-5.6 9-8.2 1.4-1.3 2.6-2.5 3.8-3.8.6-.6 1.1-1.3 1.7-1.9l1.5-1.8c1-1.2 1.8-2.3 2.6-3.4s1.4-2.1 2-3c1.1-1.9 2-3.4 2.5-4.4.6-1 .8-1.6.8-1.6l.6.2s-.2.6-.7 1.7c-.4 1.1-1.2 2.7-2.2 4.7-.5 1-1.1 2.1-1.8 3.3-.7 1.2-1.4 2.5-2.2 3.8-1.6 2.7-3.7 5.5-6.1 8.6-2.4 3.1-5 6.2-7.8 9.6-1.4 1.7-2.8 3.5-4.2 5.3-1.4 1.8-2.8 3.7-4.3 5.6-1.5 1.9-2.9 3.9-4.5 5.7-.8.9-1.6 1.9-2.4 2.9-.8.9-1.7 1.9-2.5 2.8-3.4 3.7-6.8 7.5-10.3 11.3-3.5 3.7-7.1 7.3-10.7 10.9-3.6 3.6-7 7.1-10.4 10.5-3.4 3.5-6.8 6.6-10.3 9.4-.9.7-1.8 1.3-2.6 2l-2.7 1.8c-.9.6-1.7 1.2-2.6 1.7-.9.5-1.7 1.1-2.6 1.5-3.4 2-6.8 3.6-9.9 4.7-3.1 1.2-6 2-8.5 2.5-1.3.2-2.4.4-3.4.5-1 .1-1.9.1-2.7 0-.7-.1-1.5-.1-1.8-.2-.3-.1-.5-.2-.5-.2l-1.5-17.1z" }), /*#__PURE__*/
React.createElement("path", { d: "M70 728.9s-.1.4-.2 1.3-.3 2-.6 3.7c-.3 1.6-.6 3.6-1.1 5.8-.4 2.2-1 4.7-1.6 7.5-.3 1.4-.6 2.8-.9 4.3-.3 1.5-.7 3-1.2 4.6-.4 1.6-1 3.1-1.6 4.7l-2.1 4.8c-1.5 3.2-2.9 6.6-4.1 10.1-1.2 3.6-2.6 7.2-4.4 10.7-1.7 3.5-3.7 6.9-6.1 10.1-1.2 1.6-2.5 3-3.9 4.4-1.4 1.3-2.9 2.5-4.4 3.8-1.5 1.2-2.9 2.4-4.3 3.7-1.3 1.3-2.7 2.5-4 3.8-.7.6-1.4 1.2-2 1.9-.7.6-1.3 1.2-2 1.8-.7.6-1.3 1.2-2 1.8-.7.6-1.4 1.1-2.1 1.6l-2.1 1.5c-.7.5-1.4.9-2.1 1.4-.7.4-1.4.7-2 1.1-.7.3-1.3.7-2 1-1.3.5-2.6 1-3.7 1.4-1.2.4-2.3.5-3.3.7-2 .3-3.6.3-4.7.2-.9-.4-1.5-.6-1.5-.6v-26s.3 0 1-.1c.6-.1 1.6 0 2.7-.2.6-.1 1.2-.1 1.9-.2s1.4-.3 2.2-.5c.8-.3 1.6-.5 2.4-.9l1.2-.6c.4-.2.8-.4 1.3-.6 1.7-.9 3.5-2 5.5-2.9 1-.5 2.1-1 3.3-1.5 1.2-.4 2.6-.8 4.1-1.2 1.5-.4 3.2-.7 4.8-1.4 1.6-.6 3-1.5 4.3-2.5 1.3-1.1 2.4-2.3 3.4-3.6 1-1.3 1.8-2.8 2.7-4.2 1.7-2.9 3.8-5.7 5.6-8.6.9-1.5 1.7-3 2.3-4.6.7-1.5 1.2-3.1 1.6-4.7.9-3.2 1.6-6.3 2.5-9.1.8-2.9 1.8-5.6 2.5-8.1.8-2.5 1.3-4.9 1.8-7 .5-2.1.8-3.9 1.1-5.4.3-1.5.5-2.8.7-3.6.1-.8.2-1.3.2-1.3l10.9 1.7z" }), /*#__PURE__*/
React.createElement("path", { d: "M-.5 546.5l1.9.5.9.2.5.1.3.1 1.1.4.5.2.7.2c.9.2 1.9.4 2.8.6l1.5.3 1.5.2 3 .3c1 .1 2 .1 3.1.2 2.1.1 4.2 0 6.3-.1 2.1-.1 4.2-.4 6.4-.6l3.2-.5 3.3-.6 3.3-.6 3.3-.7c1.1-.3 2.2-.5 3.4-.7 1.1-.3 2.3-.5 3.4-.7 1.1-.2 2.3-.5 3.5-.7 1.2-.2 2.3-.5 3.5-.8 1.2-.3 2.3-.6 3.5-.9 1.1-.4 2.3-.7 3.4-1.1 2.2-.9 4.4-1.9 6.4-3.1 1-.6 2-1.2 3-1.9.5-.3 1-.6 1.5-1l1.4-1c1.9-1.4 3.8-2.8 5.5-4.4.9-.8 1.8-1.6 2.6-2.4.8-.8 1.7-1.6 2.5-2.5 1.6-1.7 3.2-3.4 4.8-5.2l2.3-2.7L96 515l6-7.2 7.7 5.2c1.3.9 2.5 1.7 3.8 2.5l3.9 2.4c2.6 1.5 5.4 2.9 8.1 4.2 5.5 2.5 11.3 4.6 17.2 6 3 .7 5.9 1.2 8.9 1.6 1.5.2 3 .3 4.5.5 1.5.1 3 .2 4.5.2s3 0 4.5-.1l4.5-.3 2.2-.3 2.2-.3 2.2-.4 2.2-.5 1.6-.3 1.1.1c5.1.5 10.3 1.2 15.4 2.4s10.3 2.8 15.2 5c2.5 1.1 4.9 2.3 7.2 3.7 2.3 1.4 4.6 2.9 6.8 4.6 1.1.8 2.1 1.7 3.2 2.6 1 .9 2 1.8 3 2.8 1 1 1.9 1.9 2.8 2.9.9 1 1.8 2 2.6 3.1l-5.8-2.7 10.2.2c3.5.1 7.1.2 10.7.6 1.8.2 3.7.4 5.5.8.9.2 1.9.3 2.8.5.9.2 1.9.4 2.8.7.9.3 1.9.5 2.8.8.9.3 1.8.6 2.7 1 .9.4 1.8.7 2.7 1.1l2.6 1.3.4.2.2.2 1.6 1.1.7.5c.2.2.5.3.7.5.5.3 1 .6 1.4.8l1.5.8.8.4h.1l.6.4c.2.1.4.3.6.4.3.3.7.5 1 .8.6.5 1.3 1.1 1.9 1.6 1.2 1.1 2.3 2.2 3.5 3.4L281 579c-.4-.4-.9-.8-1.4-1.2l-1.5-1.2c-.5-.4-1-.8-1.5-1.1-.3-.2-.5-.3-.7-.5-.1-.1-.2-.1-.3-.2l-.3-.2.9.5-2.1-.9c-.7-.3-1.4-.7-2.1-1-.4-.2-.7-.4-1-.5l-1-.6-1.8-1.1.6.4-2-.8-2-.7-2.1-.6c-.7-.2-1.4-.3-2.1-.5-.7-.2-1.5-.3-2.2-.4-.7-.1-1.5-.2-2.2-.3-1.5-.2-3-.3-4.6-.4-3.1-.1-6.3-.1-9.6 0l-10.2.4-3.2.1-2.6-2.8c-.7-.8-1.4-1.6-2.2-2.3-.7-.7-1.5-1.5-2.3-2.2-.8-.7-1.6-1.4-2.4-2-.8-.6-1.7-1.3-2.5-1.9-1.7-1.2-3.5-2.3-5.3-3.3-1.8-1-3.7-1.9-5.7-2.6-7.8-3.1-16.5-4.6-25.4-5l2.8-.2-2.7.7-2.7.6-2.7.5-2.8.4c-1.8.3-3.7.5-5.6.6-1.9.1-3.7.2-5.6.3h-5.6c-1.9-.1-3.7-.2-5.6-.3-3.7-.3-7.4-.8-11-1.5-7.3-1.4-14.4-3.6-21.2-6.4-3.4-1.4-6.8-3-10-4.7-1.6-.9-3.2-1.7-4.8-2.7-1.6-.9-3.1-1.9-4.7-2.9l13.8-2-2.6 3.1-2.7 3c-1.8 2-3.6 3.9-5.5 5.8s-3.8 3.8-5.8 5.6l-3 2.7-3 2.7c-2 1.8-4.1 3.5-6.2 5.1-2.1 1.7-4.2 3.3-6.3 5-2.1 1.7-4.3 3.3-6.5 4.9-2.2 1.6-4.4 3.1-6.8 4.6-2.3 1.4-4.7 2.7-7.2 3.9-1.2.6-2.5 1.2-3.7 1.7-1.3.5-2.5 1-3.8 1.5l-3.9 1.3-3.9 1.2c-1.3.4-2.6.8-4 1.1-1.3.3-2.7.7-4 1.1l-8 2.1c-1.3.4-2.7.7-4 1-.7.2-1.4.3-2 .5l-2 .5c-2.7.6-5.5 1.2-8.3 1.8l-1.1.2-1.1.1-2.3.4-.6.1-.5.1-.9.2c-.6.1-1.3.3-1.9.5l-.7-43.8z" }), /*#__PURE__*/
React.createElement("path", { d: "M1.6 630s1.3.2 3.6.4c1.4.3 4.4.5 8.1.6 3.8 0 8.5-.3 14-1.3 2.8-.5 5.8-1.2 8.9-2.1 1.6-.4 3.2-.9 4.9-1.4 1.7-.5 3.5-1 5.3-1.5 3.6-1.1 7.5-2.4 11.2-4.2 3.8-1.8 7.3-4.2 10.7-7 1.7-1.5 3.3-3 4.8-4.7.8-.8 1.5-1.8 2.2-2.7.7-.9 1.4-1.9 2.1-2.8 2.8-3.8 5.4-7.9 8.5-11.6.8-.9 1.6-1.8 2.4-2.8.2-.2.4-.4.6-.7l.5-.5c.4-.5.8-.9 1.3-1.4.9-.9 1.8-1.8 2.8-2.7.9-.9 2-1.7 2.9-2.5 1.9-1.6 3.9-3.1 6-4.5 2.1-1.5 4.3-3.1 6.3-4.7 2.1-1.6 4.1-3.3 5.9-5.2 1.8-1.9 3.5-3.9 5.1-6 3.2-4.1 5.9-8.7 8.4-13.3l1.8-3.5 1.7-3.6c.6-1.2 1.1-2.4 1.7-3.5l.2-.4v-.1l.1-.1.1-.2.4-.9.9-1.8c.6-1.2 1.1-2.3 1.7-3.5l1.8-3.4c1.2-2.2 2.4-4.5 3.7-6.7 4.8-8.9 9.7-17.5 13.6-26.3.5-1.1.9-2.2 1.4-3.3.4-1.1.9-2.2 1.3-3.3.4-1.1.8-2.2 1.1-3.3.4-1.1.7-2.2 1.1-3.3 1.3-4.4 2.3-8.7 3.2-13.2.4-2.1.8-4.2 1.1-6.3.3-2.1.6-4.2.8-6.3.3-2.1.4-4.1.6-6.1.1-2 .3-4 .4-5.9.1-1.9.2-3.9.2-5.7 0-1.9.1-3.7.1-5.5.1-3.6.1-7 .1-10.2 0-6.4-.1-12 0-16.7.1-4.7.2-8.3.4-10.9.1-2.5.3-3.9.3-3.9l11.4-.8s.3 1.3.8 3.8 1.1 6.2 1.7 10.9c.6 4.7 1.1 10.5 1.3 17.2.1 3.3.2 6.9.2 10.7 0 3.8-.1 7.7-.3 11.9-.1 2.1-.3 4.2-.4 6.4-.2 2.2-.3 4.4-.6 6.6-.3 2.2-.5 4.5-.9 6.8-.3 2.3-.7 4.7-1.1 7.1-.2 1.3-.4 2.4-.6 3.5-.1.6-.2 1.1-.3 1.7l-.2.9-.1.4-.1.6c-.5 2.4-1.1 4.9-1.7 7.4-.3 1.2-.6 2.5-.9 3.7-.3 1.2-.6 2.5-1 3.7-.3 1.3-.7 2.5-1 3.8-.4 1.3-.8 2.5-1.1 3.8-3 10.1-6.6 20.5-11.8 30.2-1.3 2.4-2.6 4.9-4 7.2-.7 1.2-1.4 2.3-2.3 3.5-.8 1.1-1.6 2.3-2.4 3.4-.4.5-.8 1.1-1.2 1.6l-.6.8-.2.2-.2.3-.3.4c-.9 1.1-1.7 2.2-2.6 3.2-1.8 2.1-3.5 4.3-5.3 6.4-.9 1-1.8 2.1-2.6 3.2-.9 1.1-1.8 2.1-2.6 3.2-.9 1.1-1.7 2.2-2.5 3.2l-1.2 1.7c-.4.5-.8 1.1-1.2 1.6-3.2 4.4-6.1 9-8.6 14-1.3 2.4-2.5 5-3.8 7.4-1.3 2.5-2.7 4.9-4.3 7.2-.8 1.2-1.5 2.2-2.3 3.2-.8 1-1.6 2-2.5 3-.4.5-.9.9-1.3 1.4l-.8.8-.7.7c-1 .9-1.9 1.8-2.9 2.7-4 3.5-8.5 6.2-12.9 8.9-1.1.7-2.2 1.3-3.3 2-1.1.7-2.1 1.3-3.2 2-2.1 1.3-4.1 2.8-6 4.2-3.8 2.9-7.4 5.9-10.8 9-3.5 3-6.7 6.3-10 9.2C52 651.3 45 656 38.3 659.7c-6.7 3.7-13 6.4-18.5 8.3-5.6 1.8-9.9 3-13.7 3.6-1 .2-1.4.3-1.9.4-.5.1-.9.2-1.2.3-.6.1-1 .2-1 .2L1.6 630zm-8.4 120.7s.6-.2 1.8-.5c1.2-.4 2.9-1 5-1.8s4.6-1.9 7.4-3.2c1.4-.6 2.8-1.4 4.4-2.2.8-.4 1.5-.8 2.3-1.2.8-.4 1.6-.9 2.4-1.3 1.6-.9 3.3-1.8 5-2.9.9-.5 1.7-1.1 2.6-1.6.8-.6 1.7-1.2 2.6-1.8 3.5-2.4 7-5.2 10.5-8.1 3.5-3 7.3-5.9 11.1-8.8 3.8-3 7.7-6 11.6-9 3.9-3 7.8-6.1 11.6-9.1s7.6-6 11.4-8.7c1.9-1.4 3.8-2.7 5.5-4.1 1.7-1.4 3.4-2.8 5-4.3 1.6-1.4 3.2-2.8 4.7-4.1.8-.7 1.5-1.3 2.2-2 .7-.6 1.4-1.3 2.1-1.9 1.4-1.3 2.6-2.5 3.7-3.8.6-.6 1.1-1.2 1.6-1.8l1.5-1.8c1-1.2 1.8-2.3 2.6-3.3.7-1.1 1.4-2.1 2-3 .6-.9 1-1.8 1.5-2.5.4-.7.7-1.4 1-1.9l.8-1.6.6.2s-.2.6-.7 1.7c-.2.5-.5 1.2-.9 2s-.8 1.7-1.3 2.6c-.5 1-1.1 2-1.7 3.2-.7 1.1-1.3 2.4-2.2 3.7-1.6 2.6-3.7 5.4-5.9 8.5-.6.7-1.1 1.5-1.8 2.3-.6.8-1.3 1.5-1.9 2.3-1.3 1.6-2.6 3.2-4 4.8-1.4 1.6-2.7 3.4-4.1 5.2-1.4 1.8-2.8 3.6-4.3 5.5s-2.9 3.8-4.5 5.7c-.8.9-1.6 1.9-2.4 2.8-.8.9-1.7 1.8-2.5 2.7-1.7 1.8-3.4 3.6-5.1 5.5-1.7 1.8-3.4 3.7-5.2 5.5-3.6 3.5-7.3 7-10.8 10.4l-5.4 5.1c-1.8 1.7-3.5 3.3-5.2 5-3.4 3.3-6.8 6.3-10.2 9-.9.6-1.7 1.3-2.6 1.9-.9.6-1.7 1.2-2.6 1.7-1.7 1.1-3.4 2.1-5 3.1-3.3 1.9-6.4 3.6-9.2 4.8-2.8 1.3-5.4 2.2-7.6 3-1.1.3-2.1.7-2.9.9-.9.2-1.6.4-2.2.6-.6.1-1.1.2-1.4.3-.3.1-.5.1-.5.1l-10.4-13.8z" })), /*#__PURE__*/




React.createElement("g", { className: "branches-medium" }, /*#__PURE__*/
React.createElement("path", { d: "M7.3 752.1s.1-.8.2-2.1c.1-.7.2-1.5.2-2.4 0-.5.1-1 .2-1.5.1-.6.2-1.1.3-1.7.2-1.2.4-2.5.6-3.9.2-1.4.6-2.8.9-4.3.3-1.5.6-3 1.1-4.5.4-1.5.8-3 1.2-4.6.9-3 1.8-6.1 2.7-8.9.9-2.8 1.9-5.4 2.7-7.6.9-2.2 1.7-4 2.3-5.2.6-1.2 1-1.9 1-1.9l4.8 1.5s-.1.8-.3 2.2c-.2 1.4-.6 3.3-1 5.6-.2 1.1-.5 2.4-.8 3.7-.3 1.3-.6 2.7-1 4.1-.4 1.4-.7 2.8-1.1 4.3-.4 1.5-.7 3-1.1 4.5-.3 1.5-.7 3-1 4.4-.4 1.5-.6 2.9-.9 4.3-.3 1.4-.6 2.8-.8 4-.2 1.2-.4 2.4-.6 3.5-.1.5-.2 1.1-.3 1.6-.1.5-.1 1-.2 1.5-.1.9-.2 1.8-.3 2.4l-.3 2.1-8.5-1.1zm58.9-38l1.8.6c.3.1.6.2 1 .3.2.1.4.1.5.2.2 0 .3.1.5.1.7.1 1.4.4 2.2.6.9.2 2.1.5 3.2.8 1.2.3 2.6.5 4 .8 1.4.3 3 .5 4.6.9 1.7.3 3.4.6 5.3.9 3.7.6 7.7 1.2 12.1 1.9 4.3.7 8.9 1.5 13.7 2.5 4.9 1 9.9 2 15 3 5.1 1.1 10.2 2.1 15.3 3.2 5.1 1 10.1 1.9 15.1 2.7 1.2.2 2.5.4 3.7.6 1.2.2 2.5.4 3.7.5 2.4.4 4.9.7 7.2 1.1 1.2.2 2.4.3 3.5.5 1.2.1 2.3.3 3.5.4 2.3.3 4.5.6 6.7.8 1.1.1 2.2.3 3.2.4.5.1 1 .1 1.6.2h.6l.8.1c2.1.2 4.1.4 6 .6 3.9.4 7.2.5 10.4 1 1.6.2 3.1.5 4.5.8 1.4.3 2.6.5 3.8.9 2.3.7 4.1 1.4 5.3 1.9 1.2.5 1.8.8 1.8.8l-1.5 8.2s-.7.1-1.9.3c-1.2.2-2.9.3-5.1.4-1.1 0-2.3.1-3.7.2-1.3.1-2.8.1-4.3.1-3.1 0-6.8-.2-10.7-.4-1.9-.1-4-.3-6-.5l-.8-.1h-1c-.5-.1-1.1-.1-1.6-.2-1.1-.1-2.2-.3-3.3-.4-2.2-.3-4.5-.7-6.9-1-1.2-.2-2.4-.3-3.6-.5-1.2-.2-2.4-.5-3.6-.7-2.4-.5-4.9-.9-7.4-1.4-1.2-.2-2.5-.5-3.7-.7-1.2-.3-2.5-.5-3.8-.8-5-1.1-10.2-2-15.2-3.1-2.5-.5-5.1-1-7.6-1.4-1.3-.2-2.5-.5-3.8-.7-1.2-.2-2.4-.4-3.6-.5-4.8-.6-9.8-.8-14.6-1-4.8-.2-9.6-.4-14.1-.8s-8.8-1-12.7-1.6c-2-.3-3.9-.7-5.7-1-1.8-.4-3.6-.8-5.2-1.2-1.7-.4-3.2-.8-4.6-1.3-1.5-.5-2.7-.9-4-1.3-1.3-.5-2.5-1-3.5-1.4-.2-.1-.5-.2-.7-.3-.2-.1-.4-.2-.5-.3-.3-.2-.6-.3-.9-.5-1.1-.6-1.6-.9-1.6-.9l6.6-14.3zm30.3-33.3s2-1.6 5.6-3c.9-.3 1.9-.7 3-1 1-.3 2.1-.6 3.3-.9 1.2-.2 2.4-.4 3.8-.5 1.3-.1 2.8-.3 4.3-.5s3.1-.4 4.7-.6c1.6-.3 3.3-.5 5-.8.9-.1 1.7-.3 2.6-.4.9-.2 1.8-.3 2.7-.5 1.8-.3 3.6-.7 5.5-1 3.7-.8 7.6-1.5 11.6-2.5 3.9-.9 7.9-1.9 11.9-2.9 4-1.1 8-2.1 12-3.2s7.8-2.2 11.6-3.2c3.8-1.1 7.4-2.1 10.9-3 3.5-.9 6.8-1.8 9.8-2.6 3-.8 5.9-1.5 8.4-2.1 2.5-.6 4.7-1.1 6.5-1.5 3.6-.8 5.7-1.2 5.7-1.2l.2.7s-1.9.9-5.2 2.5c-3.3 1.6-8.1 3.8-13.8 6.5-2.8 1.3-5.9 2.8-9.2 4.3-3.3 1.5-6.7 3.1-10.3 4.7-3.6 1.6-7.3 3.2-11.2 4.8-3.8 1.6-7.8 3.2-11.7 4.7-4 1.5-8 3-12 4.3-4 1.4-8 2.5-11.8 3.7-2 .5-3.9 1-5.7 1.5-.9.2-1.9.5-2.8.7-.9.2-1.8.4-2.8.6-1.8.4-3.6.8-5.3 1.2-1.7.3-3.4.6-5 .9-1.6.3-3.1.6-4.6.8-1.5.2-2.9.3-4.3.3s-2.6 0-3.8-.1c-1.1-.1-2.1-.3-3.1-.6-3.7-.9-5.9-2.2-5.9-2.2l-.6-7.9z" }), /*#__PURE__*/
React.createElement("path", { d: "M171.9 665.9s.3.1.9.2c.6.1 1.4.4 2.5.7 1.1.3 2.3.7 3.8 1.3.7.3 1.5.6 2.3.9l2.4.9c1.7.6 3.5 1.4 5.3 2.2.9.4 1.9.8 2.9 1.3 1 .4 2 .9 3.1 1.3 2.1.9 4.2 1.9 6.5 2.8 2.2.9 4.5 1.9 6.8 2.8 2.3.9 4.6 1.8 6.9 2.8 2.3.9 4.5 1.9 6.7 2.8 2.2.9 4.2 1.8 6.2 2.7 2 .9 3.8 1.7 5.6 2.5 1.7.8 3.3 1.5 4.7 2.3l3.6 1.8c2 1.1 3.1 1.7 3.1 1.7l-3.2 7.3s-1.2-.4-3.3-1c-1-.3-2.3-.7-3.7-1.2-.7-.2-1.5-.5-2.3-.8-.8-.3-1.7-.5-2.5-.8-1.8-.5-3.7-1.2-5.7-1.8-2-.7-4.2-1.3-6.4-2.1-2.2-.7-4.5-1.5-6.8-2.3-2.3-.8-4.7-1.6-7.1-2.4-2.4-.9-4.8-1.7-7.1-2.6-2.3-.9-4.6-1.8-6.8-2.7-1.1-.5-2.2-.9-3.2-1.4-.5-.2-1.1-.4-1.6-.7-.5-.2-1-.5-1.5-.7-2-1-3.9-2-5.6-3-.8-.5-1.7-1-2.4-1.4-.7-.5-1.4-1-2-1.4-1.2-.9-2.3-1.7-3.1-2.5-.8-.7-1.5-1.3-1.9-1.7l-.7-.7 3.6-7.1zm-39.5 8.3s1.4-2.6 3.4-6.5c.5-1 1.1-2 1.7-3.2.6-1.1 1.3-2.3 2-3.6 1.4-2.5 2.9-5.1 4.4-7.7 1.5-2.6 3.1-5.1 4.5-7.5 1.4-2.4 2.8-4.6 4-6.5 2.4-3.8 3.9-6.3 3.9-6.3l5.3 2.6s-1 2.8-2.5 6.9c-.8 2.1-1.6 4.5-2.5 7.1-.9 2.6-1.8 5.4-2.8 8.1-.9 2.7-1.7 5.5-2.5 8.1-.4 1.3-.8 2.5-1.1 3.7-.3 1.2-.7 2.4-1 3.4-1.2 4.3-2 7.1-2 7.1l-14.8-5.7zm150.4-108.4s.4-.5 1.2-1c.8-.6 2-1.2 3.6-1.4.8-.1 1.6-.2 2.5-.3.9-.1 1.8-.1 2.8-.2 1-.1 2.1-.2 3.3-.3 1.2-.1 2.4-.3 3.7-.4 2.6-.4 5.4-.8 8.4-1.3 1.5-.2 3-.5 4.6-.8 1.6-.3 3.2-.6 4.9-.9 3.3-.6 6.7-1.4 10.2-2.1 3.5-.8 7.1-1.5 10.7-2.3 3.6-.7 7.3-1.5 10.9-2.1 3.6-.7 7.2-1.2 10.7-1.7 1.7-.3 3.5-.5 5.2-.6 1.7-.2 3.3-.4 5-.5 1.6-.1 3.2-.2 4.7-.3 1.5 0 3-.1 4.4-.1 1.3-.1 2.8 0 4.1 0 1.3 0 2.6 0 3.8.1 2.3.2 4.4.2 6 .4 3.3.4 5.2.7 5.2.7l-.6 8s-1.8.1-4.8.2c-1.5.1-3.4.3-5.5.5-1.1.1-2.2.3-3.3.4-1.2.2-2.4.3-3.8.5-1.3.2-2.7.5-4.1.7-1.4.3-2.8.6-4.3.9-1.5.3-3 .7-4.6 1-1.6.3-3.1.7-4.8 1.2-3.2.8-6.6 1.8-10 2.8-3.4 1-6.9 2-10.3 3.1-3.5 1.1-7 2.2-10.4 3.2-3.5 1.1-6.9 2.1-10.3 3.1-3.4 1-6.6 1.9-9.8 2.6-3.1.8-6.2 1.4-9 2.1-1.4.3-2.8.5-4.1.8-1.3.2-2.5.5-3.7.7-1.2.2-2.3.3-3.4.5s-2 .3-2.8.3c-1.6-.1-2.9-.5-3.8-.9-.9-.4-1.4-.8-1.4-.8l-1.1-15.8zm-55-16.2s.4-.4 1.2-1.1c.8-.7 2-1.6 3.6-2.8 1.6-1.1 3.5-2.4 5.8-3.8s5-2.8 7.8-4.4c2.9-1.6 5.8-3.5 8.9-5.7 3-2.2 6.2-4.6 9.3-7.1 3.1-2.6 6.3-5.3 9.3-8.1 3.1-2.8 6-5.8 8.7-8.9l2-2.3c.7-.8 1.3-1.5 1.9-2.3l.5-.6.2-.3.1-.1.1-.1-.1.1 1-1.3c.6-.8 1-1.4 1.5-2.2 2.1-3 3.8-6.2 5.4-9.5 1.6-3.3 3-6.6 4.3-9.9 1.3-3.3 2.5-6.6 3.8-9.6 2.6-6.1 5.5-11.2 7.9-14.5 1.2-1.7 2.2-3 3-3.8.8-.9 1.2-1.3 1.2-1.3l7.5 2.8s.1.6.1 1.7c.1 1.1.1 2.7.1 4.7-.1 4-.4 9.5-1.6 16.1-.6 3.3-1.5 7-2.8 10.8-1.2 3.9-2.8 8-4.8 12.2-2 4.2-4.6 8.5-7.7 12.5-.7.9-1.7 2.1-2.5 3l-1.1 1.2-.2.2-.1.1-.2.2-.3.3-.6.7c-.9.9-1.7 1.8-2.6 2.6l-2.6 2.4c-3.6 3.2-7.2 6.1-10.9 8.8-3.7 2.8-7.3 5.2-10.8 7.7-1.8 1.2-3.5 2.4-5.2 3.5-1.7 1.1-3.4 2.2-5 3.3-1.6 1.1-3.2 2.1-4.7 3.1s-2.9 2.1-4.3 3.1c-2.7 2.1-5.1 4-7.4 5.5-2.3 1.5-4.3 2.7-6 3.7-3.4 1.9-5.6 2.6-5.6 2.6l-8.1-13.2z" }), /*#__PURE__*/
React.createElement("path", { d: "M297.4 493.6s.5-.3 1.3-.7c.2-.1.5-.2.7-.4.3-.1.7-.3 1-.4.4-.2.8-.3 1.2-.5.4-.1.8-.3 1.2-.4.8-.3 1.7-.6 2.7-.9.9-.3 1.9-.6 2.9-.9 1-.3 2-.5 3-.8 1-.3 2-.5 3-.8 1-.3 2-.5 2.9-.8.9-.3 1.8-.5 2.7-.8.4-.1.8-.3 1.2-.4.4-.1.8-.3 1.2-.4.8-.3 1.5-.5 2.1-.8.7-.3 1.2-.5 1.7-.8.5-.2 1-.5 1.3-.7.7-.4 1.2-.6 1.2-.6l5.8 5.5s-.3.5-1 1.5c-.2.2-.3.5-.5.8-.2.3-.4.5-.7.8-.3.3-.5.6-.8 1l-1 1-1.1 1.1c-.4.3-.8.7-1.2 1-.8.7-1.7 1.4-2.7 2.1-1 .6-2 1.3-3 1.9-1 .6-2 1.2-3.1 1.7l-3 1.5c-1 .5-1.9.9-2.9 1.3-.9.4-1.8.8-2.6 1.2-.8.4-1.5.7-2.2 1-.3.2-.7.3-1 .4-.3.1-.5.2-.8.4-.2.1-.5.2-.7.3-.2.1-.5.2-.7.3-.9.4-1.3.6-1.3.6l-6.8-14.3zM168.1 385.1s2.8-1.3 7.6-3.6c2.4-1.2 5.4-2.6 8.8-4.2 3.5-1.5 7.4-3.3 11.7-5.1 4.2-1.9 8.8-3.9 13.6-6 2.4-1.1 4.9-2.1 7.4-3.3 2.4-1.2 5-2.4 7.5-3.6 2.5-1.2 5.1-2.5 7.7-3.7 2.7-1.3 5.4-2.7 8.2-4 2.7-1.3 5.5-2.7 8.2-4l2.1-1 2.2-1 4.3-1.9c2.9-1.3 5.8-2.5 8.6-3.8 1.4-.6 2.9-1.3 4.3-1.9 1.4-.6 2.9-1.1 4.3-1.7 2.9-1.1 5.7-2.2 8.5-3.3 2.8-1.1 5.6-2.2 8.3-3.1 5.5-1.9 10.9-3.7 15.9-5.4 2.5-.8 4.9-1.6 7.3-2.4 2.4-.8 4.8-1.6 7.3-2.2 4.8-1.3 9.6-2.2 14.1-2.4 4.5-.2 8.8.4 12.3 1.4 3.5 1.1 6 2.5 7.7 3.6 1.6 1.1 2.5 1.7 2.5 1.7l-9.7 12.5s-.4-.2-1.2-.8c-.8-.5-2-1.1-3.7-1.6-1.7-.4-4-.7-7-.6-3 .2-6.5.8-10.6 2-2 .6-4.2 1.2-6.5 2-2.4.8-4.8 1.6-7.3 2.4-5 1.7-10.2 3.4-15.6 5.2-2.7.9-5.4 1.9-8.2 2.9-2.7 1-5.5 2-8.3 3l-4.2 1.5c-1.4.5-2.8 1.1-4.2 1.6-2.8 1.1-5.6 2.2-8.4 3.4l-4.2 1.7-2.1.8-2.1.9c-2.8 1.3-5.6 2.5-8.3 3.7-5.5 2.5-11 4.9-16.3 7.2-2.7 1.2-5.3 2.4-7.9 3.5-2.6 1-5.1 2.1-7.6 3-4.9 2-9.6 3.8-13.8 5.5-4.2 1.7-8.1 3.2-11.6 4.6-3.4 1.5-6.4 2.8-8.9 3.8-4.9 2.1-7.8 3.3-7.8 3.3l-4.9-10.6zm142.2 71.2s0-1.3.1-3.7c.1-1.3.5-3 .8-4.9.1-.5.2-.9.3-1.4.1-.4.2-.9.4-1.4.3-.9.5-1.9.8-3 .7-2 1.4-4.2 2.3-6.4.5-1.1.9-2.2 1.4-3.4.5-1.2 1.1-2.3 1.6-3.4.6-1.1 1.2-2.3 1.8-3.5.6-1.1 1.3-2.3 2-3.5.6-1.2 1.4-2.3 2.1-3.5.7-1.2 1.5-2.3 2.2-3.4 1.5-2.2 3.1-4.5 4.7-6.6.8-1.1 1.7-2.1 2.5-3.1s1.7-2 2.5-3c1.6-2 3.4-3.8 5.1-5.5.8-.9 1.7-1.7 2.5-2.4.8-.8 1.6-1.5 2.4-2.2 1.7-1.4 3.2-2.6 4.6-3.6 1.5-1 2.8-1.8 3.9-2.5 1.2-.6 2.1-1.1 2.8-1.4l1-.5 4.7 7s-.2.2-.5.7c-.3.4-.8 1.1-1.5 1.9-.6.8-1.3 2-2.2 3.1-.8 1.2-1.8 2.6-2.8 4.2-1 1.6-2.1 3.2-3.2 5.1-.6.9-1.1 1.9-1.7 2.8-.6.9-1.2 2-1.8 3-1.2 2-2.4 4.1-3.7 6.2-.7 1-1.3 2.1-1.9 3.2-.6 1.1-1.3 2.2-1.9 3.2-1.2 2.2-2.5 4.3-3.7 6.5-1.2 2.1-2.4 4.2-3.5 6.3-1.2 2-2.2 4-3.2 5.8l-1.5 2.7c-.5.9-.9 1.7-1.4 2.5-.4.8-.8 1.6-1.2 2.3-.2.4-.4.7-.6 1.1-.2.3-.4.7-.5 1-.6 1.1-1.1 2.1-1.6 3-.9 2.2-1.4 3.4-1.4 3.4l-12.7-2.7zM50.9 359s-.1-3.1-.3-7.7c0-1.1-.1-2.4-.2-3.7 0-1.3-.2-2.6-.3-4-.2-2.8-.4-5.8-.7-8.7-.3-3-.6-6-.9-8.9-.3-2.8-.6-5.5-.9-7.8-.5-4.5-.9-7.6-.9-7.6l5.9-1.4s1 2.9 2.5 7.3c.8 2.2 1.6 4.7 2.5 7.5.9 2.8 1.9 5.7 2.8 8.6.9 3 1.8 6 2.6 8.9.4 1.4.9 2.8 1.2 4.1.3 1.3.6 2.5.9 3.6 1.2 4.5 1.9 7.4 1.9 7.4L50.9 359zm125.5 119s-2.7-1.1-6.7-3.6c-2-1.3-4.4-2.8-6.9-4.8-2.6-1.9-5.3-4.3-8.2-7-2.8-2.7-5.9-5.7-8.7-9.2-2.9-3.5-5.6-7.3-8.2-11.5-2.6-4.2-5.4-8.4-8.3-12.6-2.8-4.3-5.7-8.7-8.5-13.1s-5.4-9-7.9-13.4c-2.7-4.4-4.8-9-6.8-13.5-1-2.2-2.1-4.4-3-6.6-1-2.2-2-4.2-3-6.2s-1.9-4-2.9-5.8c-.5-.9-.9-1.9-1.4-2.8-.5-1-.9-1.8-1.3-2.7-1.6-3.6-3-6.9-4-10-.5-1.5-.9-2.9-1.3-4.3-.4-1.3-.7-2.5-1-3.7-.2-1.1-.5-2.1-.7-3-.2-.9-.3-1.6-.4-2.2l-.3-1.8.6-.1s.2.6.5 1.8c.3 1.2.8 2.9 1.5 5 .4 1.1.8 2.2 1.3 3.5.6 1.2 1.1 2.6 1.8 4 .3.7.7 1.4 1.1 2.2.4.7.8 1.5 1.2 2.2.8 1.5 1.8 3 2.8 4.7 2.1 3.2 4.6 6.6 7.2 10.2 1.3 1.8 2.6 3.6 4.1 5.5 1.5 1.8 3.1 3.6 4.6 5.4 1.6 1.8 3.2 3.7 4.8 5.6 1.5 1.9 3.1 3.9 4.7 5.8 1.6 2 3.2 3.9 4.8 5.9 1.6 2 3.1 4 4.8 6 3.2 4 6.4 7.9 9.6 11.8 3.2 3.9 6.5 7.6 9.8 11.1 3.3 3.5 6.4 6.9 9.1 10.4 2.7 3.5 5 6.9 7.1 10.2 2.1 3.3 3.8 6.4 5.3 9.2 1.5 2.9 2.7 5.4 3.6 7.6 1.8 4.4 2.5 7.2 2.5 7.2l-3.3 2.6z" }), /*#__PURE__*/
React.createElement("path", { d: "M166.5 463.5s.1-.8.2-2.2c.1-.7.2-1.6.3-2.5.1-.5.1-1 .2-1.6 0-.5.1-1.1.1-1.6.1-1.1.1-2.4.2-3.7.1-1.3.1-2.8.2-4.2 0-1.5.1-3 .1-4.6v-4.7c0-1.6 0-3.2-.1-4.8 0-1.6 0-3.1-.1-4.6-.1-1.5 0-3-.1-4.3v-3.9c.1-2.4.2-4.5.3-5.9.1-1.4.2-2.2.2-2.2l5.2-.4s.2.8.5 2.2c.3 1.4.7 3.4 1.1 5.8.4 2.4.7 5.2 1 8.3.3 3 .5 6.3.7 9.6.1 1.6.1 3.3.2 4.9.1 1.6 0 3.2 0 4.8 0 1.6 0 3-.1 4.5s-.2 2.8-.3 4.1c0 .6-.1 1.2-.1 1.8-.1.5-.1 1.1-.2 1.6-.1 1-.2 1.8-.3 2.5-.2 1.4-.3 2.2-.3 2.2l-8.9-1.1zM31.6 346.9s-.1.1-.2.3c-.1.2-.4.5-.6.8-.6.7-1.4 1.4-2.5 2.1-.6.3-1.2.6-1.8.8-.7.2-1.5.4-2.3.6-1.6.4-3.3.7-5 1-1.7.2-3.4.4-5 .5-.8.1-1.6.1-2.3.1H9.8c-1.3 0-2.4-.1-3.1-.2-.8.1-1.2.1-1.2.1L4 344.8l1-.5c.7-.3 1.6-.8 2.8-1.2.6-.2 1.2-.5 1.9-.7.7-.2 1.3-.5 2.1-.8 1.4-.5 3-1 4.5-1.5s3-.9 4.4-1.3c.7-.2 1.4-.4 2.1-.5.7-.2 1.4-.2 2-.3 1.3 0 2.4.2 3.2.4.4.1.7.3 1 .4l.4.2 2.2 7.9z" }), /*#__PURE__*/
React.createElement("path", { d: "M99.6 379.8s-2.1 1-5.2 1.3c-.8.1-1.6.1-2.6 0s-2-.2-3.1-.5-2.2-.6-3.4-1c-1.1-.4-2.3-.9-3.5-1.5-1.2-.5-2.5-1-3.8-1.6-1.3-.6-2.6-1.2-4-1.8-1.4-.6-2.8-1.3-4.2-2-1.4-.7-2.8-1.4-4.3-2.2-2.9-1.6-5.9-3.2-8.8-4.9-3-1.7-5.9-3.6-8.8-5.4-2.9-1.9-5.8-3.8-8.6-5.7-2.8-1.9-5.5-3.9-8.1-5.8-5.2-3.8-9.9-7.6-13.8-10.8-2-1.6-3.8-3.1-5.4-4.5-1.6-1.4-3-2.5-4.1-3.5-2.3-2-3.5-3.1-3.5-3.1l.4-.7s1.6.7 4.3 1.9c1.4.6 3 1.4 4.9 2.3 1.9.9 4 1.9 6.3 3 4.6 2.2 9.9 4.8 15.6 7.6 2.9 1.4 5.8 2.8 8.8 4.2 3 1.4 6 2.8 9.1 4.2 3 1.4 6.1 2.8 9.1 4 3 1.3 6 2.5 8.8 3.7 1.4.6 2.9 1.1 4.2 1.6 1.4.5 2.7 1.1 4.1 1.5 1.3.5 2.6.9 3.9 1.4 1.2.4 2.5.8 3.6 1.2 1.2.4 2.3.7 3.3 1.1 1 .3 2 .7 2.9 1.1.9.4 1.7.9 2.4 1.4.8.5 1.5 1 2.1 1.5 2.5 1.9 3.7 3.9 3.7 3.9l-2.3 8.1z" })), /*#__PURE__*/




React.createElement("g", { className: "branches-small", fill: "#2F2F2F", stroke: "#2F2F2F" }, /*#__PURE__*/
React.createElement("path", { d: "M492.3 681.8h-2.9c-.9 0-2 0-3.3-.1-1.3 0-2.7 0-4.3-.1-1.6-.1-3.3-.2-5.1-.3-1.8-.1-3.7-.3-5.7-.4-3.9-.3-8.1-.7-12.3-1.1-4.2-.4-8.3-.8-12.2-1.1-1.9-.2-3.8-.4-5.6-.5-1.8-.1-3.5-.3-5-.4-1.6-.1-3-.2-4.2-.3-1.3-.1-2.4-.1-3.3-.2-1.8-.1-2.9-.2-2.9-.2l.1-2.9s1.1 0 2.9.1c.9 0 2 .1 3.3.1 1.3 0 2.7.1 4.3.3 1.6.1 3.3.3 5.1.4 1.8.1 3.7.4 5.6.6 2 .2 4 .4 6 .7 2 .3 4.1.6 6.2.8 4.1.6 8.3 1.1 12.2 1.6 1.9.2 3.8.5 5.6.7 1.8.2 3.5.4 5 .6 1.6.2 3 .3 4.3.4 1.3.1 2.4.2 3.3.3 1.8.2 2.9.2 2.9.2v.8zm-63.5-1.4s-.4.1-1 .2c-.2 0-.3.1-.6.1-.2 0-.4.1-.6.1-.4.1-.9.2-1.4.3-.6.2-1.2.3-1.9.5s-1.4.4-2.2.7c-1.6.6-3.3 1.4-5.2 2.2-1.9 1-4 2-6.1 3.1-2.2 1.1-4.6 2.2-7.2 3.2-1.3.5-2.7.9-4.1 1.2l-.5.1h-.6l-1 .2-2.1.3-4.2.6c-1.4.2-2.9.4-4.3.5l-8.4.9c-1.4.2-2.7.3-4.1.5-1.3.2-2.7.4-4 .6-1.3.2-2.6.5-3.8.7l-1.8.3c-.6.1-1.2.3-1.8.4-1.1.3-2.3.5-3.3.8-.6.2-1 .3-1.5.5s-1 .4-1.5.5c-2 .7-3.9 1.5-5.8 1.9-1.9.4-3.7.5-5.2.2s-2.5-.7-3.2-1.1c-.7-.4-1-.5-1-.5l1.9-3.3s.3.1.8.4c.5.3 1.3.6 2.2.7 1 .2 2.2.2 3.7-.2 1.5-.3 3.2-1 5.2-1.8.5-.2 1-.4 1.6-.6.6-.2 1.2-.4 1.7-.5 1.2-.4 2.3-.6 3.6-.9 1.2-.3 2.5-.6 3.7-.8 1.3-.2 2.6-.5 3.9-.7 1.3-.2 2.7-.4 4.1-.6 1.4-.2 2.8-.3 4.1-.5l8.4-.9c1.4-.1 2.8-.3 4.2-.5 1.4-.2 2.7-.3 4.1-.6l2.1-.3 1-.2h.5l.5-.1c1.2-.2 2.5-.6 3.7-1 2.4-.8 4.7-1.9 6.8-3 2.2-1.1 4.3-2.1 6.2-3 2-.9 3.8-1.7 5.5-2.3.8-.3 1.7-.5 2.4-.8.8-.2 1.5-.3 2.1-.5 1.4-.2 2.5-.2 3.1-.1.7.1 1 .1 1 .1l.3 3z" }), /*#__PURE__*/
React.createElement("path", { d: "M496.9 648.3s-1.2.6-3.4 1.6-5.3 2.4-9.1 4.1c-1.9.9-3.9 1.8-6.1 2.7-2.2.9-4.4 2-6.7 3.1-4.7 2.1-9.7 4.4-14.7 6.6-4.9 2.4-9.9 4.7-14.5 6.9-2.3 1.1-4.6 2.1-6.7 3.2-2.1 1.1-4.1 2.1-5.9 2.9-1.8.9-3.6 1.7-5.1 2.3-1.5.7-2.9 1.2-4 1.7-2.2.9-3.5 1.4-3.5 1.4l-1.7-3.2s1.1-.8 3.2-2c1-.6 2.3-1.4 3.8-2.2 1.5-.8 3.1-1.7 5-2.7 1.8-1 3.8-2 6-3l3.3-1.5c1.1-.5 2.3-1 3.5-1.5 4.7-2 9.8-4.2 14.9-6.3 5.1-2 10.3-4 15.1-5.8 2.4-.9 4.7-1.8 7-2.6 2.2-.8 4.3-1.5 6.3-2.2 3.9-1.4 7.1-2.5 9.4-3.3 2.3-.8 3.6-1.2 3.6-1.2l.3 1z" }), /*#__PURE__*/
React.createElement("path", { d: "M151.9 742s.2.5.7 1.4c.2.4.5 1 .8 1.7.3.6.7 1.3 1.1 2.1.4.8.9 1.7 1.4 2.7.5 1 1.1 2 1.7 3.1 1.3 2.2 2.7 4.7 4.4 7.3 1.6 2.7 3.6 5.4 5.6 8.4 2.1 2.9 4.5 5.8 7.1 8.7 1.3 1.4 2.7 2.8 4.2 4.1.8.6 1.5 1.3 2.3 1.9l1.2.9.6.5.1.1c.1.1-.1 0 0 0l.1.1.3.2c.9.5 1.8 1.2 2.6 1.6l1.3.7c.4.2.9.4 1.4.6 1.8.8 3.7 1.2 5.7 1.6 3.9.6 8 .3 12-.6 4-.8 7.9-2.1 11.6-3.4 3.7-1.3 7.3-2.7 10.8-3.9 3.5-1.2 6.8-2.2 10-2.9 3.1-.7 6.1-1.1 8.7-1.2 1.3 0 2.5 0 3.7.1 1.1 0 2.2.2 3.1.4 1.8.3 3.3.7 4.2 1.1l1.5.5s-.5-.1-1.5-.4c-1-.3-2.4-.5-4.2-.7-1.8-.2-4.1-.2-6.6 0-2.6.3-5.4.8-8.4 1.7-3 .9-6.2 2-9.6 3.4-3.4 1.3-6.9 2.9-10.6 4.4-3.7 1.5-7.6 3-11.8 4-4.2 1.1-8.7 1.6-13.2 1.1-2.2-.3-4.5-.7-6.6-1.5-.5-.2-1.1-.4-1.6-.6l-1.6-.8c-1.1-.5-1.9-1.1-2.8-1.6-3.8-2.4-7-5.3-9.8-8.2-2.9-2.9-5.4-5.9-7.7-8.9s-4.3-5.9-6-8.6c-.9-1.4-1.6-2.7-2.4-4-.7-1.3-1.4-2.5-2-3.7-1.2-2.4-2.1-4.5-2.8-6.3-.3-.9-.6-1.7-.9-2.4-.2-.7-.4-1.3-.6-1.8-.3-1-.4-1.5-.4-1.5l2.9-1.4z" }), /*#__PURE__*/
React.createElement("path", { d: "M253.7 813s-.7 0-2-.1c-.6 0-1.4-.2-2.3-.3-.9-.1-1.9-.4-2.9-.7-1.1-.3-2.2-.7-3.3-1.1-1.2-.5-2.4-1-3.6-1.6-1.2-.6-2.4-1.3-3.7-2-1.2-.7-2.5-1.5-3.7-2.2-1.2-.8-2.4-1.6-3.5-2.5-1.2-.8-2.2-1.7-3.3-2.5-1-.9-2-1.7-2.9-2.5-.9-.8-1.8-1.6-2.5-2.4-1.5-1.5-2.7-2.9-3.5-3.8l-1.2-1.5 2.5-2.3s.5.4 1.4 1.2c.4.4 1 .9 1.6 1.4.6.6 1.3 1.2 2.1 1.8.8.7 1.6 1.4 2.6 2.1.9.7 1.9 1.5 2.9 2.3 1 .8 2.1 1.5 3.2 2.3 1.1.8 2.2 1.6 3.3 2.3 1.1.7 2.3 1.5 3.4 2.2.6.3 1.1.7 1.7 1 .6.3 1.1.6 1.7 1 1.1.6 2.2 1.2 3.2 1.8 1 .5 2 1.1 2.9 1.6.9.5 1.7 1 2.4 1.3.7.4 1.4.8 1.9 1 1.1.6 1.7 1 1.7 1l-.1 1.2zm-33.4-70.8s1-.1 2.8-.2c1.8-.1 4.6-.2 8-.2 3.4 0 7.6.2 12.3.5 4.7.3 10 .8 15.7 1.3 5.7.5 11.8 1.5 18.3 1.8.8 0 1.6 0 2.4.1h5.1c.9 0 1.8.1 2.7.1 3.6.1 7.1.4 10.8.9 7.3.8 14.7 2.2 22.1 3.8 3.7.8 7.4 1.7 11.2 2.5 1.9.4 3.7.9 5.6 1.3l2.8.6 1.5.3 1.4.3c1.8.4 3.8 1 5.7 1.6 1.9.6 3.8 1.3 5.6 2 3.7 1.5 7.2 3.2 10.6 5.1 6.8 3.8 12.9 8.4 18.5 13.1 5.6 4.7 10.7 9.4 15.6 13.8s9.5 8.4 14 11.9c4.5 3.4 8.7 6.4 12.5 8.8 1 .6 1.9 1.2 2.8 1.7.9.5 1.8 1.1 2.7 1.5.7.4 1.7.9 2.5 1.3s1.5.7 2.3 1.1c3 1.3 5.5 2.4 7.1 3.1 1.7.8 2.5 1.2 2.5 1.2l-.5 1.4s-.9-.2-2.7-.5c-1.8-.4-4.4-.8-7.7-1.7-.8-.2-1.7-.5-2.7-.8-.5-.1-.9-.3-1.4-.5-.2-.1-.5-.2-.7-.3l-.2-.1-.2-.1-.4-.2c-1-.4-1.9-.8-3-1.3-1-.5-2-1-3.1-1.5-4.3-2.1-8.9-5-13.6-8.5-2.4-1.7-4.8-3.6-7.2-5.6-2.4-2-4.9-4.2-7.3-6.4-4.9-4.4-10-9.2-15.3-13.8-5.4-4.7-11.1-9.1-17.4-12.9-6.3-3.7-13.2-6.6-20.4-8.4l-1.4-.3-1.3-.3-2.8-.6c-1.9-.4-3.7-.9-5.6-1.3-3.7-.9-7.4-1.7-11.1-2.5-7.3-1.6-14.6-2.8-21.6-3.5-7.1-.6-13.7-.6-20.4-.3-6.7.2-13.1.5-18.8.2-5.8-.3-11-.7-15.7-1-4.6-.3-8.6-.5-11.9-.7-3.3-.1-5.8-.2-7.6-.2h-2.8l-.3-7.6z" }), /*#__PURE__*/
React.createElement("path", { d: "M519.5 784.3s-.7.1-1.9.1c-.6 0-1.4.1-2.3 0-.9 0-2-.1-3.2-.2-1.2-.1-2.5-.3-3.9-.5-1.4-.3-2.9-.5-4.5-.9-3.2-.7-6.8-1.6-10.6-2.7s-7.9-2.3-12.3-3.5c-4.3-1.2-8.9-2.4-13.6-3.4-1.2-.2-2.4-.4-3.6-.7-1.2-.2-2.4-.4-3.6-.5-2.5-.3-5.1-.5-7.7-.8-5.2-.5-10.4-1.1-15.6-1.5-5.2-.4-10.5-.8-15.6-1.3-5.2-.5-10.3-.9-15.2-1.4-4.9-.6-9.7-1.2-14.2-1.8-2.3-.3-4.4-.6-6.6-1-1-.2-2.1-.4-3.2-.6-1-.2-2-.4-3-.7-3.9-.9-7.3-1.7-10.3-2.1-3-.4-5.6-.5-7.7-.3-2.1.2-3.8.5-4.9.7-1.1.3-1.7.4-1.7.4l-1.4-5.1s.7-.2 2-.5 3.2-.6 5.7-.8c2.5-.2 5.5-.1 8.8.4 3.3.5 7 1.3 10.8 2.2 1 .2 1.9.4 2.9.6 1 .2 1.9.4 3 .6 2 .4 4.2.6 6.5.9 4.5.6 9.1 1.3 14 1.9 4.9.5 10 1 15.1 1.5s10.4.9 15.7 1.4c5.3.4 10.5 1 15.6 1.6 2.6.3 5.1.5 7.7.8 1.4.2 2.6.4 3.9.6 1.3.2 2.5.5 3.8.7 4.9 1 9.6 2.3 14 3.6 4.3 1.3 8.4 2.5 12.2 3.6 3.8 1.1 7.2 2 10.3 2.6 1.5.4 3 .6 4.3.9 1.3.2 2.6.4 3.7.6 1.1.1 2 .3 2.9.5.4.1.8.1 1.2.2.4.1.7.1 1 .1 1.2.2 1.9.3 1.9.3l-.4 3.5zm78.7 38.8s-1.3-.5-3.5-1.4c-2.2-.9-5.4-2.2-9.2-3.7-1.9-.8-4-1.6-6.1-2.5-2.2-.9-4.5-1.9-6.8-2.9-4.7-2.1-9.7-4.3-14.8-6.6-5-2.4-9.9-4.8-14.5-7.1-1.2-.6-2.3-1.1-3.4-1.7-1.1-.5-2.2-1.1-3.2-1.7-2.1-1.2-4-2.2-5.8-3.3-1.8-1-3.4-2-4.8-2.9-1.4-.9-2.7-1.7-3.7-2.4-2-1.3-3.1-2.2-3.1-2.2l1.8-3.1s1.3.5 3.5 1.5c1.1.5 2.4 1.1 3.9 1.9 1.5.8 3.2 1.6 4.9 2.6 1.8 1 3.7 2.1 5.8 3.2 2 1.2 4.2 2.3 6.5 3.5 4.5 2.4 9.3 5 14.1 7.6 4.9 2.5 9.8 5 14.3 7.3 2.3 1.2 4.5 2.3 6.6 3.4 2.1 1.1 4.1 2.1 5.9 3 3.7 1.9 6.7 3.4 8.9 4.5 2.1 1.1 3.3 1.8 3.3 1.8l-.6 1.2z" }), /*#__PURE__*/
React.createElement("path", { d: "M586 779.9s-.8 0-2.7.1c-.9 0-1.9.1-3.2.1-1.3 0-2.7.1-4.2.2-1.6.1-3.2.2-5 .3-1.8.1-3.7.3-5.6.4-3.9.3-8.1.7-12.2 1-2.1.2-4.2.4-6.2.5-2.1.2-4.1.3-6 .4-2 .1-3.9.3-5.7.3-1.8.1-3.5.1-5.1.2-1.6.1-3 .1-4.3 0h-3.3c-1.8 0-2.9-.1-2.9-.1l.1-2.9h10.5c1.6 0 3.2-.1 5-.1 1.8 0 3.7-.1 5.6-.2 3.9-.2 8.1-.3 12.3-.5 4.2-.2 8.4-.4 12.3-.5 2 0 3.9-.1 5.7-.1h5.1c1.6 0 3 0 4.3.1 1.3 0 2.2.1 3.1.1 1.8.1 2.7.1 2.7.1v.6zm-357.3-88.4s.4-.2 1.3-.5c.8-.4 2-.9 3.6-1.6 3.1-1.4 7.5-3.4 12.9-5.7 2.7-1.1 5.7-2.3 8.9-3.4s6.8-2 10.6-2.5l.7-.1.7-.1c.5 0 .9-.1 1.4-.1 1 0 2-.1 3-.1 1.9 0 3.9.1 5.9.3 3.9.4 7.8 1.2 11.6 2.1 7.6 1.8 15 4 22 5.5 3.5.7 6.9 1.2 10.1 1.4 3.2.2 6.2.1 9-.2 2.8-.4 5.4-.8 7.5-1.4 2.1-.6 3.8-1.4 5.2-2.2 1.3-.8 2.3-1.6 3-2.1.6-.6 1-.9 1-.9l2.4 2.5s-.4.3-1.1 1c-.7.6-1.8 1.5-3.4 2.5-1.5 1-3.6 2-6 2.7-2.4.7-5.1 1.2-8 1.6-3 .4-6.3.6-9.7.4-3.4-.2-7-.7-10.6-1.4-7.2-1.4-14.7-3.6-22.2-5.2-3.7-.8-7.5-1.5-11.1-1.8-1.8-.2-3.6-.3-5.4-.2-.9 0-1.7.1-2.6.1-.5 0-.9.1-1.4.1l-.6.1-.6.1c-3.4.4-6.6 1.4-9.7 2.4-3.1 1-5.9 2.2-8.6 3.3-5.3 2.3-9.6 4.4-12.7 5.8-1.5.7-2.8 1.3-3.6 1.6-.8.4-1.3.6-1.3.6l-2.2-4.6zm60.3 54s2.9-2.2 8-6c.6-.5 1.3-1 2-1.5s1.4-1.1 2.2-1.7c1.5-1.2 3-2.5 4.7-3.9 1.7-1.4 3.5-2.9 5.3-4.5 1.8-1.7 3.7-3.4 5.7-5.3 1-.9 2-1.9 3-2.8 1-1 2-2 3-3.1 2-2.1 4.2-4.2 6.3-6.4 4.2-4.6 8.7-9.3 13.2-14.4 4.5-5 9.1-10.4 13.9-15.7l7.2-8.1c2.4-2.7 4.9-5.4 7.3-8.1 2.4-2.7 4.9-5.4 7.3-8.1 2.5-2.6 5-5.3 7.4-7.9 2.5-2.6 4.9-5.2 7.3-7.7 2.5-2.5 4.9-5 7.3-7.3 2.4-2.4 4.8-4.8 7.2-7 2.4-2.2 4.8-4.4 7.1-6.5 2.3-2.1 4.6-4.1 6.8-6.1l.8-.7.4-.4.5-.4c.6-.4 1.1-.9 1.7-1.3 1.1-.9 2.2-1.7 3.3-2.6 1.1-.8 2.1-1.7 3.1-2.5 1.1-.8 2.1-1.5 3.2-2.2 2.1-1.4 4-2.8 5.9-4.1 3.7-2.4 6.9-4.6 9.5-6.3 5.2-3.6 8.2-5.6 8.2-5.6l.9 1.1s-2.7 2.4-7.6 6.6c-2.4 2-5.5 4.4-8.9 7.2-1.7 1.4-3.5 2.8-5.4 4.4-1 .8-1.9 1.5-2.9 2.4-1 .9-2 1.7-3 2.6-1 .9-2.1 1.8-3.1 2.7-.5.5-1.1.9-1.6 1.4l-.3.3-.4.4-.8.8c-2.1 2-4.3 4.1-6.5 6.3s-4.6 4.3-6.9 6.6c-2.3 2.3-4.7 4.6-7.1 7-2.4 2.4-4.9 4.7-7.5 7.1-2.5 2.5-5 4.9-7.5 7.4s-5.1 5-7.6 7.5l-7.5 7.8c-2.5 2.6-5 5.3-7.4 7.9-2.4 2.7-4.8 5.4-7.2 8-4.8 5.3-9.4 10.6-14 15.6-4.5 5.1-9.1 9.9-13.3 14.4-2.2 2.2-4.4 4.4-6.4 6.5l-3.1 3.1c-1 1-2.1 1.9-3.1 2.8-2 1.9-3.9 3.6-5.8 5.3-1.9 1.7-3.7 3.1-5.4 4.6-1.7 1.4-3.3 2.8-4.8 4-1.5 1.3-2.9 2.2-4.2 3.2-5.1 3.8-8 6-8 6l-2.4-2.8z" }), /*#__PURE__*/
React.createElement("path", { d: "M261 678.7l1.5-1.2c1-.8 2.4-2 4.2-3.5 1.8-1.5 4.1-3.3 6.7-5.3 2.6-2 5.6-4.2 9-6.5 3.3-2.3 7-4.8 11.1-7.1 4-2.4 8.4-4.7 13.1-6.9 4.6-2.2 9.5-4.2 14.6-6 5.1-1.8 10.2-3.3 15.3-5 5.1-1.7 10.1-3.5 14.9-5.6 4.8-2.1 9.4-4.3 13.6-6.9 4.2-2.5 8.1-5.3 11.5-8.3.4-.4.9-.7 1.2-1.1l1.2-1.2c.7-.8 1.5-1.5 2.2-2.3 1.4-1.6 2.7-3.2 4-4.7 2.5-3.1 4.6-6.1 6.4-8.8 1.9-2.7 3.6-4.9 5-6.8 1.4-1.9 2.6-3.3 3.4-4.3.8-1 1.3-1.5 1.3-1.5l.2.1s-.1.7-.5 1.9-1 3-1.9 5.2c-1 2.2-2.3 4.8-4.1 7.6-1.8 2.8-4 5.9-6.5 9.1-1.3 1.6-2.6 3.3-4.1 5-.7.8-1.5 1.7-2.4 2.5l-1.2 1.2c-.5.5-.9.8-1.3 1.2-3.5 3.2-7.6 6.2-12 8.9-8.8 5.4-19 9.6-29.3 13.1-5.1 1.7-10.4 3.2-15.3 4.9-4.9 1.7-9.7 3.6-14.2 5.7s-8.8 4.3-12.7 6.6c-4 2.3-7.7 4.5-11 6.7-3.4 2.2-6.4 4.3-9 6.2-2.6 1.9-4.9 3.6-6.8 5-1.9 1.4-3.3 2.5-4.4 3.3l-1.5 1.2-2.2-2.4z" }), /*#__PURE__*/
React.createElement("path", {
  fill: "none",
  strokeWidth: "3",
  d: "M2.9 449.4c20.9-4.5 41.4-13.8 60.9-24.4 17.3-9.4 29.9-29.5 48.4-35.8 6.7-2.3 13.7-2.8 20.5-1.5M157.9 636c20.4-19.8 17.6-42.6 25-69.8 7.6-28.1 18.6-54.9 22.8-84 1.2-8.6 3-16.9 3.7-25.5" }), /*#__PURE__*/

React.createElement("path", {
  fill: "none",
  strokeWidth: "3",
  d: "M280.7 473.3c-43.9 31.6-60 82.7-92.6 123.9-6.4 8.1-13.6 15.1-19.2 23.9m82.2-33.4c-33.6-6-70.8 24.8-94.8 47.7" }), /*#__PURE__*/

React.createElement("path", { d: "M242.7 697.8s.7.1 2 .3c.3.1.6.1 1.1.2.4.1.9.2 1.4.3.5.1 1 .2 1.6.4.5.2 1.1.3 1.6.5 1.1.3 2.3.8 3.5 1.3 1.2.5 2.5 1.1 3.7 1.8 1.2.7 2.5 1.3 3.8 2.1 1.3.7 2.5 1.4 3.8 2.2 1.2.7 2.5 1.4 3.7 2.1 1.2.7 2.4 1.3 3.6 1.9 1.2.5 2.3 1.1 3.4 1.5.5.2 1.1.4 1.6.6.5.2 1 .3 1.5.5.5.1 1 .3 1.4.4.5.1.9.2 1.3.3.4.1.8.2 1.1.3.4.1.7.1 1 .1 1.2.1 1.9.2 1.9.2l-.1 3.4s-.8 0-2.1-.1h-1.1c-.4-.1-.8-.1-1.3-.2s-1-.1-1.5-.2-1-.2-1.6-.3c-.6-.1-1.1-.2-1.7-.4-.6-.2-1.2-.4-1.8-.5-1.3-.3-2.5-.9-3.8-1.3-1.3-.5-2.6-1.1-4-1.7-1.3-.6-2.6-1.2-4-1.8l-3.9-1.8c-1.3-.6-2.5-1.1-3.7-1.6-1.2-.5-2.4-.9-3.5-1.3-1.1-.3-2.1-.7-3.1-.9-.5-.1-.9-.2-1.4-.3-.4-.1-.8-.1-1.1-.2-.4-.1-.7-.1-1-.1-.3 0-.7 0-1-.1-1.3-.1-2-.1-2-.1l.7-7.5z" }), /*#__PURE__*/
React.createElement("path", {
  fill: "none",
  strokeWidth: "3",
  d: "M187 736.7c6.3-14.9 24.9-27.6 40-26.8" }), /*#__PURE__*/

React.createElement("path", { d: "M337.6 419.6s1.5.1 4.2.3c1.4.1 3 .1 4.9.2 1.9.1 4.2.1 6.7.2 5 0 11.2-.1 18.3-.6 7.1-.5 15.1-.9 24-1.4 4.4-.2 9.1-.4 13.9-.6 2.4-.1 4.9-.2 7.4-.2 1.2 0 2.5-.3 3.8-.3 1.3 0 2.6-.2 3.9-.2h1.9c.7 0 1.4.3 2.1.3 1.4 0 2.8.3 4.1.3 2.7.3 5.5.6 8.3 1.2 2.8.5 5.6 1.2 8.3 1.9 2.8.8 5.5 1.7 8.2 2.7 10.9 4.1 21.1 10 31.1 16.1 5 3.1 9.9 6.1 15 9.2 2.5 1.5 5.1 3 7.6 4.5s5.1 3 7.6 4.6c10.2 6.3 20.1 12.9 29.6 19.7 9.5 6.8 18.8 13.6 27.7 20.2 8.9 6.6 17.6 12.9 25.9 18.7 1 .7 2.1 1.5 3.1 2.1 1 .7 2.1 1.4 3.1 2 2 1.3 4.1 2.5 6.1 3.6 4.1 2.2 8.2 4 12.3 5.2 8.1 2.5 16.1 2.7 22.9 1.7 6.9-1.1 12.7-3.1 17.5-5 4.7-1.9 8.3-3.7 10.8-4.9 2.4-1.3 3.8-1.9 3.8-1.9l1.6 3s-1.3.7-3.8 2.1c-2.5 1.3-6.1 3.2-11 5.3-4.8 2.1-10.9 4.4-18.2 5.7-7.3 1.3-16.1 1.4-25-1.2-4.5-1.2-8.9-3.1-13.3-5.3-2.2-1.1-4.4-2.3-6.6-3.7-1.1-.7-2.2-1.3-3.2-2-1.1-.7-2.1-1.4-3.2-2.1-8.5-5.7-17.3-11.8-26.4-18.2-9.1-6.4-18.5-13-28.1-19.4-2.4-1.6-4.8-3.3-7.2-4.9-2.4-1.6-4.9-3.2-7.3-4.9-4.9-3.2-9.9-6.4-14.9-9.4-5.1-3-10.2-6.1-15.2-9.1-5-3.1-10-6.2-15-9.2-5-3-9.9-5.9-14.9-8.5-2.5-1.3-5-2.5-7.5-3.6s-5-2.1-7.6-3c-2.5-.9-5.1-1.6-7.6-2.2-2.5-.6-5.1-1.1-7.6-1.4-2.5-.3-5-.5-7.5-.6-1.2 0-2.5-.1-3.6 0h-1.8c-.6 0-1.3.1-1.9.1h-.9l-.9.1c-.6.1-1.2.1-1.8.2-1.2.2-2.4.4-3.6.7-2.4.6-4.8 1.4-7.1 2.3-4.6 1.8-9 3.8-13.4 4.8-2.2.5-4.3 1-6.5 1-2.1 0-4.3-.3-6.4-.7-2.1-.4-4.1-.6-6.1-.8-2-.1-3.9-.2-5.7-.3-7.4-.4-13.9-.9-19.2-1.6-2.7-.4-5-.6-7.2-1-2.1-.3-3.9-.5-5.3-.8-2.7-.5-4.2-.8-4.2-.8l1-10.2z" }), /*#__PURE__*/
React.createElement("path", {
  fill: "none",
  strokeWidth: "3",
  d: "M743.7 610.4c-36.9-6.3-77.3-34.8-103.3-64.5-4.1-4.6-7.8-8.9-11.2-14.1" }), /*#__PURE__*/

React.createElement("path", { d: "M401 347.1s-.5.9-1.4 2.5c-.5.8-1 1.7-1.7 2.8-.7 1-1.4 2.2-2.2 3.5-.8 1.3-1.7 2.6-2.6 4-1 1.4-2 2.9-3.1 4.4-2.2 3.1-4.5 6.4-6.9 9.7-.6.8-1.3 1.6-1.9 2.4-.6.8-1.3 1.6-1.9 2.4-.6.8-1.3 1.5-2 2.2-.4.4-.7.7-1 1.1-.4.3-.7.7-1.1 1-1.4 1.3-2.8 2.6-4.2 3.7-1.4 1.1-2.9 2.1-4.3 2.9-.7.4-1.4.7-2.1 1-.7.3-1.4.5-2.1.7-1.4.4-2.6.6-3.6.7-1.1.1-1.9.1-2.5.1-.6 0-1-.1-1-.1l-2-2.8s.8-.5 2.2-1.5c.7-.5 1.5-1.1 2.5-1.8.5-.4 1-.7 1.5-1.2s1-.9 1.5-1.5c1.1-1 2.3-2.1 3.4-3.3 1.2-1.2 2.4-2.6 3.6-4 1.2-1.4 2.4-2.9 3.6-4.5 1.2-1.6 2.4-3.1 3.6-4.7 1.2-1.6 2.4-3.2 3.7-4.6 1.2-1.5 2.6-2.9 3.8-4.4 1.3-1.4 2.5-2.7 3.8-3.9 1.3-1.2 2.5-2.4 3.6-3.3.6-.5 1.1-1 1.7-1.4.6-.4 1.1-.8 1.6-1.2 1-.7 1.9-1.3 2.6-1.8.8-.5 1.4-.9 1.8-1.1.4-.2.6-.4.6-.4l2.5 2.4z" }), /*#__PURE__*/

React.createElement("path", { d: "M388.2 549.1l1.7-2c.6-.7 1.3-1.4 1.9-2.2.7-.7 1.3-1.4 1.9-2 .6-.7 1.3-1.3 1.9-1.9l1.9-1.9 1.9-1.8c1.3-1.2 2.6-2.4 3.8-3.6l7.7-7.1c2.5-2.4 5.1-4.7 7.6-7 2.5-2.4 4.8-4.9 7-7.5 2.2-2.6 4.4-5.1 6.8-7.6l3.6-3.7 3.7-3.8c2.5-2.5 5-4.9 7.6-7.3 2.6-2.4 5.2-4.7 7.9-6.9 1.4-1.1 2.7-2.2 4.1-3.3 1.4-1.1 2.8-2.2 4.2-3.2 1.4-1.1 2.8-2.1 4.3-3.1 1.4-1 2.9-2 4.4-3 2.9-1.9 6-3.8 9-5.5 1.5-.9 3.1-1.7 4.6-2.5l4.7-2.4 4.7-2.2c1.6-.7 3.1-1.5 4.7-2.2 3.1-1.5 6.2-3 9.5-4.4 1.6-.7 3.3-1.4 5-2 .9-.3 1.7-.7 2.6-.8.9-.1 1.9-.1 2.8-.1l-1 1.1c.6-1.3.8-2.7.2-4.2-.2-.8-.6-1.5-.9-2.3-.3-.8-.3-1.5-.2-2.2.3-1.4.7-2.7 1.4-4 .6-1.3 1.4-2.6 2.2-3.8.8-1.2 1.5-2.5 2.1-3.8.3-.6.6-1.3.8-2 .2-.7.4-1.4.5-2.1.2-1.4.3-3 .6-4.4.3-1.5 1-2.7 1.7-4 .7-1.3 1.5-2.6 2.3-3.8.8-1.2 1.7-2.4 2.7-3.5 1-1.1 2.1-2.2 3.2-3.2s2.4-1.9 3.7-2.7c.7-.4 1.3-.7 2-1.1l2.1-.9c1.4-.5 2.9-1 4.4-1.3 1.5-.3 3-.5 4.4-.5h2.2l2.2.2-.1 3.4-2 .2c-.6.1-1.3.2-1.9.3-1.3.3-2.5.6-3.7 1-1.2.4-2.4.9-3.5 1.4-.6.3-1.1.6-1.6.9l-1.6 1c-.5.4-1 .7-1.5 1.1-.5.4-1 .8-1.4 1.2-.9.8-1.8 1.8-2.6 2.7l-1.2 1.5c-.4.5-.8 1-1.1 1.6-.7 1.1-1.4 2.2-2 3.3-.6 1.1-1.1 2.3-2 3.4-.8 1.1-1.8 2.1-2.6 3.3-.8 1.2-1.2 2.5-1.4 3.8-.3 1.3-.3 2.7-.3 4.2 0 1.4.1 2.8.1 4.2 0 1.4-.2 2.7-.5 4-.2.7-.6 1.3-1.1 1.8-.5.6-1.2 1.1-1.7 1.7-1.1 1.2-1.4 2.5-1.3 3.9v.5l-1 .7c-.7.5-1.4 1.1-2.2 1.5-.7.4-1.5.7-2.3 1-1.5.6-3 1.4-4.5 2.1-3 1.5-6 3.2-9 4.9-1.5.9-3 1.7-4.6 2.5l-4.5 2.5-4.4 2.6c-1.4.9-2.9 1.8-4.3 2.7-2.8 1.8-5.6 3.8-8.3 5.8-2.7 2-5.4 4-8 6.2-1.3 1.1-2.6 2.1-3.9 3.3-1.3 1.1-2.5 2.2-3.8 3.4-2.5 2.3-5 4.6-7.4 7-2.4 2.4-4.8 4.8-7.1 7.3l-3.4 3.7-3.5 3.8c-2.3 2.6-4.9 5.1-7.5 7.4-2.6 2.3-5.3 4.6-7.7 7l-7.3 7.4c-2.4 2.5-4.8 5-7 7.5-2.3 2.5-4.5 5.1-6.5 7.7-.5.7-1 1.3-1.5 2s-1 1.3-1.4 2c-.4.7-.8 1.2-1.3 2l-1.3 2.2-9.4-7.1zm14.8-198s-.5.9-1.4 2.5c-.5.8-1 1.7-1.7 2.8-.7 1-1.4 2.2-2.2 3.5-.8 1.3-1.7 2.6-2.6 4-1 1.4-2 2.9-3.1 4.4-2.2 3.1-4.5 6.4-6.9 9.7-.6.8-1.3 1.6-1.9 2.4-.7.8-1.3 1.6-1.9 2.4-.6.8-1.3 1.5-2 2.2-.4.4-.7.7-1 1.1-.4.3-.7.7-1.1 1-1.4 1.3-2.8 2.6-4.2 3.7-1.4 1.1-2.9 2.1-4.3 2.9-.7.4-1.4.7-2.1 1-.7.3-1.4.5-2.1.7-1.4.4-2.6.6-3.6.7-1.1.1-1.9.1-2.5.1-.6 0-1-.1-1-.1l-2-2.8s.8-.5 2.2-1.5c.7-.5 1.5-1.1 2.5-1.8.5-.4 1-.7 1.5-1.2s1-.9 1.5-1.5c1.1-1 2.3-2.1 3.4-3.3 1.2-1.2 2.4-2.6 3.6-4 1.2-1.4 2.4-2.9 3.6-4.5 1.2-1.6 2.4-3.1 3.6-4.7 1.2-1.6 2.4-3.2 3.7-4.6 1.2-1.5 2.6-2.9 3.8-4.4 1.3-1.4 2.5-2.7 3.8-3.9 1.3-1.2 2.5-2.4 3.6-3.3.6-.5 1.1-1 1.7-1.4.6-.4 1.1-.8 1.6-1.2 1-.7 1.9-1.3 2.6-1.8.8-.5 1.4-.9 1.8-1.1.4-.2.6-.4.6-.4l2.5 2.4zm-56.3-32.6s.1-.1.4-.3c.3-.2.7-.4 1.3-.7.7-.3 1.7-.6 2.8-.9 1-.2 2.3-.5 3.6-.7 2.7-.3 6-.2 9.5.6 3.5.9 7.3 2.1 11 3.8 3.8 1.7 7.6 3.9 11.4 6.3 1.9 1.2 3.8 2.5 5.7 3.8 1.9 1.3 3.9 2.7 5.8 3.9 2 1.3 3.9 2.6 6 3.8 1 .6 2 1.2 3.1 1.8.2.1.6.3.7.4l.8.4 1.6.8 1.6.8 1.6.7c1.1.4 2.2.9 3.3 1.3 1.1.4 2.3.8 3.4 1.2l3.5 1.1c2.3.7 4.7 1.4 7 2 1.2.4 2.3.7 3.5 1.1 1.2.3 2.3.8 3.4 1.1 1.1.4 2.3.8 3.4 1.2 1.1.4 2.2.8 3.4 1.2 2.2.8 4.4 1.5 6.6 2.2 4.4 1.4 8.6 2.8 12.7 4.1 2 .6 4 1.3 5.9 1.9 1 .3 1.9.6 2.8.9.5.1.9.3 1.4.4l.3.1h-.1.3l.7.2c.9.3 1.8.5 2.6.7l2.4.6c1.6.4 3.2.7 4.6 1.1 3 .7 5.6 1.3 7.7 1.7 2.2.5 3.9.9 5 1.3 1.1.3 1.8.5 1.8.5l-.6 3.4s-.6-.1-1.8-.2c-1.1-.1-2.8-.3-5-.5s-4.8-.4-7.8-.6c-1.5-.1-3.2-.3-4.9-.5-1.8-.2-3.6-.5-5.4-.8-3.8-.7-7.7-1.5-11.9-2.4-4.2-1-8.6-2-13.2-3.2-4.5-1.2-9.3-2.5-14-4-2.3-.8-4.7-1.6-7.1-2.5-2.3-.9-4.6-1.9-7-2.9-2.3-1-4.6-2.1-6.9-3.2-2.3-1.1-4.6-2.1-6.8-3.2s-4.4-2.1-6.6-3.2c-2.2-1.1-4.3-2.1-6.4-3.2-4.2-2-8.3-3.9-12.2-5.6-2-.8-3.9-1.6-5.7-2.3-1.9-.7-3.7-1.3-5.4-1.9-3.5-1.1-6.7-2-9.5-2.5-1.4-.3-2.8-.5-4-.7-.6-.1-1.2-.2-1.8-.2-.6-.1-1.1-.2-1.6-.2-1-.1-2-.2-2.8-.2-.8 0-1.5-.1-2-.1H347l-.3-9.7z" }), /*#__PURE__*/
React.createElement("path", { d: "M487.8 359.4s-.5 0-1.3.1c-.4 0-1 .1-1.6.2-.6.1-1.3.2-2.1.3-.4.1-.8.1-1.2.2-.4.1-.9.2-1.3.3-.9.2-1.9.4-3 .7-1.1.3-2.2.5-3.4.9-.6.2-1.2.3-1.8.5-.6.2-1.2.4-1.9.6-2.6.9-5.3 2-8.1 3.2-2.8 1.3-5.7 2.7-8.7 4.4-2.9 1.6-5.9 3.4-8.9 5.4-2.9 1.9-5.8 4-8.7 6.3-2.8 2.2-5.5 4.5-8.1 6.9-2.6 2.3-5.1 4.8-7.2 7.3-2.1 2.6-4 5.2-5.8 7.6-.9 1.2-1.7 2.4-2.5 3.6-.8 1.1-1.7 2.2-2.4 3.2l-1.2 1.5c-.4.5-.8 1-1.1 1.4-.4.5-.7.9-1.1 1.3-.4.4-.7.8-1.1 1.2-1.4 1.6-2.9 2.8-4.1 3.9-.6.5-1.3.9-1.8 1.3-.3.2-.5.4-.7.5-.2.2-.5.3-.7.4-.8.5-1.3.8-1.3.8l-3.1-1.5.6-1.2c.4-.8 1-1.9 1.8-3.3s1.9-3.1 3.1-5c.6-.9 1.3-1.9 2.1-3 .8-1 1.6-2.1 2.4-3.1 1.8-2.2 3.7-4.5 5.9-6.8 2.1-2.3 4.5-4.7 7.1-7 2.6-2.3 5.2-4.7 8.1-6.9 2.8-2.3 5.7-4.5 8.8-6.6 3-2.1 6.1-4.1 9.2-5.9 3.1-1.8 6.3-3.5 9.4-5 3.1-1.5 6.2-2.8 9.1-4 3-1.1 5.8-2.1 8.4-2.8.7-.2 1.3-.4 2-.5.6-.2 1.3-.3 1.9-.5 1.2-.3 2.4-.5 3.5-.7 1.1-.2 2.1-.4 3.1-.5.5-.1.9-.1 1.4-.2.4 0 .9-.1 1.3-.1.8-.1 1.5-.2 2.1-.2.6 0 1.1-.1 1.6-.1.9 0 1.3-.1 1.3-.1v1zm-70-34.3s-.2-.4-.6-1.1c-.4-.8-.9-1.8-1.6-3.3-.7-1.4-1.5-3.2-2.4-5.2-.4-1-.8-2.1-1.3-3.3-.4-1.2-.9-2.4-1.3-3.7-.9-2.6-1.7-5.4-2.5-8.5-.7-3-1.3-6.3-1.7-9.7-.8-6.8-.8-14.1.1-21.4.9-7.2 2.5-14.3 4.3-20.8 1.8-6.5 3.8-12.5 5.6-17.5.9-2.5 1.7-4.9 2.3-6.9.7-2 1.2-3.8 1.6-5.3.4-1.5.7-2.7.9-3.5l.3-1.2 3.4.7s-.1.4-.2 1.3c-.2.8-.3 2.1-.6 3.7s-.7 3.5-1.3 5.6c-.6 2.2-1.2 4.5-2 7.1-.8 2.6-1.5 5.3-2.3 8.3-.8 2.9-1.7 6-2.4 9.2-1.5 6.4-3 13.2-3.6 20.1-.7 6.8-.6 13.6.2 19.9.4 3.1 1 6.2 1.7 9s1.5 5.5 2.3 7.9c.4 1.2.9 2.4 1.3 3.4.4 1.1.9 2.1 1.2 3.1.4 1 .6 1.9.9 2.8.2.9.4 1.7.6 2.5.2 1.5.4 2.9.5 3.8v1.4l-3.4 1.6z" }), /*#__PURE__*/
React.createElement("path", { d: "M447.9 230l-.6.3c-.2.1-.5.2-.7.3-.3.1-.5.3-.7.5-.1.1-.3.2-.4.2-.2.1-.3.2-.5.3-.3.2-.7.4-1.1.7-.4.3-.8.5-1.2.9-.4.3-.9.7-1.3 1l-1.5 1.2c-.5.4-1.1.9-1.6 1.3-1.1.9-2.3 1.9-3.6 2.8-1.3 1-2.8 1.9-4.3 2.8-1.5.9-3.1 1.9-4.6 2.9-1.6 1-3.1 2.1-4.7 3-1.6 1-3.3 1.8-5.1 2.4-.9.3-1.8.5-2.7.7-.9.1-1.8.3-2.7.2h-.7l-.7-.1c-.4-.1-.9-.1-1.3-.2-.8-.2-1.6-.4-2.3-.8-.3-.2-.7-.3-1-.5l-.9-.6c-.6-.4-1.1-.8-1.5-1.2-.2-.2-.5-.4-.7-.6l-.6-.6-1-1c-1.1-1.3-1.7-2-1.7-2l2.8-2s.1.2.4.5c.2.3.6.8 1.1 1.3l.8.8.5.5c.2.1.4.3.5.4.4.3.8.7 1.2.9.2.1.5.3.7.4.2.1.5.2.8.3 1 .5 2.2.7 3.5.6.6 0 1.3-.1 1.9-.3.7-.2 1.3-.4 2-.7 1.4-.6 2.7-1.4 4-2.4 1.3-1 2.7-2 3.9-3.3 2.5-2.5 4.6-5.4 7.1-7.8 1.3-1.2 2.6-2.2 4-3.1 1.4-.9 2.7-1.7 4.1-2.3 1.4-.6 2.7-1.1 4-1.4.6-.2 1.2-.2 1.8-.3.3 0 .5-.1.8-.1h.8c.5 0 1 0 1.3.1.3.1.6.1.8.2.4.1.7.2.7.2l.2 3.6zm86.5-.1s-.7.4-1.9 1c-1.2.7-3.1 1.6-5.4 2.8-2.3 1.2-5.1 2.7-8.3 4.4-1.6.9-3.3 1.8-5.1 2.7-1.8 1-3.6 2-5.5 3.1-3.9 2.1-8 4.5-12.3 7.1-1.1.7-2.1 1.3-3.2 2l-3.3 2.1c-2.2 1.4-4.4 2.9-6.6 4.4-1.1.8-2.2 1.6-3.3 2.3l-3.3 2.4-3.3 2.4c-1.1.8-2.2 1.7-3.3 2.5-4.4 3.3-8.8 6.8-12.6 10.7l-.7.7-.4.4-.2.2-.1.1c0-.1-.2.2.1-.1l-1.5 1.6-1.5 1.6-1.2 1.5-1.3 1.5-1.3 1.6c-.9 1.1-1.7 2.2-2.5 3.3-.8 1.1-1.6 2.3-2.4 3.4-.8 1.1-1.5 2.3-2.3 3.5-1.6 2.3-3 4.7-4.5 7-5.9 9.4-11.5 18.6-17.6 25.7-.8.9-1.5 1.7-2.2 2.6-.7.8-1.5 1.6-2.3 2.4-.4.4-.7.8-1.1 1.1l-.1.1-.2.2-.1.1-.3.2-.5.5c-.7.7-1.4 1.3-2.1 1.9-.3.3-.7.6-1 .9-.4.3-.7.6-1.1.8-.7.5-1.4 1.1-2 1.6-1.3 1-2.4 1.9-3.4 2.7-2.1 1.5-3.6 2.8-4.7 3.7-1.1.9-1.7 1.3-1.7 1.3l-2.6-2.3s.5-.6 1.5-1.6 2.4-2.6 4.3-4.4c.9-.9 2-1.9 3.1-3s2.3-2.2 3.6-3.5c.6-.7 1.3-1.3 1.9-2l.5-.5.3-.3.1-.1c-.1.1 0 0 0 0l.1-.1c.3-.4.6-.7.9-1.1.6-.8 1.3-1.5 1.9-2.4.6-.8 1.3-1.7 1.9-2.6 2.6-3.6 5.2-7.5 7.8-11.9 2.6-4.3 5.2-9 8-13.9 2.8-4.8 5.7-9.9 8.9-14.8.8-1.2 1.6-2.5 2.5-3.7l1.3-1.8 1.4-1.8 1.4-1.8 1.4-1.7 1.4-1.7 1.6-1.7c4.1-4.5 8.8-8.3 13.1-12.3 1.1-1 2.2-2.1 3.3-3 1.1-1 2.2-2 3.3-2.9 2.2-1.9 4.5-3.7 6.8-5.4 4.6-3.3 9.6-5.8 14.2-8.1 4.6-2.4 9.2-4.2 13.3-6 4.2-1.6 8.1-3.1 11.5-4.2 3.5-1.2 6.5-2.1 9-2.8 2.5-.7 4.5-1.2 5.9-1.6 1.4-.3 2.1-.5 2.1-.5l1.9 3.5zm15.2 27.7s1.5 1.4 4.2 3.7c2.7 2.4 6.4 5.7 11 9.7 2.3 2 4.8 4.1 7.5 6.4 2.7 2.2 5.5 4.6 8.4 7 3 2.4 6 4.9 9.1 7.3 3.1 2.5 6.4 4.9 9.6 7.3 3.3 2.4 6.5 4.8 9.8 7 1.6 1.1 3.2 2.3 4.9 3.3s3.2 2.1 4.8 3.1c1.6 1.1 3.2 2 4.7 3 1.6.9 3 1.9 4.6 2.8 3 1.7 5.8 3.4 8.5 4.8 1.3.7 2.6 1.4 3.8 2 1.2.6 2.4 1.2 3.5 1.7 2.2 1.1 4.1 2 5.8 2.7 3.2 1.4 5.1 2.2 5.1 2.2l-1.2 3.2s-1.9-.7-5.3-1.9c-1.7-.6-3.7-1.5-6-2.4-1.2-.5-2.4-1-3.7-1.6-1.3-.6-2.6-1.2-4-1.9-2.8-1.3-5.7-2.9-8.9-4.5-1.6-.8-3.1-1.7-4.8-2.6-1.6-.9-3.3-1.8-4.9-2.8-1.6-1-3.3-2-5-3.1-1.7-1-3.4-2.2-5.1-3.3-3.4-2.2-6.8-4.5-10.2-6.9-3.3-2.4-6.7-4.7-9.9-7.2-3.2-2.4-6.3-4.9-9.4-7.3-3-2.4-5.9-4.7-8.6-7-2.7-2.3-5.2-4.4-7.5-6.5-2.3-2-4.4-3.9-6.3-5.6-1.8-1.7-3.4-3.1-4.8-4.4-2.6-2.4-4.1-3.8-4.1-3.8l4.4-4.4z" }), /*#__PURE__*/
React.createElement("path", { d: "M634 261s-2.5-.1-7-.3c-1.1-.1-2.3-.1-3.7-.1H619c-1.5 0-3.1 0-4.9.1-1.7 0-3.5.1-5.4.1-3.8.2-7.9.3-12.2.6-4.3.3-8.9.7-13.6 1.1-4.7.5-9.6 1-14.6 1.5s-10 1.1-15.1 1.6-10.2 1-15.2 1.4c-2.5.2-5 .4-7.5.5-2.5.1-4.9.3-7.3.4-4.8.2-9.5.2-14 .1-2.2-.1-4.4-.1-6.5-.2-2.1-.2-4.1-.3-6.1-.5-3.8-.4-7.4-.8-10.6-1.4-3.2-.5-6-1.4-8.1-2.4-1.1-.5-2-1.1-2.8-1.6-.8-.5-1.4-1-1.9-1.4-1-.9-1.5-1.4-1.5-1.4l1.2-3.2s.6.2 1.7.6c1.1.4 2.7.9 4.8 1.5 2.1.5 4.7 1.1 7.7 1.5 3 .4 6.4.8 10.2 1.1 3.8.2 7.8.6 12.2.6 4.3.2 8.9.1 13.6.1 2.4-.1 4.8-.1 7.2-.2 2.4-.1 4.9-.2 7.4-.4 5-.3 10-.6 15.1-1s10.1-.8 15.1-1.2c5-.4 9.9-.8 14.7-1.1 4.8-.3 9.4-.6 13.7-.7 4.4-.2 8.5-.2 12.3-.3 1.9 0 3.8 0 5.5.1 1.7 0 3.4 0 5 .1s3 .1 4.4.2c1.4.1 2.6.1 3.7.2 4.4.4 7 .6 7 .6l-.2 3.4zm-92.7-75.3s-.3.8-.8 2.3c-.3.7-.6 1.6-1 2.6s-.8 2.1-1.4 3.3c-.5 1.2-1.1 2.5-1.8 3.9s-1.3 2.8-2.1 4.3c-.7 1.5-1.5 3-2.2 4.5-.8 1.5-1.5 3-2.3 4.6-.7 1.5-1.4 3.1-2.2 4.5-.8 1.5-1.4 3-2 4.4-.6 1.4-1.3 2.8-1.8 4.1-.6 1.3-1.2 2.5-1.8 3.6-.7 1.1-1.1 2.1-1.6 3-.5.9-1 1.7-1.4 2.3-.4.6-.8 1.1-1 1.4-.3.3-.4.5-.4.5l-7.9-2.7s.6-.7 1.5-2.1c.4-.7 1-1.5 1.5-2.4.6-.9 1.1-2 1.9-3.2.7-1.2 1.4-2.4 2.1-3.7.7-1.4 1.5-2.7 2.3-4.2.8-1.4 1.6-3 2.5-4.4l2.7-4.5c.9-1.5 1.9-2.9 2.8-4.4.9-1.5 1.8-2.9 2.6-4.3 1.7-2.8 3.3-5.3 4.6-7.6.7-1.1 1.2-2.2 1.7-3.1.5-.9.9-1.7 1.3-2.4.7-1.4 1.1-2.1 1.1-2.1l3.1 1.8z" }), /*#__PURE__*/
React.createElement("path", {
  fill: "none",
  strokeWidth: "3",
  d: "M459.3 330.8c-13.6 1.3-28.5 10.4-37.3 22.1" }), /*#__PURE__*/

React.createElement("path", { d: "M520 358.3s1-.1 2.8-.2c.9-.1 2.1-.1 3.4-.3 1.3-.2 2.8-.3 4.5-.5 1.7-.3 3.6-.6 5.6-.9 2-.4 4.2-.8 6.6-1.3 4.7-1 10-2.2 15.7-3.6 2.9-.7 5.9-1.5 9-2.3 3.1-.7 6.3-1.6 9.7-2.3 3.3-.7 6.8-1.5 10.2-2.4 1.7-.5 3.5-1 5.2-1.5 1.8-.5 3.5-1.1 5.3-1.8 1.8-.7 3.5-1.6 5.3-2.5.9-.5 1.8-.9 2.7-1.4l1.4-.7.7-.3.3-.2.2-.1h.1c.1 0-.1 0 0 0 1.8-.9 3.6-1.6 5.5-2.2 1.9-.6 3.8-.9 5.7-1.2 1.9-.3 3.9-.3 5.9-.4h2.9l3 .1c2 .1 4 .2 6 .2h3c1-.1 2-.1 3-.3 2-.2 3.9-.6 5.8-1s3.9-.8 5.8-1.1c1.9-.3 3.8-.8 5.8-1.3 1.9-.5 3.8-.9 5.7-1.4 1.9-.5 3.8-1 5.6-1.5 1.9-.5 3.7-1 5.5-1.5 1.8-.5 3.7-1 5.5-1.5 1.8-.5 3.6-1.1 5.4-1.6 7.1-2.3 13.9-4.4 20.4-6.5 6.5-2.1 12.6-4.1 18.2-6 2.8-.9 5.5-1.8 8.1-2.7 2.6-.8 5.1-1.5 7.4-2.3 2.4-.6 4.6-1.2 6.6-1.7s4-.8 5.7-1.3c3.4-.8 6.1-1.2 8-1.6 1.8-.3 2.8-.5 2.8-.5l.5 3.4s-1 .3-2.7.8c-1.8.5-4.4 1-7.7 2-1.6.5-3.5.9-5.4 1.5-1.9.6-4 1.2-6.3 1.9-2.3.8-4.7 1.6-7.3 2.4-1.2.4-2.5.9-3.8 1.4-1.3.5-2.7.9-4.1 1.4-2.8.9-5.7 2-8.8 2.9-3.1.9-6.2 1.9-9.5 2.9-6.5 2-13.5 3.7-20.8 5.5-3.6.9-7.3 1.7-11 2.6-1.9.4-3.7.9-5.6 1.3l-5.7 1.2c-3.8.9-7.6 1.8-11.5 2.7-1.9.4-3.9.9-5.8 1.3l-2.9.7-2.9.7c-1 .2-1.9.5-2.9.8-1 .2-1.9.5-2.9.8l-5.7 1.8c-1.9.6-3.8 1.3-5.7 1.9-1.9.6-3.8 1.1-5.7 1.5-3.8.9-7.6 1.7-11.4 2.3-.9.2-1.9.3-2.8.5-.9.2-1.8.3-2.7.5l-5.4 1.2c-1.8.5-3.5 1-5.2 1.7-1.7.6-3.4 1.4-5 2.1-3.2 1.6-6.4 3.3-9.5 4.7-6.2 3-12.6 4-18.5 5.3-5.9 1.1-11.5 1.9-16.4 2.3-5 .5-9.4.4-13 .3-1.9-.1-3.5-.2-4.9-.4-1.4-.1-2.5-.4-3.5-.5-.9-.2-1.7-.3-2.2-.4-.5-.1-.7-.2-.7-.2l-.6-3.2z" }), /*#__PURE__*/
React.createElement("path", {
  fill: "none",
  strokeWidth: "3",
  d: "M736 221.2C685.2 274 619.9 325.7 569.5 378.5c-8.5 8.9-16.9 17.9-25.8 26.3M454.4 425c41.9-5.5 78.1-14.6 120-4.2 44.1 10.9 77.7 41 119.7 53.4 16.5 4.8 34.1 4.5 48.5 15.8" }), /*#__PURE__*/

React.createElement("path", {
  fill: "none",
  strokeWidth: "2",
  d: "M782.1 459c-11.9-1.4-62.2 23.1-59.7 19.7" }), /*#__PURE__*/

React.createElement("path", {
  fill: "none",
  strokeWidth: "3",
  d: "M548.6 349.9c25.7 9.8 44 34.5 68.4 44.4 22.4 9.1 56.7.5 80.1-1.5M679 442.9c-20.6-3.2-41.6-29-54.8-45.9" }), /*#__PURE__*/

React.createElement("path", { d: "M584.1 361.9s.3-.1.8-.2 1.4-.3 2.4-.6c1.1-.2 2.4-.5 3.9-.9 1.6-.3 3.4-.5 5.4-.8 2.1-.3 4.3-.4 6.8-.6 2.5-.2 5.1-.2 7.9-.3 2.8-.1 5.8.1 9 .2 1.6 0 3.2.2 4.8.3 1.6.1 3.3.3 5 .4 6.9.6 14.2 1.7 21.8 2.9 7.7 1.3 15.7 2.7 24.1 3.7 8.4 1.1 17.1 1.7 26 1.3 1.1 0 2.3-.1 3.4-.1s2.4.1 3.6.2c1.1.1 2.3.2 3.4.4s2.3.3 3.4.5c4.5.7 9.1 1.5 13.5 2.6 2.2.5 4.5 1.1 6.7 1.7 2.2.6 4.4 1.3 6.6 1.9 4.4 1.3 8.6 2.8 12.9 4.2 2.1.7 4.2 1.5 6.3 2.2l6.3 2.1c4.2 1.4 8.3 2.8 12.3 4.1 8.1 2.7 15.9 5.4 23.2 8.1 3.7 1.4 7.2 2.7 10.7 3.9 3.5 1.3 6.8 2.5 10 3.8 6.4 2.4 12.1 5.3 17.3 6.3 5.3 1.2 10.1 1.4 14.1 1.7 2 .2 3.8.3 5.3.5.8.1 1.5.2 2.2.3.7.1 1.3.2 1.8.3 2.1.4 3.3.6 3.3.6l-.8 3.3s-1.1-.3-3.1-.7c-1-.3-2.3-.5-3.8-.7-1.5-.3-3.2-.5-5.2-.7-3.9-.5-8.8-.9-14.3-2.3l-2.1-.6c-.7-.2-1.5-.4-2.1-.7-.7-.3-1.4-.5-2.1-.8-.4-.1-.7-.3-1.1-.4l-.5-.2-.6-.3c-2.8-1.3-5.8-2.5-9-3.7-3.2-1.2-6.5-2.5-9.9-3.8-3.5-1.3-7-2.5-10.7-3.8-7.4-2.6-15.2-5.1-23.4-7.5-4.1-1.2-8.2-2.6-12.5-3.5-4.3-.9-8.7-1.7-13.2-2.2-4.5-.6-9-1.1-13.4-2-4.4-.9-8.7-1.9-12.9-3.5-1-.4-2.1-.8-3.1-1.3s-2.1-.8-3.1-1.4c-2.1-.9-4.1-1.9-6.2-2.7-2.1-.8-4.2-1.6-6.3-2-.5-.2-1-.2-1.6-.3-.5-.1-1-.1-1.6-.1l-1.7.1s-.1-.1 0-.1l-.2-.1h-1.2c-9 .4-17.9.1-26.5-.3-8.5-.5-16.8-1.1-24.6-1.9-7.8-.8-15.1-1.6-21.9-2.4-6.8-.7-13-1.3-18.5-1.5-2.8-.1-5.3-.2-7.7-.2-2.4 0-4.6-.1-6.5 0-2 .1-3.7.2-5.2.2-1.5.1-2.9.2-3.9.3-2.1.2-3.3.3-3.3.3l-.4-3.2zm251.7-70.1s-.3 0-.8.1-1.3.1-2.4.2c-1 .1-2.2.2-3.7.3-1.4.1-3 .1-4.7.3-1.7.1-3.6.3-5.6.5-2 .1-4.1.3-6.2.5-2.2.2-4.4.4-6.6.7-2.3.3-4.5.5-6.8.8-2.3.3-4.5.7-6.8 1.1-2.2.3-4.4.8-6.5 1.2-2.1.4-4.2.7-6.1 1.2-1.9.5-3.8.9-5.4 1.3-1.7.4-3.2.8-4.6 1.1-1.4.4-2.5.7-3.5.9-2 .5-3.1.8-3.1.8l-1-3.3s1.1-.5 3-1.3c1-.4 2.1-.8 3.5-1.4 1.3-.5 2.9-1.1 4.5-1.6 1.7-.5 3.5-1.1 5.5-1.7 1.9-.6 4-1 6.2-1.5s4.4-1 6.7-1.3c2.3-.4 4.6-.8 7-1 2.4-.2 4.7-.5 7-.7 2.3-.2 4.6-.2 6.8-.2s4.3 0 6.4.1c2 .2 3.9.3 5.7.5 1.8.2 3.4.4 4.8.7 1.4.2 2.7.4 3.7.7 1 .2 1.8.4 2.4.5.5.1.8.2.8.2l-.2.3z" }), /*#__PURE__*/
React.createElement("path", { d: "M848.5 246.5s-1.1.7-3.1 1.9c-1 .6-2.2 1.3-3.6 2.1-.7.4-1.4.8-2.2 1.2-.8.4-1.6.9-2.4 1.4-1.7.9-3.5 2-5.5 3.1-1 .5-2 1.1-3 1.7-1 .6-2.1 1.2-3.1 1.8-2.1 1.3-4.2 2.6-6.3 4-1.1.7-2.1 1.4-3.2 2.2-1 .8-2.1 1.5-3.1 2.3l-3 2.4c-1 .8-2 1.6-2.9 2.4l-1.5 1.2c-.5.4-.9.8-1.4 1.3-.9.8-1.8 1.6-2.7 2.5-1.7 1.7-3.4 3.3-4.9 4.9-.8.8-1.5 1.6-2.2 2.4-.7.8-1.3 1.5-2 2.3-1.3 1.4-2.4 2.9-3.3 4.1-.5.6-.9 1.2-1.4 1.7-.4.6-.8 1.1-1.1 1.5-1.3 1.8-2.1 2.9-2.1 2.9l-2.9-1.9s.7-1.1 1.9-3.1c.3-.5.7-1 1-1.6.4-.6.9-1.2 1.3-1.9.9-1.3 2-2.8 3.3-4.4.6-.8 1.3-1.6 1.9-2.4.7-.8 1.5-1.6 2.2-2.5 1.5-1.7 3.2-3.4 5-5.2.9-.9 1.9-1.7 2.8-2.6.5-.4 1-.9 1.4-1.3.5-.4 1-.8 1.5-1.3 1-.8 2-1.7 3.1-2.5s2.1-1.6 3.2-2.4c1.1-.8 2.2-1.5 3.3-2.3 1.1-.8 2.2-1.5 3.3-2.2 2.2-1.4 4.4-2.7 6.6-4 2.2-1.2 4.3-2.4 6.3-3.4s4-1.9 5.8-2.7c1.8-.8 3.5-1.4 5.1-2 .8-.3 1.5-.5 2.1-.7.7-.2 1.3-.4 1.8-.6 2.2-.7 3.5-1 3.5-1l.5.7z" }), /*#__PURE__*/
React.createElement("path", {
  fill: "none",
  strokeWidth: "3",
  d: "M768.4 246.8c-33.2-1.8-50.5 14-82.7 23.2" }), /*#__PURE__*/

React.createElement("path", { fill: "none", strokeWidth: "2", d: "M676.3 538.8l-27.4-3.5" }), /*#__PURE__*/
React.createElement("path", { fill: "none", strokeWidth: "1", d: "M801.2 376.7l-16.4 11.9" }), /*#__PURE__*/
React.createElement("path", {
  fill: "none",
  strokeWidth: "3",
  d: "M3.9 256c20 14.7 34.9 35.2 48.4 55.7" }), /*#__PURE__*/

React.createElement("path", { d: "M292.6 230.3s-.3.6-1 1.6c-.2.3-.3.6-.5.9-.2.3-.4.7-.6 1-.4.7-.9 1.6-1.5 2.5-.5 1-1.1 2.1-1.8 3.2-.6 1.2-1.4 2.5-2 3.9-1.4 2.8-2.9 6.1-4.5 9.7-1.5 3.6-3.2 7.6-4.9 11.7-1.8 4.2-3.7 8.6-6.1 13.1-.6 1.1-1.2 2.2-1.8 3.4-.7 1.1-1.3 2.2-2 3.4-1.4 2.1-2.8 4.3-4.2 6.4-2.8 4.3-5.7 8.8-8.7 13.1-3 4.4-6 8.7-8.8 13-2.9 4.3-5.7 8.5-8.4 12.6-2.6 4.1-5 8.2-7.4 12-1.2 1.9-2.4 3.8-3.4 5.6l-1.5 2.7c-.5.9-.9 1.8-1.4 2.7-1.7 3.5-3.4 6.8-5.1 9.7-1.7 2.9-3.6 5.3-5.3 7.1-1.7 1.8-3.2 3.1-4.2 3.9-1 .8-1.6 1.2-1.6 1.2l-3.1-4.3s.5-.4 1.4-1.1c.9-.7 2.2-1.8 3.6-3.4 1.5-1.5 3.1-3.6 4.6-6.2 1.6-2.6 3.1-5.8 4.9-9.3.5-.9.9-1.8 1.4-2.7.5-.9 1-1.9 1.5-2.8 1.1-1.9 2.3-3.7 3.4-5.7 2.4-3.9 4.9-8 7.6-12.2 2.8-4.1 5.6-8.4 8.5-12.7 2.9-4.3 5.9-8.6 8.9-12.9 3-4.3 5.9-8.7 8.7-13 1.4-2.2 2.8-4.3 4.2-6.4.6-1 1.3-2.1 1.9-3.1.6-1.1 1.2-2.1 1.8-3.2 2.3-4.3 4.2-8.6 6-12.7 1.8-4.2 3.5-8.1 5-11.7 1.6-3.6 3.1-7 4.6-9.9.7-1.5 1.5-2.8 2.2-4 .7-1.2 1.4-2.3 2.1-3.3.7-1 1.3-1.9 1.9-2.6.6-.8 1.1-1.3 1.5-1.8.8-.9 1.3-1.4 1.3-1.4l2.8 2z" }), /*#__PURE__*/
React.createElement("path", { d: "M299.8 156.1s-.3 1.3-.8 3.7c-.5 2.3-1.2 5.7-2.1 9.7-.4 2-.9 4.2-1.4 6.5-.5 2.3-1 4.7-1.5 7.2-1.1 5-2.2 10.4-3.4 15.7-1 5.4-2.1 10.7-3.1 15.8-.5 2.5-1 4.9-1.4 7.2-.4 2.3-.8 4.5-1.1 6.5-.4 2-.8 3.8-1.1 5.5-.4 1.6-.7 3-1 4.2-.6 2.3-1 3.6-1 3.6l-3.6-.5s.1-1.4.3-3.8c.1-1.2.3-2.7.5-4.3.2-1.7.4-3.5.8-5.6.3-2 .7-4.3 1.1-6.6.2-1.2.5-2.4.7-3.6.3-1.2.6-2.4.9-3.7 1.2-5 2.4-10.4 3.7-15.7 1.4-5.3 2.9-10.6 4.2-15.6.7-2.5 1.3-4.9 2-7.1.7-2.3 1.3-4.4 1.9-6.4 1.2-3.9 2.2-7.2 2.9-9.5.7-2.3 1.1-3.6 1.1-3.6l1.4.4z" }), /*#__PURE__*/
React.createElement("path", { d: "M325 192.5s-.6.8-1.7 2.3c-.6.7-1.2 1.6-2 2.6s-1.6 2.2-2.6 3.4c-1 1.2-2.1 2.5-3.2 3.9s-2.4 2.8-3.7 4.3c-2.5 3-5.4 6.1-8.1 9.2-2.8 3.1-5.5 6.3-8.1 9.2-1.3 1.5-2.6 2.9-3.7 4.2-1.2 1.4-2.3 2.6-3.3 3.8-1 1.2-1.9 2.3-2.7 3.3-.8 1-1.5 1.8-2.1 2.5-1.2 1.4-1.8 2.2-1.8 2.2l-2.3-1.8s.6-.8 1.8-2.3c.6-.7 1.3-1.6 2.1-2.6s1.7-2.1 2.8-3.3c1-1.2 2.2-2.5 3.3-3.8 1.2-1.4 2.5-2.7 3.8-4.2 1.3-1.4 2.7-2.9 4.1-4.4 1.4-1.5 2.9-3 4.3-4.5 2.9-3 5.8-6 8.5-8.8 1.3-1.4 2.7-2.8 3.9-4.1 1.2-1.3 2.4-2.6 3.4-3.7 1.1-1.1 2-2.2 2.9-3.2.8-1 1.6-1.8 2.2-2.5 1.2-1.4 1.9-2.2 1.9-2.2l.3.5zM153.8 382.7s2.1 2 5.9 5.5c1.9 1.7 4.2 3.8 6.7 6.3 1.3 1.2 2.7 2.5 4.1 3.9 1.5 1.3 3 2.7 4.6 4.2 3.2 2.9 6.7 6.1 10.5 9.3 1.9 1.6 3.8 3.3 5.8 4.9 2 1.7 4 3.4 6.1 5 2.1 1.7 4.3 3.3 6.4 5 2.2 1.7 4.3 3.4 6.6 5 4.4 3.4 8.9 6.7 13.6 9.6l1.8 1.1.9.5.1.1c.1 0-.4-.2-.2-.1h.1l.2.1.5.3 3.9 2.1 1.9 1 1 .5.9.4c1.2.6 2.4 1.1 3.6 1.7 2.4 1.2 5 2.2 7.5 3.2 2.5 1.1 5.1 2.1 7.6 3.1 2.6 1 5.1 2 7.5 3 1.2.5 2.5 1 3.7 1.4l3.6 1.5c2.4 1 4.7 1.9 6.9 3 2.2 1 4.3 2 6.3 3.1s3.9 2.2 5.7 3.2c.4.3.9.5 1.3.8h.1c.2.1.1 0 .1.1l.2.1.3.2.6.4c.8.5 1.5 1.1 2.3 1.6 1.5 1 2.8 2.1 4.1 3 1.3 1 2.4 1.8 3.4 2.6 2 1.6 3.6 2.7 4.7 3.5 1.1.8 1.7 1.3 1.7 1.3l-1.4 2.6s-.6-.4-1.9-1.1c-1.2-.7-3-1.7-5.2-3.1-2.2-1.4-4.7-3-7.8-4.8-.8-.4-1.6-.9-2.4-1.4-.4-.2-.8-.5-1.2-.7-.4-.2-.9-.4-1.3-.6-1.8-.9-3.6-1.8-5.6-2.7-2-.9-4.1-1.7-6.2-2.6-2.1-.9-4.4-1.8-6.8-2.6-1.2-.4-2.4-.9-3.6-1.3-1.2-.4-2.4-.8-3.7-1.3-2.5-.9-5-1.7-7.6-2.6-2.6-.9-5.2-1.8-7.9-2.8-2.7-1-5.4-1.9-8-3.1-1.3-.6-2.7-1.1-4-1.7-1.4-.5-2.6-1.3-3.9-1.9-1.3-.6-2.6-1.3-3.9-1.9-.3-.2-.6-.3-1-.5l-1-.6-1.9-1.1c-5.1-3-9.9-6.4-14.8-9.5-4.9-3.1-9.8-6.2-14.2-9.6-4.4-3.4-8.2-7.2-11.8-10.8-3.6-3.6-6.8-7.2-9.7-10.4-2.9-3.4-5.5-6.4-7.7-9.3-1.1-1.4-2.2-2.7-3.1-4-.9-1.3-1.8-2.4-2.5-3.4-1.5-2.1-2.7-3.7-3.5-4.8-.8-1.1-1.2-1.7-1.2-1.7l2.2-2.2zm17.1-15.6s.6-1.5 1.5-4.2c.5-1.3 1.1-2.9 1.7-4.8.6-1.8 1.4-3.9 2.2-6.2.8-2.3 1.6-4.7 2.5-7.4.8-2.6 1.7-5.4 2.6-8.2.4-1.4.9-2.9 1.3-4.4l1.2-4.5c.4-1.5.8-3.1 1.2-4.6.4-1.5.8-3.1 1.2-4.6.4-1.6.7-3.1 1.1-4.7.4-1.5.6-3.1.9-4.6.7-3.1 1.1-6.1 1.6-9.1.2-1.5.4-2.9.6-4.4l.3-2.1c.1-.7.1-1.4.2-2.1.1-1.4.3-2.7.4-4 .1-1.3.2-2.5.2-3.7.1-1.2.1-2.3.2-3.4 0-1.1 0-2.1.1-3.1v-2.7c0-.8 0-1.6-.1-2.3-.1-2.8-.1-4.4-.1-4.4l3-.3s.2 1.6.4 4.5c.1.7.2 1.5.2 2.4 0 .9.1 1.8.1 2.8 0 1 .1 2.1.1 3.2v3.5c0 1.2 0 2.5-.1 3.8-.1 1.3-.1 2.7-.2 4.1 0 .7-.1 1.4-.1 2.1-.1.7-.1 1.4-.2 2.2-.1 1.5-.3 3-.4 4.5-.4 3-.8 6.2-1.3 9.3-.3 1.6-.5 3.2-.8 4.8l-.9 4.8c-.3 1.6-.7 3.2-1 4.8-.3 1.6-.7 3.2-1.1 4.7-.4 1.6-.8 3.1-1.2 4.6-.4 1.5-.8 3-1.3 4.5-.8 2.9-1.7 5.8-2.5 8.4-.9 2.6-1.7 5.2-2.5 7.5s-1.5 4.4-2.2 6.3c-.7 1.9-1.3 3.5-1.8 4.8-1 2.6-1.6 4.1-1.6 4.1l-5.4-1.9z" }), /*#__PURE__*/
React.createElement("path", { d: "M141.5 293.8s.9 2.2 2.4 6c.8 1.9 1.8 4.2 2.9 6.8.6 1.3 1.2 2.7 1.9 4.1.7 1.4 1.4 3 2.1 4.6 1.6 3.1 3.2 6.6 5.1 10.1 1.8 3.6 3.9 7.3 6 11.2 2.1 3.9 4.4 7.8 6.6 11.9l6.9 12.3c2.3 4.1 4.6 8.3 6.8 12.4 1.1 2.1 2.2 4.1 3.2 6.2 1 2.1 2.1 4.1 3.1 6.1s1.9 4 2.8 6c.4 1 .9 2 1.3 2.9.4 1 .8 1.9 1.2 2.9.8 1.9 1.6 3.7 2.3 5.5.7 1.8 1.3 3.6 1.9 5.3.3.8.6 1.7.9 2.5.3.8.5 1.6.8 2.4.5 1.6 1 3.1 1.4 4.5.8 2.9 1.3 5.5 1.3 7.7v1.6c0 .5-.1 1-.1 1.4-.1.9-.2 1.6-.4 2.2-.2.6-.3 1-.4 1.4-.1.3-.2.5-.2.5l-3 .2s-.1-.6-.2-1.6c0-.5-.1-1.2-.2-2s-.2-1.7-.5-2.6c-.4-2-1-4.4-1.8-7.1-.8-2.7-1.9-5.8-3.1-9.1-.6-1.6-1.3-3.4-1.9-5.1-.7-1.8-1.5-3.6-2.2-5.4-.4-.9-.8-1.9-1.2-2.8-.4-.9-.9-1.9-1.3-2.9-.9-1.9-1.7-3.9-2.7-5.9-.9-2-1.9-4-2.9-6.1-1-2-2-4.1-3.1-6.2-2.1-4.1-4.2-8.3-6.4-12.5-2.2-4.2-4.4-8.3-6.6-12.4-2.2-4.1-4.3-8.2-6.3-12.1-2-4-4-7.8-5.7-11.4-1.8-3.6-3.4-7.2-4.9-10.4-1.4-3.3-2.8-6.2-3.8-8.9-1.1-2.7-2.1-5-2.7-7-1.4-3.9-2.2-6.1-2.2-6.1l2.9-1.1zm-26.3 89s.8.1 2.3.4c.7.2 1.6.3 2.6.5s2.1.4 3.3.7c1.2.3 2.5.6 3.9 1s2.8.7 4.3 1.2c1.5.4 3 .9 4.6 1.3 1.5.5 3.1.9 4.7 1.4 1.6.4 3.1.8 4.6 1.3 1.5.5 3 .8 4.5 1.2 1.5.3 2.8.8 4.2 1.1 1.3.3 2.5.7 3.7 1.1 1.1.4 2.2.7 3.1 1 .9.3 1.7.6 2.4.9.7.3 1.2.5 1.5.7.3.2.5.3.5.3l-1.2 7.1s-.8-.4-2.2-1c-.7-.3-1.5-.7-2.5-1-1-.4-2.1-.7-3.2-1.2-1.2-.4-2.5-.9-3.8-1.4-1.4-.4-2.8-1-4.3-1.5s-3-1-4.5-1.6c-1.5-.6-3.1-1.2-4.6-1.7-1.5-.6-3.1-1.2-4.6-1.8-1.5-.6-3-1.1-4.5-1.7-2.9-1.1-5.6-2.1-7.9-2.9-1.2-.4-2.2-.7-3.2-1.1-1-.3-1.8-.6-2.5-.8-1.4-.4-2.2-.6-2.2-.6l1-2.9z" }))), /*#__PURE__*/







React.createElement("g", { className: "flowers-front-layer" }, /*#__PURE__*/
React.createElement("linearGradient", {
  id: "ffl1",
  x1: "928.4297",
  x2: "928.021",
  y1: "3017.0508",
  y2: "3006.0156",
  gradientTransform: "matrix(.5577 .83 .83 -.5577 -2435.8057 1732.709)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl1)",
  d: "M584.5 826.5c3.2-2.3 4.9-5.6 3.6-7.6-1.2-1.9-4.9-1.6-8.1.6-3.2 2.3-4.9 5.6-3.6 7.6 1.2 2 4.8 1.7 8.1-.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl2",
  x1: "520.8164",
  x2: "520.4009",
  y1: "-1396.8867",
  y2: "-1408.1045",
  gradientTransform: "scale(1 -1) rotate(29.993 -514.75281328 -985.42744113)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl2)",
  d: "M593.5 826.3c-2-3.5-5.1-5.4-7-4.3-1.9 1.2-1.9 4.9 0 8.4 2 3.5 5.1 5.4 7 4.3 2-1.1 2-4.9 0-8.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl3",
  x1: "-156.3203",
  x2: "-157.4521",
  y1: "-131.7705",
  y2: "-162.3286",
  gradientTransform: "scale(1 -1) rotate(35.127 552.25932557 753.59991958)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl3)",
  d: "M496.8 383.4c-5.9-9.2-14.1-14-18.3-10.9-4.2 3.2-2.7 13.2 3.2 22.4s14.1 14 18.3 10.9c4.2-3.2 2.7-13.2-3.2-22.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl4",
  x1: "-2343.8145",
  x2: "-2344.7595",
  y1: "-3.9556",
  y2: "-29.4737",
  gradientTransform: "matrix(-.5754 -.8179 -.8179 .5754 -854.5752 -1539.665)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl4)",
  d: "M500.3 359.6c-7.3 5.6-10.4 14.3-7 19.6 3.4 5.2 12 5 19.3-.6 7.3-5.6 10.4-14.3 7-19.6-3.4-5.3-12-5-19.3.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl5",
  x1: "-2216.835",
  x2: "-2217.9668",
  y1: "2181.0684",
  y2: "2150.5095",
  gradientTransform: "matrix(-.8179 .5754 .5754 .8179 -2574.7131 -150.8788)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl5)",
  d: "M478.7 352.2c5.9 9.2 14.1 14 18.3 10.9 4.2-3.2 2.7-13.2-3.2-22.4s-14.1-14-18.3-10.9c-4.1 3.2-2.7 13.2 3.2 22.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl6",
  x1: "-643.1582",
  x2: "-643.808",
  y1: "-1068.6348",
  y2: "-1086.1791",
  gradientTransform: "scale(1 -1) rotate(44.627 -642.44718976 740.04435285)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl6)",
  d: "M637 547.2c-3.6-5.1-8.5-6.6-10.9-3.3-2.4 3.3-1.4 10.1 2.2 15.2s8.5 6.6 10.9 3.3c2.4-3.2 1.4-10-2.2-15.2z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl7",
  x1: "-3275.4233",
  x2: "-3276.1458",
  y1: "485.75",
  y2: "466.242",
  gradientTransform: "matrix(-.7025 -.7117 -.7117 .7025 -1318.9369 -2132.1216)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl7)",
  d: "M638.7 529.3c-4.2 5.8-5.9 12.8-3.8 15.7 2.1 2.9 7.1.6 11.3-5.1 4.2-5.8 5.9-12.8 3.8-15.7-2.1-3-7.1-.7-11.3 5.1z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl8",
  x1: "-1727.5171",
  x2: "-1728.1669",
  y1: "3120.5723",
  y2: "3103.0298",
  gradientTransform: "matrix(-.7117 .7025 .7025 .7117 -2786.3232 -478.5255)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl8)",
  d: "M625.9 529.3c3.6 5.1 8.5 6.6 10.9 3.3 2.4-3.3 1.4-10.1-2.2-15.2s-8.5-6.6-10.9-3.3c-2.4 3.2-1.4 10 2.2 15.2z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl9",
  x1: "913.8584",
  x2: "913.1359",
  y1: "1570.1182",
  y2: "1550.6095",
  gradientTransform: "matrix(.7025 .7117 .7117 -.7025 -1132.7838 988.8599)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl9)",
  d: "M624.3 547.2c4.2-5.8 5.9-12.8 3.8-15.7-2.1-2.9-7.1-.6-11.3 5.1-4.2 5.8-5.9 12.8-3.8 15.7 2 2.9 7.1.6 11.3-5.1z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl10",
  x1: "-1374.6279",
  x2: "-1375.701",
  y1: "3300.9756",
  y2: "3272.001",
  gradientTransform: "matrix(-.233 .9725 .9725 .233 -2943.5312 858.3896)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl10)",
  d: "M572.8 297.2c10 2.6 19.1.4 20.3-5 1.2-5.4-6-11.9-16-14.5-10-2.6-19.1-.4-20.3 5-1.2 5.4 6 11.9 16 14.5z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl11",
  x1: "1088.8184",
  x2: "1087.8229",
  y1: "1213.6973",
  y2: "1186.8201",
  gradientTransform: "matrix(.9725 .233 .233 -.9725 -764.24 1230.4513)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl11)",
  d: "M584.7 317.6c2.1-9.4-.9-18.2-6.6-19.7-5.7-1.5-12.1 4.9-14.1 14.3-2.1 9.4.9 18.2 6.6 19.7 5.7 1.6 12.1-4.9 14.1-14.3z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl12",
  x1: "-998.9375",
  x2: "-1000.0107",
  y1: "-1250.772",
  y2: "-1279.748",
  gradientTransform: "matrix(.233 -.9725 -.9725 -.233 -392.2217 -948.8164)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl12)",
  d: "M605.4 307.7c-10-2.6-19.1-.4-20.3 5-1.2 5.4 6 11.9 16 14.5 10 2.6 19.1.4 20.3-5 1.2-5.4-6-11.9-16-14.5z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl13",
  x1: "-2614.0864",
  x2: "-2614.6973",
  y1: "-1161.5527",
  y2: "-1178.0481",
  gradientTransform: "matrix(.08455 -.9964 -.9964 -.08455 -313.6118 -2433.2148)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl13)",
  d: "M630.7 257.9c-5.9-.5-11.1 4.7-11.6 11.7-.5 7 3.8 13.1 9.7 13.6 5.9.5 11.1-4.7 11.6-11.7.5-6.9-3.8-13-9.7-13.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl14",
  x1: "-980.501",
  x2: "-981.1338",
  y1: "3327.3525",
  y2: "3310.2673",
  gradientTransform: "matrix(-.2193 .9757 .9757 .2193 -2841.9512 480.1355)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl14)",
  d: "M610.6 263.8c5.7 2.2 11.1-1.6 12.1-8.5s-2.8-14.3-8.5-16.5c-5.7-2.2-11.1 1.6-12.1 8.5s2.8 14.3 8.5 16.5z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl15",
  x1: "703.4502",
  x2: "702.2144",
  y1: "519.6191",
  y2: "486.2537",
  gradientTransform: "matrix(.9584 .2853 .2853 -.9584 -204.1008 563.7766)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl15)",
  d: "M619.6 283c2.1-11.9 1.3-22.9-1.9-24.6-3.2-1.7-7.5 6.5-9.6 18.4-2.1 11.9-1.3 22.9 1.9 24.6 3.1 1.7 7.4-6.5 9.6-18.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl16",
  x1: "12.2383",
  x2: "11.51",
  y1: "565.8872",
  y2: "546.2237",
  gradientTransform: "matrix(1 0 0 -1 0 1019.8857)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("ellipse", { cx: "11.9", cy: "462.4", fill: "url(#ffl16)", rx: "6.7", ry: "12.8" }), /*#__PURE__*/
React.createElement("linearGradient", {
  id: "ffl17",
  x1: "-1987.3018",
  x2: "-1987.9719",
  y1: "-652.3882",
  y2: "-670.4825",
  gradientTransform: "matrix(.06817 -.9977 -.9977 -.06817 -496.8735 -1572.0952)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl17)",
  d: "M26.7 448.6c-6.5-.5-11.9 2.4-12.2 6.4-.3 4 4.8 7.7 11.2 8.1 6.5.5 11.9-2.4 12.2-6.4s-4.8-7.6-11.2-8.1z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl18",
  x1: "-3338.7021",
  x2: "-3339.429",
  y1: "1258.8193",
  y2: "1239.1946",
  gradientTransform: "matrix(-.9907 -.136 -.136 .9907 -3116.6953 -1253.0684)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl18)",
  d: "M14.6 438.9c-.9 7 1.4 13.1 5 13.6 3.7.5 7.4-4.7 8.2-11.6.9-7-1.4-13.1-5-13.6-3.7-.5-7.4 4.7-8.2 11.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl19",
  x1: "-1524.5728",
  x2: "-1525.2455",
  y1: "2738.0615",
  y2: "2719.8984",
  gradientTransform: "scale(-1 1) rotate(78.275 639.13922592 2520.43404945)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/


React.createElement("path", {
  fill: "url(#ffl19",
  d: "M5.6 437.1c-1.9-.4-3.8-.5-5.4-.4v13.8c.9.3 1.8.6 2.7.8 6.3 1.4 12.1-.6 12.8-4.5.8-3.9-3.8-8.2-10.1-9.7z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl20",
  x1: "824.3564",
  x2: "823.4471",
  y1: "720.854",
  y2: "696.3009",
  gradientTransform: "matrix(1 0 0 -1 0 1019.8857)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("ellipse", { cx: "824", cy: "309.5", fill: "url(#ffl20)", rx: "5.3", ry: "15.9" }), /*#__PURE__*/
React.createElement("linearGradient", {
  id: "ffl21",
  x1: "-3187.0576",
  x2: "-3187.967",
  y1: "1331.1504",
  y2: "1306.5957",
  gradientTransform: "matrix(-1 0 0 1 -2351.9629 -1040.0752)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("ellipse", { cx: "835.5", cy: "280.6", fill: "url(#ffl21)", rx: "5.3", ry: "15.9" }), /*#__PURE__*/
React.createElement("linearGradient", {
  id: "ffl22",
  x1: "-880.5488",
  x2: "-881.0742",
  y1: "3033.3926",
  y2: "3019.207",
  gradientTransform: "matrix(0 1 1 0 -2205.9648 1165.8474)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("ellipse", { cx: "821.4", cy: "285.1", fill: "url(#ffl22)", rx: "9.2", ry: "9.1" }), /*#__PURE__*/
React.createElement("linearGradient", {
  id: "ffl23",
  x1: "-3923.6562",
  x2: "-3924.2917",
  y1: "-623.498",
  y2: "-640.6567",
  gradientTransform: "matrix(-.724 -.6898 -.6898 .724 -2413.3223 -1838.1947)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl23)",
  d: "M858.4 407.1c-4.1 4.6-5.4 10.4-2.9 13 2.4 2.5 7.7.8 11.8-3.8 4.1-4.6 5.4-10.4 2.9-13-2.4-2.6-7.7-.8-11.8 3.8z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl24",
  x1: "-3442.6191",
  x2: "-3443.2583",
  y1: "3193.8516",
  y2: "3176.5923",
  gradientTransform: "matrix(-.7375 .6753 .6753 .7375 -3841.4219 381.2153)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl24)",
  d: "M845.2 410.7c4 4.7 9.2 6.5 11.7 4.1 2.5-2.5 1.3-8.3-2.7-13-4-4.7-9.2-6.5-11.7-4.1-2.5 2.4-1.3 8.3 2.7 13z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl25",
  x1: "-4725.9092",
  x2: "-4726.501",
  y1: "-538.2339",
  y2: "-554.2117",
  gradientTransform: "matrix(-.09805 -.5304 -1.5362 .284 -839.33 -1583.4984)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "#2d473b" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "#8db593" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl25)",
  d: "M460.8 764.6c-8.8 1.8-15.6 4.8-15.3 6.8.3 2 7.7 2.2 16.5.4 8.8-1.8 15.6-4.8 15.3-6.8-.4-2-7.7-2.2-16.5-.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl26",
  x1: "-2202.7305",
  x2: "-2203.3262",
  y1: "-2179.3062",
  y2: "-2195.3901",
  gradientTransform: "matrix(.2338 -.836 -.9631 -.2693 -1459.0969 -1840.6301)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "#789d80" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "#8db593" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl26)",
  d: "M132.7 584.1c-5.5-1.7-10.6-.5-11.4 2.7-.8 3.2 3 7.1 8.5 8.8 5.5 1.7 10.6.5 11.4-2.7.8-3.2-3-7.1-8.5-8.8z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl27",
  x1: "511.1279",
  x2: "510.3695",
  y1: "-704.3188",
  y2: "-724.7971",
  gradientTransform: "matrix(.8506 -.5259 -.5259 -.8506 -57.0686 151.4106)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl27)",
  d: "M759.9 485.5c-4.5-5.9-11.5-9-15.7-6.9-4.1 2.1-3.9 8.5.6 14.4s11.5 9 15.7 6.9c4.2-2.1 3.9-8.5-.6-14.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl28",
  x1: "-382.5947",
  x2: "-383.4617",
  y1: "3483.4521",
  y2: "3460.0442",
  gradientTransform: "matrix(.342 .9397 .9397 -.342 -2398.5325 2025.3076)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl28)",
  d: "M737.5 484.1c8-2.4 13.2-7.3 11.5-11-1.7-3.7-9.5-4.8-17.6-2.4-8 2.4-13.2 7.3-11.5 11s9.5 4.7 17.6 2.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl29",
  x1: "-3711.6128",
  x2: "-3712.7129",
  y1: "995.2432",
  y2: "965.5379",
  gradientTransform: "matrix(-.9907 -.136 -.136 .9907 -3116.6953 -1253.0684)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl29)",
  d: "M417.2 223.8c-1.3 10.6 2.1 19.8 7.6 20.6 5.5.8 11.1-7.1 12.5-17.6 1.3-10.6-2.1-19.8-7.6-20.6-5.6-.9-11.2 7-12.5 17.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl30",
  x1: "-1813.3647",
  x2: "-1814.3829",
  y1: "3088.9111",
  y2: "3061.4192",
  gradientTransform: "scale(-1 1) rotate(78.275 639.13922592 2520.43404945)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl30)",
  d: "M402.5 242.7c9.6 2.2 18.3-.9 19.4-6.9 1.1-6-5.7-12.6-15.3-14.7-9.6-2.2-18.3.9-19.4 6.9-1.1 5.9 5.8 12.5 15.3 14.7z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl31",
  x1: "-3554.9077",
  x2: "-3555.6943",
  y1: "-2387.0396",
  y2: "-2408.2788",
  gradientTransform: "matrix(-.04257 -.8027 -.7615 .04039 -1888.2424 -2343.9988)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl31)",
  d: "M87.5 405.3c-5.8.3-10.3 4.1-10.1 8.4.2 4.3 5.1 7.6 10.9 7.2 5.8-.3 10.3-4.1 10.1-8.4-.3-4.3-5.2-7.5-10.9-7.2z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl32",
  x1: "-4842.4604",
  x2: "-4843.3003",
  y1: "1550.7725",
  y2: "1528.1019",
  gradientTransform: "matrix(-.7509 -.287 -.2722 .7124 -3134.8438 -2085.1133)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl32)",
  d: "M75.3 399.6c-2.1 5.8-.7 11.8 3.1 13.4 3.8 1.5 8.5-1.9 10.6-7.8 2.1-5.8.7-11.8-3.1-13.4-3.9-1.5-8.6 2-10.6 7.8z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl33",
  x1: "-1951.8896",
  x2: "-1952.709",
  y1: "4390.2803",
  y2: "4368.1592",
  gradientTransform: "matrix(-.5671 .5697 .5405 .538 -3404.3154 -840.757)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl33)",
  d: "M65.5 409.4c4.1 4.4 9.7 5.5 12.6 2.4 2.8-3.1 1.8-9.1-2.3-13.6-4.1-4.4-9.7-5.5-12.6-2.4-2.8 3.1-1.8 9.2 2.3 13.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl34",
  x1: "1684.502",
  x2: "1683.7083",
  y1: "2757.7256",
  y2: "2736.2966",
  gradientTransform: "matrix(.2905 .7495 .7111 -.2756 -2376.5042 -89.3348)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl34)",
  d: "M69.8 422.9c5.4-2.3 8.6-7.4 7.2-11.4-1.5-4-7-5.5-12.4-3.2s-8.6 7.4-7.2 11.4c1.4 4.1 7 5.5 12.4 3.2z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl35",
  x1: "1744.6221",
  x2: "1743.7739",
  y1: "-1407.6904",
  y2: "-1430.5914",
  gradientTransform: "matrix(.8029 .03883 .03683 -.7617 -1272.5371 -723.5989)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl35)",
  d: "M83 424.2c.3-6.3-2.7-11.5-6.8-11.7-4-.2-7.5 4.7-7.8 10.9-.3 6.2 2.8 11.5 6.8 11.7 4.1.2 7.6-4.6 7.8-10.9z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl36",
  x1: "-3913.2671",
  x2: "-3914.189",
  y1: "-2302.04",
  y2: "-2326.9285",
  gradientTransform: "matrix(-.04257 -.8027 -.7615 .04039 -1888.2424 -2343.9988)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl36)",
  d: "M39.1 695c-6.8.4-12.1 4.9-11.8 10 .2 5.1 6 9 12.7 8.6 6.8-.4 12.1-4.9 11.8-10-.2-5.2-5.9-9-12.7-8.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl37",
  x1: "-4913.5386",
  x2: "-4914.5293",
  y1: "1929.752",
  y2: "1902.999",
  gradientTransform: "matrix(-.7509 -.287 -.2722 .7124 -3134.8457 -2085.1133)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl37)",
  d: "M24.8 688.3c-2.4 6.9-.8 14 3.6 15.8 4.4 1.8 9.9-2.3 12.4-9.2 2.4-6.9.8-14-3.6-15.8-4.4-1.8-10 2.3-12.4 9.2z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl38",
  x1: "-1651.7065",
  x2: "-1652.6709",
  y1: "4612.0303",
  y2: "4585.9922",
  gradientTransform: "matrix(-.5671 .5697 .5405 .538 -3404.3154 -840.757)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl38)",
  d: "M13.4 699.8c4.8 5.2 11.4 6.5 14.7 2.9 3.3-3.6 2.1-10.8-2.7-16-4.8-5.2-11.4-6.5-14.7-2.9-3.3 3.6-2.1 10.8 2.7 16z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl39",
  x1: "1999.4189",
  x2: "1998.4879",
  y1: "2557.793",
  y2: "2532.656",
  gradientTransform: "matrix(.2905 .7495 .7111 -.2756 -2376.5042 -89.3348)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl39)",
  d: "M18.4 715.8c6.3-2.7 10.1-8.7 8.4-13.5-1.7-4.8-8.2-6.5-14.6-3.8-6.3 2.7-10.1 8.7-8.4 13.5 1.8 4.8 8.3 6.5 14.6 3.8z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl40",
  x1: "1699.7178",
  x2: "1698.7157",
  y1: "-1792.8975",
  y2: "-1819.9532",
  gradientTransform: "matrix(.8029 .03883 .03683 -.7617 -1272.5371 -723.5989)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl40)",
  d: "M33.9 717.3c.3-7.4-3.2-13.6-7.9-13.8-4.7-.2-8.8 5.5-9.1 12.9-.3 7.4 3.2 13.6 7.9 13.8 4.7.3 8.8-5.5 9.1-12.9z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl41",
  x1: "-6037.1338",
  x2: "-6038.3081",
  y1: "-1349.7334",
  y2: "-1381.4396",
  gradientTransform: "matrix(-.6049 -.5294 -.5023 .5738 -4184.0928 -1873.5299)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl41)",
  d: "M144.7 533.5c-5.6 6.6-6.5 15.3-2.1 19.3s12.6 1.9 18.2-4.7 6.5-15.2 2.1-19.3c-4.5-4-12.6-1.9-18.2 4.7z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl42",
  x1: "-4949.8481",
  x2: "-4951.0352",
  y1: "4361.8154",
  y2: "4329.7656",
  gradientTransform: "matrix(-.7294 .3379 .3205 .692 -4868.168 -799.7112)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl42)",
  d: "M126.7 541.2c3.6 8 10.8 12.4 16.1 9.8 5.3-2.6 6.8-11.1 3.2-19.1-3.6-8-10.8-12.4-16.1-9.8-5.3 2.6-6.8 11.1-3.2 19.1z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl43",
  x1: "443.9678",
  x2: "442.8162",
  y1: "5632.751",
  y2: "5601.6587",
  gradientTransform: "matrix(.01266 .8038 .7625 -.01201 -4164.5171 261.3787)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl43)",
  d: "M126.2 561.4c8.5-.1 15.3-5.2 15.2-11.3-.1-6.1-7-10.9-15.5-10.8-8.5.1-15.3 5.2-15.2 11.3.1 6.1 7.1 10.9 15.5 10.8z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl44",
  x1: "3735.5537",
  x2: "3734.3674",
  y1: "952.6079",
  y2: "920.5778",
  gradientTransform: "matrix(.7397 .3147 .2986 -.7017 -2909.1431 49.0779)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl44)",
  d: "M143.8 570c3.3-8.1 1.6-16.6-3.8-19-5.4-2.4-12.5 2.2-15.8 10.3-3.3 8.1-1.6 16.6 3.8 19 5.4 2.4 12.5-2.2 15.8-10.3z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl45",
  x1: "1013.5469",
  x2: "1012.3718",
  y1: "-4117.7812",
  y2: "-4149.5093",
  gradientTransform: "matrix(.5879 -.5482 -.5201 -.5577 -2593.5366 -1184.3832)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl45)",
  d: "M158.5 556.9c-5.8-6.4-14-8.3-18.3-4.1-4.3 4.2-3.1 12.8 2.7 19.2 5.8 6.4 14 8.3 18.3 4.1 4.3-4.2 3.1-12.8-2.7-19.2z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl46",
  x1: "-3912.3696",
  x2: "-3913.0771",
  y1: "-2698.9878",
  y2: "-2718.0935",
  gradientTransform: "matrix(-.04257 -.8027 -.7615 .04039 -1888.2424 -2343.9988)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl46)",
  d: "M339.6 680.4c-5.2.3-9.3 3.7-9.1 7.7.2 3.9 4.6 6.9 9.8 6.6 5.2-.3 9.3-3.7 9.1-7.7-.2-4-4.6-6.9-9.8-6.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl47",
  x1: "-1932.0029",
  x2: "-1932.7433",
  y1: "4879.8564",
  y2: "4859.8662",
  gradientTransform: "matrix(-.5671 .5697 .5405 .538 -3404.3154 -840.757)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl47)",
  d: "M319.8 684.1c3.7 4 8.8 5 11.3 2.2 2.6-2.8 1.6-8.3-2.1-12.3s-8.8-5-11.3-2.2-1.6 8.3 2.1 12.3z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl48",
  x1: "2075.749",
  x2: "2074.9797",
  y1: "-1750.5938",
  y2: "-1771.3643",
  gradientTransform: "matrix(.8029 .03883 .03683 -.7617 -1272.5371 -723.5989)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl48)",
  d: "M335.6 697.5c.3-5.7-2.5-10.4-6.1-10.6-3.6-.2-6.8 4.3-7 9.9-.3 5.7 2.5 10.4 6.1 10.6 3.6.2 6.8-4.2 7-9.9z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl49",
  x1: "-2765.3711",
  x2: "-2766.2617",
  y1: "9845.9395",
  y2: "9821.8945",
  gradientTransform: "matrix(-.3357 .6513 .2929 .151 -3148.0659 748.3168)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl49)",
  d: "M658 439.4c2.5 1.4 6-.7 7.8-4.6 1.9-3.9 1.4-8.2-1.1-9.6-2.5-1.4-6 .7-7.8 4.6-1.8 3.9-1.3 8.2 1.1 9.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl50",
  x1: "-5419.5933",
  x2: "-5420.3379",
  y1: "-884.1694",
  y2: "-904.2714",
  gradientTransform: "matrix(-.5602 -.5765 -.5469 .5314 -3306.1621 -2198.2144)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl50)",
  d: "M216.5 450.2c-3.7 4.1-5.8 8.4-4.8 9.4 1 1.1 4.8-1.4 8.4-5.6 3.7-4.1 5.8-8.4 4.8-9.4-1-1.1-4.8 1.4-8.4 5.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl51",
  x1: "-4300.4434",
  x2: "-4300.8667",
  y1: "3961.6182",
  y2: "3950.186",
  gradientTransform: "matrix(-.7543 .2779 .2636 .7156 -4074.6582 -1183.1028)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl51)",
  d: "M207.5 457.1c-.2 3.1 1.9 3.8 4.6 1.6 2.7-2.2 5.1-6.5 5.3-9.5.2-3.1-1.9-3.8-4.6-1.6-2.7 2.2-5.1 6.4-5.3 9.5z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl52",
  x1: "362.1338",
  x2: "361.6655",
  y1: "4845.3848",
  y2: "4832.7407",
  gradientTransform: "matrix(-.05224 .8022 .761 .04956 -3458.9272 -68.6907)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl52)",
  d: "M203.2 466.6c3.5-1.6 7.3-5.3 8.6-8.1 1.2-2.8-.6-3.8-4.1-2.2-3.5 1.6-7.3 5.3-8.6 8.1-1.3 2.9.6 3.9 4.1 2.2z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl53",
  x1: "3013.2773",
  x2: "3012.5469",
  y1: "717.3379",
  y2: "697.6122",
  gradientTransform: "matrix(.7119 .3734 .3542 -.6754 -2190.519 -178.9958)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl53)",
  d: "M208.6 467.4c3-4.4 4.1-8.1 2.4-8.2-1.7-.1-5.6 3.4-8.6 7.8s-4.1 8.1-2.4 8.2c1.7.1 5.6-3.4 8.6-7.8z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl54",
  x1: "514.0918",
  x2: "513.7824",
  y1: "-3513.7532",
  y2: "-3522.1062",
  gradientTransform: "matrix(.6302 -.499 -.4734 -.5979 -1776.4055 -1382.9664)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl54)",
  d: "M217.4 458.5c-1-1.9-4-1.3-6.6 1.5-2.6 2.7-3.9 6.6-2.9 8.5 1 1.9 4 1.3 6.6-1.5 2.6-2.7 3.9-6.5 2.9-8.5z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl55",
  x1: "-3237.4185",
  x2: "-3238.0017",
  y1: "2770.7285",
  y2: "2754.9827",
  gradientTransform: "matrix(-.9972 .07476 .07476 .9972 -3214.646 -1868.9102)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl55)",
  d: "M215.2 646c.2 5.6 2.9 9.9 5.9 9.5 3-.4 5.2-5.2 5-10.8-.2-5.6-2.9-9.9-5.9-9.5-3.1.3-5.3 5.2-5 10.8z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl56",
  x1: "-8.4766",
  x2: "-9.019",
  y1: "2741.0039",
  y2: "2726.3574",
  gradientTransform: "matrix(.0066 1 1 -.0066 -2525.3931 678.6729)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl56)",
  d: "M209.1 657.7c5.3-.2 9.6-3 9.6-6.3.1-3.2-4.1-5.7-9.4-5.4-5.3.2-9.6 3-9.6 6.3 0 3.2 4.2 5.7 9.4 5.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl57",
  x1: "637.7334",
  x2: "637.0942",
  y1: "-181.5576",
  y2: "-198.8142",
  gradientTransform: "matrix(.8498 -.2679 -.3994 -1.267 -391.3694 456.8478)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "#8db593" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "#678a70" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl57)",
  d: "M231.2 523.6c-2.3-7.9-6.5-13.4-9.5-12.4s-3.5 8.2-1.2 16.1c2.3 7.9 6.5 13.4 9.5 12.4 2.9-1 3.4-8.2 1.2-16.1z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl58",
  x1: "-4005.2183",
  x2: "-4005.9451",
  y1: "956.2773",
  y2: "936.6526",
  gradientTransform: "matrix(-.9907 -.136 -.136 .9907 -3116.6953 -1253.0684)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl58)",
  d: "M716 229.9c-.9 7 1.4 13.1 5 13.6 3.7.5 7.4-4.7 8.2-11.6.9-7-1.4-13.1-5-13.6-3.6-.6-7.3 4.6-8.2 11.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl59",
  x1: "-1871.8481",
  x2: "-1872.5209",
  y1: "3382.4004",
  y2: "3364.2371",
  gradientTransform: "scale(-1 1) rotate(78.275 639.13922592 2520.43404945)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl59)",
  d: "M706.4 242.3c6.3 1.4 12.1-.6 12.8-4.5.8-3.9-3.8-8.3-10.1-9.7-6.3-1.4-12.1.6-12.8 4.5-.8 4 3.7 8.3 10.1 9.7z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl60",
  x1: "-3330.978",
  x2: "-3331.6589",
  y1: "-679.8379",
  y2: "-698.2249",
  gradientTransform: "matrix(-.46 -.8879 -.8879 .46 -1500.6836 -2244.8113)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl60)",
  d: "M639.1 390.4c-5.8 3.2-9 8.8-7.3 12.3 1.7 3.6 7.7 3.8 13.5.6 5.8-3.2 9-8.8 7.3-12.3-1.7-3.6-7.7-3.9-13.5-.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl61",
  x1: "-608.9219",
  x2: "-609.4639",
  y1: "3917.9268",
  y2: "3903.2908",
  gradientTransform: "matrix(.2811 .9597 .9597 -.2811 -3067.4739 2465.8723)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl61)",
  d: "M517.3 786.9c5.2-.6 8.6-3.4 7.5-6.3-1.1-2.8-6.2-4.6-11.5-4-5.2.6-8.6 3.4-7.5 6.3 1.1 2.8 6.3 4.6 11.5 4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl62",
  x1: "-1757.3857",
  x2: "-1757.9277",
  y1: "-1863.6045",
  y2: "-1878.2386",
  gradientTransform: "matrix(-.2811 -.9597 -.9597 .2811 -1751.655 -370.2864)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl62)",
  d: "M534.8 785.8c-5.2.6-8.6 3.4-7.5 6.3 1.1 2.8 6.2 4.6 11.5 4 5.2-.6 8.6-3.4 7.5-6.3-1.1-2.9-6.2-4.6-11.5-4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl63",
  x1: "-4071.6138",
  x2: "-4072.1594",
  y1: "1602.7891",
  y2: "1588.0551",
  gradientTransform: "matrix(-.9597 .2811 .2811 .9597 -3827.606 389.871)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl63)",
  d: "M523.4 778.2c1.9 4.9 5.9 8.6 8.9 8.3 3-.4 3.8-4.7 1.9-9.6-1.9-4.9-5.9-8.6-8.9-8.3-2.9.3-3.8 4.6-1.9 9.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl64",
  x1: "238.0859",
  x2: "237.4481",
  y1: "-1306.1738",
  y2: "-1323.3961",
  gradientTransform: "matrix(.8169 -.2937 -.3384 -.941 -394.5942 -378.434)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "#678a70" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "#8db593" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl64)",
  d: "M249.3 785.7c-1.9-5.9-5.8-9.7-8.7-8.6-2.8 1.1-3.6 6.8-1.7 12.6 1.9 5.8 5.8 9.7 8.7 8.6 2.9-1.1 3.6-6.7 1.7-12.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl65",
  x1: "-1426.3008",
  x2: "-1427.3923",
  y1: "-1592.9482",
  y2: "-1622.4196",
  gradientTransform: "matrix(.3203 -.7373 -.6995 -.3038 -309.9863 -1209.4136)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl65)",
  d: "M360 320.2c-7.2-3.5-14.8-1.8-17 3.8-2.2 5.6 1.9 13 9.1 16.6 7.2 3.5 14.8 1.8 17-3.8 2.2-5.7-1.9-13.1-9.1-16.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl66",
  x1: "-3287.4478",
  x2: "-3288.5732",
  y1: "-179.5312",
  y2: "-209.9164",
  gradientTransform: "matrix(-.5438 -.592 -.5616 .5159 -1541.0394 -1534.2953)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl66)",
  d: "M348.3 304.7c-5.8 6-7.5 14.5-3.8 19s11.4 3.3 17.2-2.7c5.8-6 7.5-14.5 3.8-19s-11.4-3.3-17.2 2.7z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl67",
  x1: "-2819.9126",
  x2: "-2821.1011",
  y1: "2188.6094",
  y2: "2156.5198",
  gradientTransform: "matrix(-.7618 .2566 .2435 .7227 -2337.6987 -541.1354)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl67)",
  d: "M331 310.4c2.5 8.4 8.7 13.6 13.9 11.6 5.2-2 7.3-10.3 4.8-18.7-2.5-8.4-8.7-13.6-13.9-11.6-5.1 1.9-7.3 10.3-4.8 18.7z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl68",
  x1: "-575.6572",
  x2: "-576.7264",
  y1: "2698.9414",
  y2: "2670.073",
  gradientTransform: "matrix(-.07471 .8004 .7593 .07088 -1753.4668 590.1067)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl68)",
  d: "M328.7 330.5c7.8.8 14.6-3.5 15.1-9.6s-5.4-11.7-13.3-12.6c-7.8-.8-14.6 3.5-15.1 9.6s5.4 11.8 13.3 12.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl69",
  x1: "-2354.1016",
  x2: "-2354.616",
  y1: "5460.2158",
  y2: "5446.3286",
  gradientTransform: "matrix(-.3406 .7281 .6908 .3231 -3927.8665 283.5253)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl69)",
  d: "M639.7 336.6c3.4 1.8 7 1.1 8-1.6 1.1-2.6-.7-6.2-4.1-7.9-3.4-1.8-7-1.1-8 1.6-1.1 2.6.8 6.1 4.1 7.9z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl70",
  x1: "2447.6523",
  x2: "2447.1243",
  y1: "3580.8096",
  y2: "3566.551",
  gradientTransform: "matrix(.5271 .6069 .5757 -.5001 -2706.3091 642.4658)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl70)",
  d: "M645 344c2.8-2.7 3.7-6.7 2-8.9-1.7-2.2-5.3-1.7-8.1 1s-3.7 6.7-2 8.9c1.7 2.2 5.3 1.7 8.1-1z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl81",
  x1: "2766.4287",
  x2: "2765.8689",
  y1: "-1807.1206",
  y2: "-1822.2335",
  gradientTransform: "matrix(.7686 -.2354 -.2233 -.7292 -1882.3802 -328.1908)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl81)",
  d: "M653.2 341.6c-1.1-4-3.9-6.5-6.4-5.7-2.5.8-3.6 4.8-2.5 8.7 1.1 4 3.9 6.5 6.4 5.7 2.5-.8 3.6-4.8 2.5-8.7z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl82",
  x1: "-1774.9072",
  x2: "-1775.4105",
  y1: "-4301.7515",
  y2: "-4315.3413",
  gradientTransform: "matrix(.09691 -.798 -.7571 -.09194 -2434.9746 -1475.2183)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl82)",
  d: "M654.6 332.2c-3.7-.5-6.9 1.4-7.2 4.3-.3 2.9 2.4 5.6 6.1 6.1 3.7.5 6.9-1.4 7.2-4.3.3-2.9-2.4-5.6-6.1-6.1z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl83",
  x1: "-4567.8315",
  x2: "-4568.9434",
  y1: "4652.0713",
  y2: "4622.0513",
  gradientTransform: "matrix(-.8354 .3862 .2889 .625 -4772.8008 -387.9675)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl83)",
  d: "M375.2 751.3c3.2 6.7 9.5 10.3 14.2 8 4.7-2.2 6-9.5 2.8-16.2-3.2-6.7-9.5-10.3-14.2-8-4.7 2.3-5.9 9.5-2.8 16.2z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl84",
  x1: "-5576.0645",
  x2: "-5577.1763",
  y1: "6272.5586",
  y2: "6242.5405",
  gradientTransform: "matrix(-.5847 .2703 .1794 .3881 -4011.7876 -302.5557)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl84)",
  d: "M366.3 622.6c2 4.1 6.3 6.2 9.6 4.6 3.3-1.6 4.4-6.2 2.4-10.4-2-4.1-6.3-6.2-9.6-4.6-3.3 1.6-4.4 6.2-2.4 10.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl85",
  x1: "385.542",
  x2: "385.1334",
  y1: "3114.3076",
  y2: "3103.2749",
  gradientTransform: "rotate(-106.913 -753.12444939 1674.87195315)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl85)",
  d: "M287.2 164.2c3.8-1.1 7.5-.2 8.2 2 .7 2.2-1.8 4.8-5.6 5.9-3.8 1.1-7.5.2-8.2-2-.7-2.1 1.8-4.8 5.6-5.9z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl86",
  x1: "580.8418",
  x2: "580.4263",
  y1: "-848.6318",
  y2: "-859.8503",
  gradientTransform: "rotate(-20.82 3189.15936458 445.4509325)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl86)",
  d: "M293.1 157.4c1.5 3.7 1 7.4-1.2 8.1-2.1.8-5-1.6-6.5-5.4-1.5-3.7-1-7.4 1.2-8.2 2.1-.7 5 1.7 6.5 5.5z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl87",
  x1: "-869.4854",
  x2: "-870.5585",
  y1: "2883.1904",
  y2: "2854.2158",
  gradientTransform: "matrix(.8863 .07397 -.1769 -.8582 1464.5156 2869.1631)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl87)",
  d: "M194.4 341.7c-1.7-8.9-6.9-16.3-11.8-16.7-4.9-.3-7.5 6.6-5.8 15.5 1.7 8.9 6.9 16.3 11.8 16.7 4.9.3 7.5-6.7 5.8-15.5z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl88",
  x1: "671.0293",
  x2: "670.0339",
  y1: "708.5557",
  y2: "681.6792",
  gradientTransform: "matrix(-.1769 -.8582 -.8863 -.07397 944.8999 965.1921)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl88)",
  d: "M206.7 328.9c-8.5-.6-14.6 3.1-13.7 8.2.9 5.1 8.6 9.6 17.1 10.2 8.5.6 14.6-3.1 13.7-8.2-.9-5-8.6-9.6-17.1-10.2z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl89",
  x1: "-1504.0776",
  x2: "-1505.1509",
  y1: "-832.981",
  y2: "-861.9589",
  gradientTransform: "matrix(-.8863 -.07397 .1769 .8582 -984.5059 927.3402)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl89)",
  d: "M190.7 312.6c1.7 8.9 6.9 16.3 11.8 16.7 4.9.3 7.5-6.6 5.8-15.5-1.7-8.9-6.9-16.3-11.8-16.7-4.9-.3-7.5 6.6-5.8 15.5z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl80",
  x1: "-3050.8623",
  x2: "-3051.4731",
  y1: "-672.7363",
  y2: "-689.2302",
  gradientTransform: "matrix(-.8498 .05556 .3078 .8596 -2232.5435 1050.4434)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl80)",
  d: "M140.3 297.4c1.8 5.1 8 8.8 14 8.4 5.9-.4 9.3-4.9 7.5-10-1.8-5.1-8-8.8-14-8.4-5.9.5-9.3 4.9-7.5 10z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl91",
  x1: "-481.2969",
  x2: "-481.9296",
  y1: "2902.4844",
  y2: "2885.3999",
  gradientTransform: "matrix(.8838 .06188 -.1894 -.8591 1115.6226 2831.0649)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl91)",
  d: "M152.7 313.8c-.3-5.1-5.5-9.3-11.5-9.2-6 0-10.6 4.2-10.3 9.3.3 5.1 5.5 9.3 11.5 9.2 6.1 0 10.7-4.2 10.3-9.3z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl92",
  x1: "313.6055",
  x2: "312.3697",
  y1: "-7.3818",
  y2: "-40.7469",
  gradientTransform: "matrix(-.1287 -.8529 -.8946 -.1203 185.7021 573.425)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl92)",
  d: "M165.1 303.7c-10.5-.3-19.3 1.8-19.5 4.8-.2 2.9 8.2 5.5 18.7 5.8 10.6.3 19.3-1.8 19.5-4.8.3-2.9-8.1-5.5-18.7-5.8z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl93",
  x1: "-3735.771",
  x2: "-3736.3628",
  y1: "-467.9629",
  y2: "-483.9406",
  gradientTransform: "matrix(.3491 .4111 -1.1908 1.0112 1004.5498 2299.4766)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "#2d473b" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "#8db593" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl93)",
  d: "M268.1 286.2c-6.9 5.7-13.6 9.1-15 7.5-1.3-1.5 3.2-7.4 10.1-13.1 6.9-5.7 13.6-9.1 15-7.5 1.3 1.6-3.2 7.5-10.1 13.1z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl94",
  x1: "-1155.8389",
  x2: "-1156.381",
  y1: "3846.7178",
  y2: "3832.0818",
  gradientTransform: "rotate(-124.488 -1384.80141211 1665.994113)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl94)",
  d: "M275.5 241.4c3.8-3.7 8.1-4.5 9.6-1.8 1.5 2.6-.4 7.7-4.2 11.4-3.8 3.7-8.1 4.5-9.6 1.8s.4-7.8 4.2-11.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl95",
  x1: "-1210.4707",
  x2: "-1211.0127",
  y1: "-1792.3965",
  y2: "-1807.031",
  gradientTransform: "rotate(55.512 -2384.5041187 633.35834277)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl95)",
  d: "M287.4 228.4c-3.8 3.7-8.1 4.5-9.6 1.8-1.5-2.6.4-7.7 4.2-11.4 3.8-3.7 8.1-4.5 9.6-1.8s-.4 7.8-4.2 11.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl96",
  x1: "-4000.4038",
  x2: "-4000.9495",
  y1: "1055.876",
  y2: "1041.142",
  gradientTransform: "matrix(-.8242 .5662 -.5662 -.8242 -2413.1428 3368.7458)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl96)",
  d: "M286.1 242.1c-2.6-4.6-3-10-.8-12.1 2.2-2.1 6 0 8.7 4.6 2.6 4.6 3 10 .8 12.1-2.2 2.1-6.1 0-8.7-4.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl97",
  x1: "-1440.6201",
  x2: "-1441.8058",
  y1: "701.2017",
  y2: "669.1896",
  gradientTransform: "matrix(-.04625 1.0362 -1.0362 -.04625 754.9902 1864.321)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl97)",
  d: "M112.2 350.2c-11.7-4.2-22.6-12.6-24.2-18.7-1.6-6.1 6.5-7.6 18.3-3.3 11.7 4.3 22.6 12.6 24.2 18.7 1.6 6.1-6.6 7.6-18.3 3.3z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl98",
  x1: "-1521.0791",
  x2: "-1522.1639",
  y1: "1281.3457",
  y2: "1252.0555",
  gradientTransform: "rotate(-177.446 -744.09664384 822.503252) scale(1.03723)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl98)",
  d: "M99 362.2c-2.9-10.6.2-17.3 6.9-14.9 6.7 2.4 14.5 13 17.3 23.6 2.9 10.6-.2 17.3-6.9 14.9-6.6-2.4-14.4-13-17.3-23.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl99",
  x1: "-866.5684",
  x2: "-867.6533",
  y1: "762.2231",
  y2: "732.9315",
  gradientTransform: "rotate(2.554 9802.6293733 22398.2528223) scale(1.03723)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl99)",
  d: "M87.3 326.4c2.9 10.6-.2 17.3-6.9 14.9-6.7-2.4-14.5-13-17.3-23.6-2.9-10.6.2-17.3 6.9-14.9 6.7 2.4 14.4 13 17.3 23.6z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl100",
  x1: "-1529.0088",
  x2: "-1530.5562",
  y1: "-77.833",
  y2: "-119.6122",
  gradientTransform: "matrix(-.7968 .664 -.664 -.7968 -1244.8018 1235.1384)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl100)",
  d: "M29.9 302.5c-9.5-12.3-13.7-25.5-9.5-29.3 4.2-3.8 15.3 3.1 24.8 15.4s13.7 25.5 9.5 29.3c-4.2 3.9-15.3-3-24.8-15.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl101",
  x1: "-840.0312",
  x2: "-841.5787",
  y1: "2124.998",
  y2: "2083.2178",
  gradientTransform: "matrix(.7968 -.664 .664 .7968 -738.5986 -1968.0583)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl101)",
  d: "M-.2 269.8c.1 7.6.1 15.5.2 23.7 2 .5 3.7.2 4.9-.8 3.4-3.3 1.1-12.8-5.1-22.9z" }), /*#__PURE__*/


React.createElement("linearGradient", {
  id: "ffl102",
  x1: "-91.6953",
  x2: "-92.6948",
  y1: "681.1982",
  y2: "654.2111",
  gradientTransform: "matrix(.664 .7968 -.7968 .664 609.8691 -113.3906)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/


React.createElement("path", {
  fill: "url(#ffl102)",
  d: "M26.5 245.8c-5.4-7.1-15.8-7.3-23.2-.6-1.5 1.3-2.7 2.8-3.7 4.4.1 6.5.2 13.4.2 20.7 5.4 6.9 15.7 7.1 23.1.5 7.4-6.8 9-18 3.6-25z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl103",
  x1: "818.3906",
  x2: "817.9819",
  y1: "4166.4922",
  y2: "4155.458",
  gradientTransform: "rotate(123.059 1600.35803186 2317.454912)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl103)",
  d: "M479 659.5c-3.3-2.2-5-5.6-3.7-7.5 1.2-1.9 4.9-1.7 8.1.5 3.3 2.2 5 5.6 3.7 7.5-1.2 2-4.9 1.7-8.1-.5z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl104",
  x1: "1660.082",
  x2: "1659.6665",
  y1: "-1208.7515",
  y2: "-1219.9692",
  gradientTransform: "matrix(-.8734 -.4871 .4871 -.8734 2514.2124 410.0793)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--ruby)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--flagred)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl104)",
  d: "M469.9 659.4c1.9-3.5 5-5.5 7-4.4 2 1.1 2 4.9.1 8.4s-5 5.5-7 4.4c-2-1.1-2-4.9-.1-8.4z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl105",
  x1: "-3495.4702",
  x2: "-3496.062",
  y1: "38.354",
  y2: "22.3777",
  gradientTransform: "matrix(.4801 .2458 -.3517 .6869 2069.6953 1526.2699)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "#2d473b" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "#8db593" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl105)",
  d: "M383.7 690.3c-2.1 3.9-5.4 6.3-7.2 5.4-1.8-.9-1.6-4.8.6-8.7 2.1-3.9 5.4-6.3 7.2-5.4 1.8 1 1.5 4.9-.6 8.7z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl106",
  x1: "-2054.1699",
  x2: "-2054.7119",
  y1: "3867.4336",
  y2: "3852.7976",
  gradientTransform: "matrix(.05395 -.9985 .9985 .05395 -3325.4702 -1573.2925)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl106)",
  d: "M420 681c5.2-.6 9.1 1.4 8.7 4.4-.4 3-5 5.9-10.3 6.5-5.2.6-9.1-1.4-8.7-4.4.5-3 5.1-5.9 10.3-6.5z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl107",
  x1: "-312.1367",
  x2: "-312.6787",
  y1: "-1813.1108",
  y2: "-1827.745",
  gradientTransform: "matrix(-.05395 .9985 -.9985 -.05395 -1395.4037 886.3853)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl107)",
  d: "M437.4 678.1c-5.2.6-9.1-1.4-8.7-4.4.4-3 5-5.9 10.2-6.5 5.2-.6 9.1 1.4 8.7 4.4-.4 3-5 5.9-10.2 6.5z" }), /*#__PURE__*/

React.createElement("linearGradient", {
  id: "ffl108",
  x1: "-4021.1167",
  x2: "-4021.6624",
  y1: "157.543",
  y2: "142.8086",
  gradientTransform: "matrix(-.9985 -.05395 .05395 -.9985 -3590.2368 621.5844)",
  gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

React.createElement("stop", { offset: "0", stopColor: "var(--clayred)" }), /*#__PURE__*/
React.createElement("stop", { offset: "1", stopColor: "var(--ruby)" })), /*#__PURE__*/

React.createElement("path", {
  fill: "url(#ffl108)",
  d: "M428 688.1c.7-5.2 3.8-9.8 6.8-10.1 3-.3 4.8 3.7 4.1 8.9-.7 5.2-3.8 9.8-6.8 10.1-3 .3-4.8-3.7-4.1-8.9z" })), /*#__PURE__*/


React.createElement("path", {
  fill: "skyblue",
  d: "M.7 313.3v8.2c1.7-.7 2.8-1.6 3.1-2.8.6-1.8-.7-3.8-3.1-5.4z" }));




/********************************************************/
/****************POND CONTAINER*************************/
/********************************************************/

class Pond extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swellTime: new TimelineLite({
        onComplete() {
          this.restart();
        } }),

      waveTime: new TimelineLite({
        onComplete() {
          this.restart();
        } }) };


  }
  componentDidMount() {
    this.state.waveTime.
    fromTo(
    "#wave-1",
    3,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "+=1").

    fromTo(
    "#wave-2",
    3,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "+=1").

    fromTo(
    "#wave-3",
    3,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "2").

    fromTo(
    "#wave-4",
    4,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "3").

    fromTo(
    "#wave-5",
    5.5,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "3").

    fromTo(
    "#wave-6",
    4,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "4").

    fromTo(
    "#wave-7",
    5,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "5").

    fromTo(
    "#wave-8",
    4,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "6").

    fromTo(
    "#wave-9",
    4,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "7").

    fromTo(
    "#wave-10",
    3,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "8").

    fromTo(
    "#wave-11",
    5,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "8");


    this.state.swellTime.
    fromTo(
    "#swell-stop1",
    6,
    {
      css: {
        stopOpacity: 0 } },


    {
      css: {
        stopOpacity: 1 },

      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true },

    "0").

    fromTo(
    "#swell-stop2",
    6,
    {
      css: {
        stopOpacity: 0 } },


    {
      css: {
        stopOpacity: 1 },

      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true },

    "-=3.5").

    fromTo(
    "#swell-stop3",
    6,
    {
      css: {
        stopOpacity: 0 } },


    {
      css: {
        stopOpacity: 1 },

      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true },

    "-=3.5").

    fromTo(
    "#swell-stop4",
    6,
    {
      css: {
        stopOpacity: 0 } },


    {
      css: {
        stopOpacity: 1 },

      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true },

    "-=3.5");

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("svg", { id: "pond-svg", viewBox: "0 0 1920 1080", preserveAspectRatio: "none" }, /*#__PURE__*/
      React.createElement("linearGradient", {
        id: "pond-base-grad",
        x1: "959",
        x2: "959",
        y1: "1081",
        y2: "881",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", {
        id: "pond-stop1",
        offset: "0",
        stopColor: "var(--darkMist)",
        stopOpacity: "1" }), /*#__PURE__*/

      React.createElement("stop", {
        id: "pond-stop2",
        offset: "1",
        stopColor: "var(--darkMist)",
        stopOpacity: "0" })), /*#__PURE__*/


      React.createElement("path", {
        id: "pond-base",
        fill: "url(#pond-base-grad)",
        d: "M-1 881h1920v200H-1z",
        opacity: "1" }), /*#__PURE__*/

      React.createElement("linearGradient", {
        id: "swells-grad",
        x1: "961.0376",
        x2: "956.9628",
        y1: "1096.7217",
        y2: "863.2787",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { id: "swell-stop4", offset: "0", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { id: "swell-stop3", offset: ".33", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { id: "swell-stop2", offset: ".66", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { id: "swell-stop1", offset: "1", stopColor: "var(--darkMist)" })), /*#__PURE__*/

      React.createElement("path", {
        id: "swells",
        fill: "url(#swells-grad)",
        d: "M-1 880h1920v200H-1z",
        opacity: ".5" }), /*#__PURE__*/

      React.createElement("g", { className: "waves-container", opacity: ".5" }, /*#__PURE__*/
      React.createElement("radialGradient", {
        id: "wave1-grad",
        cx: "391.1543",
        cy: "74.3203",
        r: "94",
        gradientTransform: "matrix(3.883 0 0 .4362 -1349.8418 1026.5841)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: "0", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: "0" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-1",
        cx: "169",
        cy: "1059",
        fill: "url(#wave1-grad)",
        rx: "365",
        ry: "41" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave2-grad",
        cx: "660.5352",
        cy: "-103.0996",
        r: "94",
        gradientTransform: "matrix(3.883 0 0 .3457 -1349.8418 1023.1462)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: "0", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: "0" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-2",
        cx: "1215",
        cy: "987.5",
        fill: "url(#wave2-grad)",
        rx: "365",
        ry: "32.5" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave3-grad",
        cx: "1123.3218",
        cy: "-333.5391",
        r: "94",
        gradientTransform: "matrix(2.9007 0 0 .2872 -1446.0977 1073.8035)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: "0", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: "0" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-3",
        cx: "1812.3",
        cy: "978",
        fill: "url(#wave3-grad)",
        rx: "272.7",
        ry: "27" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave4-grad",
        cx: "800.6421",
        cy: "-437.9844",
        r: "94",
        gradientTransform: "matrix(2.9007 0 0 .2234 -1446.0977 1039.8474)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: "0", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: "0" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-4",
        cx: "876.3",
        cy: "942",
        fill: "url(#wave4-grad)",
        rx: "272.7",
        ry: "21" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave5-grad",
        cx: "1288.3618",
        cy: "-819.4141",
        r: "94",
        gradientTransform: "matrix(3.7465 0 0 .1543 -3158.6169 1036.8989)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: "0", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: "0" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-5",
        cx: "1668.2",
        cy: "910.5",
        fill: "url(#wave5-grad)",
        rx: "352.2",
        ry: "14.5" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave6-grad",
        cx: "1237.9141",
        cy: "-949.0703",
        r: "94",
        gradientTransform: "matrix(3.7465 0 0 .1543 -3158.6169 1036.8989)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: "0", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: "0" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-6",
        cx: "1479.2",
        cy: "890.5",
        fill: "url(#wave6-grad)",
        rx: "352.2",
        ry: "14.5" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave7-grad",
        cx: "410.1729",
        cy: "-99.8262",
        r: "94",
        gradientTransform: "matrix(3.4379 0 0 .3191 -1021.3169 1054.8591)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: "0", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: "0" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-7",
        cx: "388.8",
        cy: "1023",
        fill: "url(#wave7-grad)",
        rx: "323.2",
        ry: "30" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave8-grad",
        cx: "803.7827",
        cy: "-120.2598",
        r: "94",
        gradientTransform: "matrix(4.1064 0 0 .266 -2354.6394 1068.9844)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: "0", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: "0" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-8",
        cx: "946",
        cy: "1037",
        fill: "url(#wave8-grad)",
        rx: "386",
        ry: "25" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave9-grad",
        cx: "356.0615",
        cy: "-471.7422",
        r: "94",
        gradientTransform: "matrix(4.0106 0 0 .1968 -1261.0344 1036.3424)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: "0", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: "0" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-9",
        cx: "167",
        cy: "943.5",
        fill: "url(#wave9-grad)",
        rx: "377",
        ry: "18.5" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave10-grad",
        cx: "1234.4678",
        cy: "-79.3936",
        r: "94",
        gradientTransform: "matrix(3.3936 0 0 .3457 -2588.3118 1071.95)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: "0", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: "0" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-10",
        cx: "1601",
        cy: "1044.5",
        fill: "url(#wave10-grad)",
        rx: "319",
        ry: "32.5" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave11-grad",
        cx: "1025.2515",
        cy: "-726.1875",
        r: "94",
        gradientTransform: "matrix(6.5851 0 0 .1436 -6160.3887 1001.7933)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: "0", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: "0" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-11",
        cx: "591",
        cy: "897.5",
        fill: "url(#wave11-grad)",
        rx: "619",
        ry: "13.5" }))));




  }}


/********************************************************/
/****************SCENE COMPONENT*************************/
/********************************************************/

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sceneSound: new Audio(
      "https://www.dropbox.com/s/yiuttz27526uk1q/atmosphere.mp3?raw=1") };


  }
  componentDidMount() {
    this.state.sceneSound.play();
    this.state.sceneSound.loop = true;
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "scene-container" }, /*#__PURE__*/
      React.createElement("svg", {
        id: "scene-bg-svg",
        viewBox: "0 0 1920 1080",
        preserveAspectRatio: "none" }, /*#__PURE__*/

      React.createElement("linearGradient", {
        id: "canvas-grad",
        x2: "1920",
        y1: "540",
        y2: "540",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: "0", stopColor: "var(--lightMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--bgGradRight)" })), /*#__PURE__*/

      React.createElement("path", {
        className: "bg-canvas",
        fill: "url(#canvas-grad)",
        d: "M0 0h1920v1080H0z" })), /*#__PURE__*/


      React.createElement(Pond, null), /*#__PURE__*/
      React.createElement(Tree, null), /*#__PURE__*/
      React.createElement(Duck, null), /*#__PURE__*/
      React.createElement(Bird, null)));


  }}

/*


*/

ReactDOM.render( /*#__PURE__*/React.createElement(Scene, null), document.getElementById("app"));