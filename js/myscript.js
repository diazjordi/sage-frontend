/**
 * Created by jd5582 on 8/7/14.
 */

function load(cat, geo) {
    var mydata = JSON.parse(data);
    for(i = 0; i < mydata.length; i++){
        if(mydata[i].cat == cat && mydata[i].geo == geo) {
        alert(mydata[i].cat);
        alert(mydata[i].geo);
        alert(mydata[i].clicks);
        alert(mydata[i].imps);
        }



    }

}