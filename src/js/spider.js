//定义全局变量
var canvas;
var context;
var P = Math.PI;
var chords = [
    [1025, 124, 763, 81],
    [1025, 124, 1068, 363],
    [763, 81, 537, 47],
    [537, 47, 402, 102],
    [763, 81, 952, 169],
    [952, 169, 988, 363],
    [988, 363, 949, 497],
    [1068, 363, 1028, 532],
    [1028, 532, 970, 630],
    [234, 417, 268, 551],
    [234, 417, 224, 274],
    [224, 274, 275, 147],
    [275, 147, 359, 51],
    [359, 51, 440, 17],
    [537, 47, 440, 17],
    [348, 632, 484, 608],
    [484, 608, 779, 605],
    [268, 551, 349, 632],
    [779, 605, 887, 470],
    [887, 470, 912, 361],
    [912, 361, 891, 202],
    [891, 202, 749, 112],
    [749, 112, 545, 75],
    [545, 75, 428, 131],
    [949, 497, 884, 618], //5
    [402, 102, 341, 185],
    [341, 185, 299, 287],
    [299, 287, 296, 407],
    [296, 407, 332, 515],
    [332, 515, 484, 605],
    [559, 122, 727, 151],
    [727, 151, 840, 229],
    [840, 229, 868, 359],
    [868, 359, 856, 455],
    [856, 455, 760, 576],
    [760, 576, 499, 581],
    [499, 581, 374, 492],
    [374, 492, 341, 401],
    [341, 401, 350, 301],
    [350, 301, 377, 206],
    [377, 206, 428, 131],
    [559, 122, 458, 166],
    [458, 166, 410, 224],
    [410, 224, 381, 304],
    [381, 304, 381, 393],
    [381, 393, 410, 469],
    [410, 469, 519, 544],
    [519, 544, 733, 534],
    [733, 534, 811, 438],
    [811, 438, 820, 359], //10
    [820, 359, 798, 252],
    [798, 252, 712, 185],
    [712, 185, 566, 160],
    [566, 160, 481, 196],
    [481, 196, 442, 249],
    [442, 249, 418, 315],
    [418, 315, 419, 390],
    [419, 390, 442, 455],
    [442, 455, 534, 519],
    [534, 519, 715, 510],
    [782, 426, 800, 362],
    [800, 362, 776, 267],
    [776, 267, 700, 202],
    [700, 202, 574, 185],
    [574, 185, 504, 222],
    [715, 510, 782, 426],
    [504, 222, 468, 263],
    [468, 263, 454, 320]
    //, [], [],[],[],[],[], [], [],[],[],[],[], [], [],[],[],[],[]
    ,
    [454, 320, 457, 384],
    [457, 384, 479, 435],
    [479, 435, 551, 485],
    [551, 485, 700, 482],
    [700, 482, 757, 416],
    [757, 416, 770, 362],
    [770, 362, 754, 279],
    [754, 279, 690, 224],
    [690, 224, 578, 206],
    [578, 206, 526, 249],
    [526, 249, 503, 284],
    [503, 284, 490, 328],
    [490, 328, 490, 379],
    [490, 379, 507, 419],
    [507, 419, 561, 466],
    [561, 466, 687, 462],
    [687, 462, 732, 405],
    [732, 405, 740, 362],
    [740, 362, 722, 301],
    [722, 301, 671, 258],
    [671, 258, 588, 245],
    [588, 245, 545, 268],
    [545, 268, 520, 297],
    [520, 297, 513, 332],
    [513, 332, 512, 374],
    [512, 374, 528, 410],
    [528, 410, 573, 442],
    [573, 442, 670, 439],
    [670, 439, 703, 392],
    [703, 392, 712, 362],
    [712, 362, 697, 313],
    [697, 313, 659, 277],
    [659, 277, 595, 268],
    [595, 268, 562, 288],
    [562, 288, 546, 311],
    [546, 311, 537, 337],
    [537, 337, 540, 369],
    [540, 369, 549, 394],
    [549, 394, 584, 420],
    [584, 420, 657, 419],
    [657, 419, 679, 383],
    [679, 383, 684, 357],
    [684, 357, 677, 322],
    [677, 322, 649, 297],
    [649, 297, 599, 289],
    [599, 289, 575, 303],
    [575, 303, 562, 321],
    [562, 321, 556, 341],
    [556, 341, 558, 363],
    [558, 363, 564, 384],
    [564, 384, 590, 405],
    [590, 405, 645, 405],
    [645, 405, 666, 378],
    [666, 378, 671, 358],
    [671, 358, 664, 333],
    [664, 333, 641, 311],
    [641, 311, 606, 304],
    [606, 304, 586, 312],
    [586, 312, 573, 327],
    [573, 327, 570, 344],
    [570, 344, 572, 361],
    [572, 361, 580, 380],
    [580, 380, 594, 389]
    /*,[594,389,639,390]
    ,[639,390,650,369]
    ,[650,369,653,359]
    ,[653,359,646,342]
    ,[646,342,635,330]
    ,[635,330,613,328]
    */
];
//the main line of the spider net[538,50],[763,88],[779,607],  
//[486,610],[1030,128],[1170,372],[316,0],[122,57],[1245,629],[61,668],[87,441],[2,232]   [],[],[], [],[],[],[],[], [],[],[],[],[],
var interval = 1;
var tag;
var mouse = {
        old_x: 0,
        old_y: 0,
        new_x: 0,
        new_y: 0
    }
