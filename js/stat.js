'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW = 10;
var GAP = 50;
var TEXT_HEIGHT = 35; // ширина текста
var BAR_WIDTH = 40; // ширина колонки
var barHeight = 150; // высота гистограммы


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {

  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW, CLOUD_Y + SHADOW, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, 20);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, 35);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    var barHeightCurrent = barHeight * Math.round(times[i]) / maxTime;
    var colorPart;
    var color;
    // имя
    ctx.fillText(names[i], CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT + CLOUD_Y - GAP / 2);
    if (names[i] === 'Вы') {
      color = 'red';
    } else {
      colorPart = Math.floor(Math.random() * (100));
      color = 'hsl(240, ' + colorPart + '%, 50%)';
    }
    ctx.fillStyle = color;
    // гистограмма
    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT + CLOUD_Y - barHeightCurrent - TEXT_HEIGHT, BAR_WIDTH, barHeightCurrent);
    ctx.fillStyle = 'black';
    // время
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT + CLOUD_Y - barHeightCurrent - TEXT_HEIGHT - GAP / 2);
  }
};
