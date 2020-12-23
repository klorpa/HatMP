﻿//Room name
var room209 = {};
room209.main = function () {
    var mstep = sc.getstep("missy");
    if (mstep < 10) {
        nav.bg("209_classroom/dark.jpg");
        nav.button({
            "type": "btn",
            "name": "exit",
            "left": 1683,
            "top": 313,
            "width": 237,
            "height": 514,
            "image": "209_classroom/darkdoor.png"
        }, 209);
        chat(0, 209);
    }
    else if (g.dt.getDay() === 6 || g.dt.getDay() === 0) {
        nav.bg("209_classroom/dark.jpg");
        nav.button({
            "type": "btn",
            "name": "exit",
            "left": 1683,
            "top": 313,
            "width": 237,
            "height": 514,
            "image": "209_classroom/darkdoor.png"
        }, 209);
        chat(1, 209);
    }
    else if (mstep === 12) {
        if (g.internal === "sugar1") {
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("dmissy");
            room209.btnclick("charsit");
            g.internal = "";
            chat(22, 209);
        }
        else if (g.internal === "sugar2" || g.internal === "sugar0") {
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("dmissy");
            room209.btnclick("charsit");
            g.internal = "";
            chat(21, 209);
        }
        else {
            g.internal = "";
            if (g.gethourdecimal() > 10) {
                nav.bg("209_classroom/dark.jpg");
                nav.button({
                    "type": "btn",
                    "name": "exit",
                    "left": 1683,
                    "top": 313,
                    "width": 237,
                    "height": 514,
                    "image": "209_classroom/darkdoor.png"
                }, 209);
                nav.button({
                    "type": "img",
                    "name": "bb",
                    "left": 605,
                    "top": 225,
                    "width": 868,
                    "height": 368,
                    "image": "209_classroom/bbx.jpg"
                }, 209);
                chat(2, 209);
            }
            else {
                room209.btnclick("bb1");
                room209.btnclick("poster0");
                room209.btnclick("dmissy");
                room209.btnclick("charsit");
                scc.love("missy", -10, 100);
                chat(24, 209);
            }
        }
    }
    else if (g.gethourdecimal() > 10) {
        nav.bg("209_classroom/dark.jpg");
        nav.button({
            "type": "btn",
            "name": "exit",
            "left": 1683,
            "top": 313,
            "width": 237,
            "height": 514,
            "image": "209_classroom/darkdoor.png"
        }, 209);
        nav.button({
            "type": "img",
            "name": "bb",
            "left": 605,
            "top": 225,
            "width": 868,
            "height": 368,
            "image": "209_classroom/bbx.jpg"
        }, 209);
        chat(2, 209);
    }
    else {
        if (mstep === 10) {
            room209.btnclick("bb0");
            room209.btnclick("poster0");
            room209.btnclick("dmissy");
            room209.btnclick("charsit");
            chat(3, 209);
        }
        if (mstep === 11) {
                room209.btnclick("bb1");
                room209.btnclick("poster0");
                room209.btnclick("dmissy");
                room209.btnclick("charsit");
                nav.button({
                    "type": "btn",
                    "name": "missy",
                    "left": 1013,
                    "top": 210,
                    "width": 466,
                    "height": 870,
                    "image": "209_classroom/missy0.png"
                }, 209);
        }
        if (mstep === 13) {
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("charsit");
            nav.button({
                "type": "btn",
                "name": "missy",
                "left": 1013,
                "top": 210,
                "width": 466,
                "height": 870,
                "image": "209_classroom/missy0.png"
            }, 209);
            chat(39, 209);
        }
        if (mstep === 14) {
            room209.btnclick("bb1");
            nav.button({
                "type": "img",
                "name": "void",
                "left": 277,
                "top": 251,
                "width": 269,
                "height": 321,
                "image": "209_classroom/posterx.jpg"
            }, 209);
            nav.button({
                "type": "btn",
                "name": "missy",
                "left": 900,
                "top": 210,
                "width": 466,
                "height": 870,
                "image": "209_classroom/missy0.png"
            }, 209);
            nav.button({
                "type": "img",
                "name": "p",
                "left": 1300,
                "top": 210,
                "width": 466,
                "height": 888,
                "image": "209_classroom/p0.png"
            }, 209);
            room209.btnclick("charsit");
        }
        else {
            room209.btnclick("bbday");
            room209.btnclick("posterx");
            nav.button({
                "type": "btn",
                "name": "missystart",
                "left": 900,
                "top": 210,
                "width": 466,
                "height": 870,
                "image": "209_classroom/missy0.png"
            }, 209);
            nav.button({
                "type": "btn",
                "name": "pstart",
                "left": 1300,
                "top": 210,
                "width": 466,
                "height": 888,
                "image": "209_classroom/p0.png"
            }, 209);
            nav.button({
                "type": "btn",
                "name": "posterstart",
                "left": 277,
                "top": 251,
                "width": 269,
                "height": 321,
                "image": "209_classroom/posterx.jpg"
            }, 209);
            room209.btnclick("charsit");
            
        }
    }
};
 
