﻿var cl = {};

cl.c = {
    leg: 0, chest: 0, cock: 0, butthole: 0.0,
    makeup: "n", lips: "thin", eyes: "gray", hairLength: 0, hairColor: "black", hairStyle: "straight", lastHairCut: 0, bodyhair: "longHair", wig: null,
    shoes: null, socks: null, pants: null, panties: null, bra: null, shirt: null, dress: null, swimsuit: null, pj: null, accessories: new Array(),
    tattoo: new Array(), buttplug: null, chastity: null, chastitylock: false,
    necklace: null, earring: null, bellyring: null, nipplering: null, nosering: null, bracelets: null,
    fingernail: null, toenail: null,
    cumface: false, cumchest: false, cumbutt: false, pissface: null, pisschest: false, pisspants: false,
    locktits: false, lockbutt: false
};

cl.init = function () {
    cl.c = {
        leg: 0, chest: 0, cock: 0, butthole: 0.0,
        makeup: "n", lips: 0, eyes: "gray", hairLength: 0, hairColor: "black", hairStyle: "straight", lastHairCut: 0, bodyhair: "longHair", wig: null,
        shoes: null, socks: null, pants: null, panties: null, bra: null, shirt: null, dress: null, swimsuit: null, pj: null, accessories: new Array(),
        tattoo: new Array(), buttplug: null, chastity: null, chastitylock: false,
        necklace: null, earring: null, bellyring: null, nipplering: null, nosering: null, bracelets: null,
        fingernail: null, toenail: null, lipstick: null,
        cumface: false, cumchest: false, cumbutt: false, pissface: null, pisschest: false, pisspants: false
    };
};

cl.set = [
    { entry: -1, name: "Chubby", p: -1 },
    { entry: 0, name: "Male", p: -1 },
    { entry: 1, name: "Androgynous", p: 250},
    { entry: 2, name: "Cute", p: 375 },
    { entry: 3, name: "Sexy", p: 540 },
    { entry: 4, name: "Bimbo Slut", p: 720 },
    { entry: 5, name: "Cum Dumpster", p: 900 }
];

cl.getSet = function (entry) {
    var i;
    for (i = 0; i < cl.set.length; i++) {
        if (cl.set[i].entry === entry)
            return cl.set[i].name;
    }
    return "UNK";
};

cl.cTemp = {
    shoes: null, socks: null, pants: null, panties: null, bra: null, shirt: null, dress: null, swimsuit: null, pj: null
};

cl.list = [
    { type: "necklace", name: "e", display: "Simple Choker", img: "necklace_e.png", sex: "f", inv: false, daring: 3, price: 25 },
    { type: "necklace", name: "c", display: "Choker", img: "necklace_c.png", sex: "f", inv: false, daring: 3, price: 30 },
    { type: "necklace", name: "s", display: "Slut Choker", img: "necklace_s.png", sex: "f", inv: false, daring: 4, price: 35 },
    { type: "necklace", name: "d", display: "Dog Collar", img: "necklace_d.png", sex: "f", inv: false, daring: 4, price: 45 },
    { type: "necklace", name: "b", display: "Diamond Necklack", img: "necklace_b.png", sex: "f", inv: false, daring: 2, price: 180 },
    { type: "necklace", name: "a", display: "Diamond Necklack", img: "necklace_a.png", sex: "f", inv: false, daring: 2, price: 165 },
    { type: "necklace", name: "g", display: "Mister T", img: "necklace_g.png", sex: "f", inv: false, daring: 2, price: 135 },

    { type: "panties", name: "u", display: "Blue Underwear", img: "panties_underwearblue.png", sex: "m", inv: true, daring: 0, price: -1 },
    { type: "panties", name: "n", display: "Nut Huggers ", img: "panties_nugHugger.png", sex: "m", inv: true, daring: 0, price: -1 },
    { type: "panties", name: "w", display: "White Soiled Panties", img: "panties_whitepanty.png", sex: "f", inv: false, daring: 2, price: -1 },
    { type: "panties", name: "q", display: "Cum Queen Panties", img: "panties_cumQueen.png", sex: "f", inv: false, daring: 2, price: -1 },
    { type: "panties", name: "h", display: "Cuffs Panties", img: "panties_handcuff.png", sex: "f", inv: false, daring: 2, price: -1 },
    { type: "panties", name: "b", display: "Black Lowrise Panties", img: "panties_blackLowrise.png", sex: "f", inv: false, daring: 3, price: 50 },
    { type: "panties", name: "f", display: "Fishy Panties", img: "panties_fishy.png", sex: "f", inv: false, daring: 1, price: 60 },
    { type: "panties", name: "p", display: "Pink Thong", img: "panties_pinkThong.png", sex: "f", inv: false, daring: 3, price: 95 },
    { type: "panties", name: "r", display: "Red Panties", img: "panties_red.png", sex: "f", inv: false, daring: 2, price: 45 },
    { type: "panties", name: "l", display: "Low Rise Panties", img: "panties_low.png", sex: "f", inv: false, daring: 3, price: 60 },
    { type: "panties", name: "c", display: "Cheetah Panties", img: "panties_cheetah.png", sex: "f", inv: false, daring: 2, price: -1 },
    { type: "panties", name: "m", display: "Frilly Panties", img: "panties_frilly.png", sex: "f", inv: false, daring: 2, price: -1 },
    { type: "panties", name: "inv", display: "Invisible Panties", img: "panties_cheetah.png", sex: "f", inv: false, daring: 2, price: -1 },

    { type: "bra", name: "f", display: "Purple Bra", img: "bra_fancy.png", sex: "f", inv: false, daring: 3, price: 65 },
    { type: "bra", name: "r", display: "Red Bra", img: "bra_red.png", sex: "f", inv: false, daring: 3, price: 80 },
    { type: "bra", name: "p", display: "Pink Bra", img: "bra_pink.png", sex: "f", inv: false, daring: 1, price: 40 },
    { type: "bra", name: "w", display: "Plain White Bra", img: "bra_white.png", sex: "f", inv: false, daring: 2, price: -1 },
    { type: "bra", name: "l", display: "Frilly Bra", img: "bra_frilly.png", sex: "f", inv: false, daring: 2, price: -1 },

    { type: "pants", name: "j", display: "Blue Jeans", img: "pants_jeans.png", sex: "m", inv: true, daring: 0, price: -1 },
    { type: "pants", name: "r", display: "Red Shorts", img: "pants_redShort.png", sex: "m", inv: false, daring: 0, price: 60 },
    { type: "pants", name: "b", display: "Blue Shorts", img: "pants_blueShort.png", sex: "m", inv: false, daring: 0, price: 55 },
    { type: "pants", name: "s", display: "Black Suit Pants", img: "pants_suit.png", sex: "m", inv: false, daring: 0, price: 80 },
    { type: "pants", name: "h", display: "Holdiay Skirt", img: "pants_holiday.png", sex: "f", inv: false, daring: 4, price: 80 },
    { type: "pants", name: "v", display: "Naked Beaver Skirt", img: "pants_beaver.png", sex: "f", inv: false, daring: 3, price: -1 },
    { type: "pants", name: "k", display: "Office Skirt", img: "pants_skirt.png", sex: "f", inv: false, daring: 2, price: -1 },
    { type: "pants", name: "p", display: "Prison Pants", img: "pants_prison.png", sex: "m", inv: false, daring: 0, price: -1 },
    { type: "pants", name: "dd", display: "Daisy Dukes", img: "pants_daisyDukes.png", sex: "f", inv: false, daring: 4, price: 160 },
    { type: "pants", name: "d", display: "Polka Dot Dress", img: "pants_polka.png", sex: "f", inv: false, daring: 2, price: 160 },
    { type: "pants", name: "bs", display: "Blue Skirt", img: "pants_blue.png", sex: "f", inv: false, daring: 2, price: 60 },
    { type: "pants", name: "ps", display: "Pink Shorts", img: "pants_pinkshorts.png", sex: "f", inv: false, daring: 1, price: 78 },

    { type: "shirt", name: "g", display: "Gray T-Shirt", img: "shirt_tgray.png", sex: "m", inv: true, daring: 0, price: -1 },
    { type: "shirt", name: "c", display: "Cock T-Shirt", img: "shirt_tcock.png", sex: "m", inv: true, daring: 0, price: 50 },
    { type: "shirt", name: "p", display: "I ♥ Anal T-Shirt", img: "shirt_tpink.png", sex: "f", inv: true, daring: 1, price: 50 },
    { type: "shirt", name: "s", display: "Suit Top", img: "shirt_suit.png", sex: "m", inv: false, daring: 0, price: 90 },
    { type: "shirt", name: "w", display: "Wife Beater", img: "shirt_wifeBeater.png", sex: "m", inv: false, daring: 0, price: 12 },
    { type: "shirt", name: "v", display: "Naked Beaver Shirt", img: "shirt_beaver.png", sex: "f", inv: false, daring: 3, price: -1 },
    { type: "shirt", name: "b", display: "Blouse", img: "shirt_blouse.png", sex: "f", inv: false, daring: 1, price: 30 },
    { type: "shirt", name: "r", display: "Red Blouse", img: "shirt_redBlouse.png", sex: "f", inv: false, daring: 2, price: -1 },
    { type: "shirt", name: "j", display: "Prison Shirt", img: "shirt_prison.png", sex: "m", inv: false, daring: 0, price: -1 },
    { type: "shirt", name: "y", display: "Sun Top", img: "shirt_yellow.png", sex: "f", inv: false, daring: 3, price: 90 },
    { type: "shirt", name: "k", display: "Kitty Kat", img: "shirt_kitty.png", sex: "f", inv: false, daring: 4, price: 75 },
    { type: "shirt", name: "x", display: "X", img: "shirt_x.png", sex: "f", inv: false, daring: 4, price: 40 },
    { type: "shirt", name: "pt", display: "Pink Tank Top", img: "shirt_crop.png", sex: "f", inv: false, daring: 2, price: 30 },
    { type: "shirt", name: "gg", display: "Good Girl Tank", img: "shirt_gg.png", sex: "f", inv: false, daring: 2, price: 30 },

    { type: "dress", name: "ps", display: "Pink Slutty Dress", img: "dress_pinkslut.png", sex: "f", inv: false, daring: 4, price: 175 },
    { type: "dress", name: "s", display: "Summer Dress", img: "dress_summer.png", sex: "f", inv: false, daring: 2, price: 90 },
    { type: "dress", name: "p", display: "Purple Dress", img: "dress_purple.png", sex: "f", inv: false, daring: 3, price: 90 },
    { type: "dress", name: "a", display: "Alice Dress", img: "dress_alice.png", sex: "f", inv: false, daring: 1, price: 90 },
    { type: "dress", name: "u", display: "Ugly Dress", img: "dress_ugly.png", sex: "f", inv: false, daring: 1, price: 30 },
    { type: "dress", name: "m", display: "Mesh Dress", img: "dress_mesh.png", sex: "f", inv: false, daring: 4, price: 210 },
    { type: "dress", name: "nu", display: "Nurse Uniform", img: "dress_nurse.png", sex: "f", inv: false, daring: 2, price: -1 },
    { type: "dress", name: "r", display: "Red Dress", img: "dress_red.png", sex: "f", inv: false, daring: 3, price: 180 },
    { type: "dress", name: "rt", display: "Red Ruffle", img: "dress_RedRuffle.png", sex: "f", inv: false, daring: 3, price: 150 },
    { type: "dress", name: "pd", display: "Polka Dot", img: "dress_polkadot.png", sex: "f", inv: false, daring: 2, price: 47 },
    { type: "dress", name: "robe", display: "Cult Robe", img: "dress_robe.png", sex: "m", inv: false, daring: 0, price: -1 },
    { type: "dress", name: "rose", display: "Pink Rose Dress", img: "dress_rose.png", sex: "f", inv: false, daring: 2, price: -1 },
    { type: "dress", name: "maid", display: "Maid Outfit", img: "dress_maid.png", sex: "f", inv: false, daring: 3, price: -1 },
    { type: "dress", name: "cor", display: "Red Corset", img: "dress_cor.png", sex: "f", inv: false, daring: 4, price: -1 },

    { type: "swimsuit", name: "m", display: "Male Swimsuit", img: "swim_man.png", sex: "m", inv: false, daring: 0, price: 45 },
    { type: "swimsuit", name: "b", display: "Blue Swimsuit", img: "swim_blue.png", sex: "f", inv: false, daring: 2, price: 125 },
    { type: "swimsuit", name: "r", display: "Red Swimsuit", img: "swim_red.png", sex: "f", inv: false, daring: 3, price: 140 },
    { type: "swimsuit", name: "p", display: "Pink Swimsuit", img: "swim_pink.png", sex: "f", inv: false, daring: 4, price: 80 },

    { type: "shoes", name: "w", display: "Workboots", img: "shoes_workboots.png", sex: "m", inv: true, daring: 0, price: -1 },
    { type: "shoes", name: "d", display: "Dress Shoes", img: "shoes_black.png", sex: "m", inv: false, daring: 0, price: 60 },
    { type: "shoes", name: "pr", display: "Pink Running", img: "shoes_pinkRun.png", sex: "f", inv: false, daring: 1, price: 120 },
    { type: "shoes", name: "br", display: "Blue Running", img: "shoes_blueRun.png", sex: "m", inv: false, daring: 0, price: 75 },
    { type: "shoes", name: "fs", display: "Red Strappy Flats", img: "shoes_redflats.png", sex: "f", inv: false, daring: 2, price: 120 },
    { type: "shoes", name: "fb", display: "Black Flats", img: "shoes_flatBlack.png", sex: "f", inv: false, daring: 2, price: 90 },
    { type: "shoes", name: "fl", display: "Blue Flats", img: "shoes_flatBlue.png", sex: "f", inv: false, daring: 2, price: 90 },
    { type: "shoes", name: "hr", display: "Red Heels", img: "shoes_redheels.png", sex: "f", inv: false, daring: 3, price: 165 },
    { type: "shoes", name: "v", display: "Naked Beaver Shoes", img: "shoes_beaver.png", sex: "f", inv: false, daring: 2, price: -1 },
    { type: "shoes", name: "nu", display: "Nurses", img: "shoes_nurse.png", sex: "f", inv: false, daring: 2, price: -1 },

    { type: "socks", name: "w", display: "Sweat Socks", img: "socks_white.png", sex: "m", inv: true, daring: 0, price: -1 },
    { type: "socks", name: "b", display: "Dress Socks", img: "socks_black.png", sex: "m", inv: false, daring: 0, price: 15 },
    { type: "socks", name: "f", display: "Black Fishnet Stockings", img: "sock_fishnet.png", sex: "f", inv: false, daring: 3, price: 75 },
    { type: "socks", name: "s", display: "Little White Socks", img: "socks_shortWhite.png", sex: "f", inv: false, daring: 1, price: 24 },
    { type: "socks", name: "r", display: "Rainbow Stockings", img: "socks_rainbow.png", sex: "f", inv: false, daring: 2, price: 48 },
    { type: "socks", name: "p", display: "Pink Stockings", img: "socks_pink.png", sex: "f", inv: false, daring: 1, price: 36 },

    { type: "accessories", name: "piggy", display: "Piggy Nose", img: "acc_piggy.png", sex: "f", inv: false, daring: 0, price: -1 },

    { type: "pj", name: "paisley", img: "pj_paisley.png", sex: "m", inv: true, daring: 0, price: -1 },
    { type: "pj", name: "gown", img: "pj_gown.png", sex: "f", inv: false, daring: 3, price: -1 },
    { type: "pj", name: "b", img: "pj_black.png", sex: "f", inv: false, daring: 3, price: -1 },

    { type: "chastity", name: "cage", img: "chastity_cage.png", sex: "m", inv: false, daring: 1, price: 120 },
    { type: "chastity", name: "pink", img: "chastity_pink.png", sex: "f", inv: false, daring: 2, price: 90 },
    { type: "chastity", name: "metal", img: "chastity_metal.png", sex: "f", inv: false, daring: 1, price: -1 },

    { type: "buttplug", name: "s", img: "plug_small.png", sex: "f", inv: false, daring: 1, price: 30 },
    { type: "buttplug", name: "n", img: "plug_medium.png", sex: "f", inv: false, daring: 2, price: 80 },
    { type: "buttplug", name: "l", img: "plug_large.png", sex: "f", inv: false, daring: 3, price: 120 },
    { type: "buttplug", name: "h", img: "plug_heart.png", sex: "f", inv: false, daring: 1, price: 120 },
    { type: "buttplug", name: "r", img: "plug_red.png", sex: "f", inv: false, daring: 1, price: 100 },
    { type: "buttplug", name: "b", img: "plug_blue.png", sex: "f", inv: false, daring: 1, price: 100 },
    { type: "buttplug", name: "g", img: "plug_green.png", sex: "f", inv: false, daring: 1, price: 100 },
    { type: "buttplug", name: "v", img: "plug_vibe.gif", sex: "f", inv: false, daring: 2, price: 180 },

    { type: "wig", name: "d", img: "wig_d.png", sex: "f", inv: false, daring: 2, price: -1 },
    { type: "wig", name: "f", img: "wig_f.png", sex: "f", inv: false, daring: 2, price: -1 }
];

