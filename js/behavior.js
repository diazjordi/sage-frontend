/**
 * Created by sh3530 on 8/7/14.
 */

function processForm() {

    var prod = document.getElementById("product").value;
    var cat = document.getElementById("cbutton").text;
    var geo = document.getElementById("gbutton").text;
    var table = document.getElementById("table");

    if(cat == "Select" || geo == "Select"){
        alert("Must select a Catagory and Geography");
        return false;
    }

    alert("You selected " + cat + " in " + geo
        + " for " + prod);
    // Find a <table> element with id="myTable":
        //Create an empty <tr> element and add it to the 1st position of the table:
        if(table.rows.length == 3){
            table.deleteRow(2);
            table.deleteRow(1);
        }
        var row = table.insertRow(1);
        var row2 = table.insertRow(2);
        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        var cell11 = row.insertCell(10);

        var cell12 = row2.insertCell(0);
        var cell13 = row2.insertCell(1);
        var cell14 = row2.insertCell(2);
        var cell15 = row2.insertCell(3);
        var cell16 = row2.insertCell(4);
        var cell17 = row2.insertCell(5);
        var cell18 = row2.insertCell(6);
        var cell19 = row2.insertCell(7);
        var cell20 = row2.insertCell(8);
        var cell21 = row2.insertCell(9);
        var cell22 = row2.insertCell(10);

        // Add some text to the new cells:
        for(i = 0; i < json.length; i++){

            if(json[i].prod == prod && json[i].cat == cat && json[i].geo == geo) {


                cell1.innerHTML =(json[i].Field1);
                cell2.innerHTML =(json[i].CH100);
                cell3.innerHTML =(json[i].CH200 );
                cell4.innerHTML =(json[i].CH300 );
                cell5.innerHTML =(json[i].CH400 );
                cell6.innerHTML =(json[i].CH500);
                cell7.innerHTML =(json[i].CH600 );
                cell8.innerHTML =(json[i].CH700);
                cell9.innerHTML =(json[i].CH800);
                cell10.innerHTML =(json[i].CH900);
                cell11.innerHTML =(json[i].CH1000);

                cell12.innerHTML =(json[i].Field2);
                cell13.innerHTML =(json[i].CL100);
                cell14.innerHTML =(json[i].CL200 );
                cell15.innerHTML =(json[i].CL300 );
                cell16.innerHTML =(json[i].CL400 );
                cell17.innerHTML =(json[i].CL500 );
                cell18.innerHTML =(json[i].CL600 );
                cell19.innerHTML =(json[i].CL700);
                cell20.innerHTML =(json[i].CL800);
                cell21.innerHTML =(json[i].CL900);
                cell22.innerHTML =(json[i].CL1000);
            }
        }
    cell12.focus();

}

$(document).ready(function () {

    $('#category li a').click(function () {
        $('#cbutton').text($(this).text());
        $('#cbutton').value($(this).text());
    });

    $('#geography li a').click(function () {
        $('#gbutton').text($(this).text());
        $('#gbutton').value($(this).text());
    });

});

