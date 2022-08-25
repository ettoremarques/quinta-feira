const $ = (el) => document.querySelector(el);

const weekdate = new Date().getDay();

document.querySelectorAll("audio").forEach((el) => {
  el.volume = 1;
});

window.onload = function () {
  $(".no").addEventListener("click", function () {
    if (weekdate === 4) {
      mentiroso();
    } else {
      volta();
    }
  });
  $(".yes").addEventListener("click", function () {
    if (weekdate == 4) {
      acertoMizeravi();
    } else {
      mentiroso();
    }
  });
};

function hideTextShowResponse(answer) {
  $(".wrapper").classList.add("hidden");
  $(".fake-wrapper").classList.remove("hidden");

  switch (answer) {
    case "lie":
      $(".response").classList.add("lie-ani");
      $(".response-fake").classList.add("lie-ani");
      break;
    case "back":
      $(".response").classList.add("back-ani");
      $(".response-fake").classList.add("back-ani");
      break;
    case "correct":
      $(".content").classList.add("happy");
      $(".fake-wrapper").classList.add("correct");
      $(".response").classList.add("correct-ani");
      $(".response-fake").classList.add("correct-ani");
      break;
  }
}

function mentiroso() {
  hideTextShowResponse("lie");
  $(".mentiroso").play();
  $(".response").innerText = "MENTIROSO";
  $(".response-fake").innerText = "MENTIROSO";
}

function acertoMizeravi() {
  hideTextShowResponse("correct");
  $(".audio").play();
  $(".response").innerText = "HOJE É QUINTA FEIRA MEUS BACANAS";
  $(".response-fake").innerText = "HOJE É QUINTA FEIRA MEUS BACANAS";
}

function volta() {
  hideTextShowResponse("back");
  $(".sad").play();
  $(".response").innerText = "Volte quinta para ter uma surpresa";
  $(".response-fake").innerText = "Volte quinta para ter uma surpresa";
}
