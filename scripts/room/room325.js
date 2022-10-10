﻿//Room name
var room325 = {};
room325.main = function () {
    if (g.isNight()) {
        chat(4, 325);
    }
    else if (g.get("rachelDayEvent")) {
        chat(20, 325);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "rachel",
                "left": 1066,
                "top": 74,
                "width": 675,
                "height": 1006,
                "image": "325_farm/rachel.png"
            }
        ];
        $.each(btnList, function (i, v) {
            nav.button(v, 325);
        });
    }
    var navList = [0];
    nav.buildnav(navList);
};

room325.btnclick = function (name) {
    switch (name) {
        case "rachel":
            var rachelStep = sc.getstep("rachel");
            switch (rachelStep) {
                case 0:
                    chat(0, 325);
                    break;
                case 1:
                    var milkmilk = g.get("milk");
                    if (milkmilk > -1) {
                        //choice of milking (check if milk > .5) / horse brushing
                        //take your hormones and get some sleep  
                    }
                    else if (milkmilk === -1 && cl.c.chest > 3) {
                        chat(11, 325);
                    }
                    else {
                        chat(21, 325);
                    }
                    break;
            }
            break;
        case "pill":
            g.setflag("rachelDayEvent");
            nav.killall();
            g.set("milk", 0);
            nav.bg("325_farm/bg.jpg", "325_farm/bg_night.jpg");
            nav.button({
                "type": "img",
                "name": "rachel",
                "left": 1066,
                "top": 74,
                "width": 675,
                "height": 1006,
                "image": "325_farm/rachel.png"
            }, 325);
            chat(16, 325);
            break;
        default:
            break;
    }
};

room325.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            char.room(0);
            break;
        case "barn0":
            nav.bg("326_stable/bg.jpg");
            break;
        case "horse1":
            nav.killall();
            nav.bg("326_stable/horse1.jpg");
            break;
        case "horse1a":
            nav.bg("326_stable/horse1a.jpg");
            break;
        case "horse2":
            nav.bg("326_stable/bg.jpg");
            nav.button({
                "type": "brush",
                "name": "horse",
                "left": 391,
                "top": 18,
                "width": 1378,
                "height": 1062,
                "image": "326_stable/horse.png"
            }, 325);
            break;
        case "rachel1end":
            
            sc.setstep("rachel", 1);
            char.addtime(120);
            g.setflag("rachelDayEvent");
            if (cl.c.chest > 3)
                chat(12, 325);
            else
                char.room(0);
            break;
        case "pill":
            nav.killall();
            nav.bg("325_farm/pill.jpg");
            nav.button({
                "type": "btn",
                "name": "pill",
                "left": 909,
                "top": 427,
                "width": 197,
                "height": 126,
                "image": "325_farm/pill.png"
            }, 325);
            break;
        case "stable":
            char.room(326);
            break;
        default:
            break;
    }
};

