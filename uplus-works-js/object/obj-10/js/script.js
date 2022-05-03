/* 1회 적용
var hi = new Vivus('hi-there', {type: 'scenario-sync', duration: 20, start: 'autostart', forceRender: false, dashGap: 20}, function () {
    if (window.console) {
        console.log('Animation finished. [log triggered from callback]');
    }
})
*/
/*
var hi = new Vivus('hi-there', {type: 'scenario-sync', duration: 30, start: 'autostart', forceRender: true, dashGap: 0},  function  ( myVivus )  { 
    myVivus . play ( myVivus . getStatus ( )  ===  'end' ? - 1 : 1 ) ; 
})
*/ 

/*
function replay(myVivus) {
    // myVivus.play(myVivus.getStatus() === 'end' ? -1 : 1);

    if ( myVivus.getStatus() === 'end' ) {
        setTimeout(function() {
            myVivus.play(-1);
        }, 5000);
    }
    myVivus.play();

}

const hi =  {
    type: 'scenario-sync', 
    duration: 20, 
    start: 'autostart', 
    forceRender: false, 
    dashGap: 0,
    animTimingFunction: Vivus.EASE
};

new Vivus('hi-there', hi, replay);
 */

var hi = new Vivus('hi-there', {
    type: 'scenario-sync', 
    duration: 20, 
    start: 'autostart', 
    dashGap: 20, 
    forceRender: false
},  function (myVivus)  { 
    setTimeout(function() {
        myVivus.play(myVivus.getStatus()  ===  'end' ? -1 : 1); 
    }, 1500);
});