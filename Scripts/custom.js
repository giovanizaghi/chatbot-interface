var bodyChat = "";
var txtMsg = "";

$(document).ready(function(){
    bodyChat = $(".corpoChat");
    txtMsg = $("#txtMsg");
});

function AddMessageBot(text) {
    var text = "<div class='msgEsquerda'>" + text + "</div>";
    bodyChat.append(text);
    txtMsg.val("");
    scrollDown();
}

function AddMessageUser(text) {
    if (text != '') {
        var txtDiv = $("<div class='msgDireita'>" + text + "</div>").hide();
        bodyChat.append(txtDiv);
        txtDiv.show("drop", 100);
        txtMsg.val("");
        AddMessageBot(returnAutoMsg(text));
        scrollDown();
    }
}

function scrollDown() {
    $(".corpoChat").stop().animate({ scrollTop: $(".corpoChat")[0].scrollHeight }, 1000);
}

$("#txtMsg").on('keyup', function (e) {
    if (e.keyCode == 13) {
        AddMessageUser(txtMsg.val());
    }
});