/**
 * chord class
 */
function Chord(X1, Y1, X2, Y2) {
    var chord = {
        position: {
            x1: X1,
            x2: X2,
            y1: Y1,
            y2: Y2,
            bx: 0,
            by: 0,
            bsx: 0,
            bsy: 0
        }, //bx,bsx 代表贝叶二次斯曲线的定位点 ，bsx是阴影的位置
        mouse: {
            on: 0,
            x: 0,
            y: 0,
            max_length: 0
        }, //判断当鼠标在弦上的时候的状态
        theta: 0,
        stheta: 0,
        ctheta: 0,
        v: 0, //原本是速度，但是简化成了弦移动的距离，因为距离短这样可以近似的模拟成简谐运动
        live: 0, //弦是否被激活
        live_time: 5, //简谐运动时候需要的参数
        color: {
            r: 0,
            g: 0,
            b: 0,
            full_time: 0
        },
        activate: function() {},
        tone: {
            id: "somethin"
        },
        Reset: function() {},
        update: function() {},
        draw: function() {}
    }
    chord.theta = Math.atan(Math.abs(Y2 - Y1) / Math.abs(X2 - X1));
    chord.position.bx = (X1 + X2) / 2;
    chord.position.by = (Y1 + Y2) / 2;
    chord.stheta = Math.sin(chord.theta);
    chord.ctheta = Math.cos(chord.theta);
    chord.Reset = function() {
        chord.live = 0;
        chord.live_time = 5;
        chord.position.bx = (chord.position.x1 + chord.position.x2) / 2;
        chord.position.by = (chord.position.y1 + chord.position.y2) / 2;
    }
    chord.activate = function() {
        chord.live = 1;
        chord.live_time = 5;
        chord.mouse.on = 0;
        chord.color.full_time = 0;
        var audio=document.getElementById('1');
        audio.play();
    }
    chord.update = function() {
        if (chord.live == 1 && chord.live_time < 10000) {
            chord.live_time += 1;
            chord.v = 300 * Math.sin(chord.live_time) / (3 * chord.live_time);
            //chord.b_length+=chord.v*0.05;
            //console.log(chord.v);
            chord.position.bx = chord.v * chord.stheta + (X1 + X2) / 2;
            chord.position.by = chord.v * chord.ctheta + (Y1 + Y2) / 2;
            //change the color of the chord
            if (chord.color.r < 230 && chord.color.full_time == 0) {
                if (chord.color.r < 150) {
                    chord.color.r += 50;
                } else {
                    chord.color.r += 25;
                }
            } else {
                chord.color.full_time = 1;
                if (chord.color.r >= 1) {
                    if (chord.color.r > 150) {
                        chord.color.r -= 50;
                    } else {
                        chord.color.r -= 15;
                    }
                }
            }
            // console.log(chord.color.r);
        } else {
            chord.live = 0;
            chord.live_time = 0;
        }
    }
    chord.draw = function() { //每次绘图的时候都要更改当前的状态
            window.dcount += 1;
            chord.update();
            context.beginPath();
            context.arc(chord.position.x1, chord.position.y1, 20, 0, 2 * P);
            context.closePath();
            context.fillStyle = "#005f00";
            context.fill();
            context.beginPath();
            context.arc(chord.position.x2, chord.position.y2, 10, 0, 2 * P);
            context.closePath();
            context.fillStyle = "#00ff00";
            context.fill();
            context.beginPath();
            context.arc(chord.position.bx, chord.position.by, 5, 0, 2 * Math.PI);
            context.closePath();
            context.fill();
            // context.restore();
            context.beginPath();
            context.strokeStyle = "rgb(" + chord.color.r + "," + chord.color.g + "," + chord.color.b + ")";
            context.lineWidth = 1.5;
            context.moveTo(chord.position.x1, chord.position.y1);
            context.quadraticCurveTo(chord.position.bx, chord.position.by, chord.position.x2, chord.position.y2);
            //context.lineTo(chord.position.bx,chord.position.by);
            //context.lineTo(chord.position.x2,chord.position.y2);
            context.stroke();
        }
        //end the define of chord
    return chord;
}

