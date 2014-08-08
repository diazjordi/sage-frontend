/**
 * Created by jd5582 on 8/7/14.
 */
$(document).ready(function () {
var tr;
for (var i = 0; i < json.length; i++) {
    tr = $('<tr/>');
    tr.append("<td>" + json[i].Field1 + "</td>");
    tr.append("<td>" + json[i].CH100 + "</td>");
    tr.append("<td>" + json[i].CH200 + "</td>");
    tr.append("<td>" + json[i].CH300 + "</td>");
    tr.append("<td>" + json[i].CH400 + "</td>");
    tr.append("<td>" + json[i].CH500 + "</td>");
    tr.append("<td>" + json[i].CH600 + "</td>");
    tr.append("<td>" + json[i].CH700 + "</td>");
    tr.append("<td>" + json[i].CH800 + "</td>");
    tr.append("<td>" + json[i].CH900 + "</td>");
    tr.append("<td>" + json[i].CH1000 + "</td>");
    $('table').append(tr);
    tr = $('<tr/>');
    tr.append("<td>" + json[i].Field2 + "</td>");
    tr.append("<td>" + json[i].CL100 + "</td>");
    tr.append("<td>" + json[i].CL200 + "</td>");
    tr.append("<td>" + json[i].CL300 + "</td>");
    tr.append("<td>" + json[i].CL400 + "</td>");
    tr.append("<td>" + json[i].CL500 + "</td>");
    tr.append("<td>" + json[i].CL600 + "</td>");
    tr.append("<td>" + json[i].CL700 + "</td>");
    tr.append("<td>" + json[i].CL800 + "</td>");
    tr.append("<td>" + json[i].CL900 + "</td>");
    tr.append("<td>" + json[i].CL1000 + "</td>");
    $('table').append(tr);

}
});