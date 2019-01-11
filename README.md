This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

# To start:

- `git clone https://github.com/francescaSchiro/personal.git` to clone repository;

- `git checkout develop` to move to develop branch;

- `yarn` to install dependencies;

- `yarn start` to start app locally.

---

# Personal page project using:

- styled-components ( ThemeProvider, GlobalStyle )
- Font Awesome
- Pure CSS animations ( Eg. _scroll-snap_ & _scroll-snap-align_ )
- Pure JS animations ( Eg. _scrollToSections_ )

---

# TO DO:

- [x] install styled-components
- [x] install [stylelint](https://github.com/styled-components/stylelint-processor-styled-components)
- [x] set up scaffolding (components and containers)
- [x] set up theme folder
- [x]import fonts font-family: 'Inconsolata', monospace; 400, 700 / 'Montserrat', sans-serif; 400,700,800
- [x] animate logo FS
- [x] implement font Awesome for theme icon
- [x] make nav items components and working anchorlinks.
- [x] make gradient animation in logo background
- [x] make scroll down dot in home https://www.creativebloq.com/inspiration/css-animation-examples https://codepen.io/matchboxhero/pen/gGdJYo
- [x] try to deploy on **now** https://francescaschiro-yxfetbdmwj.now.sh/
- [x] try to deploy on **github pages** https://facebook.github.io/create-react-app/docs/deployment
- [x] make free scroll (commented out css in app wrapper and sections)
- [x] make free scroll (commented out css in app wrapper and sections)
- [x] FIX mediaqueries titles contacts TODO in others and define fontsize vw
- [x] make icon render based on { props.isLightTheme ? 'icondarklightbulb' : 'iconLightBulbon'}
- [x] navItems hover
- [x] download CV link external host not downloading directly
- [x] make 1 SectionTitle
- [x] add effect at home from [react-reveal](https://www.react-reveal.com/docs/props/)
- [x] dont want 100 vh for othe sections other than Home. Move id for scrollIntoView() method to SectionTitleContainer instead of Section Wrapper so it scrolls right.
- [x] Mobile Handmade carousel. implement horizontal scroll snap.
- [x] Handmade carousel: FIX mediaqueries. mosaic in tablet and desktop. full screen scroll in devices.---changed: scroll in all devices. 100vw width only in mobile view though.
- [x] implement scrollbar horiz to navigate in desktop without touch.(couldnt make Dot button working with scrollLeft **TODO**)
- [x] make Dot for navigating CarouselHandmade component
- [ ] implement function in utils at onclick arrow for horizontal carousel scrollLeft https://www.w3schools.com/jsref/prop_element_scrollleft.asp
- [ ] make description scroll at bottom;
- [ ] ? make images smaller on desktop;
- [ ] make square covers
- [ ] horizontal scrolling dot like in home?
- [ ] ADD titles font ternary. TODO make Csub and CTitle H1 and H3 or P.
- [ ] why deletes theme icon when i delete index.css? replace with global style
- [ ] make about section
- [ ] ADD carousel TODO finish to implement. see CBody
- [ ] implement Work Carousel with React-reveal library https://www.react-reveal.com/tutorials/carousel/
- [ ] make 1 sectionTitleContainer
- [ ] SEE CV on target blank link
- [ ] picking eyes on hover see CV. after upload image svg or png(before after icons) transparent div going up with change opacity:1
- [ ] make about section text
- [ ] make work section w/ behance link
- [ ] make contact section
- [ ] animate on scroll with https://github.com/michalsnik/aos/tree/v2
- [ ] make paragraph appear at when scrolled in view. look at pure js in davide's sfiddle
- [ ] make placeholders for no connection: (icons and system font alternatives) added alt to button icons?
- [ ] ? Animated Hamburger menu -> X for nav on responsive view.
- [ ] hide menu on scroll down and show on scroll up
- [ ] ?? make symbols in nav https://altcodeunicode.com/alt-codes-geometric-shape-symbols/
- [ ] make symbols with css https://css-tricks.com/the-shapes-of-css/
- [ ] install react-router
- [ ] make selection mixin in utils getSelectionColors(bg,fg)
- [ ] set up routes
- [ ] 404 page
- [ ] install Material UI ?
- [ ] redux?
- [ ] [Normalize.css](http://necolas.github.io/normalize.css/)
- [ ] Prettier ?
- [ ] make and update favicon.ico
- [ ] fix eslint following this docs: https://www.robinwieruch.de/react-eslint-webpack-babel/
- [ ] change color nav tab when scrolling

---

## TO DEPLOY to gh pages:

`yarn run build`

## [more info](https://facebook.github.io/create-react-app/docs/deployment)

- why can't make automatic imports with lightbulg suggestions??
- pull nav up in browsers;
- how can i make animation stop in the background when not into view? is it automatic?

- styledcomponents ( ThemeProvider, GlobalStyle )
- Font Awesome
- Pure CSS animations ( Eg. _scroll-snap_ & _scroll-snap-align_ )
- Pure JS animations ( Eg. _scrollToSections_ )

##BUGS :

---

# !!! **add to css module for smooth scrolling like in iOS** -------------

`overflow-y: scroll;`
`-webkit-overflow-scrolling:touch;`

---> _ADDED to AppWrapper.js_

---

# !!! **Reveal not working properly on Safari 11 and IE 11 (opacity stuck at 0)** ----

To try:

- [x] remove overflox-x:hidden; and overflow:scroll to body and html tag;

- [ ]? tried: wrapped the actual About title with the <Fade> component.

---

**removedc/ommented:**

---> in _CardsSlider.js_

- `transition: all 0.2s ease-in-out;`
- `overflow-x: scroll;`
- `overflow-x: scroll;`
  `overflow-y: hidden;` in @mediaqueries
- `scroll-snap-type: mandatory;`
  `scroll-snap-type: x mandatory`(in @mediaqueries) **to remove snapping**
- LEFT: `white-space: nowrap;`
  ---> in _CardWrapper.js_
- `/* scroll-snap-align: start; */`

* **Added:**

  - `/* for smooth scrolling like in iOS */`
    `overflow-x: scroll;`
    `-webkit-overflow-scrolling: touch;`

- [ ] remove transition property on react reveal children;
- [ ] use simple html tags not styled components!

---

# !!! on ipad and iphone anchor nav dont work!!!!!\*\* ----

- [ ] ? fixed with `href='#sectionId'` given to navitems <a> andgvind id to sections
