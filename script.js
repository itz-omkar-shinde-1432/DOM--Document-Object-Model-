const scroll = new LocomotiveScroll({
    el: document.querySelector("body"),
    smooth: true,
  });
  gsap.from("#part2 h1", {
    x: 1000,
    duration: 3,
    stagger: 0.5
  })
  var main=document.querySelector("body");
  var cursor=document.querySelector("#cursor");
  main.addEventListener("mousemove",function(e) {
        cursor.style.left=e.x + "px"
        cursor.style.top=e.y + "px"
  });
  var elems=document.querySelectorAll("#elem");
  var page1=document.querySelector("#page1");
  elems.forEach(function(elem) {
     elem.addEventListener("mousemove",function(event){
          var bgimg=elem.getAttribute("data-img");
          page1.style.backgroundImage=`url("${bgimg}")`;
     });
  });
  