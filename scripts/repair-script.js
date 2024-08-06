var modil = document.getElementById('the_modil')
var btn  = document.getElementById('btn')



btn.onclick = function(){
    modil.style.display = "flex";
    document.querySelector('.description').classList.remove('zin')
    document.querySelector('.description').classList.add('zin2')

}

var close  = document.getElementsByClassName('close')[0];

close.onclick = function(){
    modil.style.display='none'
    document.querySelector('.description').classList.add('zin')
    document.querySelector('.description').classList.remove('zin2')

}
