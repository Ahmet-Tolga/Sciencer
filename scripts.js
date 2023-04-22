var global = document.getElementById("Global");
var hunger = document.getElementById("hunger");
var population = document.getElementById("population");
var dirty = document.getElementById("dirty");
var climate = document.getElementById("climate");
var input = document.getElementById("myname");
var sohbet = document.getElementById("sohbet");
var btn = document.getElementById("btn");
var send = document.getElementById("send");
var error = document.getElementById("error");
var myname = "";
document.getElementById("all").style.display = "none";
sohbet.style.display = "none";
var back = document.getElementById("back");
var control;
btn.addEventListener("click", function () {
    document.getElementById("all").style.display = "none";
    sohbet.style.display = "flex";
    global.style.display = "flex";
    hunger.style.display = "none";
    population.style.display = "none";
    dirty.style.display = "none";
    climate.style.display = "none";
    control = 1;
    init();
})
btn2.addEventListener("click", function () {
    document.getElementById("all").style.display = "none";
    sohbet.style.display = "flex";
    global.style.display = "none";
    hunger.style.display = "flex";
    dirty.style.display = "none";
    population.style.display = "none";
    climate.style.display = "none";
    control = 2;
    init();
})
btn3.addEventListener("click", function () {
    document.getElementById("all").style.display = "none";
    sohbet.style.display = "flex";
    global.style.display = "none";
    hunger.style.display = "none";
    dirty.style.display = "none";
    population.style.display = "flex";
    climate.style.display = "none";
    control = 3;
    init();
})
btn4.addEventListener("click", function () {
    document.getElementById("all").style.display = "none";
    sohbet.style.display = "flex";
    global.style.display = "none";
    hunger.style.display = "none";
    dirty.style.display = "flex";
    population.style.display = "none";
    climate.style.display = "none";
    control = 4;
    init();
})
btn5.addEventListener("click", function () {
    document.getElementById("all").style.display = "none";
    sohbet.style.display = "flex";
    global.style.display = "none";
    hunger.style.display = "none";
    dirty.style.display = "none";
    population.style.display = "none";
    climate.style.display = "flex";
    control = 5;
    init();
})
back.onclick = function () {
    document.getElementById("all").style.display = "flex";
    sohbet.style.display = "none";
}
function enter() {
    if (input.value != "") {
        document.getElementById("2").style.display = "none";
        document.getElementById("all").style.display = "flex";
        myname += input.value;
    }
    else {
        error.style.display = "flex";
    }
}
function date(stamp) {
    var time = new Date(stamp)
    var hour = "0" + time.getHours()
    var minute = "0" + time.getMinutes()
    var day = "0" + time.getDate()
    var month = "0" + (time.getMonth() + 1)
    var year = time.getFullYear()
    var full_time = hour.substr(-2) + ":" + minute.substr(-2) + " / " + day.substr(-2) + "/" + month.substr(-2) + "/" + year;
    return full_time
}