room209.btnclick = function (name) {
    switch (name) {
        case "missystart":
        case "pstart":
        case "posterstart":
            g.internal = name;
            room209.btnclick("appearancestart");
            break;
        case "appearancestart":
            var hasSuit = cl.c.shoes === "d" && cl.c.pants === "s" && cl.c.shirt === "s" && cl.c.socks === "b";
            var hasGirlSuit = cl.c.shoes === "fb" && cl.c.pants === "k" && cl.c.shirt === "r" && cl.c.socks === null;
            var hasPanties = cl.getEntry("panties", cl.c.panties);
            var isShaved = cl.getBodyHair() === null;
            if (hasSuit && hasPanties && isShaved) {
                room209.btnclick("checklovestart");
            }
            else if (!hasSuit)
                chat(51, 209);
            else if (hasPanties.sex === "m")
                chat(52, 209);
            else if (!isShaved)
                chat(54, 209);
            break;
        case "checklovestart":
            if (scc.get("missy").love > 99)
                chat(55, 209);
            else
                room209.btnclick("activecasesstart");
            break;
        case "activecasesstart":
            room209.btnclick("startstart");
            break;
        case "startstart":
            if (g.internal === "posterstart") {
                var si, scounter;
                nav.killall();
                nav.bg("209_classroom/dark.jpg");
                room28.btnclick("init");
                scounter = 0;
                for (si = 0; si < g.sissy.length; si++) {
                    if (g.sissy[si].ach)
                        scounter++;
                }
                if (scounter === 1)
                    chat(50, 209);
            }
            else if (g.internal === "pstart") {
                nav.killbutton("posterstart");
                switch (sc.getstep("p")) {
                    case 1:
                        nav.modbutton("bb", "209_classroom/bbf1.jpg", null, null);
                        nav.killbutton("missystart");
                        chat(56, 209);
                        break;
                    case 2:
                        nav.modbutton("bb", "209_classroom/bbf1.jpg", null, null);
                        nav.killbutton("missy");
                        chat(60, 209);
                }
            }
            else if (g.internal === "missystart") {
                nav.killbutton("posterstart");
                switch (sc.getstep("missy")) {
                    default:
                        console.log("missy miss - step: " + sc.getstep("missy"));
                        break;
                }
            }
            break;
        case "exit":
            g.pass = "207blue";
            char.room(207);
            break;
        case "dmissy":
            nav.button({
                "type": "img",
                "name": "missy",
                "left": 1013,
                "top": 210,
                "width": 466,
                "height": 870,
                "image": "209_classroom/missy0.png"
            }, 209);
            break;
        case "dmissy1":
            nav.button({
                "type": "img",
                "name": "missy",
                "left": 1013,
                "top": 210,
                "width": 466,
                "height": 870,
                "image": "209_classroom/missy1.png"
            }, 209);
            break;
        case "bb0":
        case "bb1":
            nav.button({
                "type": "img",
                "name": "bb",
                "left": 605,
                "top": 225,
                "width": 868,
                "height": 368,
                "image": "209_classroom/" + name + ".jpg"
            }, 209);
            break;
        case "bbday":
            nav.button({
                "type": "img",
                "name": "bb",
                "left": 605,
                "top": 225,
                "width": 868,
                "height": 368,
                "image": "209_classroom/bbday.jpg"
            }, 209);
            break;
        case "posterx":
            nav.button({
                "type": "btn",
                "name": "posterstart",
                "left": 277,
                "top": 251,
                "width": 269,
                "height": 321,
                "image": "209_classroom/posterx.jpg"
            }, 209);
            break;
        case "poster0":
            nav.button({
                "type": "img",
                "name": "poster",
                "left": 277,
                "top": 251,
                "width": 269,
                "height": 321,
                "image": "209_classroom/" + name + ".jpg"
            }, 209);
            break;
        case "charsit":
            zcl.displayMain(400, 100, .25, "clothes", true);
            nav.button({
                "type": "img",
                "name": "chair",
                "left": 336,
                "top": 898,
                "width": 564,
                "height": 182,
                "image": "209_classroom/chariback.png"
            }, 209);
            break;
        case "accept":
            nav.killbutton("sheet");
            nav.killbutton("contract");
            nav.killbutton("accept");
            chat(10, 209);
            break;
        case "missy":
            var ppoints = sc.getstep("missy");
            //check love 100pts = sissy points
            //check points
            //check clothing
            switch (ppoints) {
                case 11:
                    chat(17, 209);
                    break;
                case 13:
                    chat(25, 209);
                    break;
                case 14:
                    chat(39, 209);
                    break;
            }
            break;
        default:
            break;
    }
};