/**
 * [guitar description]
 * @type {Object}
 */
var guitar = {
    c_sprites: [],
    ini: function() {}, //吉他的弦是通过chords数组中的位置和状态来事先定义的，ini函数就是填充c_sprites数组
    start: function() {},
    render: function() {},
    draw: function() {},
    response: function(x, y) {} //检查鼠标是否在加他弦上
}
/**
 * 给吉他布置弦
 * @return {[type]} [description]
 */
guitar.ini = function() {
    // init the lines
    /*
    var lineNum = 20;
    var sep = 10;
    for(var i=0; i<lineNum;i++)
    {
    	var x1, y1, x2, y2;
    	x1 = 22; y1 = 10 + i * sep;
    	x2 = 800; y2 = 300 + i * sep;
    	var c3=Chord(x1,y1,x2,y2); 
    	guitar.c_sprites.push(c3);
    }*/
    //console.log(chords.end_arr.length);
    for (var i = 0; i < chords.length; i++) {
        var x1 = chords[i][0];
        var y1 = chords[i][1];
        var x2 = chords[i][2];
        var y2 = chords[i][3];
        var c = Chord(x1, y1, x2, y2);
        guitar.c_sprites.push(c);
    }
}
/**
 * 重定义canvas长宽-----------相当于clearRect（）
 * @return {[type]} [description]
 */
guitar.render = function() {
    context.clearRect(0, 0, 1300, 670);
    if (window.color.r < 200 && window.color.time == 0) {
        window.color.g += 30;
        window.color.r += 30;
        window.color.o += 0.01;
    } else {
        window.color.time = 1;
        if (window.color.r > 100) {
            window.color.r -= 5;
            window.color.g -= 5;
            window.color.o -= 0.005;
        } else {
            window.color.r = 100;
            window.color.g = 100;
            window.color.o = 0.5;
        }
    }
    /*
       canvas.height=670;
       canvas.width=1300;
       */
}
/**
 * [start description]
 * @return {[type]} [description]
 */
guitar.start = function() {
    guitar.ini();
    var time = setInterval(function() {
        guitar.draw();
        window.fcount += 1;
    }, 40);
    window.fcount = 0;
    window.dcount = 0;
    window.color = {
        r: 100,
        g: 100,
        b: 80,
        o: 0.5,
        time: 1
    }
    setInterval(function() {
        var fps = window.fcount / 2;
        $("#fps").html('FPS:' + fps);
        window.fcount = 0;
    }, 2000);
}
/**
 * [draw description]
 * @return {[type]} [description]
 */
