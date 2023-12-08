$(document).ready(function () {
  // Example-01: Draggable
  $("#draggable-1").draggable();

  // Example-02: Droppable
  $("#draggable-2").draggable();
  $("#droppable-2").droppable({
    drop: function (event, ui) {
      $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
    },
  });

  // Example-03: Sortable
  $("#sortable-3").sortable();

  // Example-04: Accordion
  $("#accordion-4").accordion();

  // Example-05: AutoComplete
  var subjects = ["Bangla", "English", "Mathematics", "Physics", "Chemistry"];
  $("#subject").autocomplete({
    source: subjects,
  });

  // Example-06: Datepicker
  $("#datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
  });

  // Example-07: Tabs
  $("#ex-7 #tabs").tabs();

  // Example-08: Tooltip
  $("#ex-8").tooltip();

  // Example-09: AddClass
  $("#ex-9 button").on("click", function () {
    $("#ex-9 .red").addClass("purple", 2000);
  });

  // Example-10: Hide
  const runEffect = () => {
    const selectedEffect = $("#effectTypes").val();

    let options = {};

    if (selectedEffect === "scale") {
      options = { percent: 50 };
    } else if (selectedEffect === "size") {
      options = { to: { width: 200, height: 60 } };
    }

    $("#effect").hide(selectedEffect, options, 1000, callback);
  };

  const callback = () => {
    setTimeout(function () {
      $("#effect").removeAttr("style").hide().fadeIn();
    }, 1000);
  };

  $("#button").on("click", function () {
    runEffect();
  });

  // Example-11: Show
  function runShowEffect() {
    var selectedShowEffect = $("#effectTypes-11").val();

    var options = {};
    if (selectedShowEffect === "scale") {
      options = { percent: 50 };
    } else if (selectedShowEffect === "size") {
      options = { to: { width: 280, height: 185 } };
    }

    $("#effect-11").show(selectedShowEffect, options, 500, callbackShow);
  }

  function callbackShow() {
    setTimeout(function () {
      $("#effect-11:visible").removeAttr("style").fadeOut();
    }, 1000);
  }

  $("#button-11").on("click", function () {
    runShowEffect();
  });

  $("#effect-11").hide();
});
