/**
 * Created by jd5582 on 8/7/14.
 */

function load() {
    var mydata = JSON.parse(data);
    var mydate = JSON.parse(date);
    alert(mydata[0].name);
    alert(mydata[0].age);
    alert(mydate[0].name);
    alert(mydate[0].age);
}