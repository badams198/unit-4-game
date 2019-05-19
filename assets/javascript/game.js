$(document).ready(function() {
 //Character Objects
    var Ryu = {
        charName: "Ryu",
        hitPoints: 120,
        attackPower: 11000,
        counterAttack: 80,
        attackAnimation: ('src','ryukick.gif')
    };  
   // Player1 Char Select
   //Ryu
   $('.ryu').on({'click': function(){
    $('#p1').attr('src','assets/images/ryuidle.gif');}
    //reset()
   });
   //DeeJay
   $('.dj').on({'click': function(){
    $('#p1').attr('src','assets/images/djidle.gif');}
    //reset()
   //ChunLi
   });
   $('.chunli').on({'click': function(){
    $('#p1').attr('src','assets/images/chunidle.gif');}
    //reset()
    //FeiLong
   });
   $('.fei').on({'click': function(){
    $('#p1').attr('src','assets/images/feiidle.gif');}
    //reset()
   });

 // Player1 Char Select
   //Ryu
   $('.bison').on({'click': function(){
    $('#p2').attr('src','assets/images/bisonidle.gif');}
    //reset()
   });
   //DeeJay
   $('.akuma').on({'click': function(){
    $('#p2').attr('src','assets/images/akuidle3.gif');}
    //reset()
   //ChunLi
   });
   $('.sagat').on({'click': function(){
    $('#p2').attr('src','assets/images/sagatidle.gif');}
    //reset()
    //FeiLong
   });
   $('.vega').on({'click': function(){
    $('#p2').attr('src','assets/images/vegaidle.gif');}
    //reset()
   });   
  

}) 
