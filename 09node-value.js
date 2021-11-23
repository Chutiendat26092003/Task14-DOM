var itemTwo = document.getElementById('rwo');
var elText = itemTwo.firstChild.nodeValue; // lấy ra giá trị
elText = elText.replace('pine nuts','kale');
// lấy giá trị pine nuts đổi thành kale
itemTwo.firstChild.nodeValue = elText;