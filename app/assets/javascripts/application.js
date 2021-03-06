// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require react
//= require react_ujs
//= require components
//= require_tree .

function changeBodyScroll() {
    var nav = document.getElementsByTagName('nav');
    var body = document.getElementsByTagName('body');
    var navClass = nav[0].className;

    if (navClass == 'not-active') {
        navClass = 'inactive';
        body[0].className = 'scroll-inactive';

    } else {
        navClass = 'active';
        body[0].className = 'scroll-active';
    }

}