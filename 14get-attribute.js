var firstItem = document.getElementById('one');
if(firstItem.hasAttribute('class')){ // nếu trong id có class thì lấy ra class đó
    var attr = firstItem.getAttribute('class');
    var el = document.getElementById('scriptResults');
    el.innerHTML = '<p>The First item has a class name: ' + attr + '</p>';
}