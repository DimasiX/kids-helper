# Wish App
This app was maded for developing my skills and following my passion:)

##API References
###How animation here work:  
So, here animation work simple: using GSAP.  

* First, we wrap component with ReactCssTransitionGroup  
* On component mounting we animate it with ComponentDidMount function.  
* On component leaving - animate it in Redux function, that leading components to leave, that's all  

!! Note! all animations functions is in services folder, api.animations.js file

##Store description:
Here store live in store folder, and for any store branch store file contain:  
* constants for actions (to avoid boo-boo typos)
* reducer
* action creators

**NOTE:** Store use thunk middleware and redux dev tools