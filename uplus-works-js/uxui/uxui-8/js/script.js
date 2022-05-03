const wrap = document.querySelectorAll('#hotspot-contents .hotspot-wrap .-hs-03');

[].forEach.call(wrap, function(hsW){

    hsW.addEventListener("mouseover", function() {   
        let hs = this.getAttribute('data-id');
        let sb = document.getElementById(hs+"-sb");
        sb.classList.add('-active','-ani-opac');

    }, false);
    
    hsW.addEventListener("mouseout", function() {   
        let hs = this.getAttribute('data-id');
        let sb = document.getElementById(hs+"-sb");
        sb.classList.remove('-active');
    }, false);


});