//for (var q = 0; q < cl.list.length; q++) {
//    cl.list[q].inv = true;
//}

cl.add = function (type, name) {
    var i;
    for (i = 0; i < cl.list.length; i++) {
        if (cl.list[i].type === type && cl.list[i].name === name) {
            cl.list[i].inv = true;
            i = cl.c.length;
        }
    }
};

cl.remove = function (type, name) {
    var i;
    cl.list[cl.where(type, name)].inv = false;
    for (i = 0; i < 5; i++) {
        switch (type) {
            case "shoes":
                if (cl.saveOutfit[i].shoes === name)
                    cl.saveOutfit[i].shoes = null;
                break;
            case "socks":
                if (cl.saveOutfit[i].socks === name)
                    cl.saveOutfit[i].socks = null;
                break;
            case "pants":
                if (cl.saveOutfit[i].pants === name)
                    cl.saveOutfit[i].pants = null;
                break;
            case "panties":
                if (cl.saveOutfit[i].panties === name)
                    cl.saveOutfit[i].panties = null;
                break;
            case "bra":
                if (cl.saveOutfit[i].bra === name)
                    cl.saveOutfit[i].bra = null;
                break;
            case "shirt":
                if (cl.saveOutfit[i].shirt === name)
                    cl.saveOutfit[i].shirt = null;
                break;
            case "dress":
                if (cl.saveOutfit[i].dress === name)
                    cl.saveOutfit[i].dress = null;
                break;
            case "swimsuit":
                if (cl.saveOutfit[i].swimsuit === name)
                    cl.saveOutfit[i].swimsuit = null;
                break;
            case "pj":
                if (cl.saveOutfit[i].pj === name)
                    cl.saveOutfit[i].pj = null;
                break;
            default:
                console.log("missing: " + type + ", " + name);
                break;
        }
    }
    switch (type) {
        case "shoes":
            if (cl.c.shoes === name)
                cl.c.shoes = null;
            break;
        case "socks":
            if (cl.c.socks === name)
                cl.c.socks = null;
            break;
        case "pants":
            if (cl.c.pants === name)
                cl.c.pants = null;
            break;
        case "panties":
            if (cl.c.panties === name)
                cl.c.panties = null;
            break;
        case "bra":
            if (cl.c.bra === name)
                cl.c.bra = null;
            break;
        case "shirt":
            if (cl.c.shirt === name)
                cl.c.shirt = null;
            break;
        case "dress":
            if (cl.c.dress === name)
                cl.c.dress = null;
            break;
        case "swimsuit":
            if (cl.c.swimsuit === name)
                cl.c.swimsuit = null;
            break;
        case "pj":
            if (cl.c.pj === name)
                cl.c.pj = null;
            break;
        default:
            console.log("missing: " + type + ", " + name);
            break;
    }
};

cl.nude = function () {
    cl.cTemp.shoes = cl.c.shoes;
    cl.cTemp.socks = cl.c.socks;
    cl.cTemp.pants = cl.c.pants;
    cl.cTemp.panties = cl.c.panties;
    cl.cTemp.bra = cl.c.bra;
    cl.cTemp.shirt = cl.c.shirt;
    cl.cTemp.dress = cl.c.dress;
    cl.cTemp.swimsuit = cl.c.swimsuit;
    cl.cTemp.pj = cl.c.pj;

    cl.c.shoes = null;
    cl.c.socks = null;
    cl.c.pants = null;
    cl.c.panties = null;
    cl.c.bra = null;
    cl.c.shirt = null;
    cl.c.dress = null;
    cl.c.swimsuit = null;
    cl.c.pj = null;
    cl.display();
};

cl.changeClothingSave = function () {
    cl.cTemp.shoes = cl.c.shoes;
    cl.cTemp.socks = cl.c.socks;
    cl.cTemp.pants = cl.c.pants;
    cl.cTemp.panties = cl.c.panties;
    cl.cTemp.bra = cl.c.bra;
    cl.cTemp.shirt = cl.c.shirt;
    cl.cTemp.dress = cl.c.dress;
    cl.cTemp.swimsuit = cl.c.swimsuit;
    cl.cTemp.pj = cl.c.pj;
};

cl.changeClothing = function (p) {
    cl.c.shoes = cl.cTemp.shoes;
    cl.c.socks = cl.cTemp.socks;
    cl.c.pants = cl.cTemp.pants;
    cl.c.panties = cl.cTemp.panties;
    cl.c.bra = cl.cTemp.bra;
    cl.c.shirt = cl.cTemp.shirt;
    cl.c.dress = cl.cTemp.dress;
    cl.c.swimsuit = cl.cTemp.swimsuit;
    cl.c.pj = cl.cTemp.pj;
    cl.display();
};

cl.undo = function(){
    cl.changeClothing();
};

cl.save = function () {
    var ra = {
        list: new Array(),
        current: new Array(),
        saveOutfit: new Array()
    };
    var i;
    for (i = 0; i < cl.list.length; i++) {
        if (cl.list[i].inv) {
            ra.list.push({
                type: cl.list[i].type,
                name: cl.list[i].name
            });
        }
    }
    ra.saveOutfit = $.extend(true, {}, cl.saveOutfit);
    ra.current = $.extend(true, {}, cl.c);
    return ra;
};

cl.load = function (ra) {
    var i, j;
    for (i = 0; i < cl.list.length; i++)
        cl.list[i].inv = false;
    for (i = 0; i < ra.list.length; i++) {
        for (j = 0; j < cl.list.length; j++) {
            if (ra.list[i].type === cl.list[j].type && ra.list[i].name === cl.list[j].name) {
                cl.list[j].inv = true;
                j = 100000;
            }
        }
    }
    cl.c = $.extend(true, {}, ra.current);
    //cl.c.lastHairCut = new Date(cl.c.lastHairCut);
    cl.saveOutfit = $.extend(true, {}, ra.saveOutfit);

    if (!("lipstick" in cl.c)) 
        cl.c.lipstick = null;

    if (cl.c.butthole < 0)
        cl.c.butthole = 0;

    if (isNaN(cl.c.lips)) {
        if (cl.c.lips.includes("red"))
            cl.c.lipstick = "red";
        else if (cl.c.lips.includes("pink"))
            cl.c.lipstick = "pink";
        else if (cl.c.lips.includes("purple"))
            cl.c.lipstick = "purple";

        if (cl.c.lips.includes("big"))
            cl.c.lips = 1;
        else if (cl.c.lips.includes("sb"))
            cl.c.lips = 2;
        else
            cl.c.lips = 0;
    }
};


cl.where = function (type, name) {
    var retList = null;
    for (var i = 0; i < cl.list.length; i++) {
        if (cl.list[i].type === type && cl.list[i].name === name)
            retList = i;
    }
    return retList;
};

cl.getEntry = function (type, name) {
    return cl.list[cl.where(type, name)];
};

cl.hasClothing = function (type, name) {
    var item = cl.where(type, name);
    var returnHas = false;
    if (item !== null)
        returnHas = cl.list[item].inv;

    return returnHas;
};

cl.hasClothingType = function (type) {
    var i;
    for (i = 0; i < cl.list.length; i++) {
        if (cl.list[i].type === type && cl.list[i].inv)
            return true;
    }
    return false;
};

cl.saveOutfit = [
    { name: "Casual", shoes: "w", socks: "w", pants: "j", panties: "u", bra: null, shirt: "g", dress: null, swimsuit: null, pj: null, accessories: new Array(), isReg: true },
    { name: "Outfit 2", shoes: null, socks: null, pants: null, panties: "u", bra: null, shirt: null, dress: null, swimsuit: null, pj: null, accessories: new Array(), isReg: true },
    { name: "Outfit 3", shoes: null, socks: null, pants: null, panties: "u", bra: null, shirt: null, dress: null, swimsuit: null, pj: null, accessories: new Array(), isReg: true },
    { name: "Outfit 4", shoes: null, socks: null, pants: null, panties: "u", bra: null, shirt: null, dress: null, swimsuit: null, pj: null, accessories: new Array(), isReg: true },
    { name: "Sleep", shoes: null, socks: null, pants: null, panties: null, bra: null, shirt: null, dress: null, swimsuit: null, pj: "paisley", accessories: new Array(), isReg: false }
];

cl.gimmieAll = function () {
    var i;
    for (i = 0; i < cl.list.length; i++)
        cl.list[i].inv = true;
};

cl.hasoutfit = function (ctype) {
    var missingClothing = new Array();
    
    switch (ctype) {
        case "workout":
            if (!(cl.c.shoes === "pr" || cl.c.shoes === "br"))
                missingClothing.push("running shoes");
            if (!(cl.c.shirt === "g" || cl.c.shirt === "c" || cl.c.shirt === "p" || cl.c.shirt === "w" || cl.c.shirt === "pt" || cl.c.shirt === "gg"))
                missingClothing.push("t-shirt");
            if (!(cl.c.pants === "r" || cl.c.pants === "b" || cl.c.pants === "ps"))
                missingClothing.push("shorts");
            break;
        case "public":
            if (!g.sissy[34].ach) {
                if (cl.c.swimsuit === null) {
                    if (cl.c.shoes === null)
                        missingClothing.push("shoes");
                    if (cl.c.dress === null) {
                        if (cl.c.shirt === null)
                            missingClothing.push("shirt");
                        if (cl.c.pants === null)
                            missingClothing.push("pants");
                    }
                    if (cl.c.panties === null && !g.sissy[32].ach)
                        missingClothing.push("panties");
                    if (cl.c.bra === null && !g.sissy[32].ach && g.sissy[29].ach)
                        missingClothing.push("bra");
                }
            }
            break;
        case "nude":
            if (cl.c.swimsuit !== null)
                missingClothing.push("swimsuit");
            if (cl.c.dress !== null)
                missingClothing.push("dress");
            if (cl.c.shirt !== null)
                missingClothing.push("shirt");
            if (cl.c.pants !== null)
                missingClothing.push("pants");
            if (cl.c.panties !== null)
                missingClothing.push("panties");
            if (cl.c.socks !== null)
                missingClothing.push("socks");
            if (cl.c.pj !== null)
                missingClothing.push("PJs");
            if (cl.c.bra !== null)
                missingClothing.push("bra");
            break;
        case "swim":
        case "swimsuit":
            if (cl.c.swimsuit === null)
                missingClothing.push("bikini");
            break;
    }
   
    var retMissing = null;
    if (missingClothing.length === 1)
        retMissing = missingClothing;
    else if (missingClothing.length === 2)
        retMissing = missingClothing[0] + " and " + missingClothing[1];
    else if (missingClothing.length > 1) {
        retMissing = "";
        for (var i = 0; i < missingClothing.length - 1; i++) {
            retMissing += missingClothing[i] + ", ";
        }
        retMissing = retMissing + "and " + missingClothing[i];
    }

    if (!g.sissy[29].ach) {
        if (cl.isCrossdressing())
            retMissing = ' <span class="hl">self aweness! I can\'t wear girly clothes!</span>';
    }
    if (retMissing !== null)
        retMissing = ' <span class="hl">' + retMissing + '</span>';
    return retMissing;
};

cl.hairColor = [
    { color: "black", step: 0 },
    { color: "auburn", step: 0 },
    { color: "blond", step: 0 },
    { color: "red", step: 0 },
    { color: "pink", step: 1 },
    { color: "rainbow", step: 1 }
];

cl.hairStyle = ["straight", "wavy", "pig", "bang", "leia"];

cl.makeup = [
    { name: "n", image: "body_head.png" },
    { name: "light", image: "body_head_med_black.png" },
    { name: "lb", image: "body_head_light_black.png" },
    { name: "lp", image: "body_head_light_purple.png" },
    { name: "mb", image: "body_head_med_black.png" },
    { name: "mp", image: "body_head_med_purple.png" },
    { name: "hb", image: "body_head_heavy_black.png" },
    { name: "hp", image: "body_head_heavy_purple.png" },
    { name: "rb", image: "body_head_ruin_black.png" },
    { name: "rp", image: "body_head_ruin_purple.png" }
];

cl.getmakeup = function () {
    var i, ret;
    ret = "";
    if (cl.c.makeup === null || cl.c.makeup === "n")
        return "none";
    if (cl.c.makeup === "light")
        return "Light Black";

    $.each(cl.makeup, function (i, v) {

        if (cl.c.makeup === v.name) {
            switch (v.name[0]) {
                case "l":
                    ret = "Light ";
                    break;
                case "m":
                    ret = "Medium ";
                    break;
                case "h":
                    ret = "Bimbo ";
                    break;
                case "r":
                    ret = "Ruined ";
                    break;
            }
            switch (v.name[1]) {
                case "b":
                    ret += "Black";
                    break;
                case "p":
                    ret += "Purple";
                    break;
            }
            return;
        }
    });
    return ret;
};

cl.getMakeupWeight = function () {
    var retValue = 0;
    if (cl.c.makeup === null) {
        retValue = 0;
    }
    else if (cl.c.makeup === "n") {
        retValue = 0;
    }
    else if (cl.c.makeup === "light") {
        retValue = 1;
    }
    else {
        switch (cl.c.makeup[0]) {
            case "l":
                retValue = 1;
                break;
            case "m":
                retValue = 2;
                break;
            case "h":
            case "r":
                retValue = 3;
                break;
            default:
                retValue = 0;
        }
    }
    return retValue;
};

cl.getLips = function () {
    if (cl.c.lips === "thin")
        return 0;
    else
        return cl.c.lips;
};

cl.bodyhair = [
    { name: "longHair", dt: 7, image: "hairy_long.png", display: "Full Body Hair" },
    { name: "shortHair", dt: 4, image: "hairy_short.png", display: "Short Body Hair" }
];

cl.eyes = [
    { name: "brown", image: "body_eyes_brown.png", back: null },
    { name: "lightblue", image: "body_eyes_lightblue.png", back: null },
    { name: "green", image: "body_eyes_green.png", back: null },
    { name: "hazel", image: "body_eyes_hazel.png", back: null },
    { name: "blue", image: "body_eyes_blue.png", back: null },
    { name: "gray", image: "body_eyes_gray.png", back: null }
];

cl.eyebrows = [
    { name: "man", color: "black", image: "headEyebrowsWoman.png" },
    { name: "woman", color: "black", image: "headEyebrowsWoman.png" }
];

