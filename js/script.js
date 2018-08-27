

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


// radio selection
$(document).ready(function() {
    $("input[name$='RequestType']").click(function() {
        var test = $(this).val();

        $("div.desc").hide();
        $("#"+test).show();
    });
});

// tags attributaire request
$('.chips').chips();
$('.chips-placeholder').chips({
    placeholder: 'Enter a tag',
    secondaryPlaceholder: '+Tag',
});
// color
$(function() {
    $('#demo-component').colorpicker({
        component: '.btn'
    });
});
// color background

$(function() {
    $('#demo2').colorpicker({
        // Alpha is not supported for some html elements.
        format: 'rgb',
        // Gets the actual background color
        color: $('#demo2').css('background-color')
    }).on('changeColor', function(ev) {
        // Sets the new color while it is changing.
        $(this).css('background-color',ev.color.toHex());
    });
});
