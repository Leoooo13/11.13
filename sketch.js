var sound1; // 創建音樂播放器的變數
var analyzer; // 創建音樂振福分析器的變數


function preload() {
  sound1 = loadSound("METAMORPHOSIS.mp3"); // 載入音樂檔案
}


function setup() {
  createCanvas(windowWidth, windowHeight); // 創建畫布
  background("#d08c60"); // 設定背景顏色
  analyzer = new p5.Amplitude(); // 創建音樂振幅分析器
  analyzer.setInput(sound1); // 將音樂輸入到分析器中
}


var w = 150; // 設定橢圓和矩形的基本大小
var s_w = 100; // 設定第二個橢圓的基本大小
var fc, fc1; // 存儲音樂振幅值的變數
var textSizeValue = 1000; // 初始文本大小


function draw() {
  background("#d08c60"); // 重設背景色
  rectMode(CENTER);
  noFill();


  // 根據音樂振幅設定文本大小
  if (sound1.isPlaying()) {
    fc = map(analyzer.getLevel(), 0, 5, 0, 200);
    fc1 = map(analyzer.getLevel(), 0, 5, 0, 300);
  } else {
    fc = map(mouseX, 0, windowWidth, 100, 200);
    fc1 = map(mouseY, 0, windowHeight, 50, 300);
  }


  for (var y = w ; y <= height + w / 2; y = y + w) {
    for (var x = w; x <= width + 50; x = x + w) {
      // 使用音樂振幅值來設定圖形的大小
      var ellipseSize = fc; // 設定橢圓大小
      var rectSize = w + mouseX + fc1; // 設定矩形大小
      var secondEllipseSize = s_w + mouseX + fc; // 設定第二個橢圓大小


      stroke("#333d29");
      strokeWeight(2);
      ellipse(x, y, ellipseSize);


      stroke("#ffcb69");
      strokeWeight(2);
      rect(x, y, rectSize);


      stroke("#333d29");
      strokeWeight(5);
      ellipse(x + 50, y + 50, secondEllipseSize);
    }
  }


  // 使用音樂振幅值來設定文本大小
  textSize(fc + 50);
  text("LEO", 1000, 150);
}


function mousePressed() {
  if (sound1.isPlaying()) {
    sound1.stop();
  } else {
    sound1.play();
  }
}

