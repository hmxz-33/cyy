/**
 * 生日礼物 · 完整版
 * 手写字体 · 蛋糕交互 · 信封放大 · 萤火虫退场 · 点彩落幕（最终优化）
 */
// ================================================================
//  ██  配置  ██
// ================================================================
const CFG = {
    crack: {
        maxDepth: 6,
        spreadSpeed: 0.0045,
        lineWidth: 2.0,
        color: [0, 0, 0, 200],
        segmentLength: 18,
    },
    flower: {
        maxFlowers: 400,
        minSize: 10,
        maxSize: 45,
        growSpeedMin: 0.01,
        growSpeedMax: 0.04,
        colorPalette: [
            [255, 182, 193],
            [255, 200, 220],
            [230, 180, 210],
            [255, 150, 180],
            [240, 200, 220],
        ],
    },
    photoWall: {
        photoCount: 9,
        photoFiles: [
            'photo1', 'photo2', 'photo3',
            'photo4', 'photo5', 'photo6',
            'photo7', 'photo8', 'photo9',
            'photo10',
        ],
        // 照片说明文字：在引号里写内容，放大查看照片时会显示在照片右侧（白色字体）；留空则不显示
        photoTexts: [
            '', '', '',
            '', '',
            '身体不舒服所以这段旅程状态不好\n谢谢你们的包容',
            '', '',
            '其实这是我第一次拍大头贴\n很庆幸留存了这样一张合照',
            '希望以后还有机会一起拍照片',
        ],
        photoSize: 120,
        rotateRange: 0.5,
        petalCount: 25,
        convergeDuration: 2.0,
    },
    cake: {
        size: 0.33,         // 蛋糕宽度 = 屏幕高度 × 0.33（默认≈下半部分一半的观感）。调大→蛋糕更大，调小→更小
        candleHeight: 80,   // 兜底：无蜡烛图片时程序化蜡烛的高度
        burnDuration: 5.0,  // 蜡烛燃烧时长（秒）
        appearDuration: 1.5,
        // 各素材显示宽度 = size × 下方比例（以 cake=1 为基准）。想调大小就改这些数字
        imageScale: {
            cake: 1.0,      // 蛋糕本体
            candle: 0.12,   // 未点燃的蜡烛（细长）
            fire: 0.16,     // 点燃的蜡烛（带火焰）
            note: 0.55,     // 便签
            match: 0.5,     // 火柴（长条）
        },
        candleBaseRatio: 0.88,  // 蜡烛底端在蛋糕高度上的位置（0.88≈贴着蛋糕顶面）
        noteRotate: 0.15,       // 便签倾斜弧度
        noteText: '',           // 便签上叠加的文字；留空则只用图片本身
    },
    firework: {
        maxBursts: 10,
        particlesPerBurst: 80,
        spreadRadius: 0.25,
        gravity: 0.05,
        particleMinSize: 2,
        particleMaxSize: 7,
        speedMin: 2.5,
        speedMax: 7.0,
        lifeDecayMin: 0.003,
        lifeDecayMax: 0.010,
        spawnInterval: 900,
        rocketSpeed: 6.0,
        rocketHeightMin: 0.25,
        rocketHeightMax: 0.65,
    },
    letter: {
        appearDelay: 3.5,
        envelopeWidth: 160,
        envelopeHeight: 330,
        preview: "亲爱的陈园园：\n\n生日快乐！\n愿你的以后对你好一点。",
        text: "亲爱的陈园园：\n\n生日快乐！\n虽然你已经提前过了生日，但还是希望在当天给你祝福。祝愿你找到梦寐以求的生活，希望你不要总是被逼着往前走，希望你能在世界上肆意、幸福地生活，继续勇敢下去，带着每一部分的你自己。你很好，希望你的以后对你好一点，我向菩萨祈祷。\n\n不等人解释发生了什么，我们就仓皇地走到了20岁的路口。记得我从前问你有没有觉得我改变了很多，你说“没有”。大概是因为我们总在相逢，也因为我从来不喜欢在你面前沉默，我总在啰嗦。从准高一相识，中间有少联系过，却又在各奔东西时重新相处。距离好像给我们的关系加了中间层，让我们在里面喘息、等待。是缘分让我们不断相识，不断了解彼此，我感谢这份缘分，也会一直记得这段关系。\n\n准高一认识你时，觉得这是一个分外勇敢与有趣的同学，你总在与邪恶的陆建军斗智斗勇，与狡猾的数学物理久久周旋。与你聊天，就是在枯燥的高中生活短暂地看了会儿动画片，感受纯粹的勇气与乐观，看你气愤到跺脚，叉着腰吐槽那些本就不公正的事。\n\n其实你也会在离开家的时候偷偷哭泣，也会因为老师的责备而流泪，你也有难以宣之于口的情绪。只不过你习惯了轻松地表达难过，用气愤来概括所有的情绪。\n\n最想说的是感谢吧，你填补了我读书生活大部分的无聊，让我感受到絮絮叨叨的温暖。之前的我也不太会有愤怒这份情绪，在跟你相处之后，我发现其实那些自以为是的委屈是我没有表达出来的愤怒。看起来不成体统的你带给我太多热烈的生活。就像你特意希望与我一起提前过生日，即使我拍照那么丑还是会好好配合我一次次摆动作。庆幸你没有只停留在我的高中，庆幸你还是那么大方勇敢地走来。\n\n以后太远了，但是我们已经留下一段不短的时光。也由衷地祝福你以后一路平坦、顺心，少点疲惫、少点束缚。生日快乐，开心的一天就大笑，难过时就大哭。",
    },
    music: {
        // .kgg 为酷狗私有格式，浏览器无法播放；按顺序尝试，命中任一可播放格式即用
        src: ['data/music.kgg', 'data/music.mp3', 'data/music.ogg', 'data/music.m4a'],
        volume: 0.6,
    },
    sfx: {
        matchVolume: 0.45,     // 火柴燃烧声音量（0~1，越小越轻）
        rustleVolume: 0.4,     // 花朵沙沙声音量
        birthdayVolume: 0.35,  // 生日快乐歌音量
        birthdayPasses: 1,     // 生日快乐歌播放遍数（默认只唱一遍约12秒；点开信封会提前停止）
        birthdayBeat: 0.5,     // 每拍秒数（0.5=正常速度，调小更快更短，调大更慢更长）
    },
};
const YEARS = [2006, 2010, 2014, 2018, 2022, 2026];
const CLOCK_RADIUS = 300;
const TICK_INTERVAL = 800;
const CONVERGE_DURATION = 2.2;       // 汇聚成光点时长（秒）
const FIREFLY_WANDER_FRAMES = 300;   // 萤火虫随机游走帧数（约5秒后升空）
// ================================================================
//  ██  全局变量  ██
// ================================================================
let bgImg, bgImg2;
let sceneImgs = {};   // 蛋糕场景素材（data/cake、candle、fire、note、match，png/jpg 均可）
let starImgs = [], watchHand, stars = [];
let currentStep = 0, isTicking = false, tickTimer = 0;
let floatPhases = [];
let clockAlpha = 255;
let crackSegments = [], crackProgress = 0;
let flowerImgs = [], flowers = [];
let photoImgs = [];
let state = 0;
let photoItems = [];
let photoPetals = [];
let zoomedIndex = -1;
let zoomProgress = 0, targetZoomProgress = 0;
let showCakeButton = true;
let cakeTransitionActive = false;
let cakeTransitionProgress = 0;
let cakeAppearProgress = 0;
let showBlessing = false;
let blessingAlpha = 0;
let transitionActive = false;
let transitionProgress = 0;
let transitionDelayStarted = false;
let transStartTime = 0;
let transitionDelayTimer = 0;
let rockets = [], fireworks = [];
let fireworkTriggered = false;
let lastFireworkSpawn = 0;
let fireworkStartTime = 0;
let envelope = null;
let letterOpen = false;
let paperBall = null;
let showResetButton = false;
let resetButton = { x: 0, y: 0, w: 330, h: 78 };
// ---- 蛋糕状态变量 ----
let cakeState = 'idle';
let matchPos = { x: 0, y: 0 };
let matchTarget = { x: 0, y: 0 };
let matchAnimating = false;
let matchProgress = 0;
let candleFlameSize = 0;
let burnStartTime = 0;
let wishTextAlpha = 0;
let envelopeDropped = false;
let envelopeDropDelay = 0;
// ---- 手写字体 ----
let myFont;
// ---- 点彩退场 ----
let pointillismActive = false;
let pointillismFrameCount = 0;
const POINTILLISM_MAX_FRAMES = 300;  // 5秒
let resetBtnFadeIn = 0;
// ---- 萤火虫（拖尾版） ----
let fireflyActive = false;
let firefly = {
    x: 0, y: 0,
    targetX: 0, targetY: 0,
    speed: 2.5,
    trail: [],
};
let fireflyDone = false;
let fireflyTimer = 0;
let fireflyRiseStarted = false;
// 用于拖尾的半透明背景层
let fireflyLayer;
// ---- 信纸收回与退场汇聚 ----
let letterCloseRequested = false;
let exitPhase = 'none';   // 'converge' | 'firefly' | 'pointillism'
let convergeProgress = 0;
let convergeTarget = null;
// ---- 萤火虫避让点击位置 ----
let fireflyAvoidPoints = [];
// ---- 背景音乐 ----
let bgMusic = null;
let bgVolTween = null;   // 背景音乐音量渐变 { from, to, t0, dur }
let musicSrcIdx = 0;      // 当前尝试的音乐候选下标
// ---- 音效 ----
let sfxCtx = null;
let flowerRustlePlayed = false;
let birthdaySfx = null;   // 当前生日快乐歌状态 { master, endTime }，用于停止与恢复背景音乐
// ================================================================
//  ██  火箭与烟花类 ██
// ================================================================
class Rocket {
    constructor(x, targetY) {
        this.x = x;
        this.y = height;
        this.targetY = targetY;
        this.speed = CFG.firework.rocketSpeed + random(-0.8, 0.8);
        const hueType = random();
        let r, g, b;
        if (hueType < 0.25) { r = random(220,255); g = random(150,210); b = random(180,235); }
        else if (hueType < 0.5) { r = random(190,240); g = random(140,200); b = random(220,255); }
        else if (hueType < 0.75) { r = random(150,220); g = random(210,255); b = random(230,255); }
        else { r = random(240,255); g = random(190,245); b = random(130,200); }
        this.baseR = r; this.baseG = g; this.baseB = b;
        this.alive = true;
        this.trail = [];
    }
    update() {
        if (!this.alive) return;
        this.y -= this.speed;
        this.trail.push({x:this.x, y:this.y});
        if (this.trail.length > 12) this.trail.shift();
        if (this.y <= this.targetY) {
            this.alive = false;
            const burst = new FireworkBurst(this.x, this.y, this.baseR, this.baseG, this.baseB);
            fireworks.push(burst);
            for (let i=0; i<2; i++) {
                const sub = new FireworkBurst(
                    this.x + random(-30,30), this.y + random(-20,20),
                    this.baseR + random(-30,30), this.baseG + random(-30,30), this.baseB + random(-30,30)
                );
                fireworks.push(sub);
            }
            while (fireworks.length > CFG.firework.maxBursts + 5) fireworks.shift();
        }
        if (this.y < -50) this.alive = false;
    }
    draw() {
        if (!this.alive) return;
        push();
        translate(this.x, this.y);
        noStroke();
        const glow = 20;
        const grad = drawingContext.createRadialGradient(0,0,0,0,0,glow);
        grad.addColorStop(0, `rgba(${this.baseR},${this.baseG},${this.baseB},200)`);
        grad.addColorStop(1, `rgba(${this.baseR},${this.baseG},${this.baseB},0)`);
        drawingContext.fillStyle = grad;
        drawingContext.beginPath();
        drawingContext.arc(0,0,glow,0,TWO_PI);
        drawingContext.fill();
        fill(this.baseR, this.baseG, this.baseB, 255);
        ellipse(0,0,6,6);
        fill(255,255,255,180);
        ellipse(0,-2,3,3);
        pop();
        for (let i=0; i<this.trail.length-1; i++) {
            const t = this.trail[i];
            const frac = i / this.trail.length;
            const alpha = frac * 180;
            const sz = 2 + frac * 4;
            noStroke();
            fill(this.baseR, this.baseG, this.baseB, alpha);
            ellipse(t.x, t.y, sz, sz);
        }
    }
    isDead() { return !this.alive; }
}
class FireworkParticle {
    constructor(x, y, baseR, baseG, baseB) {
        this.x = x; this.y = y;
        const angle = random(TWO_PI);
        const speed = random(CFG.firework.speedMin, CFG.firework.speedMax);
        this.vx = cos(angle) * speed;
        this.vy = sin(angle) * speed;
        this.r = constrain(baseR + random(-25,25), 180, 255);
        this.g = constrain(baseG + random(-25,25), 180, 255);
        this.b = constrain(baseB + random(-25,25), 180, 255);
        this.size = random(CFG.firework.particleMinSize, CFG.firework.particleMaxSize);
        this.life = 1.0;
        this.decay = random(CFG.firework.lifeDecayMin, CFG.firework.lifeDecayMax);
        this.trail = [];
        this.maxTrail = 5;
        this.twinkle = random(TWO_PI);
        this.twinkleSpeed = random(0.05, 0.15);
    }
    update() {
        this.vx *= 0.99;
        this.vy *= 0.99;
        this.vy += CFG.firework.gravity;
        this.x += this.vx; this.y += this.vy;
        this.life -= this.decay;
        this.size *= 0.998;
        this.trail.push({x:this.x, y:this.y});
        if (this.trail.length > this.maxTrail) this.trail.shift();
        this.twinkle += this.twinkleSpeed;
        if (this.y > height+50) this.life = 0;
        if (this.x < -50 || this.x > width+50) this.life = 0;
    }
    draw() {
        if (this.life <= 0) return;
        const alpha = this.life * 240;
        const flicker = 0.85 + 0.15 * sin(this.twinkle);
        const sz = this.size * (0.6 + 0.4 * this.life) * flicker;
        for (let i=0; i<this.trail.length-1; i++) {
            const t = this.trail[i];
            const frac = i / this.trail.length;
            const ta = frac * alpha * 0.5 * this.life;
            const ts = sz * frac * 0.5;
            noStroke();
            fill(this.r, this.g, this.b, ta);
            ellipse(t.x, t.y, ts, ts);
        }
        noStroke();
        const glowSize = sz * 4.0;
        const grad = drawingContext.createRadialGradient(this.x,this.y,0,this.x,this.y,glowSize);
        grad.addColorStop(0, `rgba(${this.r},${this.g},${this.b},${alpha * 0.25 / 255})`);
        grad.addColorStop(1, `rgba(${this.r},${this.g},${this.b},0)`);
        drawingContext.fillStyle = grad;
        drawingContext.beginPath();
        drawingContext.arc(this.x, this.y, glowSize, 0, TWO_PI);
        drawingContext.fill();
        fill(this.r, this.g, this.b, alpha);
        ellipse(this.x, this.y, sz, sz);
        fill(255,255,255, alpha * 0.4);
        ellipse(this.x - sz*0.25, this.y - sz*0.25, sz*0.4, sz*0.4);
    }
    isDead() { return this.life <= 0; }
}
class FireworkBurst {
    constructor(x, y, baseR, baseG, baseB) {
        this.x = x; this.y = y;
        this.baseR = baseR; this.baseG = baseG; this.baseB = baseB;
        this.particles = [];
        this.alive = true;
        const count = CFG.firework.particlesPerBurst + floor(random(-10,20));
        for (let i=0; i<count; i++) {
            this.particles.push(new FireworkParticle(this.x, this.y, this.baseR, this.baseG, this.baseB));
        }
        for (let i=0; i<count*0.2; i++) {
            const idx = floor(random(this.particles.length));
            const p = this.particles[idx];
            p.r = constrain(p.r + random(-50,50), 150, 255);
            p.g = constrain(p.g + random(-50,50), 150, 255);
            p.b = constrain(p.b + random(-50,50), 150, 255);
        }
    }
    update() {
        let allDead = true;
        for (const p of this.particles) { p.update(); if (!p.isDead()) allDead = false; }
        if (allDead) this.alive = false;
    }
    draw() { for (const p of this.particles) p.draw(); }
    isDead() { return !this.alive; }
}
function spawnRocket() {
    const x = random(60, width - 60);
    const hMin = CFG.firework.rocketHeightMin * height;
    const hMax = CFG.firework.rocketHeightMax * height;
    const targetY = random(hMin, hMax);
    const rocket = new Rocket(x, targetY);
    rockets.push(rocket);
    while (rockets.length > 15) rockets.shift();
}
function updateFireworks() {
    for (let i=rockets.length-1; i>=0; i--) { rockets[i].update(); if (rockets[i].isDead()) rockets.splice(i,1); }
    for (let i=fireworks.length-1; i>=0; i--) { fireworks[i].update(); if (fireworks[i].isDead()) fireworks.splice(i,1); }
    if (fireworkTriggered) {
        const now = millis();
        if (now - lastFireworkSpawn > CFG.firework.spawnInterval) {
            const totalActive = rockets.length + fireworks.length;
            if (totalActive < CFG.firework.maxBursts * 1.2) {
                spawnRocket();
                if (totalActive < CFG.firework.maxBursts * 0.5) spawnRocket();
            }
            lastFireworkSpawn = now;
        }
    }
}
function drawFireworks() {
    for (const r of rockets) r.draw();
    for (const b of fireworks) b.draw();
}
function triggerFireworks() {
    if (!fireworkTriggered) {
        fireworkTriggered = true;
        fireworkStartTime = millis();
        lastFireworkSpawn = millis();
        const count = floor(random(3,6));
        for (let i=0; i<count; i++) spawnRocket();
    }
}
// ================================================================
//  ██  信封类 ██
// ================================================================
class Envelope {
    constructor() {
        this.x = width / 2;
        this.y = -CFG.letter.envelopeHeight;
        this.targetY = height / 2;
        this.w = CFG.letter.envelopeHeight;
        this.h = CFG.letter.envelopeHeight * 0.7;
        this.speed = 2.5;
        this.phase = 0;
        this.state = 'falling';
        this.openProgress = 0;
        this.letterProgress = 0;
        this.letterContent = CFG.letter.preview;
        this.bodyColor = [245, 235, 215];
        this.flapColor = [210, 180, 140];
    }
    update() {
        if (this.state === 'falling') {
            this.y += this.speed;
            this.phase += 0.02;
            if (this.y >= this.targetY) {
                this.y = this.targetY;
                this.state = 'idle';
            }
        } else if (this.state === 'idle') {
            this.y = this.targetY + sin(frameCount * 0.02) * 2;
        } else if (this.state === 'opening') {
            this.openProgress += 0.025;
            if (this.openProgress >= 1) { this.openProgress = 1; this.state = 'open'; this.letterProgress = 0; }
        } else if (this.state === 'open') {
            if (this.letterProgress < 1) { this.letterProgress += 0.015; if (this.letterProgress > 1) this.letterProgress = 1; }
        } else if (this.state === 'closing') {
            this.openProgress -= 0.03;
            this.letterProgress -= 0.03;
            if (this.openProgress <= 0) { this.openProgress = 0; this.letterProgress = 0; this.state = 'idle'; }
        }
    }
    draw() {
        if (this.isFullyOpen()) return;
        push();
        translate(this.x, this.y);
        noStroke();
        fill(0,0,0,40);
        ellipse(0, this.h*0.1, this.w*0.9, this.h*0.15);
        let envW = this.w, envH = this.h;
        let openFactor = this.openProgress;
        let flapH = envH * 0.35;
        let bodyH = envH - flapH;
        fill(this.bodyColor[0], this.bodyColor[1], this.bodyColor[2]);
        rectMode(CENTER);
        noStroke();
        rect(0, bodyH/2 - flapH*0.1, envW, bodyH, 6);
        push();
        translate(0, -flapH*0.2);
        let flapAngle = -PI * 0.2 * (1 - openFactor);
        rotate(flapAngle);
        fill(this.flapColor[0], this.flapColor[1], this.flapColor[2]);
        triangle(-envW/2, 0, envW/2, 0, 0, -flapH);
        stroke(180,150,110,100);
        strokeWeight(1.5);
        line(-envW*0.3, -flapH*0.3, envW*0.3, -flapH*0.3);
        noStroke();
        pop();
        if (openFactor > 0.3) {
            let alpha = (openFactor-0.3)/0.7 * 200;
            fill(220,200,170,alpha);
            rect(0, -flapH*0.1, envW*0.6, flapH*0.3, 4);
        }
        if (this.state === 'open' || this.state === 'opening') {
            let paperProgress = this.letterProgress;
            if (paperProgress > 0) {
                let paperH = envH * 1.2 * paperProgress;
                let paperY = -flapH*0.1 - paperH/2 + envH*0.1;
                let paperW = envW * 0.85 * (0.9 + 0.1*paperProgress);
                fill(0,0,0,30);
                rect(2, paperY+4, paperW, paperH, 4);
                fill(250,245,235);
                rect(0, paperY, paperW, paperH, 4);
                stroke(200,190,170,80);
                strokeWeight(1);
                for (let i=0; i<3; i++) {
                    let yPos = -paperH/2 + paperH*(0.2 + i*0.25);
                    line(-paperW*0.4, yPos, paperW*0.4, yPos);
                }
                noStroke();
                if (paperProgress > 0.3) {
                    let textAlpha = (paperProgress-0.3)/0.7 * 255;
                    fill(50,40,30,textAlpha);
                    textAlign(CENTER, CENTER);
                    textSize(16);
                    textLeading(28);
                    let lines = this.letterContent.split('\n');
                    let lineHeight = 28;
                    let totalH = lines.length * lineHeight;
                    let startY = -totalH/2 + lineHeight/2;
                    for (let i=0; i<lines.length; i++) {
                        let line = lines[i];
                        if (line.startsWith('——')) {
                            textAlign(RIGHT, CENTER);
                            text(line, paperW*0.4, startY + i*lineHeight);
                        } else {
                            textAlign(CENTER, CENTER);
                            text(line, 0, startY + i*lineHeight);
                        }
                    }
                }
            }
        }
        if (this.state === 'idle' || this.state === 'falling') {
            noFill();
            stroke(180,160,130,120);
            strokeWeight(1.2);
            rect(0,0,envW,envH,6);
            stroke(200,80,80,180);
            strokeWeight(2);
            line(-envW*0.3, -envH*0.1, envW*0.3, -envH*0.1);
            line(-envW*0.15, -envH*0.1, -envW*0.15, envH*0.1);
            line(envW*0.15, -envH*0.1, envW*0.15, envH*0.1);
        }
        pop();
        if (this.state === 'idle' && !letterOpen) {
            let alpha = 150 + 100 * sin(frameCount * 0.04);
            fill(255,255,200,alpha);
            textAlign(CENTER, TOP);
            textSize(14);
            text('✨ 点我打开 ✨', this.x, this.y + this.h/2 + 15);
        }
    }
    contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        return d < this.w * 0.9;
    }
    open() {
        if (this.state === 'idle' && !letterOpen) {
            this.state = 'opening';
            this.openProgress = 0;
            letterOpen = true;
            stopBirthdaySong(); // 点开信封时停止生日快乐歌，恢复背景音乐
        }
    }
    close() {
        if (this.state === 'open' && this.letterProgress > 0.9) {
            this.state = 'closing';
        }
    }
    isFullyOpen() {
        return this.state === 'open' && this.letterProgress >= 1;
    }
}
// ================================================================
//  ██  纸团类 ██
// ================================================================
class PaperBall {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.size = 60;
        this.rotation = 0;
        this.rotSpeed = 0.3;
        this.vx = 6;
        this.vy = -8;
        this.gravity = 0.25;
        this.alive = true;
        this.scale = 1.0;
        this.shrinkTimer = 0;
        this.shrinkDuration = 20;
    }
    update() {
        if (!this.alive) return;
        if (this.shrinkTimer < this.shrinkDuration) {
            this.shrinkTimer++;
            this.rotSpeed *= 1.05;
            this.scale = 1 - 0.6 * (this.shrinkTimer / this.shrinkDuration);
            this.size *= 0.98;
        } else {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += this.gravity;
            this.rotation += this.rotSpeed;
            this.size *= 0.99;
            this.scale = 0.4;
        }
        if (this.x > width + 100 || this.y > height + 100 || this.size < 1) {
            this.alive = false;
            showResetButton = true;
        }
    }
    draw() {
        if (!this.alive) return;
        push();
        translate(this.x, this.y);
        rotate(this.rotation);
        scale(this.scale);
        noStroke();
        fill(200, 190, 180);
        ellipse(0, 0, this.size, this.size);
        stroke(150, 140, 130, 150);
        strokeWeight(1.5);
        noFill();
        for (let i=0; i<4; i++) {
            let angle = i * PI/2 + this.rotation * 0.5;
            let r = this.size * 0.3;
            arc(0, 0, r*2, r*2, angle, angle + PI/2);
        }
        pop();
    }
}
// ================================================================
//  ██  preload, setup  ██
// 照片按需加载：文件存在才请求，避免照片未就位时 404 报错刷屏
async function loadPhotoIfExists(f) {
    const base = 'data/' + f;
    for (const ext of ['png', 'jpg']) {
        const url = base + '.' + ext;
        try {
            const resp = await fetch(url, { method: 'HEAD' });
            if (resp && resp.ok) return loadImage(url);
        } catch (e) {
            // 服务器不支持 HEAD 时直接尝试加载
            return loadImage(url);
        }
    }
    return null;
}
// ================================================================
function preload() {
    bgImg = loadImage('data/background.png');
    bgImg2 = loadImage('data/background2.png');
    for (let i=0; i<3; i++) starImgs[i] = loadImage('data/star'+(i+1)+'.png');
    watchHand = loadImage('data/watch.png');
    for (let i=1; i<=4; i++) flowerImgs.push(loadImage('data/flower'+i+'.png'));
    for (const f of CFG.photoWall.photoFiles) {
        photoImgs.push(loadPhotoIfExists(f));
    }
    // 蛋糕场景素材（cake/candle/fire/note/match，存在才加载，加载完成自动生效）
    for (const nm of ['cake', 'candle', 'fire', 'note', 'match']) {
        loadPhotoIfExists(nm).then(function (img) {
            if (img) sceneImgs[nm] = img;
        });
    }
    myFont = loadFont('data/ShouShuTi-2.ttf');
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(RGB, 255, 255, 255);
    initStars();
    generateCracks();
    generateFlowers();
    generatePhotoItems();
    for (let i=0; i<CFG.photoWall.petalCount; i++) photoPetals.push(createPhotoPetal());
    textFont(myFont);
    textStyle(BOLD);
    textSize(14);
    resetGlobals();
    // 创建用于拖尾的离屏缓冲区（大小同画布）
    fireflyLayer = createGraphics(width, height);
    fireflyLayer.background(0, 0, 0, 0);
}
function initStars() {
    stars = [];
    for (let i=0; i<120; i++) {
        let sizeR = random(1);
        let size = sizeR<0.6 ? random(2,7) : (sizeR<0.9 ? random(8,16) : random(18,28));
        let hue = random(360);
        stars.push({
            x: random(width), y: random(height),
            baseSize: size, type: floor(random(3)), hue: hue,
            vx: random(-0.08,0.08), vy: random(-0.08,0.08),
            speed: random(0.015,0.035), phase: random(TWO_PI), alphaPhase: random(TWO_PI)
        });
    }
}
function resetGlobals() {
    state = 0;
    currentStep = 0;
    isTicking = false;
    tickTimer = 0;
    clockAlpha = 255;
    crackProgress = 0;
    for (let f of flowers) { f.growth = 0; f.alive = false; }
    transitionActive = false;
    transitionProgress = 0;
    transitionDelayStarted = false;
    cakeTransitionActive = false;
    cakeTransitionProgress = 0;
    cakeAppearProgress = 0;
    showBlessing = false;
    blessingAlpha = 0;
    fireworkTriggered = false;
    fireworks = [];
    rockets = [];
    envelope = null;
    letterOpen = false;
    paperBall = null;
    showResetButton = false;
    zoomedIndex = -1;
    zoomProgress = 0;
    targetZoomProgress = 0;
    generatePhotoItems();
    floatPhases = [];
    for (let i=0; i<YEARS.length; i++) floatPhases.push(random(TWO_PI));
    cakeState = 'idle';
    matchAnimating = false;
    matchProgress = 0;
    candleFlameSize = 0;
    burnStartTime = 0;
    wishTextAlpha = 0;
    envelopeDropped = false;
    envelopeDropDelay = 0;
    pointillismActive = false;
    pointillismFrameCount = 0;
    resetBtnFadeIn = 0;
    fireflyActive = false;
    fireflyDone = false;
    fireflyTimer = 0;
    fireflyRiseStarted = false;
    firefly.trail = [];
    fireflyAvoidPoints = [];
    letterCloseRequested = false;
    exitPhase = 'none';
    convergeProgress = 0;
    convergeTarget = null;
    // 清空拖尾层
    if (fireflyLayer) {
        fireflyLayer.background(0, 0, 0, 0);
    }
}
// ================================================================
//  ██  核心函数  ██
// ================================================================
function generateCracks() {
    crackSegments = [];
    let cx = width/2, cy = height/2;
    let maxDist = dist(0,0,width,height)*0.6;
    let baseLength = maxDist*0.7;
    let mainBranches = floor(random(12,16));
    for (let i=0; i<mainBranches; i++) {
        let angle = (i/mainBranches)*TWO_PI + random(-0.2,0.2);
        let length = baseLength * random(0.9,1.2);
        growBranch(cx,cy,angle,length,0,CFG.crack.maxDepth);
    }
}
function growBranch(x,y,angle,length,depth,maxDepth) {
    if (depth>maxDepth || length<15) return;
    let segments = max(floor(length/CFG.crack.segmentLength),2);
    let segLen = length/segments;
    let cx=x, cy=y, ca=angle;
    for (let i=0; i<segments; i++) {
        ca += random(-0.15,0.15);
        let ex = cx + segLen*cos(ca);
        let ey = cy + segLen*sin(ca);
        crackSegments.push({x1:cx, y1:cy, x2:ex, y2:ey});
        cx=ex; cy=ey;
    }
    let children = floor(random(2,4));
    for (let c=0; c<children; c++) {
        let na = ca + random(-0.8,0.8);
        let nl = length * random(0.4,0.75);
        growBranch(cx,cy,na,nl,depth+1,maxDepth);
    }
}
function generateFlowers() {
    flowers = [];
    const availableIndices = [0, 2, 3];
    const target = CFG.flower.maxFlowers;
    for (let i = 0; i < target; i++) {
        let x = random(width);
        let y = random(height);
        let imgIdx = random(availableIndices);
        let size = random(CFG.flower.minSize, CFG.flower.maxSize);
        let color = random(CFG.flower.colorPalette);
        let r = color[0], g = color[1], b = color[2];
        let growSpeed = random(CFG.flower.growSpeedMin, CFG.flower.growSpeedMax);
        let distToCenter = dist(x, y, width/2, height/2);
        let maxDist = dist(0, 0, width/2, height/2);
        let delay = map(distToCenter, 0, maxDist, 0.1, 1.2);
        flowers.push({x, y, imgIdx, size, r, g, b, growSpeed, delay, growth: 0, alive: false});
    }
}
function updateFlowers(progress) {
    for (let f of flowers) {
        if (progress < f.delay) { f.alive=false; f.growth=0; continue; }
        f.alive = true;
        f.growth += f.growSpeed * (1 + progress*0.5);
        if (f.growth > 1) f.growth = 1;
    }
}
function drawFlowers(alpha) {
    if (alpha < 1) return;
    for (let f of flowers) {
        if (!f.alive || f.growth<=0) continue;
        let scale = 1 - pow(1 - f.growth, 3);
        let sz = f.size * scale;
        if (sz < 1) continue;
        push();
        translate(f.x, f.y);
        imageMode(CENTER);
        tint(f.r, f.g, f.b, alpha);
        image(flowerImgs[f.imgIdx], 0, 0, sz, sz);
        pop();
    }
}
function drawCracks(progress, alpha) {
    if (alpha < 1) return;
    let maxR = dist(0,0,width,height)*0.6;
    let curR = maxR * progress;
    stroke(CFG.crack.color[0], CFG.crack.color[1], CFG.crack.color[2], alpha);
    strokeWeight(CFG.crack.lineWidth);
    noFill();
    for (let seg of crackSegments) {
        let mx = (seg.x1+seg.x2)/2, my = (seg.y1+seg.y2)/2;
        if (dist(mx,my,width/2,height/2) <= curR) {
            line(seg.x1, seg.y1, seg.x2, seg.y2);
        }
    }
}
function drawStars() {
    for (let star of stars) {
        star.x += star.vx; star.y += star.vy;
        if (star.x < -100) star.x = width+100;
        if (star.x > width+100) star.x = -100;
        if (star.y < -100) star.y = height+100;
        if (star.y > height+100) star.y = -100;
        let breathe = 0.8 + 0.2*sin(frameCount*star.speed + star.phase);
        let sz = star.baseSize * breathe;
        let alpha = 180 + 75*sin(frameCount*star.speed*0.5 + star.alphaPhase);
        let r = 220 + 35*sin(star.hue);
        let g = 200 + 50*cos(star.hue*0.5);
        let b = 180 + 70*sin(star.hue*0.7);
        r = constrain(r, 100, 255);
        g = constrain(g, 100, 255);
        b = constrain(b, 100, 255);
        push();
        translate(star.x, star.y);
        imageMode(CENTER);
        tint(r, g, b, alpha);
        image(starImgs[star.type], 0, 0, sz, sz);
        pop();
    }
}
function drawClock() {
    if (clockAlpha < 1) return;
    push();
    translate(width/2, height/2);
    let a = clockAlpha / 255;
    for (let i=0; i<YEARS.length; i++) {
        let angle = -PI/2 + i*(TWO_PI/6);
        let offset = 8*sin(frameCount*0.02 + floatPhases[i]);
        let r = CLOCK_RADIUS + offset;
        let x = r*cos(angle), y = r*sin(angle);
        let isActive = (i==currentStep);
        let fs = isActive ? 38*(0.8+0.2*sin(frameCount*0.05)) : 28;
        let grad = drawingContext.createLinearGradient(x-20, y-20, x+20, y+20);
        if (isActive) {
            grad.addColorStop(0, '#FFD700');
            grad.addColorStop(1, '#FFFFFF');
        } else {
            grad.addColorStop(0, '#B0B0B0');
            grad.addColorStop(1, '#F0F0F0');
        }
        drawingContext.fillStyle = grad;
        drawingContext.textAlign = 'center';
        drawingContext.textBaseline = 'middle';
        drawingContext.font = `bold ${fs}px "${myFont.font}", serif`;
        drawingContext.fillText(YEARS[i], x, y);
    }
    let angleOffset = 1.6;
    let pointerAngle = -PI/2 + currentStep*(TWO_PI/6) + angleOffset;
    push();
    rotate(pointerAngle);
    let targetLen = 250;
    let sc = targetLen / watchHand.height;
    let dw = watchHand.width*sc, dh = watchHand.height*sc;
    tint(100, 150, 220, 200*a);
    imageMode(CENTER);
    image(watchHand, 0, -dh/2, dw, dh);
    noTint();
    pop();
    noStroke();
    pop();
}
function drawBackground(progress) {
    let alpha2 = progress;
    let alpha1 = 1 - progress;
    let pg = createGraphics(width, height);
    pg.background(0, 0, 0, 0);
    if (bgImg2) {
        pg.tint(255, 255, 255, alpha2 * 255);
        pg.image(bgImg2, 0, 0, width, height);
        pg.noTint();
    }
    if (bgImg) {
        pg.tint(255, 255, 255, alpha1 * 255);
        pg.image(bgImg, 0, 0, width, height);
        pg.noTint();
    }
    image(pg, 0, 0);
    pg.remove();
}
function generatePhotoItems() {
    photoItems = [];
    let total = CFG.photoWall.photoFiles.length;
    let size = CFG.photoWall.photoSize;
    let margin = 60;
    let attempts = 0;
    let placed = 0;
    while (placed < total && attempts < 1000) {
        attempts++;
        let x = random(margin, width - margin);
        let y = random(margin, height - margin);
        let overlap = false;
        for (let p of photoItems) {
            let d = dist(x, y, p.x, p.y);
            if (d < size + 20) { overlap = true; break; }
        }
        if (!overlap) {
            let hue = random(330, 360);
            let sat = random(40, 70);
            let bright = random(70, 95);
            let rot = random(-CFG.photoWall.rotateRange, CFG.photoWall.rotateRange);
            let phase = random(TWO_PI);
            let desc = '';
            photoItems.push({
                x, y, size, rot, phase,
                hue, sat, bright,
                desc,
                note: (CFG.photoWall.photoTexts[placed] || ''),
                photo: null,
                origX: x, origY: y,
                origRot: rot,
            });
            // 照片异步加载完成后写回对应位置（_idx 固定索引，避免闭包捕获可变的 placed）
            const _idx = placed;
            const _slot = photoImgs[_idx];
            if (_slot && _slot.then) {
                _slot.then(img => { if (photoItems[_idx]) photoItems[_idx].photo = img; });
            }
            placed++;
        }
    }
}
function createPhotoPetal() {
    return {
        x: random(width),
        y: random(-50, height),
        size: random(8, 18),
        speed: random(0.6, 1.8),
        angle: random(TWO_PI),
        rotSpeed: random(-0.02, 0.02),
        hue: random(330, 360),
        sat: random(40, 70),
        bright: random(70, 100),
        alpha: random(150, 220),
    };
}
function updatePhotoPetals() {
    for (let p of photoPetals) {
        p.y += p.speed;
        p.x += sin(p.angle) * 0.6;
        p.angle += p.rotSpeed;
        if (p.y > height + 30) {
            p.x = random(width);
            p.y = random(-30, -10);
            p.size = random(8, 18);
            p.speed = random(0.6, 1.8);
        }
    }
}
function drawPhotoPetals() {
    noStroke();
    for (let p of photoPetals) {
        push();
        translate(p.x, p.y);
        rotate(p.angle);
        fill(p.hue, p.sat, p.bright, p.alpha);
        ellipse(0, 0, p.size, p.size * 0.6);
        pop();
    }
}
function drawPhotoContent(x, y, size, hue, sat, bright, index, alpha) {
    let half = size / 2;
    push();
    translate(x, y);
    // 阴影
    noStroke();
    fill(0, 0, 0, 40 * alpha / 255);
    rectMode(CENTER);
    rect(2, 3, size + 6, size + 6, 6);
    // 照片（cover 裁切为方形）或占位卡片
    let photo = null;
    if (index >= 0 && index < photoItems.length) photo = photoItems[index].photo;
    drawingContext.save();
    drawingContext.beginPath();
    drawingContext.rect(-half - 2, -half - 2, size + 4, size + 4);
    drawingContext.clip();
    if (photo && photo.width > 0) {
        let sc = max(size / photo.width, size / photo.height);
        let pw = photo.width * sc, ph = photo.height * sc;
        imageMode(CENTER);
        tint(255, 255, 255, alpha);
        image(photo, 0, 0, pw, ph);
        noTint();
    } else {
        fill(hue, sat, bright, alpha);
        rect(0, 0, size, size);
        stroke(255, 255, 255, 100 * alpha / 255);
        strokeWeight(1.5);
        line(-half * 0.3, -half * 0.3, half * 0.3, half * 0.3);
        line(half * 0.3, -half * 0.3, -half * 0.3, half * 0.3);
        noStroke();
    }
    drawingContext.restore();
    // 白色相框
    noFill();
    stroke(255, 255, 255, 200 * alpha / 255);
    strokeWeight(3);
    rect(0, 0, size, size, 4);
    stroke(255, 255, 255, 90 * alpha / 255);
    strokeWeight(6);
    rect(0, 0, size + 4, size + 4, 4);
    pop();
}
function drawPhotoWall(alpha, convergeProgress) {
    if (alpha < 1) return;
    let cx = width / 2,
        cy = height / 2;
    if (cakeTransitionActive) {
        cy = height - 60;
    }
    let enableFloat = convergeProgress > 0.1;
    for (let i = 0; i < photoItems.length; i++) {
        if (i === zoomedIndex) continue;
        let p = photoItems[i];
        let tx = lerp(p.origX, cx, convergeProgress);
        let ty = lerp(p.origY, cy, convergeProgress);
        let ts = lerp(p.size, 20, convergeProgress);
        let tr = lerp(p.origRot, 0, convergeProgress);
        let talpha = alpha;
        let floatY = 0;
        if (enableFloat) {
            let hover = dist(mouseX, mouseY, p.x, p.y) < p.size / 2;
            floatY = hover ? -6 * (1 - sin(frameCount * 0.05 + p.phase)) : 2 * sin(frameCount * 0.03 + p.phase);
            if (convergeProgress > 0.1) floatY *= (1 - convergeProgress);
        }
        push();
        translate(tx, ty + floatY);
        rotate(tr);
        drawPhotoContent(0, 0, ts, p.hue, p.sat, p.bright, i, talpha);
        pop();
        if (convergeProgress < 0.9) {
            noStroke();
            fill(0, 0, 0, 180 * (alpha / 255) * (1 - convergeProgress));
            textAlign(CENTER, TOP);
            textSize(12);
            text(p.desc, tx, ty + ts / 2 + 8 + floatY);
        }
    }
    if (zoomedIndex !== -1 && convergeProgress < 0.1) {
        let p = photoItems[zoomedIndex];
        zoomProgress += (targetZoomProgress - zoomProgress) * 0.1;
        let cx2 = lerp(p.x, width / 2, zoomProgress);
        let cy2 = lerp(p.y, height / 2, zoomProgress);
        let sz = lerp(p.size, min(width, height) * 0.65, zoomProgress);
        let rot = lerp(p.rot, 0, zoomProgress);
        fill(0, 0, 0, 120 * zoomProgress * (alpha / 255));
        rectMode(CORNER);
        rect(0, 0, width, height);
        push();
        translate(cx2, cy2);
        rotate(rot);
        drawPhotoContent(0, 0, sz, p.hue, p.sat, p.bright, zoomedIndex, alpha);
        pop();
        if (zoomProgress > 0.4) {
            let a = (zoomProgress - 0.4) * 4 * (alpha / 255);
            if (p.note) {
                // 说明文字显示在照片右侧（白色，自动换行；整块垂直居中，每行水平居中）
                let nw = width * 0.3;
                let nx = min(cx2 + sz / 2 + 40, width - nw - 30);
                let nl = wrapLetterToLines(p.note, nw);
                let blockH = nl.length * 30;
                let ny = cy2 - blockH / 2;
                fill(255, 255, 255, 230 * a);
                textAlign(CENTER, TOP);
                textSize(20);
                textLeading(30);
                for (let i = 0; i < nl.length; i++) {
                    text(nl[i], nx + nw / 2, ny + i * 30);
                }
            }
            fill(255, 255, 255, 100 * a);
            textAlign(CENTER, TOP);
            textSize(14);
            text('🔄 点击关闭', width / 2, cy2 + sz / 2 + 30);
        }
    }
}
function wrapLetterToLines(text, maxWidth) {
    const lines = [];
    const paragraphs = text.split('\n');
    for (const para of paragraphs) {
        if (para.length === 0) { lines.push(''); continue; }
        let line = '';
        for (const ch of para) {
            if (line.length > 0 && textWidth(line + ch) > maxWidth) {
                lines.push(line);
                line = ch;
            } else {
                line += ch;
            }
        }
        if (line.length > 0) lines.push(line);
    }
    return lines;
}
function drawBigLetter() {
    let w = width * 0.9;
    let h = height * 0.9;
    let x = (width - w) / 2;
    let y = (height - h) / 2;
    push();
    rectMode(CORNER);
    fill(0, 0, 0, 40);
    rect(x + 5, y + 5, w, h, 10);
    fill(250, 245, 235);
    rect(x, y, w, h, 10);
    stroke(200, 190, 170, 80);
    strokeWeight(1);
    for (let i = 0; i < 5; i++) {
        let yy = y + h * 0.1 + i * h * 0.18;
        line(x + w * 0.06, yy, x + w * 0.94, yy);
    }
    noStroke();
    fill(50, 40, 30);
    // 自动换行 + 字号自适应，保证整封信都能放下
    let ts = 20, lh = 30;
    let lines = [], totalH = 0;
    for (let tries = 0; tries < 12; tries++) {
        textSize(ts);
        lines = wrapLetterToLines(CFG.letter.text, w * 0.78);
        totalH = lines.length * lh;
        if (totalH <= h * 0.8 || ts <= 12) break;
        ts -= 1;
        lh -= 1.5;
    }
    textSize(ts);
    let startY = (height - totalH) / 2;
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line.startsWith('——')) {
            textAlign(RIGHT, CENTER);
            text(line, width / 2 + w * 0.38, startY + i * lh);
        } else if (line.length > 0) {
            textAlign(LEFT, CENTER);
            text(line, x + w * 0.09, startY + i * lh);
        }
    }
    pop();
    window._bigLetterBox = { x: x, y: y, w: w, h: h };
}
function handlePhotoWallClick() {
    if (zoomedIndex !== -1) {
        targetZoomProgress = 0;
        setTimeout(() => { if (targetZoomProgress === 0) zoomedIndex = -1; }, 400);
        return;
    }
    for (let i = photoItems.length-1; i >= 0; i--) {
        let p = photoItems[i];
        if (dist(mouseX, mouseY, p.x, p.y) < p.size/2) {
            zoomedIndex = i;
            targetZoomProgress = 1;
            zoomProgress = 0;
            break;
        }
    }
}
// 计算蛋糕场景各素材的位置与尺寸（绘制与点击共用同一套数值）
function computeCakeMetrics(progress) {
    let cx = width / 2, cy = height - 60;
    // size 现在代表"蛋糕宽度 = 屏幕高度 × CFG.cake.size"，随窗口缩放保持比例
    let size = CFG.cake.size * height * progress;
    let maxSize = width * 0.6;
    size = min(size, maxSize);
    let sc = CFG.cake.imageScale;
    let cakeImg = sceneImgs.cake;
    let candleImg = sceneImgs.candle;
    let fireImg = sceneImgs.fire;
    let noteImg = sceneImgs.note;
    let matchImg = sceneImgs.match;
    let cakeW = size * sc.cake;
    let cakeH = cakeImg ? cakeW * (cakeImg.height / cakeImg.width || 0.75) : cakeW * 0.75;
    let candleW = size * sc.candle;
    let candleH = candleImg ? candleW * (candleImg.height / candleImg.width || 1) : CFG.cake.candleHeight;
    // 有蛋糕图片时蜡烛坐在蛋糕顶面附近；无图片时回到原来的程序化位置
    let candleBaseY = cakeImg ? cy - cakeH * CFG.cake.candleBaseRatio : cy - size * 0.35 - 10;
    let noteW = size * sc.note;
    let noteH = noteImg ? noteW * (noteImg.height / noteImg.width || 0.42) : noteW * 0.42;
    let noteX = cx + size * 0.7;
    let noteY = cy - size * 0.6;
    let matchW = size * sc.match;
    let matchH = matchImg ? matchW * (matchImg.height / matchImg.width || 0.38) : matchW * 0.38;
    let matchX = noteX + noteW / 2 + 10;
    let matchY = noteY - noteH / 2 - 10;
    return { cx: cx, cy: cy, size: size, cakeW: cakeW, cakeH: cakeH,
             candleW: candleW, candleH: candleH, candleBaseY: candleBaseY,
             noteX: noteX, noteY: noteY, noteW: noteW, noteH: noteH,
             matchX: matchX, matchY: matchY, matchW: matchW, matchH: matchH };
}
function drawCake(progress, candleH, isLit, flameSize) {
    let m = computeCakeMetrics(progress);
    if (m.size < 1) return;
    let cx = m.cx, cy = m.cy;
    let cakeImg = sceneImgs.cake, candleImg = sceneImgs.candle, fireImg = sceneImgs.fire;
    let noteImg = sceneImgs.note, matchImg = sceneImgs.match;
    // —— 蛋糕本体：有图片用图片，没有则用程序化蛋糕兜底 ——
    if (cakeImg) {
        image(cakeImg, cx - m.cakeW / 2, cy - m.cakeH, m.cakeW, m.cakeH);
    } else {
        push();
        translate(cx, cy);
        noStroke();
        fill(230, 200, 170);
        ellipse(0, m.size*0.2, m.size*0.9, m.size*0.3);
        fill(240, 215, 185);
        ellipse(0, -m.size*0.1, m.size*0.75, m.size*0.25);
        fill(250, 225, 195);
        ellipse(0, -m.size*0.35, m.size*0.55, m.size*0.2);
        fill(255, 240, 220);
        for (let i = 0; i < 12; i++) {
            let angle = i * TWO_PI/12;
            let r = m.size*0.35;
            ellipse(r * cos(angle), -m.size*0.35 + r*0.3 * sin(angle), m.size*0.08, m.size*0.05);
        }
        for (let i = 0; i < 16; i++) {
            let angle = i * TWO_PI/16;
            let r = m.size*0.45;
            ellipse(r * cos(angle), m.size*0.2 + r*0.2 * sin(angle), m.size*0.06, m.size*0.04);
        }
        pop();
    }
    // —— 蜡烛：未点燃=candle，点燃=fire；燃烧时高度随 candleH 变矮（融化效果） ——
    if (candleH > 0) {
        let cImg = isLit ? fireImg : candleImg;
        let w = m.candleW * (isLit && cImg ? CFG.cake.imageScale.fire / CFG.cake.imageScale.candle : 1);
        let h = cImg ? w * (cImg.height / cImg.width || 1) : CFG.cake.candleHeight;
        if (isLit && CFG.cake.candleHeight > 0) h = h * (candleH / CFG.cake.candleHeight);
        if (cImg) {
            push();
            translate(cx, m.candleBaseY);
            if (isLit) rotate(sin(frameCount * 0.1 + flameSize) * 0.03); // 火焰轻微摇晃
            image(cImg, -w / 2, -h, w, h);
            pop();
        } else {
            // 兜底：程序化蜡烛 + 火焰
            push();
            translate(cx, m.candleBaseY);
            noStroke();
            fill(255, 200, 180);
            rectMode(CENTER);
            rect(0, -h / 2, 8, h, 3);
            fill(240, 180, 160);
            for (let i = 0; i < 3; i++) rect(0, -h * (0.2 + i * 0.2), 10, 2);
            if (isLit) {
                let flameH = 12 + 6 * sin(frameCount * 0.15 + flameSize);
                let flameW = flameH * 0.6;
                fill(255, 200, 50, 200);
                ellipse(0, -h - 10 - flameH * 0.2, flameW, flameH);
                fill(255, 150, 20, 220);
                ellipse(0, -h - 12 - flameH * 0.1, flameW * 0.5, flameH * 0.6);
                fill(255, 200, 100, 30);
                ellipse(0, -h - 10, flameW * 2, flameH * 2);
            }
            pop();
        }
    }
    // —— 便签：有图片用图片（可叠加 noteText 文字） ——
    if (noteImg) {
        push();
        translate(m.noteX, m.noteY);
        rotate(CFG.cake.noteRotate);
        image(noteImg, -m.noteW / 2, -m.noteH / 2, m.noteW, m.noteH);
        if (CFG.cake.noteText) {
            fill(50, 40, 30);
            textAlign(CENTER, CENTER);
            textSize(14);
            text(CFG.cake.noteText, 0, 0);
        }
        pop();
    } else {
        push();
        translate(m.noteX, m.noteY);
        rotate(CFG.cake.noteRotate);
        fill(255, 255, 220);
        rect(0, 0, m.noteW, m.noteH, 5);
        fill(50, 40, 30);
        textAlign(CENTER, CENTER);
        textSize(14);
        text("电子蛋糕或许也能许愿？", 0, 0);
        pop();
    }
    // —— 火柴：点击后飞向蜡烛 ——
    let matchX = m.matchX, matchY = m.matchY;
    if (matchAnimating) {
        let t = easeInOut(matchProgress);
        matchPos.x = lerp(matchX, matchTarget.x, t);
        matchPos.y = lerp(matchY, matchTarget.y, t);
    } else {
        matchPos.x = matchX;
        matchPos.y = matchY;
    }
    push();
    translate(matchPos.x, matchPos.y);
    rotate(-0.5);
    if (matchImg) {
        image(matchImg, -m.matchW / 2, -m.matchH / 2, m.matchW, m.matchH);
    } else {
        fill(180, 120, 60);
        rectMode(CENTER);
        rect(0, 0, 4, 18, 2);
        fill(200, 50, 50);
        ellipse(0, -9, 6, 6);
    }
    pop();
    if (cakeState === 'idle') {
        window._matchBox = { x: matchPos.x, y: matchPos.y, w: max(m.matchW, 44), h: max(m.matchH, 44) };
    }
}
function easeInOut(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - pow(-2 * t + 2, 3) / 2;
}
function nextStep() {
    if (currentStep < YEARS.length-1) {
        currentStep++;
        playTickSound();
        if (currentStep == YEARS.length-1) {
            isTicking = false;
            enterCrackPhase();
        }
    }
}
function enterCrackPhase() {
    state = 2;
    clockAlpha = 255;
    crackProgress = 0;
    flowerRustlePlayed = false;
    for (let f of flowers) { f.growth=0; f.alive=false; }
    transitionActive = false;
    transitionProgress = 0;
    transitionDelayStarted = false;
    transStartTime = 0;
}
function startTransitionToPhotoWall() {
    transitionActive = true;
    transStartTime = millis();
    transitionProgress = 0;
}
function playTickSound() {
    try {
        let ctx = new (window.AudioContext || window.webkitAudioContext)();
        let osc = ctx.createOscillator(), gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.frequency.value = 1200; osc.type = 'sine';
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+0.08);
        osc.start(ctx.currentTime); osc.stop(ctx.currentTime+0.08);
    } catch(e) {}
}
function beginExitFromLetter() {
    // 信纸已收回信封：信封/蛋糕/火柴/文字一起聚拢成光点，随后进入萤火虫退场
    state = 4;
    exitPhase = 'converge';
    convergeProgress = 0;
    convergeTarget = { x: width / 2, y: height - 60 };
    letterCloseRequested = false;
    fireworkTriggered = false; // 停止新烟花，聚焦聚拢退场
    fireflyRiseStarted = false;
}
function initMusic() {
    bgMusic = null;
    musicSrcIdx = 0;
    tryCreateMusic();
}
// 创建当前候选并立即尝试播放；该候选加载失败时自动切换下一个候选并继续播放
function tryCreateMusic() {
    if (musicSrcIdx >= CFG.music.src.length) { bgMusic = null; return; }
    try {
        const a = new Audio(CFG.music.src[musicSrcIdx]);
        a.loop = true;
        a.volume = 0;
        a.addEventListener('error', function () {
            musicSrcIdx++;
            tryCreateMusic();
        });
        a.load();
        bgMusic = a;
        fadeBgMusicTo(CFG.music.volume, 1.2);
        try { const p = a.play(); if (p && p.catch) p.catch(function () {}); } catch (e) {}
    } catch (e) {
        musicSrcIdx++;
        tryCreateMusic();
    }
}
function startMusic() {
    if (!bgMusic) { initMusic(); return; }
    try {
        if (bgMusic.paused) bgMusic.currentTime = 0;
        const p = bgMusic.play();
        if (p && p.catch) p.catch(function () {});
    } catch (e) {}
}
function restartMusic() {
    startMusic();
}
// ---- 音效（WebAudio 现场合成，无需额外音频文件） ----
function ensureSfxCtx() {
    if (!sfxCtx) {
        try { sfxCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { sfxCtx = null; }
    }
    if (sfxCtx && sfxCtx.state === 'suspended') {
        try { sfxCtx.resume(); } catch (e) {}
    }
    return sfxCtx;
}
// 火柴燃烧声：柔和低频噪声 + 轻微噼啪，约 1.8 秒（音量见 CFG.sfx.matchVolume）
function playMatchSizzle() {
    const ctx = ensureSfxCtx();
    if (!ctx) return;
    try {
        const dur = 1.8, sr = ctx.sampleRate;
        const buf = ctx.createBuffer(1, Math.floor(sr * dur), sr);
        const d = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++) {
            const t = i / sr;
            let v = Math.random() * 2 - 1;
            if (Math.random() < 0.0015) v *= 2.0;                // 轻微的噼啪
            v *= 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(t * 2 * Math.PI * (300 + 35 * Math.sin(t * 6))));
            const env = Math.min(1, t * 40) * Math.pow(1 - t / dur, 2);
            d[i] = v * env * 0.3;
        }
        const src = ctx.createBufferSource();
        src.buffer = buf;
        const bp = ctx.createBiquadFilter();
        bp.type = 'bandpass'; bp.frequency.value = 1500; bp.Q.value = 0.5;
        const g = ctx.createGain(); g.gain.value = CFG.sfx.matchVolume;
        src.connect(bp); bp.connect(g); g.connect(ctx.destination);
        src.start();
    } catch (e) {}
}
// 生日快乐歌：WebAudio 合成《祝你生日快乐》旋律，播两遍后自然结束（音量见 CFG.sfx.birthdayVolume）
function playBirthdaySong() {
    const ctx = ensureSfxCtx();
    if (!ctx) return;
    try {
        // 若上一段还在播，先停掉并恢复背景音乐
        stopBirthdaySong();
        const M = { 'G4': 392.00, 'A4': 440.00, 'B4': 493.88, 'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'F5': 698.46, 'G5': 783.99 };
        // [音名, 拍数]，3/4 拍
        const mel = [
            ['G4',1], ['G4',1], ['A4',1], ['G4',1], ['C5',1], ['B4',2],
            ['G4',1], ['G4',1], ['A4',1], ['G4',1], ['D5',1], ['C5',2],
            ['G4',1], ['G4',1], ['G5',1], ['E5',1], ['C5',1], ['B4',1], ['A4',2],
            ['F5',1], ['F5',1], ['E5',1], ['C5',1], ['D5',1], ['C5',2],
        ];
        const beat = CFG.sfx.birthdayBeat;
        const total = mel.reduce((s, n) => s + n[1] * beat, 0);
        // 主音量节点：统一控制整段生日歌的音量与停止
        const master = ctx.createGain();
        master.gain.value = CFG.sfx.birthdayVolume;
        master.connect(ctx.destination);
        for (let pass = 0; pass < CFG.sfx.birthdayPasses; pass++) {
            let t = ctx.currentTime + pass * total + 0.1;
            for (const [name, beats] of mel) {
                const dur = beats * beat;
                const osc = ctx.createOscillator();
                const g = ctx.createGain();
                osc.connect(g); g.connect(master);
                osc.type = 'sine';
                osc.frequency.value = M[name];
                g.gain.setValueAtTime(0.0001, t);
                g.gain.linearRampToValueAtTime(CFG.sfx.birthdayVolume, t + 0.03);
                g.gain.setValueAtTime(CFG.sfx.birthdayVolume, t + dur - 0.05);
                g.gain.linearRampToValueAtTime(0.0001, t + dur);
                osc.start(t);
                osc.stop(t + dur + 0.05);
                t += dur;
            }
        }
        birthdaySfx = { master: master, endTime: ctx.currentTime + 0.1 + total * CFG.sfx.birthdayPasses };
        // 生日歌播放期间背景音乐渐隐至静音（0.8 秒淡出）
        fadeBgMusicTo(0, 0.8);
    } catch (e) {}
}
// 停止生日快乐歌（快速淡出并断开），并恢复背景音乐音量
function stopBirthdaySong() {
    if (birthdaySfx && sfxCtx) {
        try {
            const g = birthdaySfx.master.gain;
            g.cancelScheduledValues(sfxCtx.currentTime);
            g.setValueAtTime(CFG.sfx.birthdayVolume, sfxCtx.currentTime);
            g.linearRampToValueAtTime(0.0001, sfxCtx.currentTime + 0.3);
        } catch (e) {}
        try { birthdaySfx.master.disconnect(); } catch (e) {}
    }
    restoreBgMusicVolume();
}
// 恢复背景音乐音量（1 秒渐入）
function restoreBgMusicVolume() {
    fadeBgMusicTo(CFG.music.volume, 1.0);
    birthdaySfx = null;
}
// 背景音乐音量渐变：从当前音量平滑过渡到 to（dur 单位秒）
function fadeBgMusicTo(to, dur) {
    if (!bgMusic) { bgVolTween = null; return; }
    if (dur <= 0) {
        try { bgMusic.volume = to; } catch (e) {}
        bgVolTween = null;
        return;
    }
    let from = CFG.music.volume;
    try { from = (bgMusic.volume == null) ? CFG.music.volume : bgMusic.volume; } catch (e) {}
    bgVolTween = { from: from, to: to, t0: millis(), dur: dur };
}
// 花朵生长沙沙声：轻柔噪声 + 慢速起伏，约 3.5 秒（音量见 CFG.sfx.rustleVolume）
function playFlowerRustle() {
    const ctx = ensureSfxCtx();
    if (!ctx) return;
    try {
        const dur = 3.5, sr = ctx.sampleRate;
        const buf = ctx.createBuffer(1, Math.floor(sr * dur), sr);
        const d = buf.getChannelData(0);
        let level = 0;
        for (let i = 0; i < d.length; i++) {
            const t = i / sr;
            if (Math.random() < 0.01) level = Math.random() * 2 - 1;   // 慢速起伏
            const fine = Math.random() * 2 - 1;
            const env = Math.min(1, t * 4) * Math.max(0, 1 - t / dur);
            d[i] = (level * 0.5 + fine * 0.5) * env * 0.2;
        }
        const src = ctx.createBufferSource();
        src.buffer = buf;
        const lp = ctx.createBiquadFilter();
        lp.type = 'lowpass'; lp.frequency.value = 1100; lp.Q.value = 0.3;
        const g = ctx.createGain(); g.gain.value = CFG.sfx.rustleVolume;
        src.connect(lp); lp.connect(g); g.connect(ctx.destination);
        src.start();
    } catch (e) {}
}
function drawUI() {
    noStroke();
    fill(255, 255, 255, 60);
    textSize(14);
    textAlign(LEFT, BOTTOM);
    if (state==0) {
        text('🕰️ 点击画面 · 启动钟表', 20, height-20);
    } else if (state==1) {
        if (!isTicking && currentStep==0) text('🕰️ 点击画面 · 指针开始跳动', 20, height-20);
        else if (isTicking) text('⏳ 跳动中 ... ' + YEARS[currentStep], 20, height-20);
        else if (currentStep==YEARS.length-1) text('🎉 2026年到了！', 20, height-20);
    } else if (state==2) {
        let alive = flowers.filter(f=>f.alive && f.growth>0.1).length;
        let msg = '🌿 裂缝 ' + floor(crackProgress*100) + '%  |  花朵: ' + alive + '/' + flowers.length;
        if (transitionActive) msg += '  ✨ 即将进入回忆墙...';
        text(msg, 20, height-20);
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    if (state==0 || state==1) {
        initStars();
    } else if (state==2) {
        generateCracks();
        flowers = [];
        generateFlowers();
        crackProgress = 0;
        clockAlpha = 255;
        transitionActive = false;
        transitionProgress = 0;
        transitionDelayStarted = false;
    } else if (state==3) {
        generatePhotoItems();
        zoomedIndex = -1;
        targetZoomProgress = 0;
        zoomProgress = 0;
        showCakeButton = true;
        cakeTransitionActive = false;
        cakeTransitionProgress = 0;
        cakeAppearProgress = 0;
        showBlessing = false;
        blessingAlpha = 0;
        cakeState = 'idle';
        matchAnimating = false;
        matchProgress = 0;
        wishTextAlpha = 0;
        fireworkTriggered = false;
        fireworks = [];
        rockets = [];
        envelope = null;
        envelopeDropped = false;
        envelopeDropDelay = 0;
        pointillismActive = false;
        pointillismFrameCount = 0;
        resetBtnFadeIn = 0;
        fireflyActive = false;
        fireflyDone = false;
        fireflyTimer = 0;
        fireflyRiseStarted = false;
        firefly.trail = [];
        fireflyAvoidPoints = [];
        letterCloseRequested = false;
        exitPhase = 'none';
        convergeProgress = 0;
        convergeTarget = null;
        if (fireflyLayer) fireflyLayer.background(0, 0, 0, 0);
    }
}
// ================================================================
//  ██  mousePressed  ██
// ================================================================
function mousePressed() {
    if (state == 0) { state = 1; return; }
    if (state == 1 && !isTicking && currentStep == 0) {
        isTicking = true;
        tickTimer = millis();
        startMusic();
        ensureSfxCtx(); // 在用户手势内创建音频上下文，保证后续音效可发声
        nextStep();
        return;
    }
    if (state == 3) {
        if (letterCloseRequested) return; // 信纸收回中，忽略其他点击
        if (envelope) {
            if (envelope.isFullyOpen()) {
                let box = window._bigLetterBox;
                if (box && mouseX > box.x && mouseX < box.x + box.w &&
                    mouseY > box.y && mouseY < box.y + box.h) {
                    // 再次点击信纸：信纸收回信封
                    envelope.close();
                    letterCloseRequested = true;
                }
                return; // 信纸在最上层，点击被信纸消费
            } else if (envelope.state === 'idle' && !letterOpen) {
                if (envelope.contains(mouseX, mouseY)) {
                    envelope.open();
                    return;
                }
            }
        }
        if (cakeState === 'idle' && !matchAnimating) {
            let box = window._matchBox;
            if (box && mouseX > box.x - box.w/2 && mouseX < box.x + box.w/2 &&
                mouseY > box.y - box.h/2 && mouseY < box.y + box.h/2) {
                matchAnimating = true;
                matchProgress = 0;
                playMatchSizzle();
                let mt = computeCakeMetrics(cakeAppearProgress);
                matchTarget.x = mt.candleX;
                matchTarget.y = mt.candleBaseY - mt.candleH - 5;
                cakeState = 'igniting';
                return;
            }
        }
        if (!cakeTransitionActive && window._cakeBtn) {
            let btn = window._cakeBtn;
            if (mouseX > btn.x - btn.w/2 && mouseX < btn.x + btn.w/2 &&
                mouseY > btn.y - btn.h/2 && mouseY < btn.y + btn.h/2) {
                cakeTransitionActive = true;
                cakeTransitionProgress = 0;
                cakeAppearProgress = 0;
                cakeState = 'idle';
                matchAnimating = false;
                matchProgress = 0;
                wishTextAlpha = 0;
                fireworkTriggered = false;
                fireworks = [];
                rockets = [];
                envelope = null;
                envelopeDropped = false;
                envelopeDropDelay = 0;
                showBlessing = false;
                blessingAlpha = 0;
                showCakeButton = false;
                pointillismActive = false;
                pointillismFrameCount = 0;
                resetBtnFadeIn = 0;
                fireflyActive = false;
                fireflyDone = false;
                fireflyTimer = 0;
                fireflyRiseStarted = false;
                firefly.trail = [];
                fireflyAvoidPoints = [];
                letterCloseRequested = false;
                exitPhase = 'none';
                convergeProgress = 0;
                convergeTarget = null;
                if (fireflyLayer) fireflyLayer.background(0, 0, 0, 0);
                return;
            }
        }
        if (!cakeTransitionActive) {
            handlePhotoWallClick();
        }
    }
    if (state == 4 && exitPhase === 'firefly') {
        fireflyAvoidPoints.push({ x: mouseX, y: mouseY, age: 0, life: 300 });
        return;
    }
    if (state == 4 && exitPhase === 'pointillism' && resetBtnFadeIn > 200) {
        let btn = resetButton;
        if (mouseX > btn.x - btn.w/2 && mouseX < btn.x + btn.w/2 &&
            mouseY > btn.y - btn.h/2 && mouseY < btn.y + btn.h/2) {
            resetGlobals();
            generatePhotoItems();
            generateFlowers();
            initStars();
            paperBall = null;
            showResetButton = false;
            state = 0;
            stopBirthdaySong();
            restartMusic();
            return;
        }
    }
}
// ================================================================
//  ██  draw 主循环 ██
// ================================================================
function draw() {
    // 生日快乐歌自然播放完毕后恢复背景音乐音量
    if (birthdaySfx && sfxCtx && sfxCtx.currentTime >= birthdaySfx.endTime) {
        restoreBgMusicVolume();
    }
    // 背景音乐音量渐变（渐入渐出）每帧推进
    if (bgVolTween && bgMusic) {
        let t = (millis() - bgVolTween.t0) / (bgVolTween.dur * 1000);
        if (t >= 1) {
            try { bgMusic.volume = bgVolTween.to; } catch (e) {}
            bgVolTween = null;
        } else {
            let ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            try { bgMusic.volume = bgVolTween.from + (bgVolTween.to - bgVolTween.from) * ease; } catch (e) {}
        }
    }
    // 状态0/1
    if (state == 0 || state == 1) {
        if (bgImg) image(bgImg, 0, 0, width, height);
        else background(30, 25, 20);
        drawStars();
        drawClock();
        drawUI();
        if (state == 1 && isTicking && millis()-tickTimer > TICK_INTERVAL) {
            tickTimer = millis();
            nextStep();
        }
        return;
    }
    // 状态2
    if (state == 2) {
        if (clockAlpha > 0) {
            clockAlpha -= 2;
            if (clockAlpha < 0) clockAlpha = 0;
        }
        if (clockAlpha <= 0) {
            if (!flowerRustlePlayed) {
                flowerRustlePlayed = true;
                playFlowerRustle();
            }
            crackProgress += CFG.crack.spreadSpeed;
            if (crackProgress > 1) crackProgress = 1;
        }
        drawBackground(crackProgress);
        updateFlowers(crackProgress);
        let crackAlpha = 255;
        let flowerAlpha = 255;
        let photoAlpha = 0;
        if (crackProgress >= 1 && !transitionActive && !transitionDelayStarted) {
            transitionDelayStarted = true;
            transitionDelayTimer = millis();
        }
        if (transitionDelayStarted && !transitionActive && millis() - transitionDelayTimer > 1500) {
            startTransitionToPhotoWall();
        }
        if (transitionActive) {
            let elapsed = (millis() - transStartTime) / 1000;
            let duration = 3.0;
            transitionProgress = min(elapsed / duration, 1.0);
            let ease = transitionProgress < 0.5 ? 4 * transitionProgress * transitionProgress * transitionProgress :
                        1 - pow(-2 * transitionProgress + 2, 3) / 2;
            crackAlpha = 255 * (1 - ease);
            flowerAlpha = 255;
            photoAlpha = 255 * ease;
            if (transitionProgress >= 1) {
                state = 3;
                transitionActive = false;
                zoomedIndex = -1;
                targetZoomProgress = 0;
                zoomProgress = 0;
                if (photoItems.length === 0) generatePhotoItems();
                showCakeButton = true;
                cakeTransitionActive = false;
                cakeTransitionProgress = 0;
                cakeAppearProgress = 0;
                showBlessing = false;
                blessingAlpha = 0;
                if (!fireworkTriggered) {
                    rockets = [];
                    fireworks = [];
                }
                return;
            }
        }
        drawCracks(crackProgress, crackAlpha);
        drawFlowers(flowerAlpha);
        let msg = "亲爱的小姐，春天就要来啦";
        let alphaMsg = 150 + 100 * sin(frameCount * 0.02);
        fill(255, 182, 193, alphaMsg);
        textAlign(CENTER, TOP);
        textSize(32);
        text(msg, width/2, 40);
        if (transitionActive) {
            drawPhotoWall(photoAlpha, 0);
            push();
            let pg2 = createGraphics(width, height);
            pg2.background(0,0,0,0);
            updatePhotoPetals();
            for (let p of photoPetals) {
                pg2.noStroke();
                pg2.push();
                pg2.translate(p.x, p.y);
                pg2.rotate(p.angle);
                pg2.fill(p.hue, p.sat, p.bright, p.alpha * photoAlpha/255);
                pg2.ellipse(0, 0, p.size, p.size * 0.6);
                pg2.pop();
            }
            tint(255,255,255, photoAlpha);
            image(pg2, 0, 0);
            noTint();
            pg2.remove();
            pop();
        }
        if (clockAlpha > 1) drawClock();
        drawUI();
        return;
    }
    // 状态3
    if (state == 3) {
        if (bgImg2) image(bgImg2, 0, 0, width, height);
        else background(30, 25, 20);
        if (!cakeTransitionActive) {
            drawFlowers(255);
            drawPhotoWall(255, 0);
            updatePhotoPetals();
            drawPhotoPetals();
            noStroke();
            let btnX = width - 80, btnY = height - 60, btnW = 140, btnH = 40;
            fill(255, 200, 200, 200);
            rectMode(CENTER);
            rect(btnX, btnY, btnW, btnH, 20);
            fill(80, 30, 30);
            textAlign(CENTER, CENTER);
            textSize(18);
            text('🎂 许愿蛋糕', btnX, btnY);
            window._cakeBtn = { x: btnX, y: btnY, w: btnW, h: btnH };
            fill(0, 0, 0, 100);
            textAlign(LEFT, TOP);
            textSize(14);
            text('🌸 点击照片回忆 · 点击“许愿蛋糕”开启惊喜', 20, 20);
            if (fireworkTriggered) { updateFireworks(); drawFireworks(); }
        } else {
            let convergeDelta = 1.0 / (CFG.photoWall.convergeDuration * 60);
            cakeTransitionProgress = min(cakeTransitionProgress + convergeDelta, 1.0);
            let cakeAppearDelta = 1.0 / (CFG.cake.appearDuration * 60);
            if (cakeTransitionProgress > 0.2) {
                cakeAppearProgress = min(cakeAppearProgress + cakeAppearDelta, 1.0);
            }
            drawPhotoWall(255, cakeTransitionProgress);
            let currentCandleH = CFG.cake.candleHeight;
            let isLit = false;
            let flameSz = 0;
            if (cakeState === 'idle') {
                currentCandleH = CFG.cake.candleHeight;
                isLit = false;
            } else if (cakeState === 'igniting') {
                matchProgress += 0.03;
                if (matchProgress >= 1) {
                    matchProgress = 1;
                    cakeState = 'burning';
                    burnStartTime = millis();
                    playBirthdaySong(); // 蜡烛点燃后播放生日快乐歌
                    wishTextAlpha = 0;
                    isLit = true;
                    flameSz = 1;
                } else {
                    currentCandleH = CFG.cake.candleHeight;
                    isLit = false;
                }
            } else if (cakeState === 'burning') {
                isLit = true;
                let elapsed = (millis() - burnStartTime) / 1000;
                let burnProgress = min(elapsed / CFG.cake.burnDuration, 1);
                currentCandleH = CFG.cake.candleHeight * (1 - burnProgress);
                flameSz = 1 + 0.2 * sin(frameCount * 0.1);
                wishTextAlpha = min(wishTextAlpha + 2, 255);
                if (burnProgress >= 1) {
                    cakeState = 'burned';
                    if (!fireworkTriggered) {
                        triggerFireworks();
                        envelopeDropDelay = millis() + 3000;
                    }
                }
            } else if (cakeState === 'burned') {
                currentCandleH = 0;
                isLit = false;
                wishTextAlpha = 255;
                if (fireworkTriggered && !envelopeDropped && envelopeDropDelay > 0 && millis() > envelopeDropDelay) {
                    envelope = new Envelope();
                    envelopeDropped = true;
                }
            }
            drawCake(cakeAppearProgress, currentCandleH, isLit, flameSz);
            if ((cakeState === 'burning' || cakeState === 'burned') && envelope === null) {
                noStroke();
                fill(255, 215, 0, wishTextAlpha);
                textAlign(CENTER, CENTER);
                textSize(36);
                text("开始许愿吧", width/2, height/2 - 80);
            }
            if (fireworkTriggered) {
                updateFireworks();
                drawFireworks();
            }
            updatePhotoPetals();
            drawPhotoPetals();
        }
        // 信封绘制在蛋糕之上（在上层，降落时不被蛋糕遮挡）
        if (envelope) {
            if (!envelope.isFullyOpen()) {
                envelope.update();
                envelope.draw();
                if (letterCloseRequested && envelope.state === 'idle') {
                    beginExitFromLetter();
                    return;
                }
            }
        }
        // 信纸放大后置于最上层（不会被蛋糕/火柴/照片遮挡）
        if (envelope && envelope.isFullyOpen()) {
            drawBigLetter();
        }
        drawUI();
        return;
    }
    // 状态4 —— 退场流程（汇聚 → 萤火虫 → 点彩）
    if (state == 4) {
        // ---- 阶段0：信封/蛋糕/火柴/文字一起聚拢成黄色光点 ----
        if (exitPhase === 'converge') {
            // 背景延续蛋糕部分：只保留 background2，无花朵
            if (bgImg2) image(bgImg2, 0, 0, width, height);
            else background(30, 25, 20);
            convergeProgress = min(convergeProgress + 1 / (CONVERGE_DURATION * 60), 1);
            let e = easeInOut(convergeProgress);
            let s = max(1 - e, 0.001);
            // 整体缩放，向窗口下方（蛋糕位置）聚拢
            push();
            if (convergeTarget) {
                translate(convergeTarget.x, convergeTarget.y);
                scale(s);
                translate(-convergeTarget.x, -convergeTarget.y);
            }
            // 蛋糕 + 火柴 + 便签（均在 drawCake 内部绘制），先画蛋糕，信封在上层
            drawCake(1, 0, false, 0);
            if (envelope) envelope.draw();
            if (wishTextAlpha > 0) {
                noStroke();
                fill(255, 215, 0, wishTextAlpha * s);
                textAlign(CENTER, CENTER);
                textSize(36);
                text("开始许愿吧", width / 2, height / 2 - 80);
            }
            pop();
            // 聚拢处的黄色光点（随汇聚逐渐增强）
            if (convergeTarget && convergeProgress > 0.4) {
                let gx = convergeTarget.x, gy = convergeTarget.y;
                let glowR = 12 + e * 32;
                let grad = drawingContext.createRadialGradient(gx, gy, 0, gx, gy, glowR);
                grad.addColorStop(0, 'rgba(255, 245, 180, 0.95)');
                grad.addColorStop(0.5, 'rgba(255, 220, 80, 0.6)');
                grad.addColorStop(1, 'rgba(255, 200, 50, 0)');
                drawingContext.fillStyle = grad;
                drawingContext.beginPath();
                drawingContext.arc(gx, gy, glowR, 0, TWO_PI);
                drawingContext.fill();
                fill(255, 255, 230);
                ellipse(gx, gy, 6, 6);
            }
            if (convergeProgress >= 1) {
                exitPhase = 'firefly';
                fireflyActive = true;
                firefly.x = convergeTarget.x;
                firefly.y = convergeTarget.y;
                firefly.trail = [];
                firefly.targetX = random(width * 0.2, width * 0.8);
                firefly.targetY = random(height * 0.2, height * 0.8);
                firefly.speed = random(1.5, 3.0);
                fireflyTimer = 0;
                fireflyRiseStarted = false;
                envelope = null; // 汇聚结束，不再单独绘制信封
            }
            return;
        }
        // ---- 阶段1：萤火虫在无花背景（background2）上游走，最后升向窗口上端离开 ----
        if (exitPhase === 'firefly') {
            if (bgImg2) image(bgImg2, 0, 0, width, height);
            else background(30, 25, 20);
            // 背景渐渐变暗，衬托萤火虫的光亮
            let dim = min(fireflyTimer * 0.5, 150);
            if (dim > 0) {
                noStroke();
                fill(0, 0, 0, dim);
                rectMode(CORNER);
                rect(0, 0, width, height);
            }
            // 标记避让点（扩散的淡色圆环）
            noFill();
            stroke(255, 230, 160, 120);
            strokeWeight(1.5);
            for (const p of fireflyAvoidPoints) {
                let frac = p.age / p.life;
                let rr = 26 + frac * 90;
                ellipse(p.x, p.y, rr, rr);
            }
            noStroke();
            // 移动
            let dx = firefly.targetX - firefly.x;
            let dy = firefly.targetY - firefly.y;
            let distToTarget = sqrt(dx * dx + dy * dy);
            if (distToTarget > 5) {
                let angle = atan2(dy, dx);
                firefly.x += cos(angle) * firefly.speed + random(-0.5, 0.5);
                firefly.y += sin(angle) * firefly.speed + random(-0.5, 0.5);
            } else {
                if (fireflyRiseStarted) {
                    firefly.y = -60;
                } else {
                    firefly.targetX = random(width * 0.1, width * 0.9);
                    firefly.targetY = random(height * 0.1, height * 0.9);
                    firefly.speed = random(1.5, 3.0);
                }
            }
            firefly.x = constrain(firefly.x, -30, width + 30);
            firefly.y = constrain(firefly.y, -60, height + 30);
            // 避让鼠标点击过的位置
            for (let i = fireflyAvoidPoints.length - 1; i >= 0; i--) {
                const p = fireflyAvoidPoints[i];
                p.age++;
                if (p.age >= p.life) { fireflyAvoidPoints.splice(i, 1); continue; }
                const d = dist(firefly.x, firefly.y, p.x, p.y);
                const R = 140;
                if (d < R && d > 0.001) {
                    const push = (R - d) / R * (1 - p.age / p.life) * 2.4;
                    firefly.x += ((firefly.x - p.x) / d) * push;
                    firefly.y += ((firefly.y - p.y) / d) * push;
                }
            }
            // 游走一段时间后开始升空
            fireflyTimer++;
            if (!fireflyRiseStarted && fireflyTimer > FIREFLY_WANDER_FRAMES) {
                fireflyRiseStarted = true;
                firefly.targetX = random(width * 0.3, width * 0.7);
                firefly.targetY = -80;
                firefly.speed = 3.2;
            }
            // 拖尾轨迹
            firefly.trail.push({ x: firefly.x, y: firefly.y, life: 1.0 });
            for (let i = firefly.trail.length - 1; i >= 0; i--) {
                firefly.trail[i].life -= 0.035;
                if (firefly.trail[i].life <= 0) firefly.trail.splice(i, 1);
            }
            noStroke();
            for (const t of firefly.trail) {
                let a = 160 * t.life;
                fill(255, 235, 140, a);
                ellipse(t.x, t.y, 10 * t.life, 10 * t.life);
            }
            // 萤火虫光点（黄色光晕 + 亮核）
            let glow = 34 + 10 * sin(frameCount * 0.08);
            let gx = firefly.x, gy = firefly.y;
            let grad = drawingContext.createRadialGradient(gx, gy, 0, gx, gy, glow);
            grad.addColorStop(0, 'rgba(255, 255, 210, 0.95)');
            grad.addColorStop(0.4, 'rgba(255, 220, 80, 0.55)');
            grad.addColorStop(1, 'rgba(255, 200, 50, 0)');
            drawingContext.fillStyle = grad;
            drawingContext.beginPath();
            drawingContext.arc(gx, gy, glow, 0, TWO_PI);
            drawingContext.fill();
            fill(255, 255, 235);
            ellipse(gx, gy, 5 + 2 * sin(frameCount * 0.1), 5 + 2 * sin(frameCount * 0.1));
            // 离开屏幕上端 → 进入点彩
            if (fireflyRiseStarted && firefly.y < -50) {
                fireflyDone = true;
                fireflyActive = false;
                exitPhase = 'pointillism';
                pointillismActive = true;
                pointillismFrameCount = 0;
                resetBtnFadeIn = 0;
                firefly.trail = [];
            }
            return;
        }
        // ---- 阶段2：点彩（圆更大，约5秒后弹出按钮） ----
        if (exitPhase === 'pointillism') {
            // 不重绘背景，让点彩在最后的画面（background2）上累积
            let progress = min(pointillismFrameCount / POINTILLISM_MAX_FRAMES, 1);
            // 5 秒内生成圆点，5 秒后不再新增
            if (pointillismFrameCount < POINTILLISM_MAX_FRAMES) {
                // 开头缓慢生成：数量与透明度逐步爬升
                let ramp = min(pointillismFrameCount / 90, 1);
                ramp = 1 - pow(1 - ramp, 3); // ease-out
                let numDots = floor(80 * ramp);
                let alphaMul = 0.3 + 0.7 * ramp;
                for (let i = 0; i < numDots; i++) {
                    let x = random(width);
                    let y = random(height);
                    let choice = random();
                    let r, g, b;
                    if (choice < 0.6) {
                        r = random(200, 255);
                        g = random(150, 210);
                        b = random(180, 230);
                    } else {
                        r = random(240, 255);
                        g = random(210, 255);
                        b = random(100, 180);
                    }
                    let darkFactor = map(progress, 0, 1, 1, 0.8);
                    r *= darkFactor;
                    g *= darkFactor;
                    b *= darkFactor;
                    let alpha = map(progress, 0, 1, 200, 120) * alphaMul;
                    noStroke();
                    fill(r, g, b, alpha);
                    let dotSize = random(16, 52); // 圆更大
                    ellipse(x, y, dotSize, dotSize);
                }
                pointillismFrameCount++;
            }
            if (progress >= 1) {
                if (resetBtnFadeIn < 255) {
                    resetBtnFadeIn += 5;
                    if (resetBtnFadeIn > 255) resetBtnFadeIn = 255;
                }
                drawResetSign();
            }
            return;
        }
    }
}
// 手绘风告示牌按钮（粉黄色系）：「还没看够，再看一次」
function drawResetSign() {
    let a = resetBtnFadeIn;
    let btn = resetButton;
    btn.x = width / 2;
    btn.y = height / 2 + 100;
    // 底部暗色衬托，让告示牌从点彩背景中浮出来
    fill(0, 0, 0, 150 * a / 255);
    noStroke();
    rectMode(CENTER);
    rect(width / 2, height / 2 + 40, 380, 140, 24);
    let rot = sin(frameCount * 0.02) * 0.025;   // 轻微摆动，更生动
    push();
    translate(btn.x, btn.y);
    // 木杆
    push();
    translate(0, 46);
    rotate(rot * 0.6);
    fill(150, 100, 60, a);
    rect(0, 50, 16, 120, 6);
    fill(170, 120, 75, a);
    rect(-3, 46, 5, 130, 2);
    pop();
    // 告示牌板：不规则圆角 + 双层描边，营造手绘感
    let bw = btn.w + 44, bh = btn.h + 24;
    push();
    translate(0, -bh / 2);
    rotate(rot);
    stroke(122, 72, 44, a);
    strokeWeight(5);
    strokeJoin(ROUND);
    fill(255, 216, 226, a);                  // 粉色板面
    rect(0, 0, bw, bh, 24, 15, 20, 28);      // 四个圆角不同，像手剪的
    stroke(255, 196, 84, a);                 // 黄色内描边
    strokeWeight(2.5);
    rect(0, 0, bw - 14, bh - 14, 18, 10, 14, 20);
    noStroke();
    // 图钉
    fill(255, 150, 60, a);
    ellipse(-bw / 2 + 16, -bh / 2 + 16, 9, 9);
    ellipse(bw / 2 - 16, -bh / 2 + 16, 9, 9);
    fill(255, 210, 150, a);
    ellipse(-bw / 2 + 16, -bh / 2 + 16, 3.5, 3.5);
    ellipse(bw / 2 - 16, -bh / 2 + 16, 3.5, 3.5);
    // 文字
    fill(96, 42, 34, a);
    textAlign(CENTER, CENTER);
    textSize(23);
    text('好好长大，按时吃饭', 0, 2);
    // 小星星点缀
    drawSparkle(-bw / 2 + 30, bh / 2 - 18, 7, a);
    drawSparkle(bw / 2 - 26, -bh / 2 + 28, 5, a);
    drawSparkle(bw / 2 - 30, bh / 2 - 14, 4, a);
    pop();
    pop();
}
// 四角小星星（手绘点缀）
function drawSparkle(x, y, r, a) {
    stroke(255, 176, 66, a);
    strokeWeight(2);
    line(x - r, y, x + r, y);
    line(x, y - r, x, y + r);
    line(x - r * 0.4, y - r * 0.4, x + r * 0.4, y + r * 0.4);
    line(x - r * 0.4, y + r * 0.4, x + r * 0.4, y - r * 0.4);
    noStroke();
}
