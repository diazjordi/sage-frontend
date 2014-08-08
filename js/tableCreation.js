/**
 * Created by jd5582 on 8/7/14.
 */

date.ready(function () {
    $.getJSON(url,
        function (json) {
            var tr;
            for (var i = 0; i < json.length; i++) {
                tr = $('<tr/>');
                tr.append("<td>" + json[i].User_Name + "</td>");
                tr.append("<td>" + json[i].score + "</td>");
                tr.append("<td>" + json[i].team + "</td>");
                $('table').append(tr);
            }
        });
});