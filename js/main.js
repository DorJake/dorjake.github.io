
addLoadEvent(prepareOnclick);
addLoadEvent(changeNightMode);



function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

function prepareOnclick() {
    var dNandc = document.getElementById("del-n-and-copy");
    var dNandt = document.getElementById("del-n-and-translate")
    dNandc.onclick = function () {
        delN(false, true);
    }
    dNandt.onclick = function () {
        delN(true, false);
    }
}

function delN(isTranslate,isCopy) {
    var txt = "";
    txt = document.getElementById("in").value;
    console.log(txt);
    for (var i = 0; i < txt.length; i++) {
        if (txt.indexOf("\n")) {
            txt = txt.replace("\n", " ");
        }
    }
    console.log(txt);
    var out = document.getElementById("out");
    out.value = txt;

    if (isCopy){
        out.select();
        document.execCommand("Copy");
    }

    if(isTranslate){
        var url = 'https://translate.google.cn/#view=home&op=translate&sl=auto&tl=zh-CN&text=';
        url = url + txt;
        window.open(url);
    }

}

function changeNightMode() {
    if (isNight()) {
        document.body.style.backgroundColor = '#434343';
        var textareas = document.getElementsByTagName("textarea");
        for(var i = 0; i < textareas.length; i++) {
            textareas[i].style.backgroundColor = '#828282';
        }
    }
}

function isNight() {
    var date = new Date();
    if (date.getHours() > 18) {
        console.log("night");
        return true;
    }
}