room209.chatcatch = function (callback) {
    switch (callback) {
        case "contract":
            var thisText = "<h1 class='hl-pink'>Sissy School Contract</h1>" +
                "<h2>Introduction</h2>" +
                "This document, hereby referred to as CONTRACT, is a binding agreement between " + sc.n("missy") + " and " + sc.n("p") + ", <br/>" +
                "hereby referred to as the MISTRESSES, and " + sc.n("me") + " , hereby referred to as SISSY. The purpose of <br/>" +
                "this CONTRACT is to serve as an agreement between the MISTRESS and SISSY regarding terms of SERVICE. <br/>" +
                "<hr/>" +
                "1. The SISSY shall obey any and all orders from the MISTRESSES. It is not the SISSY's place to <br/>" +
                "question the orders given, only to follow and obey.<br/>" +
                "2. The SISSY shall attend the Sissy School until such a time as the MISTRESSES feel the SISSY is ready <br/>" +
                "to assume the duties of a true detective. Once the SISSY has become a true detective the SISSY will have the<br/>" +
                "option to continue their lessons.<br/>" +
                "3. The SISSY shall install the SISSY TRACKING SOFTWARE on the SISSY's phone. The SISSY TRACKING  <br/>" +
                "SOFTWARE will report back the location and all actions of the SISSY so that the MISTRESS may accuratly <br/>" +
                "award the SISSY the proper number of extra credit points. <br/>" +
                "4. Once the SISSY has enough points the SISSY may trade those points for the experimental pill to<br/>" +
                "transform the SISSY's body, or extra lessons that will expand the SISSY's comfort zone.<br/><hr/>";
            nav.button({
                "type": "img",
                "name": "sheet",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "209_classroom/page.png"
            }, 209);
            nav.t({
                type: "img",
                name: "contract",
                left: 350,
                top: 100,
                font: 30,
                hex: "#000000",
                text: thisText
            });
            nav.button({
                "type": "btn",
                "name": "accept",
                "left": 350,
                "top": 860,
                "width": 400,
                "height": 100,
                "image": "209_classroom/accept.jpg"
            }, 209);
            break;
        case "modmissy0":
            nav.modbutton("missy", "209_classroom/missy0.png", null, null);
            break;
        case "modmissy1":
            nav.modbutton("missy", "209_classroom/missy1.png", null, null);
            break;
        case "missy0_1":
            nav.killbutton("missy");
            nav.button({
                "type": "img",
                "name": "missy",
                "left": 875,
                "top": 374,
                "width": 595,
                "height": 706,
                "image": "209_classroom/missyPhone.png"
            }, 209);
            break;
        case "end0":
            g.set("sissyPoints", 60);
            g.set("sissyLevel", 0);
            g.set("sissy", 0);
            g.set("sissyApp", true);
            char.addtime(480);
            sc.setstep("missy", 11);
            char.room(207);
            break;
        case "strip":
            nav.killbutton('chair');
            zcl.displayMain(-400, 400, .3, "panties", true);
            if (cl.getEntry("panties", cl.c.panties).sex === "f") {
                if (sc.getstep('missy') < 13)
                    chat(19, 209);
                else if (sc.getstep("missy") === 13)
                    chat(27, 209);
            }
            else {
                scc.love("missy", -5, 100);
                if (sc.getstep("missy") < 13)
                    chat(18, 209);
                else
                    chat(26, 209);
            }
            break;
        case "charsit":
            room209.btnclick("charsit");
            break;
        case "gettea":
            sc.setstep("missy", 12);
            g.internal = "gettea";
            char.addtime(240);
            nav.button({
                "type": "btn",
                "name": "exit",
                "left": 1683,
                "top": 313,
                "width": 237,
                "height": 514,
                "image": "209_classroom/door.png"
            }, 209);
            break;
        case "fail":
            scc.love("missy", -5);
            char.addtime(180);
            char.room(209);
            break;
        case "end2":
            g.mod("money", 20);
            scc.love("missy", 5, 100);
            sc.setstep("missy", 13);
            char.addtime(180);
            g.pass = "207blue";
            char.room(207);
            break;
        case "leave":
            char.room(203);
            break;
        case "leavebad":
            char.addtime(190);
            char.room(203);
            break;
        case "p3_0":
            nav.killall();
            nav.bg("209_classroom/p3_0.jpg");
            break;
        case "p3_1":
            nav.bg("209_classroom/p3_1.jpg");
            break;
        case "p3_2":
            nav.bg("209_classroom/p3_2.jpg");
            break;
        case "p3_3":
            char.addtime(30);
            nav.bg("209_classroom/p3_3.jpg");
            break;
        case "p3_4x":
            nav.bg("209_classroom/p3_4.jpg");
            break;
        case "p3_4":
            char.addtime(60);
            g.roomTimeout = setTimeout(function () { chat(32, 209); }, 2000);
            break;
        case "p3_5":
            char.addtime(120);
            g.roomTimeout = setTimeout(function () { chat(33, 209); }, 2000);
            break;
        case "p3_6":
            nav.bg("209_classroom/p3_6.jpg");
            break;
        case "end3":
            g.mod("sissy", 60);
            g.mod("money", 40);
            sc.setstep("missy", 14);
            char.addtime(60);
            char.room(203);
            break;
        case "p3_x":
            nav.bg("209_classroom/p3_x.jpg");
            break;
        case "end3bad":
            g.mod("sissy", -60);
            sc.setstep("missy", 14);
            char.addtime(60);
            char.room(203);
            break;
        case "m14_0":
            nav.killbutton("p");
            nav.button({
                "type": "img",
                "name": "p",
                "left": 855,
                "top": 0,
                "width": 1031,
                "height": 1080,
                "image": "209_classroom/p1.png"
            }, 209);
            break;
        case "m14_1":
            nav.killbutton("p");
            zcl.kill();
            nav.button({
                "type": "img",
                "name": "p",
                "left": 1300,
                "top": 210,
                "width": 466,
                "height": 888,
                "image": "209_classroom/p0.png"
            }, 209);
            zcl.displayMain(-400, 400, .3, "panties", true);
            if (cl.getEntry("panties", cl.c.panties).sex === "f") {
                chat(44, 209);
            }
            else {
                chat(42, 209);
            }
            break;
        case "m14_1x":
            cl.list[cl.where("panties", cl.c.panties)].inv = false;
            cl.c.panties = null;
            zcl.displayMain(-400, 400, .3, "panties", true);
            break;
        case "takeSeat":
            zcl.kill();
            room209.btnclick("charsit");
            break;
        case "endm14":
            sc.setstep("missy", 15);
            sc.setstep("p", 1);
            char.addtime(420);
            g.mod("money", 40);
            char.room(203);
            break;
        case "badend":
            scc.love("missy", -10, 100);
            char.addtime(225);
            char.room(203);
            break;
        case "pantycheck":
            nav.killbutton('chair');
            zcl.displayMain(-400, 400, .3, "panties", true);
            break;
        case "points!":
            scc.setlove("missy", 0);
            g.mod("sissy", 100);
            room209.btnclick("activecasesstart");
            break;
        case "ptif8":
            g.roomMapAccess(650, true, true);
            sc.setstep("tiffany", -8);
            break;
        case "pinc1":
            sc.incstep("p", 1);
            g.mod("money", 40);
            g.mod("sissy", 25);
            char.addtime(480);
            char.room(203);
            break;
        default:
            break;
    }
};

