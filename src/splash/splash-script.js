import $ from 'jquery';  

function SplashScript(){
    //Video element~cache the reference (!!!! this is cached and used in splashDoParalax do not change)
    var splashParalax = document.getElementById("splash-paralax");
        
    //set initial styling 
    splashParalax.style.transform  = 'translate(-50%,-50% )';

    var splashDoParalax= function(dTop){
        
        //Consider preventing it from changing once it goes past the text's height ---> the maximum  allowed change is 1/2 the difference between the
        // texts computed height and the video's computed height assuming both are centered in a parent element of the same size and are overlapping 
        //overlay
        
        //How far the user has scrolled from the top of the page = dTop
        //calculate change~~~ dTop*paralaxRate
        var change = (dTop*0.15) + 50;
        //update the dom 
        splashParalax.style.transform  =  'translate(-50%,-'+change+'% )';
    }

    $(window).on("load scroll",function(){ 
    
        //Splash Paralax 
        splashDoParalax($(this).scrollTop());

    });
    
}

export default SplashScript;