guitar.draw = function() {
    guitar.render();
    if (window.paused) {
        var ctx = context;
        var text = "PAUSED";
        ctx.fillStyle = "#ff0000";
        ctx.font = "bold 80px sans";
        ctx.fillText(text, 500, 300);
        return 0;
    }
    // draw mouse track
    context.beginPath();
    context.moveTo(mouse.old_x, mouse.old_y);
    context.lineTo(mouse.new_x, mouse.new_y);
    context.closePath();
    context.strokeStyle = "#ff0000";
    context.lineWidth = 3;
    context.stroke();
    // draw balls
    // TODO
    // draw lines
    var ctx = context;
    var sp;
    var lineColor = "rgba(" + window.color.r + "," + window.color.g + "," + window.color.b + "," + window.color.o + ")";
    //context.strokeStyle="rgb("+chord.color.r+","+chord.color.g+","+chord.color.b+")";
    context.lineWidth = 1.5;
    ctx.strokeStyle = lineColor;
    ctx.beginPath();
    for (var i = 0; i < guitar.c_sprites.length; i++) {
        sp = guitar.c_sprites[i];
        sp.update();
        ctx.moveTo(sp.position.x1, sp.position.y1);
        context.quadraticCurveTo(sp.position.bx, sp.position.by, sp.position.x2, sp.position.y2);
    }
    context.stroke();
}
/**
 * 响应鼠标滑过弦的时候的状态
 * @param  {[type]} x [description]
 * @param  {[type]} y [description]
 * @return {[type]}   [description]
 */
guitar.response = function(x, y) {
    for (var i = 0; i < guitar.c_sprites.length; i++) {
        //判断鼠标是否划过弦，因为鼠标的点是离散的，如果划过那么checked=1；
        var checked = check(guitar.c_sprites[i].position.x1, guitar.c_sprites[i].position.y1, guitar.c_sprites[i].position.x2, guitar.c_sprites[i].position.y2, x, y, mouse.old_x, mouse.old_y);
        /* var dis=distance(guitar.c_sprites[i].position.x1,guitar.c_sprites[i].position.y1,	
           guitar.c_sprites[i].position.x2,guitar.c_sprites[i].position.y2,
           x,y);
           */
        //if(guitar.c_sprites[i].position.x1>x&&guitar.c_sprites[i].position.x2<x)
        if ((checked == 1 && guitar.c_sprites[i].mouse.on == 0)) {
            //当鼠标在弦上的时候，和现实当中一样，弦停止简谐运动
            guitar.c_sprites[i].Reset();
            guitar.c_sprites[i].mouse.on = 1;
            guitar.c_sprites[i].mouse.x = x;
            guitar.c_sprites[i].mouse.y = y;
            guitar.c_sprites[i].tone.id = i;
            $("#id").html('id:' + i + 1);
            window.color.time = 0;
            /*	var ds=distance1(guitar.c_sprites[i].position.x1,guitar.c_sprites[i].position.y1,
            			guitar.c_sprites[i].position.x2,guitar.c_sprites[i].position.y2);
            	var dl=distance1(guitar.c_sprites[i].position.bx,guitar.c_sprites[i].position.by,x,y);
            	guitar.c_sprites[i].mouse.max_length=-( 12*(2*dl+ds)/ds)+24;*/
            // console.log("ds :"+ds+"  dl: "+dl+"  "+ds/(2*dl+ds));
            //console.log(guitar.c_sprites[i]);
            // break;
            if (i == 17) console.log(guitar.c_sprites[i]);
        }
        if (guitar.c_sprites[i].mouse.on == 1) {
            if (guitar.c_sprites[i].position.bx < guitar.c_sprites[i].mouse.max_length) {
                guitar.c_sprites[i].position.bx += guitar.c_sprites[i].stheta;
                guitar.c_sprites[i].position.by += guitar.c_sprites[i].ctheta;
                break;
            } else {
                guitar.c_sprites[i].activate();
                break;
            }
        }
    }
}
/**
 * [curve description]
 * @return {[type]} [description]
 */
