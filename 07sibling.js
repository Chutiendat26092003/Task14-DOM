var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling; // phần tử trước
var nextItem = startItem.nextSibling; // phần tử sau

prevItem.className = 'complete';
nextItem.className = 'cool';