cl.pants = [
    { name: "j", leg: 5, image: "pants_j_4.png", back: "pants_j_5_back.png", p: "pants_j_5_pee.png", pBack: "" },
    { name: "j", leg: 4, image: "pants_j_4.png", back: "pants_j_4_back.png", p: "pants_j_4_pee.png", pBack: "" },
    { name: "j", leg: 3, image: "pants_j_3.png", back: "pants_j_3_back.png", p: "pants_j_3_pee.png", pBack: "" },
    { name: "j", leg: 2, image: "pants_j_1.png", back: "pants_j_2_back.png", p: "pants_j_1_pee.png", pBack: "" },
    { name: "j", leg: 1, image: "pants_j_1.png", back: "pants_j_0_back.png", p: "pants_j_1_pee.png", pBack: "" },
    { name: "j", leg: 0, image: "pants_j_0.png", back: "pants_j_0_back.png", p: "pants_j_0_pee.png", pBack: "" },

    { name: "b", leg: 5, image: "pants_b_5.png", back: "pants_b_5_back.png", p: ".png", pBack: "" },
    { name: "b", leg: 4, image: "pants_b_4.png", back: "pants_b_4_back.png", p: ".png", pBack: "" },
    { name: "b", leg: 3, image: "pants_b_3.png", back: "pants_b_3_back.png", p: ".png", pBack: "" },
    { name: "b", leg: 2, image: "pants_b_0.png", back: "pants_b_2_back.png", p: ".png", pBack: "" },
    { name: "b", leg: 1, image: "pants_b_0.png", back: "pants_b_0_back.png", p: ".png", pBack: "" },
    { name: "b", leg: 0, image: "pants_b_0.png", back: "pants_b_0_back.png", p: ".png", pBack: "" },

    { name: "r", leg: 5, image: "pants_r_5.png", back: "pants_r_5_back.png", p: ".png", pBack: "" },
    { name: "r", leg: 4, image: "pants_r_4.png", back: "pants_r_4_back.png", p: ".png", pBack: "" },
    { name: "r", leg: 3, image: "pants_r_0.png", back: "pants_r_3_back.png", p: ".png", pBack: "" },
    { name: "r", leg: 2, image: "pants_r_0.png", back: "pants_r_2_back.png", p: ".png", pBack: "" },
    { name: "r", leg: 1, image: "pants_r_0.png", back: "pants_r_0_back.png", p: ".png", pBack: "" },
    { name: "r", leg: 0, image: "pants_r_0.png", back: "pants_r_0_back.png", p: ".png", pBack: "" },

    { name: "s", leg: 5, image: "pants_s_5.png", back: "pants_s_5_back.png", p: "pants_s_5_pee.png", pBack: "" },
    { name: "s", leg: 4, image: "pants_s_4.png", back: "pants_s_4_back.png", p: "pants_s_4_pee.png", pBack: "" },
    { name: "s", leg: 3, image: "pants_s_3.png", back: "pants_s_3_back.png", p: "pants_s_3_pee.png", pBack: "" },
    { name: "s", leg: 2, image: "pants_s_1.png", back: "pants_s_2_back.png", p: "pants_s_1_pee.png", pBack: "" },
    { name: "s", leg: 1, image: "pants_s_1.png", back: "pants_s_0_back.png", p: "pants_s_1_pee.png", pBack: "" },
    { name: "s", leg: 0, image: "pants_s_0.png", back: "pants_s_0_back.png", p: "pants_s_0_pee.png", pBack: "" },

    { name: "v", leg: 5, image: "pants_v_5.png", back: "pants_v_5_back.png", p: "pants_v_5.png", pBack: "" },
    { name: "v", leg: 4, image: "pants_v_4.png", back: "pants_v_4_back.png", p: "pants_v_4.png", pBack: "" },
    { name: "v", leg: 3, image: "pants_v_0.png", back: "pants_v_3_back.png", p: "pants_v_3.png", pBack: "" },
    { name: "v", leg: 2, image: "pants_v_0.png", back: "pants_v_2_back.png", p: "pants_v_2.png", pBack: "" },
    { name: "v", leg: 1, image: "pants_v_0.png", back: "pants_v_0_back.png", p: "pants_v_1.png", pBack: "" },
    { name: "v", leg: 0, image: "pants_v_0.png", back: "pants_v_0_back.png", p: "pants_v_0.png", pBack: "" },

    { name: "k", leg: 5, image: "pants_k_5.png", back: "pants_k_5_back.png", p: "pants_k_5.png", pBack: "" },
    { name: "k", leg: 4, image: "pants_k_4.png", back: "pants_k_4_back.png", p: "pants_k_4.png", pBack: "" },
    { name: "k", leg: 3, image: "pants_k_3.png", back: "pants_k_3_back.png", p: "pants_k_3.png", pBack: "" },
    { name: "k", leg: 2, image: "pants_k_1.png", back: "pants_k_2_back.png", p: "pants_k_2.png", pBack: "" },
    { name: "k", leg: 1, image: "pants_k_1.png", back: "pants_k_0_back.png", p: "pants_k_1.png", pBack: "" },
    { name: "k", leg: 0, image: "pants_k_0.png", back: "pants_k_0_back.png", p: "pants_k_0.png", pBack: "" },

    { name: "p", leg: 5, image: "pants_p_5.png", back: "pants_p_5_back.png", p: "pants_p_5.png", pBack: "" },
    { name: "p", leg: 4, image: "pants_p_4.png", back: "pants_p_4_back.png", p: "pants_p_4.png", pBack: "" },
    { name: "p", leg: 3, image: "pants_p_3.png", back: "pants_p_3_back.png", p: "pants_p_3.png", pBack: "" },
    { name: "p", leg: 2, image: "pants_p_1.png", back: "pants_p_2_back.png", p: "pants_p_2.png", pBack: "" },
    { name: "p", leg: 1, image: "pants_p_1.png", back: "pants_p_0_back.png", p: "pants_p_1.png", pBack: "" },
    { name: "p", leg: 0, image: "pants_p_0.png", back: "pants_p_0_back.png", p: "pants_p_0.png", pBack: "" },

    { name: "dd", leg: 5, image: "pants_dd_4.png", back: "pants_dd_5_back.png", p: "pants_dd_5.png", pBack: "" },
    { name: "dd", leg: 4, image: "pants_dd_4.png", back: "pants_dd_4_back.png", p: "pants_dd_4.png", pBack: "" },
    { name: "dd", leg: 3, image: "pants_dd_3.png", back: "pants_dd_3_back.png", p: "pants_dd_3.png", pBack: "" },
    { name: "dd", leg: 2, image: "pants_dd_0.png", back: "pants_dd_2_back.png", p: "pants_dd_2.png", pBack: "" },
    { name: "dd", leg: 1, image: "pants_dd_0.png", back: "pants_dd_0_back.png", p: "pants_dd_1.png", pBack: "" },
    { name: "dd", leg: 0, image: "pants_dd_0.png", back: "pants_dd_0_back.png", p: "pants_dd_0.png", pBack: "" },

    { name: "d", leg: 5, image: "pants_d_5.png", back: "pants_d_4_back.png", p: "pants_d_4.png", pBack: "" },
    { name: "d", leg: 4, image: "pants_d_4.png", back: "pants_d_4_back.png", p: "pants_d_4.png", pBack: "" },
    { name: "d", leg: 3, image: "pants_d_3.png", back: "pants_d_3_back.png", p: "pants_d_3.png", pBack: "" },
    { name: "d", leg: 2, image: "pants_d_0.png", back: "pants_d_0_back.png", p: "pants_d_2.png", pBack: "" },
    { name: "d", leg: 1, image: "pants_d_0.png", back: "pants_d_0_back.png", p: "pants_d_1.png", pBack: "" },
    { name: "d", leg: 0, image: "pants_d_0.png", back: "pants_d_0_back.png", p: "pants_d_0.png", pBack: "" },

    { name: "bs", leg: 5, image: "pants_bs_0.png", back: "pants_bs_0_back.png", p: "pants_bs_0.png", pBack: "" },
    { name: "bs", leg: 4, image: "pants_bs_0.png", back: "pants_bs_0_back.png", p: "pants_bs_0.png", pBack: "" },
    { name: "bs", leg: 3, image: "pants_bs_0.png", back: "pants_bs_0_back.png", p: "pants_bs_0.png", pBack: "" },
    { name: "bs", leg: 2, image: "pants_bs_0.png", back: "pants_bs_0_back.png", p: "pants_bs_0.png", pBack: "" },
    { name: "bs", leg: 1, image: "pants_bs_0.png", back: "pants_bs_0_back.png", p: "pants_bs_0.png", pBack: "" },
    { name: "bs", leg: 0, image: "pants_bs_0.png", back: "pants_bs_0_back.png", p: "pants_bs_0.png", pBack: "" },

    { name: "h", leg: 5, image: "pants_h_5.png", back: "pants_h_5_back.png", p: "pants_h_3.png", pBack: "" },
    { name: "h", leg: 4, image: "pants_h_4.png", back: "pants_h_4_back.png", p: "pants_h_3.png", pBack: "" },
    { name: "h", leg: 3, image: "pants_h_3.png", back: "pants_h_3_back.png", p: "pants_h_2.png", pBack: "" },
    { name: "h", leg: 2, image: "pants_h_1.png", back: "pants_h_2_back.png", p: "pants_h_1.png", pBack: "" },
    { name: "h", leg: 1, image: "pants_h_1.png", back: "pants_h_0_back.png", p: "pants_h_1.png", pBack: "" },
    { name: "h", leg: 0, image: "pants_h_0.png", back: "pants_h_0_back.png", p: "pants_h_0.png", pBack: "" },

    { name: "ps", leg: 5, image: "pants_ps_5.png", back: "pants_ps_5_back.png", p: "pants_h_3.png", pBack: "" },
    { name: "ps", leg: 4, image: "pants_ps_4.png", back: "pants_ps_4_back.png", p: "pants_h_3.png", pBack: "" },
    { name: "ps", leg: 3, image: "pants_ps_0.png", back: "pants_ps_3_back.png", p: "pants_h_2.png", pBack: "" },
    { name: "ps", leg: 2, image: "pants_ps_1.png", back: "pants_ps_2_back.png", p: "pants_h_1.png", pBack: "" },
    { name: "ps", leg: 1, image: "pants_ps_1.png", back: "pants_ps_0_back.png", p: "pants_h_1.png", pBack: "" },
    { name: "ps", leg: 0, image: "pants_ps_0.png", back: "pants_ps_0_back.png", p: "pants_h_0.png", pBack: "" }
];

cl.wig = [
    { name: "d", image: "wig_d.png", back: "wig_g_back.png" },
    { name: "f", image: "wig_f.png", back: "wig_f_back.png" }
];

cl.bra = [
    { name: "f", chest: 6, image: "bra_f_6.png", back: "bra_f_2_back.png" },
    { name: "f", chest: 5, image: "bra_f_5.png", back: "bra_f_2_back.png" },
    { name: "f", chest: 4, image: "bra_f_4.png", back: "bra_f_2_back.png" },
    { name: "f", chest: 3, image: "bra_f_3.png", back: "bra_f_2_back.png" },
    { name: "f", chest: 2, image: "bra_f_2.png", back: "bra_f_2_back.png" },
    { name: "f", chest: 1, image: "bra_f_0.png", back: "bra_f_0_back.png" },
    { name: "f", chest: 0, image: "bra_f_0.png", back: "bra_f_0_back.png" },

    { name: "r", chest: 6, image: "bra_r_6.png", back: "bra_r_2_back.png" },
    { name: "r", chest: 5, image: "bra_r_5.png", back: "bra_r_2_back.png" },
    { name: "r", chest: 4, image: "bra_r_4.png", back: "bra_r_2_back.png" },
    { name: "r", chest: 3, image: "bra_r_3.png", back: "bra_r_2_back.png" },
    { name: "r", chest: 2, image: "bra_r_2.png", back: "bra_r_2_back.png" },
    { name: "r", chest: 1, image: "bra_r_0.png", back: "bra_r_0_back.png" },
    { name: "r", chest: 0, image: "bra_r_0.png", back: "bra_r_0_back.png" },

    { name: "p", chest: 6, image: "bra_p_6.png", back: "bra_p_2_back.png" },
    { name: "p", chest: 5, image: "bra_p_5.png", back: "bra_p_2_back.png" },
    { name: "p", chest: 4, image: "bra_p_4.png", back: "bra_p_2_back.png" },
    { name: "p", chest: 3, image: "bra_p_3.png", back: "bra_p_2_back.png" },
    { name: "p", chest: 2, image: "bra_p_2.png", back: "bra_p_2_back.png" },
    { name: "p", chest: 1, image: "bra_p_0.png", back: "bra_p_0_back.png" },
    { name: "p", chest: 0, image: "bra_p_0.png", back: "bra_p_0_back.png" },

    { name: "w", chest: 6, image: "bra_w_6.png", back: "bra_w_6_back.png" },
    { name: "w", chest: 5, image: "bra_w_5.png", back: "bra_w_5_back.png" },
    { name: "w", chest: 4, image: "bra_w_4.png", back: "bra_w_4_back.png" },
    { name: "w", chest: 3, image: "bra_w_3.png", back: "bra_w_3_back.png" },
    { name: "w", chest: 2, image: "bra_w_2.png", back: "bra_w_2_back.png" },
    { name: "w", chest: 1, image: "bra_w_0.png", back: "bra_w_0_back.png" },
    { name: "w", chest: 0, image: "bra_w_0.png", back: "bra_w_0_back.png" },

    { name: "l", chest: 6, image: "bra_l_6.png", back: "bra_l_6_back.png" },
    { name: "l", chest: 5, image: "bra_l_5.png", back: "bra_l_5_back.png" },
    { name: "l", chest: 4, image: "bra_l_4.png", back: "bra_l_4_back.png" },
    { name: "l", chest: 3, image: "bra_l_3.png", back: "bra_l_3_back.png" },
    { name: "l", chest: 2, image: "bra_l_2.png", back: "bra_l_2_back.png" },
    { name: "l", chest: 1, image: "bra_l_0.png", back: "bra_l_0_back.png" },
    { name: "l", chest: 0, image: "bra_l_0.png", back: "bra_l_0_back.png" }
];

cl.necklace = [
    { name: "c", image: "necklace_c_front.png", back: "necklace_c_back.png" },
    { name: "b", image: "necklace_b_front.png", back: "necklace_a_back.png" },
    { name: "a", image: "necklace_a_front.png", back: "necklace_a_back.png" },
    { name: "d", image: "necklace_d_front.png", back: "necklace_d_back.png" },
    { name: "s", image: "necklace_s_front.png", back: "necklace_s_back.png" },
    { name: "e", image: "necklace_e_front.png", back: "necklace_e_back.png" },
    { name: "g", image: "necklace_g_front.png", back: "necklace_g_back.png" }
];

