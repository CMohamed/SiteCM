

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
    if (idcond>1 ){
        $(d).remove();
        idcond--;
    }
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
/*
$('.chips').chips();
$('.chips-placeholder').chips({
    placeholder: 'Enter a tag',
    secondaryPlaceholder: '+Tag',
});
*/
// color function
/*
function changeColor() {
    var iconTag = this ;
    var inputColor = iconTag.
    this.style.color=
}*/
/*
$(document).ready
var x = document.getElementsByClassName("icon secondary-content");
var i;
for (i = 0; i < x.length; i++) {
    var y=x[i].childNodes;
    y[0].style.color=y[1].value;
}

*/

$(document).ready (
    function() {
        $( "#sortlist" ).Sortable( {
            accept : 'sortable_item',
            axis : 'vertically',
            opacity : 0.6,
            onchange : function ( sorted ) {
                serial = $.SortSerialize( 'sortlist' );
            }
        });
    });