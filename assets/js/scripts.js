// scripts.js — Icon Wall
// No JS required for layout or reveal: all entrance animations are
// pure CSS and end in the visible state.
//
// Safety net only: if any animation state ever leaves elements hidden,
// force everything visible after 1.5s.

(function () {
  'use strict';

  setTimeout(function () {
    var nodes = document.querySelectorAll('.entry, .hang');
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].style.opacity = '1';
      nodes[i].style.animation = 'none';
    }
  }, 1500);
})();