cl.shirt = [
    { name: "g", chest: 6, image: "shirt_g_6.png", back: "shirt_g_6_back.png" },
    { name: "g", chest: 5, image: "shirt_g_5.png", back: "shirt_g_5_back.png" },
    { name: "g", chest: 4, image: "shirt_g_4.png", back: "shirt_g_4_back.png" },
    { name: "g", chest: 3, image: "shirt_g_3.png", back: "shirt_g_3_back.png" },
    { name: "g", chest: 2, image: "shirt_g_2.png", back: "shirt_g_2_back.png" },
    { name: "g", chest: 1, image: "shirt_g_1.png", back: "shirt_g_0_back.png" },
    { name: "g", chest: 0, image: "shirt_g_0.png", back: "shirt_g_0_back.png" },

    { name: "c", chest: 6, image: "shirt_c_6.png", back: "shirt_c_6_back.png" },
    { name: "c", chest: 5, image: "shirt_c_5.png", back: "shirt_c_5_back.png" },
    { name: "c", chest: 4, image: "shirt_c_4.png", back: "shirt_c_4_back.png" },
    { name: "c", chest: 3, image: "shirt_c_3.png", back: "shirt_c_3_back.png" },
    { name: "c", chest: 2, image: "shirt_c_2.png", back: "shirt_c_2_back.png" },
    { name: "c", chest: 1, image: "shirt_c_1.png", back: "shirt_c_0_back.png" },
    { name: "c", chest: 0, image: "shirt_c_0.png", back: "shirt_c_0_back.png" },

    { name: "p", chest: 6, image: "shirt_p_6.png", back: "shirt_p_6_back.png" },
    { name: "p", chest: 5, image: "shirt_p_5.png", back: "shirt_p_5_back.png" },
    { name: "p", chest: 4, image: "shirt_p_4.png", back: "shirt_p_4_back.png" },
    { name: "p", chest: 3, image: "shirt_p_3.png", back: "shirt_p_3_back.png" },
    { name: "p", chest: 2, image: "shirt_p_2.png", back: "shirt_p_2_back.png" },
    { name: "p", chest: 1, image: "shirt_p_1.png", back: "shirt_p_0_back.png" },
    { name: "p", chest: 0, image: "shirt_p_0.png", back: "shirt_p_0_back.png" },

    { name: "w", chest: 6, image: "shirt_w_6.png", back: "shirt_w_6_back.png" },
    { name: "w", chest: 5, image: "shirt_w_5.png", back: "shirt_w_5_back.png" },
    { name: "w", chest: 4, image: "shirt_w_4.png", back: "shirt_w_4_back.png" },
    { name: "w", chest: 3, image: "shirt_w_3.png", back: "shirt_w_3_back.png" },
    { name: "w", chest: 2, image: "shirt_w_2.png", back: "shirt_w_2_back.png" },
    { name: "w", chest: 1, image: "shirt_w_1.png", back: "shirt_w_0_back.png" },
    { name: "w", chest: 0, image: "shirt_w_0.png", back: "shirt_w_0_back.png" },

    { name: "s", chest: 6, image: "shirt_s_6.png", back: "shirt_s_6_back.png" },
    { name: "s", chest: 5, image: "shirt_s_5.png", back: "shirt_s_5_back.png" },
    { name: "s", chest: 4, image: "shirt_s_4.png", back: "shirt_s_4_back.png" },
    { name: "s", chest: 3, image: "shirt_s_3.png", back: "shirt_s_3_back.png" },
    { name: "s", chest: 2, image: "shirt_s_2.png", back: "shirt_s_2_back.png" },
    { name: "s", chest: 1, image: "shirt_s_0.png", back: "shirt_s_0_back.png" },
    { name: "s", chest: 0, image: "shirt_s_0.png", back: "shirt_s_0_back.png" },

    { name: "v", chest: 6, image: "shirt_v_6.png", back: "shirt_v_6_back.png" },
    { name: "v", chest: 5, image: "shirt_v_5.png", back: "shirt_v_5_back.png" },
    { name: "v", chest: 4, image: "shirt_v_4.png", back: "shirt_v_4_back.png" },
    { name: "v", chest: 3, image: "shirt_v_3.png", back: "shirt_v_3_back.png" },
    { name: "v", chest: 2, image: "shirt_v_2.png", back: "shirt_v_2_back.png" },
    { name: "v", chest: 1, image: "shirt_v_0.png", back: "shirt_v_0_back.png" },
    { name: "v", chest: 0, image: "shirt_v_0.png", back: "shirt_v_0_back.png" },

    { name: "b", chest: 6, image: "shirt_b_6.png", back: "shirt_b_6_back.png" },
    { name: "b", chest: 5, image: "shirt_b_5.png", back: "shirt_b_5_back.png" },
    { name: "b", chest: 4, image: "shirt_b_4.png", back: "shirt_b_4_back.png" },
    { name: "b", chest: 3, image: "shirt_b_3.png", back: "shirt_b_3_back.png" },
    { name: "b", chest: 2, image: "shirt_b_2.png", back: "shirt_b_2_back.png" },
    { name: "b", chest: 1, image: "shirt_b_0.png", back: "shirt_b_0_back.png" },
    { name: "b", chest: 0, image: "shirt_b_0.png", back: "shirt_b_0_back.png" },

    { name: "r", chest: 6, image: "shirt_r_6.png", back: "shirt_r_6_back.png" },
    { name: "r", chest: 5, image: "shirt_r_5.png", back: "shirt_r_5_back.png" },
    { name: "r", chest: 4, image: "shirt_r_4.png", back: "shirt_r_4_back.png" },
    { name: "r", chest: 3, image: "shirt_r_3.png", back: "shirt_r_2_back.png" },
    { name: "r", chest: 2, image: "shirt_r_2.png", back: "shirt_r_2_back.png" },
    { name: "r", chest: 1, image: "shirt_r_0.png", back: "shirt_r_0_back.png" },
    { name: "r", chest: 0, image: "shirt_r_0.png", back: "shirt_r_0_back.png" },

    { name: "j", chest: 6, image: "shirt_j_6.png", back: "shirt_j_6_back.png" },
    { name: "j", chest: 5, image: "shirt_j_5.png", back: "shirt_j_5_back.png" },
    { name: "j", chest: 4, image: "shirt_j_4.png", back: "shirt_j_4_back.png" },
    { name: "j", chest: 3, image: "shirt_j_3.png", back: "shirt_j_2_back.png" },
    { name: "j", chest: 2, image: "shirt_j_2.png", back: "shirt_j_2_back.png" },
    { name: "j", chest: 1, image: "shirt_j_0.png", back: "shirt_j_0_back.png" },
    { name: "j", chest: 0, image: "shirt_j_0.png", back: "shirt_j_0_back.png" },

    { name: "y", chest: 6, image: "shirt_y_6.png", back: "shirt_y_2_back.png" },
    { name: "y", chest: 5, image: "shirt_y_5.png", back: "shirt_y_2_back.png" },
    { name: "y", chest: 4, image: "shirt_y_4.png", back: "shirt_y_2_back.png" },
    { name: "y", chest: 3, image: "shirt_y_3.png", back: "shirt_y_2_back.png" },
    { name: "y", chest: 2, image: "shirt_y_2.png", back: "shirt_y_2_back.png" },
    { name: "y", chest: 1, image: "shirt_y_0.png", back: "shirt_y_0_back.png" },
    { name: "y", chest: 0, image: "shirt_y_0.png", back: "shirt_y_0_back.png" },

    { name: "k", chest: 6, image: "shirt_k_6.png", back: "shirt_k_6_back.png" },
    { name: "k", chest: 5, image: "shirt_k_5.png", back: "shirt_k_5_back.png" },
    { name: "k", chest: 4, image: "shirt_k_4.png", back: "shirt_k_4_back.png" },
    { name: "k", chest: 3, image: "shirt_k_3.png", back: "shirt_k_3_back.png" },
    { name: "k", chest: 2, image: "shirt_k_2.png", back: "shirt_k_2_back.png" },
    { name: "k", chest: 1, image: "shirt_k_0.png", back: "shirt_k_0_back.png" },
    { name: "k", chest: 0, image: "shirt_k_0.png", back: "shirt_k_0_back.png" },

    { name: "x", chest: 6, image: "shirt_x_6.png", back: null },
    { name: "x", chest: 5, image: "shirt_x_5.png", back: null },
    { name: "x", chest: 4, image: "shirt_x_4.png", back: null },
    { name: "x", chest: 3, image: "shirt_x_3.png", back: null },
    { name: "x", chest: 2, image: "shirt_x_2.png", back: null },
    { name: "x", chest: 1, image: "shirt_x_0.png", back: null },
    { name: "x", chest: 0, image: "shirt_x_0.png", back: null },

    { name: "h", chest: 6, image: "shirt_h_6.png", back: "shirt_h_6_back.png" },
    { name: "h", chest: 5, image: "shirt_h_5.png", back: "shirt_h_5_back.png" },
    { name: "h", chest: 4, image: "shirt_h_4.png", back: "shirt_h_4_back.png" },
    { name: "h", chest: 3, image: "shirt_h_3.png", back: "shirt_h_3_back.png" },
    { name: "h", chest: 2, image: "shirt_h_2.png", back: "shirt_h_2_back.png" },
    { name: "h", chest: 1, image: "shirt_h_0.png", back: "shirt_h_0_back.png" },
    { name: "h", chest: 0, image: "shirt_h_0.png", back: "shirt_h_0_back.png" },

    { name: "pt", chest: 6, image: "shirt_pt_6.png", back: "shirt_pt_6_back.png" },
    { name: "pt", chest: 5, image: "shirt_pt_5.png", back: "shirt_pt_5_back.png" },
    { name: "pt", chest: 4, image: "shirt_pt_4.png", back: "shirt_pt_4_back.png" },
    { name: "pt", chest: 3, image: "shirt_pt_3.png", back: "shirt_pt_3_back.png" },
    { name: "pt", chest: 2, image: "shirt_pt_2.png", back: "shirt_pt_2_back.png" },
    { name: "pt", chest: 1, image: "shirt_pt_0.png", back: "shirt_pt_0_back.png" },
    { name: "pt", chest: 0, image: "shirt_pt_0.png", back: "shirt_pt_0_back.png" },

    { name: "gg", chest: 6, image: "shirt_gg_6.png", back: "shirt_gg_6_back.png" },
    { name: "gg", chest: 5, image: "shirt_gg_5.png", back: "shirt_gg_5_back.png" },
    { name: "gg", chest: 4, image: "shirt_gg_4.png", back: "shirt_gg_4_back.png" },
    { name: "gg", chest: 3, image: "shirt_gg_3.png", back: "shirt_gg_3_back.png" },
    { name: "gg", chest: 2, image: "shirt_gg_2.png", back: "shirt_gg_2_back.png" },
    { name: "gg", chest: 1, image: "shirt_gg_0.png", back: "shirt_gg_0_back.png" },
    { name: "gg", chest: 0, image: "shirt_gg_0.png", back: "shirt_gg_0_back.png" },
];

//s=summer; p=purple; a=alice
cl.dressTop = [
    { name: "s", chest: 6, image: "dress_s_t_6.png", back: "dress_s_t_6_back.png" },
    { name: "s", chest: 5, image: "dress_s_t_5.png", back: "dress_s_t_5_back.png" },
    { name: "s", chest: 4, image: "dress_s_t_4.png", back: "dress_s_t_4_back.png" },
    { name: "s", chest: 3, image: "dress_s_t_3.png", back: "dress_s_t_3_back.png" },
    { name: "s", chest: 2, image: "dress_s_t_0.png", back: "dress_s_t_0_back.png" },
    { name: "s", chest: 1, image: "dress_s_t_0.png", back: "dress_s_t_0_back.png" },
    { name: "s", chest: 0, image: "dress_s_t_0.png", back: "dress_s_t_0_back.png" },

    { name: "p", chest: 6, image: "dress_p_t_6.png", back: "dress_p_t_6_back.png" },
    { name: "p", chest: 5, image: "dress_p_t_5.png", back: "dress_p_t_5_back.png" },
    { name: "p", chest: 4, image: "dress_p_t_4.png", back: "dress_p_t_4_back.png" },
    { name: "p", chest: 3, image: "dress_p_t_3.png", back: "dress_p_t_3_back.png" },
    { name: "p", chest: 2, image: "dress_p_t_2.png", back: "dress_p_t_2_back.png" },
    { name: "p", chest: 1, image: "dress_p_t_1.png", back: "dress_p_t_0_back.png" },
    { name: "p", chest: 0, image: "dress_p_t_0.png", back: "dress_p_t_0_back.png" },

    { name: "a", chest: 6, image: "dress_a_t_6.png", back: "dress_a_t_6_back.png" },
    { name: "a", chest: 5, image: "dress_a_t_5.png", back: "dress_a_t_5_back.png" },
    { name: "a", chest: 4, image: "dress_a_t_4.png", back: "dress_a_t_2_back.png" },
    { name: "a", chest: 3, image: "dress_a_t_3.png", back: "dress_a_t_2_back.png" },
    { name: "a", chest: 2, image: "dress_a_t_2.png", back: "dress_a_t_2_back.png" },
    { name: "a", chest: 1, image: "dress_a_t_1.png", back: "dress_a_t_0_back.png" },
    { name: "a", chest: 0, image: "dress_a_t_0.png", back: "dress_a_t_0_back.png" },

    { name: "u", chest: 6, image: "dress_u_t_6.png", back: "dress_u_t_6_back.png" },
    { name: "u", chest: 5, image: "dress_u_t_5.png", back: "dress_u_t_5_back.png" },
    { name: "u", chest: 4, image: "dress_u_t_4.png", back: "dress_u_t_4_back.png" },
    { name: "u", chest: 3, image: "dress_u_t_3.png", back: "dress_u_t_2_back.png" },
    { name: "u", chest: 2, image: "dress_u_t_2.png", back: "dress_u_t_2_back.png" },
    { name: "u", chest: 1, image: "dress_u_t_0.png", back: "dress_u_t_0_back.png" },
    { name: "u", chest: 0, image: "dress_u_t_0.png", back: "dress_u_t_0_back.png" },

    { name: "m", chest: 6, image: "dress_m_t_6.png", back: "dress_m_t_6_back.png" },
    { name: "m", chest: 5, image: "dress_m_t_5.png", back: "dress_m_t_5_back.png" },
    { name: "m", chest: 4, image: "dress_m_t_4.png", back: "dress_m_t_4_back.png" },
    { name: "m", chest: 3, image: "dress_m_t_3.png", back: "dress_m_t_3_back.png" },
    { name: "m", chest: 2, image: "dress_m_t_2.png", back: "dress_m_t_2_back.png" },
    { name: "m", chest: 1, image: "dress_m_t_0.png", back: "dress_m_t_0_back.png" },
    { name: "m", chest: 0, image: "dress_m_t_0.png", back: "dress_m_t_0_back.png" },

    { name: "ps", chest: 6, image: "dress_ps_t_6.png", back: "dress_ps_t_0_back.png" },
    { name: "ps", chest: 5, image: "dress_ps_t_5.png", back: "dress_ps_t_0_back.png" },
    { name: "ps", chest: 4, image: "dress_ps_t_4.png", back: "dress_ps_t_0_back.png" },
    { name: "ps", chest: 3, image: "dress_ps_t_3.png", back: "dress_ps_t_0_back.png" },
    { name: "ps", chest: 2, image: "dress_ps_t_2.png", back: "dress_ps_t_0_back.png" },
    { name: "ps", chest: 1, image: "dress_ps_t_0.png", back: "dress_ps_t_0_back.png" },
    { name: "ps", chest: 0, image: "dress_ps_t_0.png", back: "dress_ps_t_0_back.png" },

    { name: "nu", chest: 6, image: "dress_nu_t_6.png", back: "dress_nu_t_6_back.png" },
    { name: "nu", chest: 5, image: "dress_nu_t_5.png", back: "dress_nu_t_5_back.png" },
    { name: "nu", chest: 4, image: "dress_nu_t_3.png", back: "dress_nu_t_4_back.png" },
    { name: "nu", chest: 3, image: "dress_nu_t_3.png", back: "dress_nu_t_3_back.png" },
    { name: "nu", chest: 2, image: "dress_nu_t_2.png", back: "dress_nu_t_2_back.png" },
    { name: "nu", chest: 1, image: "dress_nu_t_0.png", back: "dress_nu_t_0_back.png" },
    { name: "nu", chest: 0, image: "dress_nu_t_0.png", back: "dress_nu_t_0_back.png" },

    { name: "r", chest: 6, image: "dress_r_t_6.png", back: "dress_r_t_6_back.png" },
    { name: "r", chest: 5, image: "dress_r_t_5.png", back: "dress_r_t_5_back.png" },
    { name: "r", chest: 4, image: "dress_r_t_3.png", back: "dress_r_t_4_back.png" },
    { name: "r", chest: 3, image: "dress_r_t_3.png", back: "dress_r_t_3_back.png" },
    { name: "r", chest: 2, image: "dress_r_t_2.png", back: "dress_r_t_2_back.png" },
    { name: "r", chest: 1, image: "dress_r_t_0.png", back: "dress_r_t_0_back.png" },
    { name: "r", chest: 0, image: "dress_r_t_0.png", back: "dress_r_t_0_back.png" },

    { name: "rt", chest: 6, image: "dress_rt_6.png", back: "dress_rt_6_back.png" },
    { name: "rt", chest: 5, image: "dress_rt_5.png", back: "dress_rt_5_back.png" },
    { name: "rt", chest: 4, image: "dress_rt_3.png", back: "dress_rt_4_back.png" },
    { name: "rt", chest: 3, image: "dress_rt_3.png", back: "dress_rt_3_back.png" },
    { name: "rt", chest: 2, image: "dress_rt_2.png", back: "dress_rt_2_back.png" },
    { name: "rt", chest: 1, image: "dress_rt_0.png", back: "dress_rt_0_back.png" },
    { name: "rt", chest: 0, image: "dress_rt_0.png", back: "dress_rt_0_back.png" },

    { name: "pd", chest: 6, image: "dress_pd_6.png", back: "dress_pd_6_back.png" },
    { name: "pd", chest: 5, image: "dress_pd_5.png", back: "dress_pd_5_back.png" },
    { name: "pd", chest: 4, image: "dress_pd_3.png", back: "dress_pd_4_back.png" },
    { name: "pd", chest: 3, image: "dress_pd_3.png", back: "dress_pd_3_back.png" },
    { name: "pd", chest: 2, image: "dress_pd_2.png", back: "dress_pd_2_back.png" },
    { name: "pd", chest: 1, image: "dress_pd_0.png", back: "dress_pd_0_back.png" },
    { name: "pd", chest: 0, image: "dress_pd_0.png", back: "dress_pd_0_back.png" },

    { name: "robe", chest: 6, image: "dress_robe.png", back: "dress_robe_back.png" },
    { name: "robe", chest: 5, image: "dress_robe.png", back: "dress_robe_back.png" },
    { name: "robe", chest: 4, image: "dress_robe.png", back: "dress_robe_back.png" },
    { name: "robe", chest: 3, image: "dress_robe.png", back: "dress_robe_back.png" },
    { name: "robe", chest: 2, image: "dress_robe.png", back: "dress_robe_back.png" },
    { name: "robe", chest: 1, image: "dress_robe.png", back: "dress_robe_back.png" },
    { name: "robe", chest: 0, image: "dress_robe.png", back: "dress_robe_back.png" },

    { name: "rose", chest: 6, image: "dress_rose_6.png", back: "dress_rose_6_back.png" },
    { name: "rose", chest: 5, image: "dress_rose_5.png", back: "dress_rose_5_back.png" },
    { name: "rose", chest: 4, image: "dress_rose_4.png", back: "dress_rose_4_back.png" },
    { name: "rose", chest: 3, image: "dress_rose_3.png", back: "dress_rose_3_back.png" },
    { name: "rose", chest: 2, image: "dress_rose_2.png", back: "dress_rose_2_back.png" },
    { name: "rose", chest: 1, image: "dress_rose_0.png", back: "dress_rose_0_back.png" },
    { name: "rose", chest: 0, image: "dress_rose_0.png", back: "dress_rose_0_back.png" },

    { name: "maid", chest: 6, image: "dress_maid_6.png", back: "dress_maid_6_back.png" },
    { name: "maid", chest: 5, image: "dress_maid_5.png", back: "dress_maid_5_back.png" },
    { name: "maid", chest: 4, image: "dress_maid_4.png", back: "dress_maid_4_back.png" },
    { name: "maid", chest: 3, image: "dress_maid_3.png", back: "dress_maid_3_back.png" },
    { name: "maid", chest: 2, image: "dress_maid_2.png", back: "dress_maid_2_back.png" },
    { name: "maid", chest: 1, image: "dress_maid_0.png", back: "dress_maid_0_back.png" },
    { name: "maid", chest: 0, image: "dress_maid_0.png", back: "dress_maid_0_back.png" },

    { name: "cor", chest: 6, image: "dress_cor_6.png", back: "dress_cor_2_back.png" },
    { name: "cor", chest: 5, image: "dress_cor_5.png", back: "dress_cor_2_back.png" },
    { name: "cor", chest: 4, image: "dress_cor_4.png", back: "dress_cor_2_back.png" },
    { name: "cor", chest: 3, image: "dress_cor_3.png", back: "dress_cor_2_back.png" },
    { name: "cor", chest: 2, image: "dress_cor_2.png", back: "dress_cor_2_back.png" },
    { name: "cor", chest: 1, image: "dress_cor_0.png", back: "dress_cor_0_back.png" },
    { name: "cor", chest: 0, image: "dress_cor_0.png", back: "dress_cor_0_back.png" }
];