room209.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "I don't know what this room is, but it's creepy as fuck.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "I don't think there's class on the weekend.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "It looks like class starts before 10:00 am. It appears I'm late.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "missy",
            text: "Welcome to the first day of your class. Being that you completely bungled your only simple case I've decided to rush " +
            "you into my personal training. ",
            button: [
                { chatID: 4, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "missy",
            text: "It takes many different traits to make a great detective. Physically fit, mentally sharp, thorough, accurate, " +
                "patient, and a good gut instinct. We've acheived the first step of physically fitness, but you lack all the other " +
            "traits. Your complete failure on " + sc.n("tiffany") + "'s case shows it will take years to get you to where you need to be.",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "missy",
            text: "Lucky for you I'm in desperate need for a junior detective and you have some <span class='hl-pink'>trait's</span> " +
                "that I can put to use. The fact that you stole your " + sc.n("el") + "' panties and wore them here, then paraded " +
                " yourself around my office shows me a few things. ",
            button: [
                { chatID: 6, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "missy",
            text: "First it shows a lack of morals. A moral young gentleman wouldn't steal panties from his " + 
                sc.n("el") + ". You obviously have not morals, which will come in handy " +
            "when you need to go undercover. ",
            button: [
                { chatID: 7, text: "Well... you see", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "missy",
            text: "<span class='hl-red'>Shut up!!</span> This is a classroom, not a debate stage. As I was saying... " +
                "wearing those panties to my office and shaving your entire body shows you have the indicators of a sissy. I " +
                "am working on several cases that a sissy could come in handy, but you, in your current state would just " +
                "bungle those cases worse than you bungled " + sc.n("tiffany") + "'s case. ",
            button: [
                { chatID: 8, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "missy",
            text: "My assistant instructor, " + sc.n("p") + ", and I are going to train you to be the perfect sissy to help us take " +
                "down the cult once and for all. For far too long the inept police in this town has allowed the cult to grow in power " +
                "which has only made them more monstrous in their rituals. If you wish to help us put a stop to them your best role " +
                "is as our undercover sissy detective. ",
            button: [
                { chatID: 9, text: "...", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "missy",
            text: "To prepare you I've drawn up this contract for you to read over.",
            button: [
                { chatID: -1, text: "[Read Contact]", callback: "contract" }
            ]
        },
        {
            chatID: 10,
            speaker: "missy",
            text: "So do you agree to this contract?",
            button: [
                { chatID: 13, text: "Yes, I'm in", callback: "missy0_1" },
                { chatID: 11, text: "This is too much, I can't do it.", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "missy",
            text: "This is what we call a <span class='hl'>False choice.</span> This sissy school is at the root of the story line " +
                "and you will have to do it so lets just get it over now. Also let's be honest with ourselves. Somewhere deep down " +
                "inside you needs to be forced in to a subservient little sissy. Just agree with the contract so we can move on.",
            button: [
                { chatID: 13, text: "You're right, I'm a sissy bitch that agrees with this stupid contract.", callback: "missy0_1" },
                { chatID: 12, text: "NO! You can't tell me what to do. I'm still out", callback: "modmissy1" }
            ]
        },
        {
            chatID: 12,
            speaker: "missy",
            text: "Listen here you little shit! You're going to be my bitch, I'm going to fuck you with my big red strapon, " +
            "and you're going to thank me for it. Now sign the contract so we can move the story forward. ",
            button: [
                { chatID: 13, text: "Fuck ok! I'll sign the contract. Also I'm a little bitch", callback: "missy0_1" }
            ]
        },
        {
            chatID: 13,
            speaker: "missy",
            text: "Good, I'm glad you so readily agreed. I'm going to install Sissy AI, the tracking software, on your phone. It really " +
                "has the most advanced AI of its kind. It records all the audio, camera, and can even track your biometrics " +
                "to give a complete sexual picture of the phone holder. ",
            button: [
                { chatID: 14, text: "...", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: "What the hell! There's no way a program can track everything I do, can it? I must be crazy to keep going with " +
                "this, but I really need the job and the cult thing sounds bad. Hopefully she doens't make me do anything " +
                "too embarrassing. I dont' think it can get much worse that having to wear <span class='hl-pink'>panties</span>.",
            button: [
                { chatID: 15, text: "...", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "missy",
            text: "I've set up the AI to automatically give you extra credit points based on your actions. To see how many " +
                "points you have just check the Sissy App in your phone. When you have enough you can trade in those points " +
                "here in the Sissy School. ",
            button: [
                { chatID: 16, text: "Yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "missy",
            text: "Good. We have a lot of work ahead of us. Get a good night's sleep and well begin your " +
                "lessons tomrrow.",
            button: [
                { chatID: -1, text: "Yes ma'am.", callback: "end0" }
            ]
        },
        {
            chatID: 17,
            speaker: "missy",
            text: "Your first lesson is about obedience. I'm going to check to make sure you're wearing your panties. " +
                "Stand up and strip to your underwear.",
            button: [
                { chatID: -1, text: "[Strip to your underwear]", callback: "strip" }
            ]
        },
        {
            chatID: 18,
            speaker: "missy",
            text: "Those aren't panties. Go change your clothes right now. You can change in this room from your inventory.",
            button: [
                { chatID: -1, text: "[Put on your panties - Go to your inventory and select the wardrobe]", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "missy",
            text: "Ok, good. Put your clothes back on. You're not as sexy as you think you are.",
            button: [
                { chatID: 20, text: "[Get dressed]", callback: "charsit" }
            ]
        },
        {
            chatID: 20,
            speaker: "missy",
            text: "Today, your lesson will be on servitude. I know all you care about is getting your cock into something " +
                "warm and wet, but you need to expand your horizons. Go upstairs and fetch me a tea with 1 lump. If you need " +
                "help ask " + sc.n("cecilia") + " where to go to fix the tea.",
            button: [
                { chatID: -1, text: "[Get the tea]", callback: "gettea" }
            ]
        },
        {
            chatID: 21,
            speaker: "missy",
            text: "I see you didn't pay attention to my order. I said 1 lump of sugar. Tea should have an elegant sweatness, without " +
                "becoming sugar water. You have failed to follow simple directions, I'm done with you for the day.",
            button: [
                { chatID: -1, text: "Oh sorry ma'am", callback: "fail" }
            ]
        },
        {
            chatID: 22,
            speaker: "missy",
            text: "A perfect cup of tea with an elegant sweatness, but not too sweet. Congratulations on carrying out the simplest of " +
                "orders. You probably think you deserve a reward.",
            button: [
                { chatID: 23, text: "Yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "missy",
            text: "Well you don't. You will receive some spending cash, because I'm incredibly giving. That is all for today.",
            button: [
                { chatID: -1, text: "Thank you ma'am", callback: "end2" }
            ]
        },
        {
            chatID: 24,
            speaker: "missy",
            text: "I simply asked you to get a cup of tea with 1 lump of sugar and somehow you managed to screw that up. " +
                "So we're going to start over. ",
            button: [
                { chatID: 17, text: "Thank you ma'am", callback: "" }
            ]
        },
        {
            chatID: 25,
            speaker: "missy",
            text: "We shall continue with out lessons on service. I like my boys in panties, go ahead and strip down.",
            button: [
                { chatID: -1, text: "[Strip down]", callback: "strip" }
            ]
        },
        {
            chatID: 26,
            speaker: "missy",
            text: "You don't seem to be able to follow simple instructions. Get out and get your panties.",
            button: [
                { chatID: -1, text: "I'm sorry ma'am", callback: "leavebad" }
            ]
        },
        {
            chatID: 27,
            speaker: "missy",
            text: "Today we shall continue with out lessons on service. Lucky for you I'm feeling quite horny so " +
                "you will get to service me. Come here and kneel.",
            button: [
                { chatID: 28, text: "Nice!", callback: "p3_0" }
            ]
        },
        {
            chatID: 28,
            speaker: "missy",
            text: "You're going to be my vibrator cleaner and holder today.",
            button: [
                { chatID: 29, text: "...", callback: "p3_1" }
            ]
        },
        {
            chatID: 29,
            speaker: "missy",
            text: "Let me just pull this out.",
            button: [
                { chatID: 30, text: "...", callback: "p3_2" }
            ]
        },
        {
            chatID: 30,
            speaker: "missy",
            text: "There. Aren't you the cutest dildo holder. Just sit there and don't move. I'm going to my office to do some work.",
            button: [
                { chatID: 31, text: "...", callback: "p3_3" }
            ]
        },
        {
            chatID: 31,
            speaker: "thinking",
            text: "Did she just leave? This vibrator tasted yummy, but I've swallowed all the juices. It just tastes like " +
                "hard plastic now. Should I get up and leave, this is really too much.",
            button: [
                { chatID: -1, text: "[Wait a bit longer]", callback: "p3_4" }
            ]
        },
        {
            chatID: 32,
            speaker: "thinking",
            text: "What the fuck! I've been waiting over an hour now. This is absolute crap! What does " + sc.n("missy") + " think " +
                "I am? It's like she doesn't respect me at all. I'm sure she got stuck or forgot about me. I should go up and check.",
            button: [
                { chatID: -1, text: "[Wait longer]", callback: "p3_5" },
                { chatID: 36, text: "[Check on " + sc.n("missy") + "]", callback: "p3_x" }
            ]
        },
        {
            chatID: 33,
            speaker: "thinking",
            text: "OK she totally forgot. I've been kneeling here almost 4 hours! This is just too much. " + sc.n("missy") + " doesn't " +
                "care about me at all! I'm going to go up there and really tell her what I think!",
            button: [
                { chatID: 34, text: "[Wait longer]", callback: "p3_6" },
                { chatID: 36, text: "[Check on " + sc.n("missy") + "]", callback: "p3_x" }
            ]
        },
        {
            chatID: 34,
            speaker: "missy",
            text: "I see you can follow directions, that's a good boy. For successfully passing your first real assignment I'll award " +
                "you 60 SISSY POINTS. ",
            button: [
                { chatID: 35, text: "hank aakkk oooo", callback: "p3_4x" }
            ]
        },
        {
            chatID: 35,
            speaker: "missy",
            text: "You are free to go. Let me just take back my favorite vibrator.",
            button: [
                { chatID: -1, text: "Thank you ma'am", callback: "end3" }
            ]
        },
        {
            chatID: 36,
            speaker: "missy",
            text: "<span class='hl-red'>Why are you standing, and why isn't my vibrator in your mouth?</span>",
            button: [
                { chatID: 37, text: "Oh uhhhh, I thought you forgot about me.", callback: "" }
            ]
        },
        {
            chatID: 37,
            speaker: "missy",
            text: "No, I didn't forget about you! You failed this lesson. I award you no points, and may god have mercy on your soul. ",
            button: [
                { chatID: 38, text: "What?", callback: "" }
            ]
        },
        {
            chatID: 38,
            speaker: "missy",
            text: "You failed. If you want to get anywhere you need to find the discipline within yourself or you'll never be a " +
                "junior detective. I'm deducting 60 points. Now get out of my classroom.",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "end3bad" }
            ]
        },
        {
            chatID: 39,
            speaker: "missy",
            text: "Today I have a treat for you. Meet " + sc.n("p") + ". She'll be my assistant trainer. Normally she runs the " +
                "pink room, but she is going to help me with your training. Specifically she'll be your femininity trainer. Say " +
                "hello to " + sc.n("p") + ".",
            button: [
                { chatID: 40, text: "Hello " + sc.n("p") + ".", callback: "" }
            ]
        },
        {
            chatID: 40,
            speaker: "p",
            text: "Tehehehe! Hi " + sc.n("me") + ". " + sc.n("missy") + " has told me about you. I've only worked with sissies in the pink " +
                "room of pleasure. You'll be my first to bring all the way up; I'm so excited! ",
            button: [
                { chatID: 41, text: "...", callback: "m14_0" }
            ]
        },
        {
            chatID: 41,
            speaker: "p",
            text: "Now strip to your panties you little slut!",
            button: [
                { chatID: -1, text: "Yelp! [Strip to your panties]", callback: "m14_1" }
            ]
        },
        {
            chatID: 42,
            speaker: "p",
            text: "Boy's panties.. how disappointing. No more boy's panties for you, gimme those. ",
            button: [
                { chatID: 43, text: "Give " + sc.n("p") + " your boy panties.", callback: "m14_1x" }
            ]
        },
        {
            chatID: 43,
            speaker: "p",
            text: "I don't want to see you in boy panties ever again. They aren't for you!",
            button: [
                { chatID: 44, text: "Yes " + sc.n("p") + ".", callback: "" }
            ]
        },
        {
            chatID: 44,
            speaker: "missy",
            text: "Good, now get dreseed and take your seat while I continue.",
            button: [
                { chatID: 45, text: "Take your seat.", callback: "takeSeat" }
            ]
        },
        {
            chatID: 45,
            speaker: "missy",
            text: "Now that you have met " + sc.n("p") + " I'm going to introduce you to the chart on the wall. ",
            button: [
                { chatID: 46, text: "...", callback: "" }
            ]
        },
        {
            chatID: 46,
            speaker: "missy",
            text: "We will give you the mandatory classes you'll need to prepare yourself to take down the cult, but to my left are " +
                "extracurricular classes. Some you will need, some will help, and some are completely optional, it's up to you to " +
                "decide which ones to do. ",
            button: [
                { chatID: 47, text: "...", callback: "" }
            ]
        },
        {
            chatID: 47,
            speaker: "missy",
            text: "With those extracurricular classes we also have some body modification choices. A scientist friend of mine has " +
                "developed a pill that can target specific areas of your body and make them more feminine. These pills are very " +
                "expensive so you'll have to earn them. ",
            button: [
                { chatID: 48, text: "...", callback: "" }
            ]
        },
        {
            chatID: 48,
            speaker: "missy",
            text: "Each morning you come in you'll have the choice to either pick an extracurricular class or body modification, ask " +
                sc.n("p") + " to give you a femininity lesson, or ask me to give you a discipline and sexuality lesson. If you " +
                "follow direction and behave like a good sissy " + sc.n("p") + " or myself just may give you bonus points for your " +
                "extracurricular clases and modifications. ",
            button: [
                { chatID: 49, text: "So each morning I choose either the extracurricular class or body modification, a lesson by " + sc.n("p") + " or a lesson by you, ma'am.", callback: "" }
            ]
        },
        {
            chatID: 49,
            speaker: "missy",
            text: "Correct. Tomorrow begins the first day of the rest of your life. Sleep well and don't forget your panties. ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "endm14" }
            ]
        },
        {
            chatID: 50,
            speaker: "missy",
            text: "This is the first time you're looking through the extracurricular classes and body modification tree. " +
                "The bright entries you have already taken, the dark ones you haven't taken yet. Some things you can start " +
                "right away, but others you'll need to take the mandatory class first. ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 51,
            speaker: "missy",
            text: "You need to wear your suit top, suit pants, black socks, and black shoes until I tell you otherwise. You " +
                "have failed your lessons for the day.",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "badend" }
            ]
        },
        {
            chatID: 52,
            speaker: "missy",
            text: "It's time for your panty check, strip it down.",
            button: [
                { chatID: 53, text: "Yes ma'am", callback: "pantycheck" }
            ]
        },
        {
            chatID: 53,
            speaker: "missy",
            text: "You know better than to wear those disgusting things here. You have failed your lessons for the day.",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "badend" }
            ]
        },
        {
            chatID: 54,
            speaker: "missy",
            text: "I just threw up in my mouth a little bit. You need to shave your disgusting body. Now!",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "badend" }
            ]
        },
        {
            chatID: 55,
            speaker: "missy",
            text: "I have to admit, you've been doing well in class. I'm going to give you 100 bonus points. ",
            button: [
                { chatID: -1, text: "Thank you ma'am", callback: "points!" }
            ]
        },
        {
            chatID: 56,
            speaker: "p",
            text: "Heheheh, so you want to be more girly? I'm going to start with the basics. Sitting. You're sitting there like " +
                "some kind of knuckle dragging opressor with you genitials on full display. A proper lady crosser her legs when " +
                "seated. ",
            button: [
                { chatID: 57, text: "My legs?", callback: "" }
            ]
        },
        {
            chatID: 57,
            speaker: "p",
            text: "Yes, you will need to always cross your legs when you sit. Also with sitting you need to sit to pee from now on. ",
            button: [
                { chatID: 58, text: "Lol what?", callback: "" }
            ]
        },
        {
            chatID: 58,
            speaker: "p",
            text: "Boys are so discourteous when it comes to simple bathroom etiquette. You get your little spashes on the toilet " +
                "like some kind of untrained dog hehehe. Sitting to pee is most importatnt from now on. ",
            button: [
                { chatID: 59, text: "ok", callback: "" }
            ]
        },
        {
            chatID: 59,
            speaker: "p",
            text: "This is the end of your first lesson. Next we're going to learn how to dress! How exciting!",
            button: [
                { chatID: 60, text: "Yeah!", callback: "ptif8" }
            ]
        },
        {
            chatID: 61,
            speaker: "p",
            text: "Oh my... You don't have any sissy clothes. We need to fix that! " + sc.n("missy") + " told me you know " +
                sc.n("tiffany") + ". She has a nice girly business outfit you can wear. <span class='hl-red'>" +
                "Stop by her place to pick it up!</span>",
            button: [
                { chatID: -1, text: "Ok. I'll stop by " + sc.n("tiffany") + "'s place to pick it up!", callback: "pinc1" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};