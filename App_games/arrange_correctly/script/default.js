function $(id) {
    return document.getElementById(id);
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var ch = $(data);
    ev.target.append(ch);
    ch.style.position = "absolute";
    ch.style.marginTop = "15px";
    ch.style.marginLeft = "20px";
}

function allowdrag(ev) {
    ev.preventDefault();
}

function verifier() {
    var ok = true;
    var ids = ['d1', 'd2', 'd4', 'd5'];
    var sts = ['a', 'b', 'd', 'e'];
    for (var i = 0 ; i < ids.length ; i++) {
        if ($(ids[i]).firstChild.id != sts[i]) ok = false;
    }
    if (ok == false) {
        window.location.reload();
        sessionStorage.msg = "Recommencer la partie !!!";
    }
    else $('msg').innerHTML = "Bravo !!!";
}

function onReady() {
    if (sessionStorage.msg != null) $('msg').innerHTML = "Recommencer la partie !!!";
}
