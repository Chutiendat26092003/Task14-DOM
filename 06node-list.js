var hotItems = document.querySelectorAll('li.hot');
//  có 3 li có class = 'hot'
if(hotItems.length > 0){
    for(var i = 0; i < hotItems.length; i++){
        hotItems[i].className = 'cool';
    }
}