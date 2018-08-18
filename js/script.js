

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "35%";
    document.getElementById("main").style.marginLeft = "35%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


function moveNav() {
    var isOpen = (document.getElementById("mySidenav").style.width !== "0px");
    if(isOpen) closeNav();
    else openNav();
}

// Condtions add and remove part
var idcond=1;

$(document).on('click', '#add', function(){
    idcond++;
    var html = '<div id=divCond'+idcond+'> <h6>Condition '+idcond+' : </h6> <input id=condition'+idcond.toString()+' type="text" name="myInput"></div>';
    $('#conditions').append(html);
});

$(document).on('click', '#remove', function(){
    var d ="#divCond"+idcond;
    $(d).remove();
    if (idcond>1 ) idcond--;
});

//collapse

function expandAll(){
    $(".collapsible-header").addClass("active");
    $(".collapsible").collapsible({accordion: false});
}

function collapseAll(){
    $(".collapsible-header").removeClass(function(){
        return "active";
    });
    $(".collapsible").collapsible({accordion: true});
    $(".collapsible").collapsible({accordion: false});
}

