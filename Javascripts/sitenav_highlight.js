function clearCurrentLink(){
    var a = document.getElementsByTagName("A");
    for(var i=0;i<a.length;i++){
        if(a[i].href.split("#")[0] == window.location.href.split("#")[0]){
            removeNode(a[i]);
        }
    }
}

function removeNode(n){
    if(n.hasChildNodes()){
        for(var i=0;i<n.childNodes.length;i++){
            n.parentNode.insertBefore(n.childNodes[i].cloneNode(true),n);
        }
    }
    n.parentNode.removeChild(n);
}

function updateActivePage(){
  $('a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('active_page');
    }
  });
}