cl.dressBottom = [
    { name: "s", leg: 5, image: "dress_s_b_5.png", back: "dress_s_b_5_back.png" },
    { name: "s", leg: 4, image: "dress_s_b_4.png", back: "dress_s_b_3_back.png" },
    { name: "s", leg: 3, image: "dress_s_b_3.png", back: "dress_s_b_3_back.png" },
    { name: "s", leg: 2, image: "dress_s_b_0.png", back: "dress_s_b_2_back.png" },
    { name: "s", leg: 1, image: "dress_s_b_0.png", back: "dress_s_b_0_back.png" },
    { name: "s", leg: 0, image: "dress_s_b_0.png", back: "dress_s_b_0_back.png" },

    { name: "p", leg: 5, image: "dress_p_b_5.png", back: "dress_p_b_5_back.png" },
    { name: "p", leg: 4, image: "dress_p_b_0.png", back: "dress_p_b_4_back.png" },
    { name: "p", leg: 3, image: "dress_p_b_0.png", back: "dress_p_b_3_back.png" },
    { name: "p", leg: 2, image: "dress_p_b_0.png", back: "dress_p_b_2_back.png" },
    { name: "p", leg: 1, image: "dress_p_b_0.png", back: "dress_p_b_0_back.png" },
    { name: "p", leg: 0, image: "dress_p_b_0.png", back: "dress_p_b_0_back.png" },

    { name: "a", leg: 5, image: "dress_a_b_0.png", back: "dress_a_b_0_back.png" },
    { name: "a", leg: 4, image: "dress_a_b_0.png", back: "dress_a_b_0_back.png" },
    { name: "a", leg: 3, image: "dress_a_b_0.png", back: "dress_a_b_0_back.png" },
    { name: "a", leg: 2, image: "dress_a_b_0.png", back: "dress_a_b_0_back.png" },
    { name: "a", leg: 1, image: "dress_a_b_0.png", back: "dress_a_b_0_back.png" },
    { name: "a", leg: 0, image: "dress_a_b_0.png", back: "dress_a_b_0_back.png" },

    { name: "u", leg: 5, image: "dress_u_b_0.png", back: "dress_u_b_4_back.png" },
    { name: "u", leg: 4, image: "dress_u_b_0.png", back: "dress_u_b_4_back.png" },
    { name: "u", leg: 3, image: "dress_u_b_0.png", back: "dress_u_b_3_back.png" },
    { name: "u", leg: 2, image: "dress_u_b_0.png", back: "dress_u_b_0_back.png" },
    { name: "u", leg: 1, image: "dress_u_b_0.png", back: "dress_u_b_0_back.png" },
    { name: "u", leg: 0, image: "dress_u_b_0.png", back: "dress_u_b_0_back.png" },

    { name: "m", leg: 5, image: "dress_m_b_5.png", back: "dress_m_b_5_back.png" },
    { name: "m", leg: 4, image: "dress_m_b_4.png", back: "dress_m_b_4_back.png" },
    { name: "m", leg: 3, image: "dress_m_b_3.png", back: "dress_m_b_3_back.png" },
    { name: "m", leg: 2, image: "dress_m_b_1.png", back: "dress_m_b_2_back.png" },
    { name: "m", leg: 1, image: "dress_m_b_1.png", back: "dress_m_b_0_back.png" },
    { name: "m", leg: 0, image: "dress_m_b_0.png", back: "dress_m_b_0_back.png" },

    { name: "ps", leg: 5, image: "dress_ps_b_5.png", back: "dress_ps_b_5_back.png" },
    { name: "ps", leg: 4, image: "dress_ps_b_4.png", back: "dress_ps_b_4_back.png" },
    { name: "ps", leg: 3, image: "dress_ps_b_3.png", back: "dress_ps_b_3_back.png" },
    { name: "ps", leg: 2, image: "dress_ps_b_1.png", back: "dress_ps_b_2_back.png" },
    { name: "ps", leg: 1, image: "dress_ps_b_1.png", back: "dress_ps_b_0_back.png" },
    { name: "ps", leg: 0, image: "dress_ps_b_0.png", back: "dress_ps_b_0_back.png" },

    { name: "nu", leg: 5, image: "dress_nu_b_5.png", back: "dress_nu_b_5_back.png" },
    { name: "nu", leg: 4, image: "dress_nu_b_0.png", back: "dress_nu_b_4_back.png" },
    { name: "nu", leg: 3, image: "dress_nu_b_0.png", back: "dress_nu_b_3_back.png" },
    { name: "nu", leg: 2, image: "dress_nu_b_0.png", back: "dress_nu_b_2_back.png" },
    { name: "nu", leg: 1, image: "dress_nu_b_0.png", back: "dress_nu_b_0_back.png" },
    { name: "nu", leg: 0, image: "dress_nu_b_0.png", back: "dress_nu_b_0_back.png" },

    { name: "r", leg: 5, image: "dress_r_b_5.png", back: "dress_r_b_5_back.png" },
    { name: "r", leg: 4, image: "dress_r_b_4.png", back: "dress_r_b_4_back.png" },
    { name: "r", leg: 3, image: "dress_r_b_3.png", back: "dress_r_b_3_back.png" },
    { name: "r", leg: 2, image: "dress_r_b_1.png", back: "dress_r_b_2_back.png" },
    { name: "r", leg: 1, image: "dress_r_b_1.png", back: "dress_r_b_0_back.png" },
    { name: "r", leg: 0, image: "dress_r_b_0.png", back: "dress_r_b_0_back.png" },

    { name: "robe", leg: 5, image: null, back: null },
    { name: "robe", leg: 4, image: null, back: null },
    { name: "robe", leg: 3, image: null, back: null },
    { name: "robe", leg: 2, image: null, back: null },
    { name: "robe", leg: 1, image: null, back: null },
    { name: "robe", leg: 0, image: null, back: null },

    { name: "robe", leg: 5, image: null, back: null },
    { name: "robe", leg: 4, image: null, back: null },
    { name: "robe", leg: 3, image: null, back: null },
    { name: "robe", leg: 2, image: null, back: null },
    { name: "robe", leg: 1, image: null, back: null },
    { name: "robe", leg: 0, image: null, back: null },

    { name: "maid", leg: 5, image: "dress_maid_b_5.png", back: "dress_maid_b_5_back.png" },
    { name: "maid", leg: 4, image: "dress_maid_b_4.png", back: "dress_maid_b_4_back.png" },
    { name: "maid", leg: 3, image: "dress_maid_b_3.png", back: "dress_maid_b_3_back.png" },
    { name: "maid", leg: 2, image: "dress_maid_b_1.png", back: "dress_maid_b_2_back.png" },
    { name: "maid", leg: 1, image: "dress_maid_b_1.png", back: "dress_maid_b_0_back.png" },
    { name: "maid", leg: 0, image: "dress_maid_b_0.png", back: "dress_maid_b_0_back.png" },

    { name: "robe", leg: 5, image: null, back: null },
    { name: "robe", leg: 4, image: null, back: null },
    { name: "robe", leg: 3, image: null, back: null },
    { name: "robe", leg: 2, image: null, back: null },
    { name: "robe", leg: 1, image: null, back: null },
    { name: "robe", leg: 0, image: null, back: null }
];

cl.swimsuitTop = [
    { name: "m", chest: 6, image: null, back: null },
    { name: "m", chest: 5, image: null, back: null },
    { name: "m", chest: 4, image: null, back: null },
    { name: "m", chest: 3, image: null, back: null },
    { name: "m", chest: 2, image: null, back: null },
    { name: "m", chest: 1, image: null, back: null },
    { name: "m", chest: 0, image: null, back: null },

    { name: "b", chest: 6, image: "swim_b_t_6.png", back: "swim_b_t_6_back.png" },
    { name: "b", chest: 5, image: "swim_b_t_5.png", back: "swim_b_t_5_back.png" },
    { name: "b", chest: 4, image: "swim_b_t_4.png", back: "swim_b_t_4_back.png" },
    { name: "b", chest: 3, image: "swim_b_t_3.png", back: "swim_b_t_3_back.png" },
    { name: "b", chest: 2, image: "swim_b_t_2.png", back: "swim_b_t_2_back.png" },
    { name: "b", chest: 1, image: "swim_b_t_0.png", back: "swim_b_t_0_back.png" },
    { name: "b", chest: 0, image: "swim_b_t_0.png", back: "swim_b_t_0_back.png" },

    { name: "r", chest: 6, image: "swim_r_t_6.png", back: "swim_r_t_6_back.png" },
    { name: "r", chest: 5, image: "swim_r_t_5.png", back: "swim_r_t_5_back.png" },
    { name: "r", chest: 4, image: "swim_r_t_4.png", back: "swim_r_t_4_back.png" },
    { name: "r", chest: 3, image: "swim_r_t_3.png", back: "swim_r_t_3_back.png" },
    { name: "r", chest: 2, image: "swim_r_t_2.png", back: "swim_r_t_2_back.png" },
    { name: "r", chest: 1, image: "swim_r_t_0.png", back: "swim_r_t_0_back.png" },
    { name: "r", chest: 0, image: "swim_r_t_0.png", back: "swim_r_t_0_back.png" },

    { name: "p", chest: 6, image: "swim_p_t_6.png", back: "swim_p_t_6_back.png" },
    { name: "p", chest: 5, image: "swim_p_t_5.png", back: "swim_p_t_5_back.png" },
    { name: "p", chest: 4, image: "swim_p_t_4.png", back: "swim_p_t_4_back.png" },
    { name: "p", chest: 3, image: "swim_p_t_3.png", back: "swim_p_t_3_back.png" },
    { name: "p", chest: 2, image: "swim_p_t_2.png", back: "swim_p_t_2_back.png" },
    { name: "p", chest: 1, image: "swim_p_t_0.png", back: "swim_p_t_0_back.png" },
    { name: "p", chest: 0, image: "swim_p_t_0.png", back: "swim_p_t_0_back.png" }

];


cl.swimsuitBottom = [
    { name: "m", leg: 5, pussy: "swim_m_b_5.png", cock: "swim_m_b_5.png", back: "swim_m_b_5_back.png" },
    { name: "m", leg: 4, pussy: "swim_m_b_4.png", cock: "swim_m_b_4.png", back: "swim_m_b_4_back.png" },
    { name: "m", leg: 3, pussy: "swim_m_b_3.png", cock: "swim_m_b_3.png", back: "swim_m_b_3_back.png" },
    { name: "m", leg: 2, pussy: "swim_m_b_0.png", cock: "swim_m_b_0.png", back: "swim_m_b_2_back.png" },
    { name: "m", leg: 1, pussy: "swim_m_b_0.png", cock: "swim_m_b_0.png", back: "swim_m_b_0_back.png" },
    { name: "m", leg: 0, pussy: "swim_m_b_0.png", cock: "swim_m_b_0.png", back: "swim_m_b_0_back.png" },

    { name: "b", leg: 5, pussy: "swim_b_b_4_v.png", cock: "swim_b_b_5_c.png", back: "swim_b_b_4_back.png" },
    { name: "b", leg: 4, pussy: "swim_b_b_4_v.png", cock: "swim_b_b_4_c.png", back: "swim_b_b_4_back.png" },
    { name: "b", leg: 3, pussy: "swim_b_b_3_v.png", cock: "swim_b_b_3_c.png", back: "swim_b_b_3_back.png" },
    { name: "b", leg: 2, pussy: "swim_b_b_1_v.png", cock: "swim_b_b_1_c.png", back: "swim_b_b_2_back.png" },
    { name: "b", leg: 1, pussy: "swim_b_b_1_v.png", cock: "swim_b_b_1_c.png", back: "swim_b_b_0_back.png" },
    { name: "b", leg: 0, pussy: "swim_b_b_0_v.png", cock: "swim_b_b_0_c.png", back: "swim_b_b_0_back.png" },

    { name: "r", leg: 5, pussy: "swim_r_b_5_v.png", cock: "swim_r_b_5_c.png", back: "swim_r_b_5_back.png" },
    { name: "r", leg: 4, pussy: "swim_r_b_4_v.png", cock: "swim_r_b_4_c.png", back: "swim_r_b_4_back.png" },
    { name: "r", leg: 3, pussy: "swim_r_b_3_v.png", cock: "swim_r_b_3_c.png", back: "swim_r_b_3_back.png" },
    { name: "r", leg: 2, pussy: "swim_r_b_1_v.png", cock: "swim_r_b_1_c.png", back: "swim_r_b_2_back.png" },
    { name: "r", leg: 1, pussy: "swim_r_b_1_v.png", cock: "swim_r_b_1_c.png", back: "swim_r_b_0_back.png" },
    { name: "r", leg: 0, pussy: "swim_r_b_0_v.png", cock: "swim_r_b_0_c.png", back: "swim_r_b_0_back.png" },

    { name: "p", leg: 5, pussy: "swim_p_b_5_v.png", cock: "swim_p_b_5_c.png", back: "swim_p_b_5_back.png" },
    { name: "p", leg: 4, pussy: "swim_p_b_4_v.png", cock: "swim_p_b_4_c.png", back: "swim_p_b_4_back.png" },
    { name: "p", leg: 3, pussy: "swim_p_b_3_v.png", cock: "swim_p_b_3_c.png", back: "swim_p_b_3_back.png" },
    { name: "p", leg: 2, pussy: "swim_p_b_1_v.png", cock: "swim_p_b_1_c.png", back: "swim_p_b_2_back.png" },
    { name: "p", leg: 1, pussy: "swim_p_b_1_v.png", cock: "swim_p_b_1_c.png", back: "swim_p_b_0_back.png" },
    { name: "p", leg: 0, pussy: "swim_p_b_0_v.png", cock: "swim_p_b_0_c.png", back: "swim_p_b_0_back.png" }
];

