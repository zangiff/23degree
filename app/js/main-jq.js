$(document).ready(function() {
//=================Navigation Menu Burger Toggle===============================
  $(document).on("click", ".header__nav__burger", function() {
    $(".header__nav__menu").slideToggle(300);
  });

//==========================Order Calculator====================================
  var rangeValue          = 10000,
      tarification        = 4850,
      totalValue          = 48500,
      rangeValueText      = "",
      tarificationText    = "",
      totalValueText      = "";

  $( "#calculation-range-1" ).slider({
    animate: "slow",
    range: "min",
    value: 100,
    min: 100,
    max: 10000,
    step: 10,
    slide: function(evt, ui) {
      rangeValue = ui.value;
      rangeValueText = rangeValue.toLocaleString("ru") + " " + "кв. м";
      // if(rangeValue.length > 3) {
      //   rangeValue = rangeValue.substr(0, rangeValue.length - 3) + " " + rangeValue.substr(rangeValue.length - 3);
      // }
      $("#calculation-result-input-1").val(rangeValueText);
      totalValue = rangeValue * tarification;
      totalValueText = totalValue.toLocaleString("ru") + " " + "тг.";
      $("#calculation-result-input-3").val(totalValueText);
    }
  });
  $( "#calculation-range-2" ).slider({
      animate: "slow",
      range: "min",
      values: [10000, 250000],
      min: 10000,
      max: 250000,
      step: 100,
      slide: function(evt, ui) {
        $(".calculation__form__range__item__hidden-trick").hide();
        rangeValue = ui.value;
        rangeValueText = rangeValue.toLocaleString("ru") + " " + "кв. м";
        // rangeValue = rangeValue.substr(0, rangeValue.length - 3) + " " + rangeValue.substr(rangeValue.length - 3);
        $("#calculation-result-input-1").val(rangeValueText);
        totalValue = rangeValue * tarification;
        totalValueText = totalValue.toLocaleString("ru") + " " + "тг.";
        $("#calculation-result-input-3").val(totalValueText);
      }
  });
  $( "#calculation-range-3" ).slider({
      animate: "slow",
      range: "min",
      value: 500000,
      min: 250000,
      max: 500000,
      step: 1000,
      slide: function(evt, ui) {
        rangeValue = ui.value;
        rangeValueText = rangeValue.toLocaleString("ru") + " " + "кв. м";
        // rangeValue = rangeValue.substr(0, rangeValue.length - 3) + " " + rangeValue.substr(rangeValue.length - 3);
        $("#calculation-result-input-1").val(rangeValueText);
        totalValue = rangeValue * tarification;
        totalValueText = totalValue.toLocaleString("ru") + " " + "тг.";
        $("#calculation-result-input-3").val(totalValueText);
      }
  });
  $(document).on("click", ".calculation__data", function() {
    $(".calculation__form__range__item__hidden-trick").hide();
  });
  $(".calculation__form__range__item__hidden").on("click", function() {
    $(".calculation__form__range__item__hidden-trick").hide();
  });
  $(".calculation__form__range__item__hidden").each(function(i) {
    $(this).on("click", function() {
      if(i === 0) {
        rangeValue = 100;
      } else if(i === 1) {
        rangeValue = 10000;
      } else if(i === 2 ) {
        rangeValue = 250000
      } else {
        rangeValue = 500000;
      }
      rangeValueText = rangeValue.toLocaleString("ru") + " " + "кв. м";
      // rangeValue = rangeValue.substr(0, rangeValue.length - 3) + " " + rangeValue.substr(rangeValue.length - 3);
      $("#calculation-result-input-1").val(rangeValueText);
      totalValue = rangeValue * tarification;
      totalValueText = totalValue.toLocaleString("ru") + " " + "тг.";
      $("#calculation-result-input-3").val(totalValueText);
    });
  });
  $(".calculation__form__button").each(function(i) {
    $(this).on("click", function() {
      if(i === 0) {
        tarification = 3585;
        $("#calculation-result-input-hidden").val("light");
      } else if(i === 1) {
        tarification = 4850;
        $("#calculation-result-input-hidden").val("medium");
      } else {
        tarification = 8735;
        $("#calculation-result-input-hidden").val("full");
      }
      tarificationText = tarification.toLocaleString("ru") + " " + "тг.";
      // tarificationText = tarificationText.substr(0, tarificationText.length - 3) + " " + tarificationText.substr(tarificationText.length - 3);
      $("#calculation-result-input-2").val(tarificationText);
      totalValue = rangeValue * tarification;
      totalValueText = totalValue.toLocaleString("ru") + " " + "тг.";
      $("#calculation-result-input-3").val(totalValueText);
    });
  });

//================Tooltip Initialization & Presets==============================
  $("[data-toggle='tooltip']").tooltip({
    container: "body",
    delay: {
      show: 300,
      hide: 100
    },
    html: true,
    title: "<p class='calculation__form__button-tooltip'>План расстановки мебели 3D визуализация. Все рабочие чертежи (план полов, план потолка, развертки по стенам, план электросетей)!!!</p>"
  });

//===========================jScrollPane Custom Scroll Plugin===================
  $('.brands__wrap').jScrollPane({
    alwaysShowScroll: true,
    mouseWheelSpeed: 30,
    arrowButtonSpeed: 30,
    horizontalGutter: 50,
    horizontalDragMaxWidth: 32
  });
  
//===========================Disabling overlay for Yandex Map===================
  $(document).on("click", ".map__overlay", function() {
    $(".map__overlay").fadeOut();
  });
});
