(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var apiKey = "f9040cfe6c7c460a034f37bc3a4311e7";

$(document).ready(function(){
  $('#drsearch').click(function(event){
    var symptom = $('#search').val();
    $('#search').val("");
    $("#showDoctor").text('<p>Your ' + symptom + ' has been recorded!</p>');
  });
});

},{}]},{},[1]);
