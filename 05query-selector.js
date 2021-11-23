var el = document.querySelector('li.hot');
el.className = 'cool'; // sử dụng querySelector thì nó chỉ trỏ đến phần tử đầu trong tất cả

// do trên đã trỏ đến phần tử đầu nên giừo sẽ bắt đầu từ phân tử 1 là phần tử 0
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool'; // querySelectorAll trỏ đến tất cả
