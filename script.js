const CONFIG = {
  friendName: "Utkarsh",
  nickName: "My Love❤️",
  birthdayDate: "01/11/2026",
  yourName: "Ritika",
  message:
    "A very very Happiee Birthday sweetuu🎂🥳!! May this year and all the years to come fill your life with happiness, success, prosperity, and good health."+
    " It's going to be an year since we met and somewhere along the way you became one of the most special person in my life." + 
    " No matter how much time we spend together, it always feels less. I love everything about you, your presence, your nature, your voice, your smile."+
    " The way you make me feel, the way you understands me, the way you protects me and I am so glad that I met you."+
    " I have always dreamed of having a partner like you but never imagined that I will really get someone so pure. Let's spend our life together forever🥰." +
    " (I am quite bad at expressing, but i have tried my best😂)",

  reason1: "Let's explore the world together and make memories that will last a lifetime.🥰",
  reason2: "We will have two cuties together and will make our own little family.🙈",
  reason3: "Let's build a life filled with love, laughter, and endless adventures😍 (along with my plants😌).",

  photos: [
    { src: "first.jpeg", label: "Our first Date❤️", caption: "A little weird😂, but memorable🥰 (Never ordering soup again😂)" },
    { src: "second.jpeg", label: "Completed 6 months together❤️", caption: "We got your PS5😌" },
    { src: "forth.jpeg", label: "Counting more❤️", caption: "We explored ggn together😉" }
  ],

  // Football section
  jerseyName: "Utkarsh",   // short name on the back of the shirt
  jerseyNumber: "7",
  club: "Real Madrid",
  Player: "Cristiano Ronaldo",
  bestMatch: "2022 Champions League SemiFinal",
};

