"use strict";

//================Canvas drawing================================================
const canvas          = document.querySelector("#header-canvas"),
      ctx             = canvas.getContext("2d");

if(canvas.getContext) {
  if(document.body.clientWidth > 1125) {
    drawHeaderCanvas(965, 80, 350, 340, 20);
  } else if(document.body.clientWidth <= 1125 && document.body.clientWidth > 873) {
    drawHeaderCanvas(845, 80, 300, 290, 20);
  } else if(document.body.clientWidth <= 873 && document.body.clientWidth > 832) {
    drawHeaderCanvas(815, 70, 280, 270, 10);
  } else if(document.body.clientWidth <= 832 && document.body.clientWidth > 746) {
    drawHeaderCanvas(680, 60, 220, 220, 10);
  } else if(document.body.clientWidth <= 746 && document.body.clientWidth > 700) {
    drawHeaderCanvas(660, 60, 220, 220, 10);
  } else if(document.body.clientWidth <= 700 && document.body.clientWidth > 660) {
    drawHeaderCanvas(660, 60, 220, 215, 5);
  } else {
    drawHeaderCanvas(530, 150, 40, 40, 15);
  }
  window.addEventListener("resize", () => {
    if(document.body.clientWidth > 1125) {
      drawHeaderCanvas(965, 80, 350, 340, 20);
    } else if(document.body.clientWidth <= 1125 && document.body.clientWidth > 873) {
      drawHeaderCanvas(845, 80, 300, 290, 20);
    } else if(document.body.clientWidth <= 873 && document.body.clientWidth > 832) {
      drawHeaderCanvas(815, 70, 280, 270, 10);
    } else if(document.body.clientWidth <= 832 && document.body.clientWidth > 746) {
      drawHeaderCanvas(680, 60, 220, 220, 10);
    } else if(document.body.clientWidth <= 746 && document.body.clientWidth > 700) {
      drawHeaderCanvas(660, 60, 220, 220, 10);
    } else if(document.body.clientWidth <= 700 && document.body.clientWidth > 660) {
      drawHeaderCanvas(660, 60, 220, 215, 5);
    } else {
      drawHeaderCanvas(530, 150, 40, 40, 15);
    }
  });
} else {
  alert('Ваш браузер не поддерживает Canvas. Обновитесь до последней версии');
}

function drawHeaderCanvas(width, height, left, right, padding) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = width;
  canvas.height = height;
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#999999";
  ctx.lineCap = "square";
  ctx.beginPath();
  ctx.moveTo(padding, 1);
  ctx.lineTo(1, 1);
  ctx.lineTo(1, canvas.height);
  ctx.lineTo(left, canvas.height);
  ctx.moveTo(canvas.width - right, canvas.height);
  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(canvas.width, 1);
  ctx.lineTo(canvas.width - padding, 1);
  ctx.stroke();
}

  //=================Portfolio Tabs Controls====================================
  const portfolioTabs = document.querySelectorAll(".portfolio__tabs__content__wrap");

  document.addEventListener("change", function(evt) {
    if(evt.target.classList.contains("portfolio__tabs__radio")) {
      let targetId = evt.target.id;
      targetId = targetId.split("-");
      targetId.splice(-1, 0, "content");
      targetId = targetId.join("-");
      let target = document.getElementById(targetId);
      portfolioTabs.forEach(item => {
        item.style.opacity = "0";
      });
      target.style.opacity = "1";
    }
  });
