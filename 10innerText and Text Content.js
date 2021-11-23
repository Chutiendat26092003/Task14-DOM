var firstItem = document.getElementById('one');
var showTextContent = firstItem.innerHTML;
var showInnerText = firstItem.innerText;

var msg = '<p>textContent:' + showTextContent + '</p>';
    msg += '<p>innerText:' + showInnerText + '</p>';

var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread'; //  chuyển ptu của id one thành 'sourdough bread'