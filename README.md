# Wish App
This app was maded for developing my skills and following my passion:)

##API References
###How animation here work:  
So, here animation work simple: using GSAP.  

* First, we wrap component with ReactCssTransitionGroup  
* On component mounting we animate it with ComponentDidMount function.  
* On component leaving - animate it in Redux function, that leading components to leave, that's all  

!! Note! all animations leave in services folder, api.animations.js file