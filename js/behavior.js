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
        if(table.rows.length == 5){
            table.deleteRow(4);
            table.deleteRow(3);
            table.deleteRow(2);
            table.deleteRow(1);
        }
        var row = table.insertRow(1);
        var row2 = table.insertRow(2);
        var row3 = table.insertRow(3);
        var row4 = table.insertRow(4);
        var row5 = table.insertRow(5);



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

        var cell23 = row4.insertCell(0);
        var cell24 = row4.insertCell(1);
        var cell25 = row4.insertCell(2);
        var cell26 = row4.insertCell(3);
        var cell27 = row4.insertCell(4);
        var cell28 = row4.insertCell(5);
        var cell29 = row4.insertCell(6);
        var cell30 = row4.insertCell(7);
        var cell31 = row4.insertCell(8);
        var cell32 = row4.insertCell(9);
        var cell33 = row4.insertCell(10);

        var cell34 = row3.insertCell(0);
        var cell35 = row3.insertCell(1);
        var cell36 = row3.insertCell(2);
        var cell37 = row3.insertCell(3);
        var cell38 = row3.insertCell(4);
        var cell39 = row3.insertCell(5);
        var cell40 = row3.insertCell(6);
        var cell41 = row3.insertCell(7);
        var cell42 = row3.insertCell(8);
        var cell43 = row3.insertCell(9);
        var cell44 = row3.insertCell(10);

        var cell45 = row5.insertCell(0);
        var cell46 = row5.insertCell(1);
        var cell47 = row5.insertCell(2);
        var cell48 = row5.insertCell(3);
        var cell49 = row5.insertCell(4);
        var cell50 = row5.insertCell(5);
        var cell51 = row5.insertCell(6);
        var cell52 = row5.insertCell(7);
        var cell53 = row5.insertCell(8);
        var cell54 = row5.insertCell(9);
        var cell55 = row5.insertCell(10);

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

                cell23.innerHTML =(json[i].Field3);
                cell24.innerHTML =(json[i].IH100);
                cell25.innerHTML =(json[i].IH200 );
                cell26.innerHTML =(json[i].IH300 );
                cell27.innerHTML =(json[i].IH400 );
                cell28.innerHTML =(json[i].IH500);
                cell29.innerHTML =(json[i].IH600 );
                cell30.innerHTML =(json[i].IH700);
                cell31.innerHTML =(json[i].IH800);
                cell32.innerHTML =(json[i].IH900);
                cell33.innerHTML =(json[i].IH1000);

                cell34.innerHTML =(json[i].Field4);
                cell35.innerHTML =(json[i].IL100);
                cell36.innerHTML =(json[i].IL200 );
                cell37.innerHTML =(json[i].IL300 );
                cell38.innerHTML =(json[i].IL400 );
                cell39.innerHTML =(json[i].IL500 );
                cell40.innerHTML =(json[i].IL600 );
                cell41.innerHTML =(json[i].IL700);
                cell42.innerHTML =(json[i].IL800);
                cell43.innerHTML =(json[i].IL900);
                cell44.innerHTML =(json[i].IL1000);

                cell45.innerHTML =(json[i].Field5);
                cell46.innerHTML =(json[i].Ca100);
                cell47.innerHTML =(json[i].Ca200 );
                cell48.innerHTML =(json[i].Ca300 );
                cell49.innerHTML =(json[i].Ca400 );
                cell50.innerHTML =(json[i].Ca500 );
                cell51.innerHTML =(json[i].Ca600 );
                cell52.innerHTML =(json[i].Ca700);
                cell53.innerHTML =(json[i].Ca800);
                cell54.innerHTML =(json[i].Ca900);
                cell55.innerHTML =(json[i].Ca1000);
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

