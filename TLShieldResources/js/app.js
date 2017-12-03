window.onload=function(){
    document.getElementById('popup').style.display='none';
}

function popUp(){
    var popup=document.getElementById('popup');
    if(popup.style.display=='none'){
        popup.style.display='block';
    }else{
        popup.style.display='none';
    }    
}

function popupClose(){
    var popup=document.getElementById('popup');
    popup.style.display='none';
}