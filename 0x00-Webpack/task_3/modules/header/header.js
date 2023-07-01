import $ from 'jquery';
import "./header.css"

$(document).ready(function () {
    console.log('Init header');
    $('body').append("<header></header>");
    $('header').append('<div id="logo"></div>');
    $('header').append('<h1>Holberton Dashboard</h1>');
});