

/*
document.getElementById('bulb').src='pic_bulboff.gif'

function allumer(){
  document.getElementById('bulb').src='pic_bulbon.gif';
}

function eteindre(){
  document.getElementById('bulb').src='pic_bulboff.gif';
}
*/

var valeur = 0;


function alleteindre(){
   if (valeur == 0) {  document.getElementById('bulb').src='pic_bulbon.gif';
     document.getElementById('alleteindre').innerHTML='eteindre';
     valeur = 1;
 }
  else   {  document.getElementById('bulb').src='pic_bulboff.gif';
    document.getElementById('alleteindre').innerHTML='allumer';
    valeur = 0;
}
}