function curve() {
    var px = 550;
    var py = 300;
    context.beginPath();
    context.moveTo(px, 10);
    context.lineTo(px, 700);
    context.closePath();
    context.stroke();
    context.beginPath();
    context.moveTo(10, py);
    context.lineTo(1300, py);
    context.closePath();
    context.stroke();
    var text = "(0,0)";
    context.fillText(text, px - 10, py + 10);
    context.moveTo(px, py);
    var x = 0;
    var y = 0;
    for (var i = -1000; i < 1000; i += 0.05) {
        x = 5 * i - 5 * P;
        y = 2000 * Math.sin(i) / (3 * i);
        if (x == 0 && y == 0) {
            context.beginPath();
            context.arc(x + px, y + py, 1, 0, 2 * P);
            context.closePath();
            context.fill();
        } else {
            context.beginPath();
            context.arc(x + px, y + py, 1, 0, 2 * P);
            context.closePath();
            context.fill();
        }
        //console.log(x+"   "+Math.sin(i));
    }
}

function check(x1, y1, x2, y2, x3, y3, x4, y4) {
    /*
       var p ={ x:x1-x3 ,y:y1-y3 }
       var a1={ x:x1-x2 ,y:y1-y2 }
       var a2={ x:x4-x3 ,y:y4-y3 }
       var A =[ [a1.x,a2.x] ,[a1.y,a2.y]  ];
       var A1=[ [p.x ,a2.x] ,[p.y, a2.y]  ];
       var A2=[ [a1.x, p.x] ,[a1.y, p.y]  ];
       var detA=A[0][0]*A[1][1]-A[0][1]*A[1][0];
       var detA1=A1[0][0]*A1[1][1]-A1[0][1]*A1[1][0];
       var detA2=A2[0][0]*A2[1][1]-A2[0][1]*A2[1][0];
       if(detA!=0){
       var t1=detA1/detA;
       var t2=detA2/detA;
       */
    var t1, t2, ax, ay, bx, by, cx, cy, D0, D1, D2;
    ax = x1 - x2;
    ay = y1 - y2;
    bx = x4 - x3;
    by = y4 - y3;
    cx = x1 - x3;
    cy = y1 - y3;
    D0 = ax * by - bx * ay;
    if (D0 == 0) {
        return 0;
    }
    D1 = cx * by - bx * cy;
    D2 = ax * cy - cx * ay;
    t1 = D1 / D0;
    t2 = D2 / D0;
    // console.log(t1+ "   " + t2);
    if (t1 > 0 && t1 < 1 && t2 < 1 && t2 > 0) {
        return 1;
    } else {
        return 0;
    }
}

function distance1(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

function distance(x1, y1, x2, y2, a, b) {
    var A = y2 - y1;
    var B = x1 - x2;
    var C = y1 * (x2 - x1) - x1 * (y2 - y1);
    var distance = Math.abs(A * a + B * b + C) / Math.sqrt(A * A + B * B);
    return distance;
}

function ini() {
    var audio = document.getElementsByTagName("audio");
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas.height = 670;
    canvas.width = 1300;
    guitar.start();
    window.paused = 0;
    btn = document.getElementById("btn_pause");
    $("#btn_pause").click(function() {
        window.paused = !window.paused;
    });
    //var  father=document.getElementsByTagName("body");
}

/**
 * mouse event
 * @param  {[type]} ev [description]
 * @return {[type]}    [description]
 */
window.onmousemove = function(ev) {
    mouse.old_x = mouse.new_x;
    mouse.old_y = mouse.new_y;
    mouse.new_x = ev.offsetX;
    mouse.new_y = ev.offsetY;
    if (ev.which == 1) {
        guitar.response(ev.offsetX, ev.offsetY);
    }
    $("#tag").html('cursor:' + '(' + ev.offsetX + ' , ' + ev.offsetY + ')');
}
window.onload = function() {
    ini();
}
window.a = [1064, 431];
window.onclick = function(ev) {
    console.log("[" + window.a[0] + "," + window.a[1] + "," + ev.offsetX + "," + ev.offsetY + "]");
    window.a[0] = ev.offsetX;
    window.a[1] = ev.offsetY;
}