cl.socks = [
    { name: "f", image: "socks_f.png", back: "socks_f_back.png" },
    { name: "s", image: "socks_s.png", back: "socks_s_back.png" },
    { name: "w", image: "socks_w.png", back: "socks_w_back.png" },
    { name: "b", image: "socks_b.png", back: "socks_b_back.png" },
    { name: "r", image: "socks_r.png", back: "socks_r_back.png" },
    { name: "p", image: "socks_p.png", back: "socks_p_back.png" }
];

cl.shoes = [
    { name: "w", image: "shoes_w.png", back: "shoes_w_back.png" },
    { name: "d", image: "shoes_d.png", back: "shoes_d_back.png" },
    { name: "pr", image: "shoes_pr.png", back: "shoes_pr_back.png" },
    { name: "br", image: "shoes_br.png", back: "shoes_br_back.png" },
    { name: "fs", image: "shoes_fs.png", back: "shoes_fs_back.png" },
    { name: "fb", image: "shoes_fb.png", back: "shoes_fb_back.png" },
    { name: "fl", image: "shoes_fl.png", back: "shoes_fl_back.png" },
    { name: "hr", image: "shoes_hr.png", back: "shoes_hr_back.png" },
    { name: "v", image: "shoes_v.png", back: "shoes_v_back.png" },
    { name: "nu", image: "shoes_nu.png", back: "shoes_nu_back.png" }
];

cl.panties = [
    { name: "u", leg: 5, pussy: "panty_u_5_v.png", cock: "panty_u_5_c.png", back: "panty_u_5_back.png" },
    { name: "u", leg: 4, pussy: "panty_u_4_v.png", cock: "panty_u_4_c.png", back: "panty_u_4_back.png" },
    { name: "u", leg: 3, pussy: "panty_u_3_v.png", cock: "panty_u_3_c.png", back: "panty_u_3_back.png" },
    { name: "u", leg: 2, pussy: "panty_u_1_v.png", cock: "panty_u_1_c.png", back: "panty_u_2_back.png" },
    { name: "u", leg: 1, pussy: "panty_u_1_v.png", cock: "panty_u_1_c.png", back: "panty_u_0_back.png" },
    { name: "u", leg: 0, pussy: "panty_u_0_v.png", cock: "panty_u_0_c.png", back: "panty_u_0_back.png" },

    { name: "n", leg: 4, pussy: "panty_n_0.png", cock: "panty_n_0.png", back: "panty_n_0_back.png" },
    { name: "n", leg: 3, pussy: "panty_n_0.png", cock: "panty_n_0.png", back: "panty_n_0_back.png" },
    { name: "n", leg: 2, pussy: "panty_n_0.png", cock: "panty_n_0.png", back: "panty_n_0_back.png" },
    { name: "n", leg: 1, pussy: "panty_n_0.png", cock: "panty_n_0.png", back: "panty_n_0_back.png" },
    { name: "n", leg: 0, pussy: "panty_n_0.png", cock: "panty_n_0.png", back: "panty_n_0_back.png" },

    { name: "w", leg: 5, pussy: "panty_w_4_v.png", cock: "panty_w_4_c.png", back: "panty_w_4_back.png" },
    { name: "w", leg: 4, pussy: "panty_w_4_v.png", cock: "panty_w_4_c.png", back: "panty_w_4_back.png" },
    { name: "w", leg: 3, pussy: "panty_w_3_v.png", cock: "panty_w_3_c.png", back: "panty_w_3_back.png" },
    { name: "w", leg: 2, pussy: "panty_w_1_v.png", cock: "panty_w_1_c.png", back: "panty_w_2_back.png" },
    { name: "w", leg: 1, pussy: "panty_w_1_v.png", cock: "panty_w_1_c.png", back: "panty_w_0_back.png" },
    { name: "w", leg: 0, pussy: "panty_w_0_v.png", cock: "panty_w_0_c.png", back: "panty_w_0_back.png" },

    { name: "b", leg: 5, pussy: "panty_b_5_v.png", cock: "panty_b_5_c.png", back: "panty_b_5_back.png" },
    { name: "b", leg: 4, pussy: "panty_b_4_v.png", cock: "panty_b_4_c.png", back: "panty_b_4_back.png" },
    { name: "b", leg: 3, pussy: "panty_b_3_v.png", cock: "panty_b_3_c.png", back: "panty_b_3_back.png" },
    { name: "b", leg: 2, pussy: "panty_b_1_v.png", cock: "panty_b_1_c.png", back: "panty_b_2_back.png" },
    { name: "b", leg: 1, pussy: "panty_b_1_v.png", cock: "panty_b_1_c.png", back: "panty_b_0_back.png" },
    { name: "b", leg: 0, pussy: "panty_b_0_v.png", cock: "panty_b_0_c.png", back: "panty_b_0_back.png" },

    { name: "f", leg: 5, pussy: "panty_f_5.png", cock: "panty_f_5.png", back: "panty_f_5_back.png" },
    { name: "f", leg: 4, pussy: "panty_f_4.png", cock: "panty_f_4.png", back: "panty_f_4_back.png" },
    { name: "f", leg: 3, pussy: "panty_f_3.png", cock: "panty_f_3.png", back: "panty_f_3_back.png" },
    { name: "f", leg: 2, pussy: "panty_f_1.png", cock: "panty_f_1.png", back: "panty_f_2_back.png" },
    { name: "f", leg: 1, pussy: "panty_f_1.png", cock: "panty_f_1.png", back: "panty_f_0_back.png" },
    { name: "f", leg: 0, pussy: "panty_f_0.png", cock: "panty_f_0.png", back: "panty_f_0_back.png" },

    { name: "p", leg: 5, pussy: "panty_p_4_v.png", cock: "panty_p_4_c.png", back: "panty_p_5_back.png" },
    { name: "p", leg: 4, pussy: "panty_p_4_v.png", cock: "panty_p_4_c.png", back: "panty_p_4_back.png" },
    { name: "p", leg: 3, pussy: "panty_p_3_v.png", cock: "panty_p_3_c.png", back: "panty_p_3_back.png" },
    { name: "p", leg: 2, pussy: "panty_p_1_v.png", cock: "panty_p_1_c.png", back: "panty_p_2_back.png" },
    { name: "p", leg: 1, pussy: "panty_p_1_v.png", cock: "panty_p_1_c.png", back: "panty_p_0_back.png" },
    { name: "p", leg: 0, pussy: "panty_p_0_v.png", cock: "panty_p_0_c.png", back: "panty_p_0_back.png" },

    { name: "q", leg: 5, pussy: "panty_q_4_v.png", cock: "panty_q_4.png", back: "panty_q_4_back.png" },
    { name: "q", leg: 4, pussy: "panty_q_4_v.png", cock: "panty_q_4.png", back: "panty_q_4_back.png" },
    { name: "q", leg: 3, pussy: "panty_q_3_v.png", cock: "panty_q_3.png", back: "panty_q_3_back.png" },
    { name: "q", leg: 2, pussy: "panty_q_1_v.png", cock: "panty_q_1.png", back: "panty_q_2_back.png" },
    { name: "q", leg: 1, pussy: "panty_q_1_v.png", cock: "panty_q_1.png", back: "panty_q_0_back.png" },
    { name: "q", leg: 0, pussy: "panty_q_0_v.png", cock: "panty_q_0.png", back: "panty_q_0_back.png" },

    { name: "h", leg: 5, pussy: "panty_h_4_v.png", cock: "panty_h_4.png", back: "panty_q_4_back.png" },
    { name: "h", leg: 4, pussy: "panty_h_4_v.png", cock: "panty_h_4.png", back: "panty_q_4_back.png" },
    { name: "h", leg: 3, pussy: "panty_h_3_v.png", cock: "panty_h_3.png", back: "panty_q_3_back.png" },
    { name: "h", leg: 2, pussy: "panty_h_1_v.png", cock: "panty_h_1.png", back: "panty_q_2_back.png" },
    { name: "h", leg: 1, pussy: "panty_h_1_v.png", cock: "panty_h_1.png", back: "panty_q_0_back.png" },
    { name: "h", leg: 0, pussy: "panty_h_0_v.png", cock: "panty_h_0.png", back: "panty_q_0_back.png" },

    { name: "r", leg: 5, pussy: "panty_r_5_v.png", cock: "panty_r_5_c.png", back: "panty_r_5_back.png" },
    { name: "r", leg: 4, pussy: "panty_r_4_v.png", cock: "panty_r_4_c.png", back: "panty_r_4_back.png" },
    { name: "r", leg: 3, pussy: "panty_r_3_v.png", cock: "panty_r_3_c.png", back: "panty_r_3_back.png" },
    { name: "r", leg: 2, pussy: "panty_r_1_v.png", cock: "panty_r_1_c.png", back: "panty_r_2_back.png" },
    { name: "r", leg: 1, pussy: "panty_r_1_v.png", cock: "panty_r_1_c.png", back: "panty_r_0_back.png" },
    { name: "r", leg: 0, pussy: "panty_r_0_v.png", cock: "panty_r_0_c.png", back: "panty_r_0_back.png" },

    { name: "l", leg: 5, pussy: "panty_l_5_v.png", cock: "panty_l_5_c.png", back: "panty_l_5_back.png" },
    { name: "l", leg: 4, pussy: "panty_l_4_v.png", cock: "panty_l_4_c.png", back: "panty_l_4_back.png" },
    { name: "l", leg: 3, pussy: "panty_l_3_v.png", cock: "panty_l_3_c.png", back: "panty_l_3_back.png" },
    { name: "l", leg: 2, pussy: "panty_l_1_v.png", cock: "panty_l_1_c.png", back: "panty_l_2_back.png" },
    { name: "l", leg: 1, pussy: "panty_l_1_v.png", cock: "panty_l_1_c.png", back: "panty_l_0_back.png" },
    { name: "l", leg: 0, pussy: "panty_l_0_v.png", cock: "panty_l_0_c.png", back: "panty_l_0_back.png" },

    { name: "c", leg: 5, pussy: "panty_c_5_v.png", cock: "panty_c_5_c.png", back: "panty_c_5_back.png" },
    { name: "c", leg: 4, pussy: "panty_c_4_v.png", cock: "panty_c_4_c.png", back: "panty_c_4_back.png" },
    { name: "c", leg: 3, pussy: "panty_c_3_v.png", cock: "panty_c_3_c.png", back: "panty_c_3_back.png" },
    { name: "c", leg: 2, pussy: "panty_c_1_v.png", cock: "panty_c_1_c.png", back: "panty_c_2_back.png" },
    { name: "c", leg: 1, pussy: "panty_c_1_v.png", cock: "panty_c_1_c.png", back: "panty_c_0_back.png" },
    { name: "c", leg: 0, pussy: "panty_c_0_v.png", cock: "panty_c_0_c.png", back: "panty_c_0_back.png" },

    { name: "m", leg: 5, pussy: "panty_m_5_v.png", cock: "panty_m_5_c.png", back: "panty_m_5_back.png" },
    { name: "m", leg: 4, pussy: "panty_m_4_v.png", cock: "panty_m_4_c.png", back: "panty_m_4_back.png" },
    { name: "m", leg: 3, pussy: "panty_m_3_v.png", cock: "panty_m_3_c.png", back: "panty_m_3_back.png" },
    { name: "m", leg: 2, pussy: "panty_m_1_v.png", cock: "panty_m_1_c.png", back: "panty_m_2_back.png" },
    { name: "m", leg: 1, pussy: "panty_m_1_v.png", cock: "panty_m_1_c.png", back: "panty_m_0_back.png" },
    { name: "m", leg: 0, pussy: "panty_m_0_v.png", cock: "panty_m_0_c.png", back: "panty_m_0_back.png" },
];

cl.pjTop = [
    { name: "gown", chest: 6, image: "pj_g_6_top.png", back: "pj_g_6_top_back.png" },
    { name: "gown", chest: 5, image: "pj_g_5_top.png", back: "pj_g_5_top_back.png" },
    { name: "gown", chest: 4, image: "pj_g_4_top.png", back: "pj_g_4_top_back.png" },
    { name: "gown", chest: 3, image: "pj_g_3_top.png", back: "pj_g_3_top_back.png" },
    { name: "gown", chest: 2, image: "pj_g_2_top.png", back: "pj_g_2_top_back.png" },
    { name: "gown", chest: 1, image: "pj_g_1_top.png", back: "pj_g_0_top_back.png" },
    { name: "gown", chest: 0, image: "pj_g_0_top.png", back: "pj_g_0_top_back.png" },

    { name: "b", chest: 6, image: "pj_b_6_top.png", back: "pj_b_6_top_back.png" },
    { name: "b", chest: 5, image: "pj_b_5_top.png", back: "pj_b_5_top_back.png" },
    { name: "b", chest: 4, image: "pj_b_4_top.png", back: "pj_b_4_top_back.png" },
    { name: "b", chest: 3, image: "pj_b_3_top.png", back: "pj_b_3_top_back.png" },
    { name: "b", chest: 2, image: "pj_b_2_top.png", back: "pj_b_2_top_back.png" },
    { name: "b", chest: 1, image: "pj_b_1_top.png", back: "pj_b_0_top_back.png" },
    { name: "b", chest: 0, image: "pj_b_0_top.png", back: "pj_b_0_top_back.png" }
];

cl.pjBottom = [
    { name: "gown", leg: 5, image: "pj_g_4_bottom.png", back: "pj_g_5_bottom_back.png" },
    { name: "gown", leg: 4, image: "pj_g_4_bottom.png", back: "pj_g_4_bottom_back.png" },
    { name: "gown", leg: 3, image: "pj_g_3_bottom.png", back: "pj_g_3_bottom_back.png" },
    { name: "gown", leg: 2, image: "pj_g_1_bottom.png", back: "pj_g_2_bottom_back.png" },
    { name: "gown", leg: 1, image: "pj_g_1_bottom.png", back: "pj_g_0_bottom_back.png" },
    { name: "gown", leg: 0, image: "pj_g_0_bottom.png", back: "pj_g_0_bottom_back.png" },

    { name: "paisley", leg: 5, image: "pj_p_5.png", back: "pj_p_5_back.png" },
    { name: "paisley", leg: 4, image: "pj_p_4.png", back: "pj_p_4_back.png" },
    { name: "paisley", leg: 3, image: "pj_p_0.png", back: "pj_p_3_back.png" },
    { name: "paisley", leg: 2, image: "pj_p_0.png", back: "pj_p_2_back.png" },
    { name: "paisley", leg: 1, image: "pj_p_0.png", back: "pj_p_0_back.png" },
    { name: "paisley", leg: 0, image: "pj_p_0.png", back: "pj_p_0_back.png" },

    { name: "b", leg: 5, image: "pj_b_4_bottom.png", back: "pj_b_5_bottom_back.png" },
    { name: "b", leg: 4, image: "pj_b_4_bottom.png", back: "pj_b_4_bottom_back.png" },
    { name: "b", leg: 3, image: "pj_b_3_bottom.png", back: "pj_b_3_bottom_back.png" },
    { name: "b", leg: 2, image: "pj_b_1_bottom.png", back: "pj_b_2_bottom_back.png" },
    { name: "b", leg: 1, image: "pj_b_1_bottom.png", back: "pj_b_0_bottom_back.png" },
    { name: "b", leg: 0, image: "pj_b_0_bottom.png", back: "pj_b_0_bottom_back.png" }
];

