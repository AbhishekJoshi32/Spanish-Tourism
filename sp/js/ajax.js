$(function (global) {

var dc = {};
var homeHtml = "snippets/home-snippet.html";

var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};


document.addEventListener("DOMContentLoaded", function (event) {

$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});



dc.test = function () {
  console.log("Chagav");
document.getElementById("out").className="body wow fadeInUpBig ";


$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

global.$dc = dc;
}(window));

