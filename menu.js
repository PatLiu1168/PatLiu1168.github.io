document.write('\
\
<script>\
    function cNav(){\
        document.getElementById("Nav").style.width = "0%";\
        }\
    function oNav(){\
        document.getElementById("Nav").style.width= "100%";\
        }\
</script>\
\
<div id="Nav" class="overlay">\
    <a href="javascript:void(0)" class="closebtn" onclick="cNav()">&times;</a>\
    <div style="text-align: center;" class="overlay-content">\
        <!-- target="_blank" is to make a new tab-->\
        <a href="index.html" >Home</a>\
        <a href="aboutme.html">About</a>\
        <a href="projects.html">Projects</a>\
        <!--<a href="filler.html">Filler</a>-->\
        <!--<a href="filler2.html">Filler Me</a>-->\
    </div>\
</div>\
\
<div style="text-align: right;">\
    <span class="menubtn" style="font-size:50px; color:white; cursor:pointer; margin-right:20px;" onclick="oNav()"> &#9776;</span>\
</div>\
');
