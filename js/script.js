function ShowOptions(id) {
//    var opts = document.getElementById("requestTables") ;
    $("#"+id).show();

}
function HideOptions(id) {
    $("#"+id).hide();
}


function posLayer(id){
    var pos = 1;
    var lyr = document.getElementById(id);
    var layers = document.getElementById("sortable");
    for(i=1;i<layers.childNodes.length;i+=2){
        if (lyr===layers.childNodes[i]) return (i-1)/2 ;
    }
}

function GenerateSQL() {
    var sql ="Select " ;
    var tables =document.getElementById("textareaTables").value ;
    var fields =document.getElementById("textareaFields").value ;
    sql = sql + fields + " from " + tables + " where ";
    var conditions = document.getElementById("condition1").value ;
    for(i=2 ;i<=idcond ;i++){
        var c = "condition"+i;
        conditions = conditions + " and "+document.getElementById("condition1").value ;
    }
    if (conditions =="") sql = sql + "1=1" ;
    else sql = sql + conditions + ";" ;
    document.getElementById("SQL").childNodes[1].innerHTML = sql ;
    return sql;
}

function btnClr() {
    var x =document.activeElement;
    var clr = x.value;
    x.parentNode.style.color=clr; //we can use firstChild
}

function addTable() {
    var tableToAdd = document.getElementById("tables").value;
    var oldText = document.getElementById("textareaTables").value;
    var newText="";
    if (oldText.toString()!="") newText = oldText+","+tableToAdd;
    else newText = tableToAdd;
    document.getElementById("textareaTables").value=newText;
    /*
    var tableToAdd = $("#tables").val();
    var oldText = $("#textareaTables").val();
    var newText;
    if (oldText.toString()!="") newText = oldText+","+tableToAdd;
    else newText = tableToAdd;
    $("#textareaTables").attr("value" ,newText);
    */
}
function addField() {
    var tableToAdd = document.getElementById("champs").value;
    var oldText = document.getElementById("textareaFields").value;
    var newText="";
    if (oldText.toString()!="") newText = oldText+","+tableToAdd;
    else newText = tableToAdd;
    document.getElementById("textareaFields").value=newText;
}
function addGeometry() {
    var tableToAdd = document.getElementById("geometry").value;
    var oldText = document.getElementById("textareaGeometry").value;
    var newText="";
    if (oldText.toString()!="") newText = oldText+","+tableToAdd;
    else newText = tableToAdd;
    document.getElementById("textareaGeometry").value=newText;
/*    var tableToAdd = $("#geometry").val();
    var oldText = $("#textareaGeometry").val();
    var newText;
    if (oldText.toString()!="") newText = oldText+","+tableToAdd;
    else newText = tableToAdd;
    $("#textareaGeometry").attr("value" ,newText);*/
}

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
/*
$(document).ready (
    function() {

        $("#sortlist").sortable({
            accept : 'sortable_item',
            axis : 'vertically',
            opacity : 0.6,
            onchange : function ( sorted ) {
                serial = $.SortSerialize( 'sortlist' );
            }
        });

    });*/