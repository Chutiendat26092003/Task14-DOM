var startItem = document.getElementsByTagName('ul')[0]; // ul đầu tiên
var firstItem = startItem.firstChild; // đầu tiên trong ul
var lastItem = startItem.lastChild; // cuối cùng

firstItem.className = 'complete';
lastItem.className = 'cool';