window.addEventListener('WebComponentsReady', function () {
  var board = document.getElementById('board'),
      light = document.getElementById('light');

  board.on('ready',function ready() {
    var led = document.getElementById('led');

    light.addEventListener('click', function() {
      if(light.className == 'on'){
        led.off();     // 讓 LED 熄滅
        light.className = 'off';
      }else{
        led.on();     // 讓 LED 亮起
        light.className = 'on';
      }
    }, false);
  });

}, false);