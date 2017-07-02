$(function() {
  var myColor = {inner:"rgb(187, 47, 114)",outer: "rgb(58, 182, 190)"};

  TweenMax.to(myColor,4,{
    colorProps: {
      inner: "rgb(58, 182, 190)",
      outer:"rgb(187, 47, 114)"
    },
    onUpdate:updateColor
  });

  function updateColor() {
    var $text = $(".text");
    var $square = $("#square");
    var radial = `radial-gradient(${myColor.inner}, ${myColor.outer})`;
    $text.html(radial);
    $square.css("background-image",radial);
  }

  // #############################分割线##############################

  $(".readmore").click(function(event) {
    /* Act on the event */
    var newText = "放心，你这样没事";
    TweenMax.to(".textChange",5,{
      text:newText
    });
  });


  // #############################分割线##############################

  var rules = [CSSRulePlugin.getRule(".red"),
               CSSRulePlugin.getRule(".green"),
               CSSRulePlugin.getRule(".blue")];

  TweenMax.staggerTo(rules,1,{
    cssRule:{
      opacity:0
    },
    ease: Linear.easeNone,
    repeat:-1,
    yoyo:true
  },0.3);

});
