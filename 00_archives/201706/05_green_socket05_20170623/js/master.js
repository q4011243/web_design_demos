$(function() {
  TweenMax.to("#plane", 5, {

    bezier: {
      autoRotate: 45,
      type: "soft",
      curviness: 2,
      values: [{
          left: 100,
          top: 100
        },
        {
          left: 250,
          top: 300
        },
        {
          left: 400,
          top: 100
        },
        {
          left: 550,
          top: 300
        },
        {
          left: 700,
          top: 100
        },
        {
          left: 850,
          top: 300
        },
        {
          left: 1100,
          top: -100
        }
      ]
    },

    ease: Linear.easeNone,
    repeat: -1
  });

});