cl.chastity = [
    { name: "cage", image: "cockchast_m.png" },
    { name: "pink", image: "cockchast_p.png" },
    { name: "metal", image: "cockchast_s.png" }
];

cl.buttplug = [
    { name: "s", leg: 0, image: "plug_s_0.png" },
    { name: "s", leg: 1, image: "plug_s_0.png" },
    { name: "s", leg: 2, image: "plug_s_2.png" },
    { name: "s", leg: 3, image: "plug_s_3.png" },
    { name: "s", leg: 4, image: "plug_s_4.png" },

    { name: "m", leg: 0, image: "plug_m_0.png" },
    { name: "m", leg: 1, image: "plug_m_0.png" },
    { name: "m", leg: 2, image: "plug_m_2.png" },
    { name: "m", leg: 3, image: "plug_m_3.png" },
    { name: "m", leg: 4, image: "plug_m_4.png" },

    { name: "l", leg: 0, image: "plug_m_0.png" },
    { name: "l", leg: 1, image: "plug_m_0.png" },
    { name: "l", leg: 2, image: "plug_m_2.png" },
    { name: "l", leg: 3, image: "plug_m_3.png" },
    { name: "l", leg: 4, image: "plug_m_4.png" },

    { name: "h", leg: 0, image: "plug_h_0.png" },
    { name: "h", leg: 1, image: "plug_h_0.png" },
    { name: "h", leg: 2, image: "plug_h_2.png" },
    { name: "h", leg: 3, image: "plug_h_3.png" },
    { name: "h", leg: 4, image: "plug_h_4.png" },

    { name: "r", leg: 0, image: "plug_r_0.png" },
    { name: "r", leg: 1, image: "plug_r_0.png" },
    { name: "r", leg: 2, image: "plug_r_2.png" },
    { name: "r", leg: 3, image: "plug_r_3.png" },
    { name: "r", leg: 4, image: "plug_r_4.png" },

    { name: "b", leg: 0, image: "plug_b_0.png" },
    { name: "b", leg: 1, image: "plug_b_0.png" },
    { name: "b", leg: 2, image: "plug_b_2.png" },
    { name: "b", leg: 3, image: "plug_b_3.png" },
    { name: "b", leg: 4, image: "plug_b_4.png" },

    { name: "g", leg: 0, image: "plug_g_0.png" },
    { name: "g", leg: 1, image: "plug_g_0.png" },
    { name: "g", leg: 2, image: "plug_g_2.png" },
    { name: "g", leg: 3, image: "plug_g_3.png" },
    { name: "g", leg: 4, image: "plug_g_4.png" },

    { name: "v", leg: 0, image: "plug_v_0.png" },
    { name: "v", leg: 1, image: "plug_v_0.png" },
    { name: "v", leg: 2, image: "plug_v_2.png" },
    { name: "v", leg: 3, image: "plug_v_3.png" },
    { name: "v", leg: 4, image: "plug_v_4.png" }
];

cl.accessories = [
    { name: "piggy", type: "head", image: "acc_piggy.png", back: null }
];

cl.displayChar = function (ratio, top, left, back) {
    var thisImg, thisClass;
    var btnWidth, btnHeight;
    btnWidth = ratio * g.ratio * 2075;
    btnHeight = ratio * g.ratio * 4200;
    top = top * g.ratio;
    left = left * g.ratio;
    var frontChange = false;
    //if (g.back !== back) {
    //    $('#char_turnaround').click();
    //    frontChange = true;
    //}

    $('.char-layer').each(function () {
        thisImg = $(this).find('img').attr('src');
        if (thisImg !== undefined) {
            thisClass = $(this).attr('class').replace('char-layer', '');
            var line = '<img src="' + thisImg + '" class="room-img  ' + thisClass + '" data-name="zzz-clothing" data-room="' + g.roomID + '" style="width:' + btnWidth + 'px; height:' + btnHeight + 'px; top:' + top + 'px; left:' + left + 'px;" />';
            $('#room-buttons').append(line);
        }
    });

    //if (frontChange)
    //    $('#char_turnaround').click();
};

cl.hairgrowth = function () {
    var h = g.get("hormone");
    if (h > 80)
        g.mod("bodyhair", 2);
    else if (h > 60)
        g.mod("bodyhair", 4);
    else if (h > 50)
        g.mod("bodyhair", 7);
    else
        g.mod("bodyhair", 10);
};

cl.getBodyHair = function () {
    var h = g.get("bodyhair");
    if (h > 80)
        return "longHair";
    if (h > 50)
        return "shortHair";

    return null;
};

cl.display = function () {
    var thisHair;
    $('.bladder-box').remove();
    $(".char-layer").css({
        "top": 50 * g.ratio + "px"
    });
    if (g.tview === "p" || g.tview === "a") {
        $('#char-legs').html("");
        $('#char-chest').html("");
        $('#char-head').html("");
        $('#char-cock').html("");
        $('#char-accBody').html("");
        $('#char-bodyHair').html("");
        $('#char-cum').html("");
        $('#char-panties').html("");
        $('#char-bra').html("");
        $('#char-necklace').html("");
        $('#char-socks').html("");
        $('#char-shoes').html("");
        $('#char-pants').html("");
        $('#char-shirt').html("");
        $('#char-head').html("");
        $('#char-lips').html("");
        $('#char-eyes').html("");
        $('#char-accHead').html("");
        $('#char-hair').html("");
        $('#char-buttplug').html("");
    }
    if (g.tview === "a") {
        var thisButthole = Math.floor(cl.c.butthole);
        if (thisButthole > 3)
            thisButthole = 3;
        cl.subDisplay("char-legs", "butthole" + thisButthole + ".png");
    }
    else if (g.tview === "p") {
        var thisBladdeer = g.get("bladder");
        cl.subDisplay("char-legs", "xray.png");
        $('#char-legs').after('<div class="bladder-box" style="' + g.makeCss(38 * thisBladdeer, 40, 320 + (thisBladdeer * -40), 135) + ' position:absolute; background:#eadb3f; z-index:13;"></div>');
        cl.subDisplay("char-head", "xray_top.png");
    }
    else {
        var cback = g.tview === "b";

        //set Legs
        cl.subDisplay("char-legs", "leg_" + cl.c.leg + (cback ? "_back" : "") + ".png");
        //set Chest
        cl.subDisplay("char-chest", "top_" + cl.c.chest + (cback ? "_back" : "") + ".png");
        //set mouth
        cl.subDisplay("char-lips", cback ? null : "lips_" + cl.c.lips + "_" + (cl.c.lipstick === null ? "nude" : cl.c.lipstick) + ".png");
        //set eyes
        cl.subDisplay("char-eyes", cback ? null : "eyes_" + cl.c.eyes + ".png");
        //set cock
        if (cl.c.chastity === null)
            cl.subDisplay("char-cock", cback ? null : "cock_" + cl.c.cock + ".png");
        else {
            $.each(cl.chastity, function (i, v) {
                if (v.name === cl.c.chastity) {
                    cl.subDisplay("char-cock", cback ? null : v.image);
                    return false;
                }
            });
        }
        if (cl.c.buttplug !== null) {
            $.each(cl.buttplug, function (i, v) {
                if (v.name === cl.c.buttplug) {
                    cl.subDisplay("char-buttplug", !cback ? null : v.image);
                    return false;
                }
            });
        }
        else
            cl.subDisplay("char-buttplug", null);
        //set bodyhair
        var hairy = cl.getBodyHair();
        if (hairy === null || cback)
            $('#char-bodyHair').html('');
        else
            cl.cWhere(cl.bodyhair, hairy, "char-bodyHair");

        cl.subDisplay("char-cum", null);
        if (cl.c.cumface) {
            cl.subDisplay("char-cum", cback ? null : "cum_face.png");
        }

        //set Head
        if (cl.c.makeup === null)
            cl.c.makeup = "n";
        if (cback)
            cl.subDisplay("char-head", "body_head_back.png");
        else {
            $.each(cl.makeup, function (i, v){
                if (v.name === cl.c.makeup)
                    cl.subDisplay("char-head", v.image);
            });
        }
        //set hair
        if (cl.c.wig !== null) {
            $.each(cl.wig, function (i, v) {
                if (v.name === cl.c.wig)
                    cl.subDisplay("char-hair", cback ? v.back : v.image);
            });
        }
        else {
            if (cl.c.hairLength === null)
                cl.subDisplay("char-hair", null);
            else if (cl.c.hairLength < 2) {
                thisHair = "hair_" + cl.c.hairLength.toString() + "_" + cl.c.hairColor;
                cl.subDisplay("char-hair", cback ? thisHair + "_back.png" : thisHair + ".png");
            }
            else if (cl.c.hairStyle === "leia") {
                thisHair = "hair_2_" + cl.c.hairColor + "_leia";
                cl.subDisplay("char-hair", cback ? thisHair + "_back.png" : thisHair + ".png");
            }
            else {
                thisHair = "hair_" + cl.c.hairLength.toString() + "_" + cl.c.hairColor + "_" + cl.c.hairStyle;
                cl.subDisplay("char-hair", cback ? thisHair + "_back.png" : thisHair + ".png");
            }
        }

        //Clothes
        //set necklace
        if (cl.c.necklace !== null) {
            $.each(cl.necklace, function (i, v) {
                if (v.name === cl.c.necklace) {
                    cl.subDisplay("char-necklace", cback ? v.back : v.image);
                    return false;
                }
            });
        }
        else
            cl.subDisplay("char-necklace", null);

        //set panties
        if (cl.c.panties !== null) {
            cl.c.pj = null;
            cl.subDisplay("char-cock", null);
            $.each(cl.panties, function (i, v) {
                if (v.name === cl.c.panties && v.leg === cl.c.leg) {
                    if (cl.c.cock < 5)
                        cl.subDisplay("char-panties", cback ? v.back : v.cock);
                    else
                        cl.subDisplay("char-panties", cback ? v.back : v.pussy);
                    return false;
                }
            });
        }
        else
            cl.subDisplay("char-panties", null);

        //set pants
        if (cl.c.pants !== null) {
            cl.c.pj = null;
            if (cl.c.pants === "s" || cl.c.pants === "j" || cl.c.pants === "b" || cl.c.pants === "r" || cl.c.pants === "dd" || cl.c.pants === "p" || cl.c.pants === "ps") {
                cl.subDisplay("char-cock", null);
            }
            $.each(cl.pants, function (i, v) {
                if (v.name === cl.c.pants && v.leg === cl.c.leg) {
                    cl.subDisplay("char-pants", cback ? v.back : v.image);
                    return false;
                }
            });
        }
        else
            cl.subDisplay("char-pants", null);
        //set bra
        if (cl.c.bra !== null) {
            cl.c.pj = null;
            $.each(cl.bra, function (i, v) {
                if (v.name === cl.c.bra && v.chest === cl.c.chest) {
                    cl.subDisplay("char-bra", cback ? v.back : v.image);
                    return false;
                }
            });
        }
        else
            cl.subDisplay("char-bra", null);
        //set shirt
        if (cl.c.shirt !== null) {
            cl.c.pj = null;
            $.each(cl.shirt, function (i, v) {
                if (v.name === cl.c.shirt && v.chest === cl.c.chest) {
                    cl.subDisplay("char-shirt", cback ? v.back : v.image);
                    return false;
                }
            });
        }
        else
            cl.subDisplay("char-shirt", null);

        //set dress
        if (cl.c.dress !== null) {
            cl.c.pj = null;
            cl.c.shirt = null;
            cl.c.pants = null;
            cl.c.swimsuit = null;
            cl.subDisplay("char-shirt", null);
            cl.subDisplay("char-pants", null);
            $.each(cl.dressTop, function (i, v) {
                if (v.name === cl.c.dress && v.chest === cl.c.chest) {
                    cl.subDisplay("char-shirt", cback ? v.back : v.image);
                    return false;
                }
            });
            $.each(cl.dressBottom, function (i, v) {
                if (v.name === cl.c.dress && v.leg === cl.c.leg) {
                    cl.subDisplay("char-pants", cback ? v.back : v.image);
                    return false;
                }
            });
        }

        //set suimsuit
        if (cl.c.swimsuit !== null) {
            cl.c.pj = null;
            cl.c.shirt = null;
            cl.c.pants = null;
            cl.c.dress = null;
            cl.c.bra = null;
            cl.c.panties = null;
            cl.subDisplay("char-cock", null);
            cl.subDisplay("char-shirt", null);
            cl.subDisplay("char-pants", null);
            $.each(cl.swimsuitTop, function (i, v) {
                if (v.name === cl.c.swimsuit && v.chest === cl.c.chest) {
                    cl.subDisplay("char-shirt", cback ? v.back : v.image);
                    return false;
                }
            });
            $.each(cl.swimsuitBottom, function (i, v) {
                if (v.name === cl.c.swimsuit && v.leg === cl.c.leg) {
                    if (cl.c.cock < 5)
                        cl.subDisplay("char-pants", cback ? v.back : v.cock);
                    else
                        cl.subDisplay("char-pants", cback ? v.back : v.pussy);
                    return false;
                }
            });
        }


        //set pj
        if (cl.c.pj !== null) {
            cl.c.bra = null;
            cl.c.panties = null;
            cl.c.socks = null;
            cl.c.shirt = null;
            cl.c.pants = null;
            cl.c.dress = null;
            cl.c.swimsuit = null;
            cl.c.shoes = null;
            cl.subDisplay("char-cock", null);
            cl.subDisplay("char-shirt", null);
            cl.subDisplay("char-pants", null);
            $.each(cl.pjTop, function (i, v) {
                if (v.name === cl.c.pj && v.chest === cl.c.chest) {
                    cl.subDisplay("char-shirt", cback ? v.back : v.image);
                    return false;
                }
            });
            $.each(cl.pjBottom, function (i, v) {
                if (v.name === cl.c.pj && v.leg === cl.c.leg) {
                    cl.subDisplay("char-pants", cback ? v.back : v.image);
                    return false;
                }
            });
        }

        //set socks
        if (cl.c.socks !== null) {
            cl.c.pj = null;
            $.each(cl.socks, function (i, v) {
                if (v.name === cl.c.socks) {
                    cl.subDisplay("char-socks", cback ? v.back : v.image);
                    return false;
                }
            });
        }
        else
            cl.subDisplay("char-socks", null);

        //set shoes
        if (cl.c.shoes !== null) {
            $.each(cl.shoes, function (i, v) {
                if (v.name === cl.c.shoes) {
                    cl.subDisplay("char-shoes", cback ? v.back : v.image);
                    return false;
                }
            });
        }
        else
            cl.subDisplay("char-shoes", null);

        //set accessories
        $('#char-accHead').html('');
        $('#char-accBody').html('');
        $.each(cl.c.accessories, function (i, v) {
            $.each(cl.accessories, function (j, u) {
                if (v === u.name) {
                    var thisAccImg = cback ? u.back : u.image;

                    if (u.type === "head" && thisAccImg !== null) {
                        $('#char-accHead').append('<img src="./images/mainChar/' + thisAccImg + '" />');
                    }
                    else if (thisAccImg !== null) {
                        $('#char-accBody').append('<img src="./images/mainChar/' + thisAccImg + '" />');
                    }
                    return false;
                }
            });
        });

        cl.cockDisplay();
        cl.energydisplay();
    }
};

cl.cWhere = function (thisArray, entry, id) {
    var cback = g.tview === "b";
    $.each(thisArray, function (i, v) {
        if (v.name === entry) {
            cl.subDisplay(id, cback ? v.back : v.image);
            return false;
        }
    });
};

cl.subDisplay = function (id, image) {
    if (image !== null) {
        //var top = 20 * g.ratio;
        //var left = 20 * g.ratio;
        var btnWidth = 300 * g.ratio;
        var btnHeight = 600 * g.ratio;
        $('#' + id).html('<img src="./images/mainChar/' + image + '" style="width:' + btnWidth + 'px; height:' + btnHeight + 'px; top:0px; left:0px;" />');
    }
    else
        $('#' + id).html('');
};



