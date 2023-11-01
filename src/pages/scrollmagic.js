import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';


// Initialize a ScrollMagic controller
const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: '#portfolio', // Element that triggers the animation
    
    offset: -100, // Offset from the trigger point
    duration: 500, // Duration of the animation
  })
    .setClassToggle('#portfolio', 'animated') // Toggle the "animated" class
    .addTo(controller);
  
    
    new ScrollMagic.Scene({
      triggerElement: '#contactMe', // Element that triggers the animation
      triggerHook: 'onEnter', // Start the animation when the element enters the viewport
      reverse: true, // Reverse the animation when the element leaves the viewport
    })
      .setClassToggle('#contactMe', 'visible') // Add a CSS class to make it visible
      .addTo(controller);