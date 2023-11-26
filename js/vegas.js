$(function () {
  $("#mainimg").vegas({
    slides: [
      { src: "./images/1.jpg" },
      { src: "./images/2.jpg" },
      { src: "./images/3.jpg" },
      { src: "./images/4.jpg" },
      { src: "./images/5.jpg" },
      { src: "./images/6.jpg" },
      { src: "./images/7.jpg" },
    ],
    transition: "blur", //https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
    animation: "kenburns", //https://vegas.jaysalvat.com/documentation/transitions/から好みのanimationを選んで置き換えられます。
    delay: 6000, //次の画像を表示するまでの時間
    animationDuration: 10000, //アニメーション間の引き継ぎタイミング。
    timer: false, //プログレスバーを非表示に。
  });
});
