var elements = document.getElementsByClassName('hot');

if(elements.length > 2){ // nếu số class = 'hot' > 2
    var el = elements[2];
    el.className = 'cool';
}