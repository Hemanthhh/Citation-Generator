function generator(){
    if (document.getElementById('aname').value){
        var articleName = document.getElementById('aname').value;
    }

    if (document.getElementById('url').value){
        var articleLink = document.getElementById('url').value;
    }
    if (document.getElementById('fname').value){
        var fname = document.getElementById('fname').value;
    }
    if (document.getElementById('lname').value){
        var lname = document.getElementById('lname').value;
    }
    if (document.getElementById('pday').value){
        var pday = document.getElementById('pday').value;
    }
    if (document.getElementById('pmonth').value){
        var pmonth = document.getElementById('pmonth').value;
    }
    if (document.getElementById('pyear').value){
        var pyear = document.getElementById('pyear').value;
    }
    if (document.getElementById('aday').value){
        var aday = document.getElementById('aday').value;
    }
    if (document.getElementById('amonth').value){
        var amonth = document.getElementById('amonth').value;
    }
    if (document.getElementById('ayear').value){
        var ayear = document.getElementById('ayear').value;
    }
   
    var pdate = pday+" "+pmonth+" "+pyear;
    var adate = aday+" "+amonth+" "+ayear;

    output = fname+" "+lname+" "+pdate+"-"+articleName+" Retrieved on " +adate+" from "+ articleLink;

    document.getElementById('out').innerHTML = output;
};