cl.cockDisplay = function () {

    if (g.cockDisplay === "c") {
        $("#char_cockDisplay").html('<img src="./images/mainChar/cock/erec_body_ball.png" />');
        var cumHeight = 35 * cl.getCum();
        $("#char_cockDisplay").append('<div style="' + g.makeCss(cumHeight, 25, 60 + (35 - cumHeight), 165) + ' background:rgba(255, 255, 255, 1); position:absolute; border-radius:' + 8 * g.ratio + 'px;"></div>');

        $("#char_cockDisplay").append('<img src="./images/mainChar/cock/erec_body.png" />');

        if (cl.c.chastity !== null) {
            $("#char_cockDisplay").append('<img src="./images/mainChar/cock/' + cl.getEntry("chastity", cl.c.chastity).img + '" />');
        }
        else {
            var thisArousal = g.get("arousal");
            if (thisArousal < 15)
                $("#char_cockDisplay").append('<img src="./images/mainChar/cock/erec_c_6.png" />');
            else if (thisArousal < 25)
                $("#char_cockDisplay").append('<img src="./images/mainChar/cock/erec_c_5.png" />');
            else if (thisArousal < 45)
                $("#char_cockDisplay").append('<img src="./images/mainChar/cock/erec_c_4.png" />');
            else if (thisArousal < 65)
                $("#char_cockDisplay").append('<img src="./images/mainChar/cock/erec_c_3.png" />');
            else if (thisArousal < 85)
                $("#char_cockDisplay").append('<img src="./images/mainChar/cock/erec_c_2.png" />');
            else
                $("#char_cockDisplay").append('<img src="./images/mainChar/cock/erec_c_1.png" />');
        }

        if (cl.c.buttplug !== null) {
            $("#char_cockDisplay").append('<img src="./images/mainChar/cock/' + cl.getEntry("buttplug", cl.c.buttplug).img + '" />');
        }

        $("#char_cockDisplay").css({
            height: 146 * g.ratio + "px",
            width: 300 * g.ratio + "px"
        });
        $("#char_cockDisplay1").css({
            height: 146 * g.ratio + "px",
            width: 300 * g.ratio + "px"
        });
    }
    else if (g.cockDisplay === "a") {
        var bhole = Math.floor(cl.c.butthole);
        if (bhole < 0)
            bhole = 0;
        else if (bhole > 6)
            bhole = 6;
        $("#char_cockDisplay").html('<img src="./images/mainChar/asshole/a' + bhole + '.png" />');
    }
};

cl.energydisplay = function () {
    var tempEnergy = g.get("energy");
    var firstHalf = cl.appearance();
    var secondHalf = "0";

    if (tempEnergy < 24)
        secondHalf = "0";
    else if (tempEnergy < 51)
        secondHalf = "25";
    else if (tempEnergy < 76)
        secondHalf = "50";
    else
        secondHalf = "75";

    $("#char_charDisplay").html('<img src="./images/stat/' + firstHalf + '_' + secondHalf + '.png" style="' + g.makeCss(150, 150, 0, 0) + ' margin-left:' + 80 * g.ratio + 'px;" title="' + cl.set[firstHalf + 1].name + '">');
};

cl.getCum = function () {
    //1440 minutes in day
    //4320 in 3 dyas
    var timeSince = g.diffDateByMinutes(g.dt, g.get("cum")) / 4320.0;
    return timeSince > 1 ? 1 : timeSince;
};

cl.doCum = function (bigCum) {
    var checkCum = cl.getCum();

    if (checkCum === 1) {
        g.set("cum", char.addMinutes(g.dt, -4320));
    }
    if (bigCum)
        g.set("cum", char.addMinutes(g.dt, 3240));
    else
        g.set("cum", char.addMinutes(g.dt, 2160));

    if (g.get("cum") > g.dt)
        g.set("cum", g.dt);

    g.mod("arousal", -1000);
};

cl.fillballs = function () {
    g.set("cum", char.addMinutes(g.dt, -4320));
    cl.cockDisplay();
};

cl.naked = function () {
    return cl.c.shoes === null
        && cl.c.socks === null
        && cl.c.pants === null
        && cl.c.panties === null
        && cl.c.bra === null
        && cl.c.shirt === null
        && cl.c.dress === null
        && cl.c.swimsuit === null
        && cl.c.pj === null;
};

cl.isCrossdressing = function () {
    var isXdress = false;
    if (cl.c.dress !== null)
        isXdress = true;
    else if (cl.c.pj !== null)
        isXdress = cl.getEntry("pj", cl.c.pj).sex === "f";
    else if (cl.c.swimsuit !== null)
        isXdress = cl.getEntry("swimsuit", cl.c.swimsuit).sex === "f";
    else if (cl.c.pants !== null)
        isXdress = cl.getEntry("pants", cl.c.pants).sex === "f";
    else if (cl.c.shirt !== null)
        isXdress = cl.getEntry("shirt", cl.c.shirt).sex === "f";

    return isXdress;
};

cl.cupsize = function () {
    var sizes = ["fat", "A", "A", "B", "C", "D", "Fucking Huge"];
    return sizes[cl.c.chest + 1];
};

cl.buttsize = function () {
    var sizes = ["manly", "tiny", "nice", "phat", "super plump", "porn star"];
    return sizes[cl.c.leg];
};

cl.usecock = function () {
    if (cl.c.chastity !== null)
        return false;
    if (cl.c.cock > 3)
        return false;
    return true;
};

cl.appearance = function () {
    var ab = cl.appearanceBody();
    var ac = cl.appearanceClothes();
    var totalEarned = ab.earnedPoints + ac.earnedPoints;
    var i;
    var retVal = -1;
    if (cl.c.chest === 0)
        retVal = -1;
    else {
        for (i = 0; i < cl.set.length; i++) {
            if (cl.set[i].p < totalEarned)
                retVal = cl.set[i].entry;
        }
    }
    return retVal;
};

cl.appearanceClothes = function () {
    var totalPoints, earnedPoints, i;
    totalPoints = earnedPoints = 0;
    var pointStack = new Array();

    var tb = cl.appearanceClothesTB();
    var tp;

    pointStack.push({ n: "top", an: tb.atop, earned: tb.top, total: 250, image: tb.topImg });
    pointStack.push({ n: "bottom", an: tb.abot, earned: tb.bottom, total: 250, image: tb.botImg });
    
    if (cl.c.swimsuit !== null) {
        pointStack.push({ n: "panties", an: tb.abot, earned: Math.floor(tb.bottom / 5), total: 50, image: tb.botImg });
        pointStack.push({ n: "bra", an: tb.atop, earned: Math.floor(tb.top / 5), total: 50, image: tb.topImg });
    }
    else {
        pointStack.push(cl.appearanceClothesSub("panties", cl.c.panties, 50, true));
        pointStack.push(cl.appearanceClothesSub("bra", cl.c.bra, 50, cl.c.chest > 1));
    }
    
    pointStack.push(cl.appearanceClothesSub("socks", cl.c.socks, 25, true));
    pointStack.push(cl.appearanceClothesSub("shoes", cl.c.shoes, 50, true));
    pointStack.push(cl.appearanceClothesSub("necklace", cl.c.necklace, 50, false));
    if (cl.c.buttplug === null)
        pointStack.push({ n: "buttplug", an: "None", earned: 0, total: 50, image: "none.png" });
    else {
        tp = cl.list[cl.where("buttplug", cl.c.buttplug)];
        pointStack.push({ n: "buttplug", an: tp.display, earned: 50, total: 50, image: tp.img });
    }
    if (cl.c.chastity === null)
        pointStack.push({ n: "chastity", an: "None", earned: 0, total: 50, image: "none.png" });
    else {
        tp = cl.list[cl.where("chastity", cl.c.chastity)];
        pointStack.push({ n: "chastity", an: tp.display, earned: 50, total: 50, image: tp.img });
    }

    for (i = 0; i < pointStack.length; i++) {
        earnedPoints += pointStack[i].earned;
        totalPoints += pointStack[i].total;
    }

    return { ps: pointStack, earnedPoints: earnedPoints, totalPoints: totalPoints };
};

cl.appearanceClothesSub = function (n, c, p, nullMax) {
    var thisIndex = cl.where(n, c);
    if (thisIndex !== null)
        return { n: n, an: cl.list[thisIndex].display, earned: cl.actotal(thisIndex, p, nullMax), total: p, image: cl.list[thisIndex].img };
    return { n: n, an: "None", earned: cl.actotal(thisIndex, p, nullMax), total: p, image: "none.png" };
};

cl.appearanceClothesTB = function () {
    var top, bottom, topImg, botImg, atop, abot;
    var ti;

    if (cl.c.pj !== null) {
        ti = cl.where("pj", cl.c.pj);
        top = bottom = cl.actotal(ti, 250, true);
        topImg = botImg = cl.list[ti].img;
        atop = abot = cl.list[ti].display;
    }
    else if (cl.c.dress !== null) {
        ti = cl.where("dress", cl.c.dress);
        top = bottom = cl.actotal(ti, 250, true);
        topImg = botImg = cl.list[ti].img;
        atop = abot = cl.list[ti].display;
    }
    else if (cl.c.swimsuit !== null) {
        ti = cl.where("swimsuit", cl.c.swimsuit);
        top = bottom = cl.actotal(ti, 250, true);
        topImg = botImg = cl.list[ti].img;
        atop = abot = cl.list[ti].display;
    }
    else {
        if (cl.c.shirt !== null) {
            ti = cl.where("shirt", cl.c.shirt);
            top = cl.actotal(ti, 250, true);
            topImg = cl.list[ti].img;
            atop = cl.list[ti].display;
        }
        else {
            top = 250;
            topImg = "none.png";
            atop = "None";
        }

        if (cl.c.pants !== null) {
            ti = cl.where("pants", cl.c.pants);
            bottom = cl.actotal(ti, 250, true);
            botImg = cl.list[ti].img;
            abot = cl.list[ti].display;
        }
        else {
            bottom = 250;
            botImg = "none.png";
            abot = "None";
        }
    }
    return { top: top, bottom: bottom, topImg: topImg, botImg: botImg, atop: atop, abot: abot };
};

cl.actotal = function (i, points, nullMax) {
    var pt = 0;
    if (i !== null) {
        var thisP = cl.list[i].daring;
        pt = Math.round((thisP / 5) * points);
        if (pt < 0)
            pt = 0;
        else if (pt > points)
            pt = points;
    }
    else {
        if (nullMax)
            pt = points;
        else
            pt = 0;
    }
    return pt;
};

cl.appearanceBody = function () {
    var totalPoints = 0;
    var earnedPoints = 0;
    var pointStack = new Array();
    var i = 0;

    var bodyTotal = cl.subscore((cl.c.chest < 0 ? 0 : cl.c.chest - 1), 5, 100); //100
    var legTotal = cl.subscore(cl.c.leg, 5, 50); //150
    var cockTotal = cl.subscore(cl.c.cock, 5, 50); //200
    var hairTotal = cl.subscore(cl.c.hairLength, 4, 50); //250
    var lipsTotal = cl.subscore(cl.getLips(), 2, 25); 
    lipsTotal += cl.c.lipstick === null ? 0 : 25; //300
    var bodyHairTotal = cl.subscore(cl.getBodyHair() === null ? 1 : 0, 1, 100); //350 
    var makeupTotal = cl.subscore(cl.getMakeupWeight(), 3, 50); //400

    pointStack.push({ n: "hair", earned: hairTotal, total: 50 });
    pointStack.push({ n: "makeup", earned: makeupTotal, total: 50 });
    pointStack.push({ n: "lips", earned: lipsTotal, total: 50 });
    pointStack.push({ n: "chest", earned: bodyTotal, total: 100 });
    pointStack.push({ n: "butt", earned: legTotal, total: 50 });
    pointStack.push({ n: "clit", earned: cockTotal, total: 50 });
    pointStack.push({ n: "bodyhair", earned: bodyHairTotal, total: 100 });
    

    for (i = 0; i < pointStack.length; i++) {
        earnedPoints += pointStack[i].earned;
        totalPoints += pointStack[i].total;
    }

    return { ps: pointStack, earnedPoints: earnedPoints, totalPoints: totalPoints };
};

cl.subscore = function (thisScore, levels, howManyPoints) {
    if (thisScore === null)
        thisScore = 0;
    var thisX = Math.round((thisScore / levels) * howManyPoints);
    if (thisX < 0)
        thisX = 0;
    if (thisX > howManyPoints)
        thisX = howManyPoints;
    return thisX;
};

cl.clean = function (type) {
    cl.c.cumface = null;
    cl.c.makeup = "n";
    cl.c.lipstick = null;

    cl.display();
};

cl.wearing = function () {
    var retVal = {
        underwear: false,
        top: false,
        bottom: false,
        footwear: false,
        usableCock: false,
        chastity: false,
        tinyDick: false,
        nude: false,
        lewd: false,
        superlewd: false
    };

    retVal.underwear = (cl.c.panties !== null || cl.c.bra !== null);
    retVal.top = (cl.c.dress !== null || cl.c.swimsuit !== null || cl.c.pj !== null || cl.c.shirt !== null);
    retVal.bottom = (cl.c.dress !== null || cl.c.swimsuit !== null || cl.c.pj !== null || cl.c.shirt !== null);
    retVal.footwear = (cl.c.shoes !== null || cl.c.socks !== null);
    retVal.chastity = cl.c.chastity !== null;
    retVal.tinyDick = cl.c.cock < 4;
    retVal.nude = !retVal.underwear && !retVal.top && !retVal.bottom && !retVal.footwear;
    retVal.lewd = (!retVal.underwear && !retVal.bottom) || (!retVal.shirt && retVal.chest > 1);
    retVal.usableCock = !(retVal.chastity || retVal.tinyDick);
    retVal.superlewd = !retVal.underwear && !retVal.top && !retVal.bottom;
    return retVal;
};

cl.minButt = function (invItem, sizeItem) {
    var returnItem = { minSize: 0, fit: false };
    if (invItem !== null) {
        switch (invItem) {
            case "screwdriver":
                returnItem.minSize = 0;
                break;
            case "purpleDildo":
            case "pinkDildo":
                returnItem.minSize = 1;
                break;
            case "whiteDildo":
                returnItem.minSize = 2;
                break;
            case "blackDildo":
            case "blackBallsDildo":
            case "towerDildo":
                returnItem.minSize = 3;
                break;
            case "pinkFatDildo":
            case "horseDildo":
                returnItem.minSize = 4;
                break;
            default:
                console.log("cl.minButt::Need: " + invItem);
        }
    }
    else if (sizeItem !== null) {
        if (sizeItem < 0)
            sizeItem = 0;
        else if (sizeItem > 6)
            sizeItem = 6;
        returnItem.minSize = sizeItem;
    }
    else {
        console.log("cl.minButt::No invItem or sizeItem - both null.");
    }
    returnItem.fit = returnItem.minSize <= cl.c.butthole;
    return returnItem;
};

cl.stretchButt = function (invItem, sizeItem) {
    var thisItem = cl.minButt(invItem, sizeItem);
    var oldBhole = Math.floor(cl.c.butthole);
    var retSize = 0;
    var startLine = "";

    if (cl.c.butthole >= thisItem.minSize + 2) {
        retSize = 0;    
    }
    else if (cl.c.butthole >= thisItem.minSize + 1) {
        retSize = .17;
    }
    else if (cl.c.butthole >= thisItem.minSize) {
        retSize += .34;
    }
    else {
        retSize += .34;
    }
    if (retSize > 0)
        cl.c.butthole += retSize;
    if (oldBhole < Math.floor(cl.c.butthole)) {
        cl.cockDisplay();
        startLine = "Your butthole increased in size (Slut)<br/>";
    }
    if (retSize === .17) {
        g.popUpNotice(startLine + "Your butthole stretched a little. ");
    }
    else if (retSize > .17) {
        g.popUpNotice(startLine + "Your butthole stretched a lot. ");
    }
    g.setflag("buttholePlay");
    return retSize;
};