function init() {
    const firebaseConfig = {
        apiKey: "AIzaSyC_jzwljVINRlnl2-IYTZQenAP-a2SrX3g",
        authDomain: "sciencer-669da.firebaseapp.com",
        databaseURL: "https://sciencer-669da-default-rtdb.firebaseio.com",
        projectId: "sciencer-669da",
        storageBucket: "sciencer-669da.appspot.com",
        messagingSenderId: "319759630294",
        appId: "1:319759630294:web:53afeea63a2de035fc2e77"
    };
    firebase.initializeApp(firebaseConfig);
    send.onclick = function () {
        if (control == 1) {
            firebase.database().ref("global").push().set({
                message: document.getElementById("text").value,
                sender: myname,
                time: firebase.database.ServerValue.TIMESTAMP
            })
        }
        if (control == 2) {
            firebase.database().ref("hunger").push().set({
                message: document.getElementById("text").value,
                sender: myname,
                time: firebase.database.ServerValue.TIMESTAMP
            })
        }
        if (control == 3) {
            firebase.database().ref("population").push().set({
                message: document.getElementById("text").value,
                sender: myname,
                time: firebase.database.ServerValue.TIMESTAMP
            })
        }
        if (control == 4) {
            firebase.database().ref("dirty").push().set({
                message: document.getElementById("text").value,
                sender: myname,
                time: firebase.database.ServerValue.TIMESTAMP
            })
        }
        if (control == 5) {
            firebase.database().ref("climate").push().set({
                message: document.getElementById("text").value,
                sender: myname,
                time: firebase.database.ServerValue.TIMESTAMP
            })
        }
        document.getElementById("text").value = "";
    }
    firebase.database().ref("global").on("child_added", (snapshot) => {
        var html = "";
        if (snapshot.val().sender == myname) {
            html += "<div class='msg left-msg'></div><div class='msg-bubble-mine'><div class='msg-info'><div class='msg-info-name'>" + "you" + "</div><div class='msg-info-time'>" + date(snapshot.val().time) + "</div></div><div class='msg-text'>" + snapshot.val().message + "</div></div></div>"
        } else {
            html += "<div class='msg left-msg'></div><div class='msg-bubble'><div class='msg-info'><div class='msg-info-name'>" + snapshot.val().sender + "</div><div class='msg-info-time'>" + date(snapshot.val().time) + "</div></div><div class='msg-text'>" + snapshot.val().message + "</div></div></div>"
        }
        document.getElementById("Global").innerHTML += html;
        messages.scroll({ behavior: "smooth", top: 99999999999999999 })
    })
    firebase.database().ref("hunger").on("child_added", (snapshot) => {
        var html = "";
        if (snapshot.val().sender == myname) {
            html += "<div class='msg left-msg'></div><div class='msg-bubble-mine'><div class='msg-info'><div class='msg-info-name'>" + "you" + "</div><div class='msg-info-time'>" + date(snapshot.val().time) + "</div></div><div class='msg-text'>" + snapshot.val().message + "</div></div></div>"
        } else {
            html += "<div class='msg left-msg'></div><div class='msg-bubble'><div class='msg-info'><div class='msg-info-name'>" + snapshot.val().sender + "</div><div class='msg-info-time'>" + date(snapshot.val().time) + "</div></div><div class='msg-text'>" + snapshot.val().message + "</div></div></div>"
        }
        document.getElementById("hunger").innerHTML += html;
        messages.scroll({ behavior: "smooth", top: 99999999999999999 })
    })
    firebase.database().ref("population").on("child_added", (snapshot) => {
        var html = "";
        if (snapshot.val().sender == myname) {
            html += "<div class='msg left-msg'></div><div class='msg-bubble-mine'><div class='msg-info'><div class='msg-info-name'>" + "you" + "</div><div class='msg-info-time'>" + date(snapshot.val().time) + "</div></div><div class='msg-text'>" + snapshot.val().message + "</div></div></div>"
        } else {
            html += "<div class='msg left-msg'></div><div class='msg-bubble'><div class='msg-info'><div class='msg-info-name'>" + snapshot.val().sender + "</div><div class='msg-info-time'>" + date(snapshot.val().time) + "</div></div><div class='msg-text'>" + snapshot.val().message + "</div></div></div>"
        }
        document.getElementById("population").innerHTML += html;
        messages.scroll({ behavior: "smooth", top: 99999999999999999 })
    })
    firebase.database().ref("dirty").on("child_added", (snapshot) => {
        var html = "";
        if (snapshot.val().sender == myname) {
            html += "<div class='msg left-msg'></div><div class='msg-bubble-mine'><div class='msg-info'><div class='msg-info-name'>" + "you" + "</div><div class='msg-info-time'>" + date(snapshot.val().time) + "</div></div><div class='msg-text'>" + snapshot.val().message + "</div></div></div>"
        } else {
            html += "<div class='msg left-msg'></div><div class='msg-bubble'><div class='msg-info'><div class='msg-info-name'>" + snapshot.val().sender + "</div><div class='msg-info-time'>" + date(snapshot.val().time) + "</div></div><div class='msg-text'>" + snapshot.val().message + "</div></div></div>"
        }
        document.getElementById("dirty").innerHTML += html;
        messages.scroll({ behavior: "smooth", top: 99999999999999999 })
    })
    firebase.database().ref("climate").on("child_added", (snapshot) => {
        var html = "";
        if (snapshot.val().sender == myname) {
            html += "<div class='msg left-msg'></div><div class='msg-bubble-mine'><div class='msg-info'><div class='msg-info-name'>" + "you" + "</div><div class='msg-info-time'>" + date(snapshot.val().time) + "</div></div><div class='msg-text'>" + snapshot.val().message + "</div></div></div>"
        } else {
            html += "<div class='msg left-msg'></div><div class='msg-bubble'><div class='msg-info'><div class='msg-info-name'>" + snapshot.val().sender + "</div><div class='msg-info-time'>" + date(snapshot.val().time) + "</div></div><div class='msg-text'>" + snapshot.val().message + "</div></div></div>"
        }
        document.getElementById("climate").innerHTML += html;
        messages.scroll({ behavior: "smooth", top: 99999999999999999 })
    })
}