/* ----------------------------------------------------------
   2. Page logic (no need to edit below this line)
---------------------------------------------------------- */
(function () {
  "use strict";

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function el(tag, className, css) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (css) node.style.cssText = css;
    return node;
  }

  /* ---------- Fill in the text from CONFIG ---------- */
  function applyConfig() {
    $$("[data-bind]").forEach(function (node) {
      var key = node.getAttribute("data-bind");
      if (CONFIG[key] !== undefined) node.textContent = CONFIG[key];
    });

    var jn = $("#jerseyName");
    var jnum = $("#jerseyNumber");
    if (jn) jn.textContent = CONFIG.jerseyName;
    if (jnum) jnum.textContent = CONFIG.jerseyNumber;

    document.title = "Happy Birthday " + CONFIG.nickName + CONFIG.friendName + "!";

    $$("[data-photo]").forEach(function (box) {
      var data = CONFIG.photos[Number(box.getAttribute("data-photo"))];
      if (!data) return;
      var figure = box.closest("figure");
      var label = $(".frame-label", figure);
      var text = $(".frame-text", figure);
      if (label) label.textContent = data.label;
      if (text) text.textContent = data.caption;
      if (data.src) {
        var img = el("img");
        img.src = data.src;
        img.alt = data.caption || "";
        img.loading = "lazy";
        box.textContent = "";
        box.appendChild(img);
      }
    });
  }

  /* ---------- Hero: "Happy Birthday" letter animation ---------- */
  function buildLetters() {
    $$("[data-letters]").forEach(function (wrap) {
      var word = wrap.getAttribute("data-letters");
      var base = parseFloat(wrap.getAttribute("data-base")) || 0;
      word.split("").forEach(function (ch, i) {
        var color = i % 3 === 1 ? "#1E4FA8" : "#0F2A55";
        var span = el("span", "ltr",
          "color:" + color + ";" +
          "animation:pop .8s " + (base + i * 0.07).toFixed(2) + "s cubic-bezier(.3,1.6,.5,1) both," +
          "wave 3.4s " + (base + 1.6 + i * 0.12).toFixed(2) + "s ease-in-out infinite;");
        span.textContent = ch;
        wrap.appendChild(span);
      });
    });
  }

  /* ---------- Hero: clouds, balloons, petals, confetti, bees ---------- */
  function buildHeroScene() {
    var clouds = $("#clouds");
    for (var i = 0; i < 6; i++) {
      clouds.appendChild(el("div", "cloud",
        "top:" + (8 + (i * 14) % 70) + "%;" +
        "width:" + (150 + (i % 3) * 60) + "px;" +
        "height:" + (34 + (i % 3) * 8) + "px;" +
        "animation-duration:" + (60 + i * 14) + "s;" +
        "animation-delay:-" + (i * 17) + "s;"));
    }

    var balloons = $("#balloons");
    var bc = ["#FFC72C", "#2F6FDB", "#FFD966", "#1E4FA8"];
    for (var b = 0; b < 8; b++) {
      var wrap = el("div", "balloon",
        "left:" + (4 + b * 12.5) + "%;" +
        "animation-duration:" + (17 + (b % 4) * 4) + "s;" +
        "animation-delay:-" + ((b * 5.3) % 22).toFixed(1) + "s;");
      wrap.appendChild(el("div", "b", "background:" + bc[b % 4] + ";color:" + bc[b % 4] + ";"));
      wrap.appendChild(el("div", "s"));
      balloons.appendChild(wrap);
    }

    var falling = $("#falling");
    var pc = ["#FFC72C", "#FFD966", "#FFFFFF"];
    for (var p = 0; p < 10; p++) {
      var s = 12 + (p % 4) * 5;
      var petal = el("div", "petal",
        "left:" + ((p * 53) % 100) + "%;" +
        "width:" + s + "px;height:" + s + "px;" +
        "color:" + pc[p % 3] + ";" +
        "animation-duration:" + (15 + (p % 6) * 3) + "s;" +
        "animation-delay:-" + ((p * 2.7) % 22).toFixed(1) + "s;");
      petal.innerHTML = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1C16 7 16 15 10 19C4 15 4 7 10 1Z" fill="currentColor"/></svg>';
      falling.appendChild(petal);
    }

    var kc = ["#FFC72C", "#2F6FDB", "#FFFFFF", "#1E4FA8", "#FFD966"];
    for (var k = 0; k < 28; k++) {
      falling.appendChild(el("div", "conf",
        "left:" + ((k * 37 + 11) % 100) + "%;" +
        "width:" + (7 + (k % 3) * 2) + "px;height:" + (12 + (k % 3) * 3) + "px;" +
        "background:" + kc[k % 5] + ";" +
        "animation-duration:" + (9 + (k % 7) * 2) + "s;" +
        "animation-delay:-" + ((k * 1.9) % 16).toFixed(1) + "s;"));
    }

    var bees = $("#bees");
    var beeSvg =
      '<svg viewBox="0 0 64 48" width="64" height="48" aria-hidden="true">' +
      '<g class="wing"><ellipse cx="30" cy="12" rx="11" ry="9" fill="#FFFFFF" opacity=".85"/></g>' +
      '<ellipse cx="30" cy="28" rx="18" ry="12" fill="#FFC72C"/>' +
      '<rect x="22" y="16" width="5" height="24" fill="#0F2A55"/>' +
      '<rect x="33" y="16" width="5" height="24" fill="#0F2A55"/>' +
      '<circle cx="50" cy="27" r="8" fill="#0F2A55"/>' +
      '<circle cx="53" cy="25" r="2" fill="#FFFFFF"/>' +
      '<path d="M12 28L4 28L12 31Z" fill="#0F2A55"/></svg>';
    [
      "animation-duration:20s;animation-delay:-3s;",
      "animation-duration:27s;animation-delay:-14s;margin-top:90px;"
    ].forEach(function (css) {
      var bee = el("div", "bee", css);
      bee.innerHTML = beeSvg;
      bees.appendChild(bee);
    });
  }

  /* ---------- Bunting flags (hero + football) ---------- */
  function buildBunting() {
    $$("[data-bunting]").forEach(function (row) {
      for (var i = 0; i < 24; i++) {
        var slot = el("div", "flag-slot");
        slot.appendChild(el("div", "flag",
          "background:" + (i % 2 ? "#FFC72C" : "#2F6FDB") + ";" +
          "animation-delay:-" + (i * 0.37).toFixed(2) + "s;"));
        row.appendChild(slot);
      }
    });
  }

  /* ---------- Flower garden ---------- */
  function buildGarden() {
    var garden = $("#garden");
    var ground = $(".garden-ground", garden);
    var lefts = [1, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91];
    lefts.forEach(function (left, i) {
      var sun = i % 3 !== 1;
      var size = sun ? 84 + (i * 13) % 34 : 64 + (i * 11) % 24;
      var stemH = 50 + (i * 31) % 90;

      var wrap = el("div", "g-wrap",
        "left:" + left + "%;" +
        "animation-duration:" + (4 + (i % 4)) + "s;" +
        "animation-delay:-" + i + "s;");

      var flower = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      flower.setAttribute("class", "gflow");
      flower.setAttribute("viewBox", "0 0 100 100");
      flower.setAttribute("aria-hidden", "true");
      flower.style.cssText =
        "--i:" + i + ";width:" + size + "px;height:" + size + "px;color:" + (sun ? "#FFC72C" : "#6FA8FF") + ";";
      var use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      use.setAttribute("href", sun ? "#sunflower" : "#cornflower");
      flower.appendChild(use);

      var stem = el("div", "gstem", "--i:" + i + ";height:" + stemH + "px;");

      wrap.appendChild(flower);
      wrap.appendChild(stem);
      garden.insertBefore(wrap, ground);
    });
  }

  /* ---------- Confetti burst ---------- */
  var burstColors = ["#FFC72C", "#2F6FDB", "#FFFFFF", "#0F2A55", "#FFD966"];
  function burst(container, count, offset, delay) {
    container.textContent = "";
    for (var i = 0; i < count; i++) {
      var a = (i / count) * Math.PI * 2 + offset;
      var d = 80 + (i * 37) % 120;
      container.appendChild(el("div", "burst",
        "--x:" + Math.round(Math.cos(a) * d) + "px;" +
        "--y:" + Math.round(Math.sin(a) * d - 40) + "px;" +
        "--r:" + ((i % 2 ? 1 : -1) * (360 + i * 40)) + "deg;" +
        "background:" + burstColors[i % 5] + ";" +
        "animation-delay:" + (delay + (i % 5) * 0.03).toFixed(2) + "s;"));
    }
  }

  /* ---------- Make a wish: blow out the candle ---------- */
  function setupCandle() {
    var section = $("#wish");
    var button = $("#blowBtn");
    var title = $("#wishTitle");
    var text = $("#wishText");
    var burstBox = $("#candleBurst");
    var blown = false;

    button.addEventListener("click", function () {
      blown = !blown;
      section.classList.toggle("blown", blown);
      if (blown) {
        burst(burstBox, 30, 0, 0);
        title.textContent = "Wish sent!";
        text.textContent = "May every single one of them come true this year.";
        button.textContent = "Light it again";
      } else {
        burstBox.textContent = "";
        title.textContent = "Make a wish";
        text.textContent = "Close your eyes, think of something wonderful, and let the whole garden celebrate with you.";
        button.textContent = "Blow out the candle";
      }
    });
  }

  /* ---------- Football: take the shot ---------- */
  function setupShot() {
    var pitch = $("#pitch");
    var button = $("#shotBtn");
    var burstBox = $("#goalBurst");
    var shot = false;

    button.addEventListener("click", function () {
      shot = !shot;
      pitch.classList.toggle("shot", shot);
      if (shot) {
        burst(burstBox, 30, 0.3, 0.9);
        button.textContent = "Play it again";
      } else {
        burstBox.textContent = "";
        button.textContent = "Take the shot";
      }
    });
  }

  /* ---------- Go ---------- */
  applyConfig();
  buildLetters();
  buildHeroScene();
  buildBunting();
  buildGarden();
  setupCandle();
  setupShot();
})();