room325.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "rachel",
            text: "Howdy stranger. What brings you to my farm? ",
            button: [
                { chatID: 1, text: "Just wandering around I guess. ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "rachel",
            text: "Wanderin' huh. Well you better wander somewhere else, 'lessen you want to shovel horse shit fer me. ",
            button: [
                { chatID: 2, text: "Would I get paid? ", callback: "" },
                { chatID: -1, text: "Gross, no. I 'lessin I'll leave now. ", callback: "leave" }
            ]
        },
        {
            chatID: 2,
            speaker: "rachel",
            text: "Oh we got a worker don't we. I'll tell you what kid, I got a farm hand that does that, be he " + 
                "is shit at brushing the horses. You brush my horse and I'll pay you $20 a day. How's 'bout it?",
            button: [
                { chatID: 3, text: "That sounds awesome! ", callback: "" },
                { chatID: -1, text: "I don't need any money. ", callback: "leave" }
            ]
        },
        {
            chatID: 3,
            speaker: "rachel",
            text: "Arright. Follow me to the li'l barn and I'll show you how it's done. ",
            button: [
                { chatID: 5, text: "Follow her", callback: "barn0" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "It's really spooky here at night. I better leave. ",
            button: [
                { chatID: -1, text: "Leave", callback: "leave" }
            ]
        },
        {
            chatID: 5,
            speaker: "rachel",
            text: "This here's the horse stable. I just need you to brush ol " + sc.n("horse") + " here. Jimmy say hi to the new farm hand. ",
            button: [
                { chatID: 6, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "horse",
            text: "*Snorts* ",
            button: [
                { chatID: 7, text: "...", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "rachel",
            text: "Lets pull him out of the pen so you can brush him. ",
            button: [
                { chatID: 8, text: "ok", callback: "horse1" }
            ]
        },
        {
            chatID: 8,
            speaker: "rachel",
            text: "That's a good boy. I'm just going to give you a li'l brushin'. You need to be careful with his undercarriage, he can get a little randy " +
                "if you're too vigorous down there. ",
            button: [
                { chatID: 9, text: "...", callback: "horse1a" }
            ]
        },
        {
            chatID: 9,
            speaker: "rachel",
            text: "'course maybe you do want to rub a bit vigorous. *wink*",
            button: [
                { chatID: 10, text: "uhhh wha, no.", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "rachel",
            text: "Like I said, jobs yours if you want it. Just stop by during the day. Now I gotta get back to some real work. I'm sure " +
                "you'll see yourself out. ",
            button: [
                { chatID: -1, text: "See ya.", callback: "rachel1end" }
            ]
        },
        {
            chatID: 11,
            speaker: "rachel",
            text: "Oh my. I don't think we've been acquainted.  ",
            button: [
                { chatID: 13, text: "What do you mean. We've met. ", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "rachel",
            text: "Lets step outside. I do want to say hello to those amazing milk jugs you have in the light. ",
            button: [
                { chatID: 13, text: "You like? ", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "rachel",
            text: "I'm not talking to you. I'm talking to those beautiful pair of breasts you have. So much potential there! ",
            button: [
                { chatID: 14, text: "Oh, you like?  ", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "rachel",
            text: "I don't like them, I love them, I need them! Tell me, are you lactating? ",
            button: [
                { chatID: 15, text: "...lactating? ", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "rachel",
            text: "I'll take that as a no. Here take this pill. It's completely safe.  ",
            button: [
                { chatID: -1, text: "hmmm", callback: "pill" },
                { chatID: -1, text: "[Run away]", callback: "leave" },
            ]
        },
        {
            chatID: 16,
            speaker: "rachel",
            text: "That's a good girl. Swallow it down for mommy. That's my improved Lactaid pill. Unlike other pills that " +
                "don't work or take forver for little results this one will fill those beautiful breasts with so much milk " +
                "you'll have to come here to get empty. ",
            button: [
                { chatID: 17, text: "What! Do you mean I'm going to be leaking milk from my tits all day?", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "rachel",
            text: "Well, it's too late for that now. That pill is tricks your body into creating milk and it's quite long " +
                "lasting. My first hucow took it 3 years ago and she's still producing some of the finest quality milk. Just " +
                "don't go too long without a milking or you'll wake up squirting milk all over. ",
            button: [
                { chatID: 18, text: "But I don't to squirt milk.", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "rachel",
            text: "Don't worry just come here every three days and I'll give you a good milking and a decent paycheck. Breast " +
                "milk from hucows are worth a pretty penny in these parts, and breasts your size will produce so much milk. ",
            button: [
                { chatID: 19, text: "I can't believe you've done this to me.", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "rachel",
            text: "I can't believe you just took a pill without knowing what it was. What's done is done. You'll make a fine " +
                "addition to my farm. Now I've got some hucows to milk. Come back when you're at least half full. The more " +
                "estorgen you have the more milk you produce. ",
            button: [
                { chatID: -1, text: "Grrrrr", callback: "leave" }
            ]
        },
        {
            chatID: 20,
            speaker: "thinking",
            text: "I've already visited today. Maybe I'll come back tomorrow. ",
            button: [
                { chatID: -1, text: "....", callback: "leave" }
            ]
        },
        {
            chatID: 21,
            speaker: "rachel",
            text: "Here to brush the horse? I think " + sc.n("horse") + " is starting to like you. ",
            button: [
                { chatID: -1, text: "I sure am!", callback: "stable" },
                { chatID: -1, text: "No. ", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};