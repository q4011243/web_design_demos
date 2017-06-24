
$(function(){
  var pointsTo = "100,0 115.5,52.4 158.8,19.1 140.5,70.6 195.1,69.1 150,100 195.1,130.9 140.5,129.4 158.8,180.9 115.5,147.6 100,200 84.5,147.6 41.2,180.9 59.5,129.4 4.9,130.9 50,100 4.9,69.1 59.5,70.6 41.2,19.1 84.5,52.4";

  var $star = $(".star");
  TweenMax.to($star,10,{
    rotation:360,
    transformOrigin: "center",
    repeat:-1,
    ease:Linear.easeNone
  });

  TweenMax.to($star,2,{
    attr:{
      points:pointsTo
    },
    repeat:-1,
    yoyo:true,
    ease:Elastic.easeInOut
  });

});
