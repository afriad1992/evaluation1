var i=1;
var N=parseInt(prompt("donner un nombre N° :"+i));
var Max=N;//initialisation de Max
var Inf=N;//initialisation de Inf

while(N!=0)
 {  i++;
    N=parseInt(prompt("donner un nombre N°:"+i));
    if(N==0){break;}//on arret la boucle si l utilisateur a saisi 0
  if(N<=Inf) {Inf=N;} // l'inf prend a chaque fois  la valeur minimal du nouveau nombre et de l'ancien nombre 
  if(N>=Max) {Max=N;}// le max prend a chaque fois  la valeur maximal du nouveau nombre et de l'ancien nombre 


}
console.log("le maximun est :"+Max+"\n le minumum est :"+Inf);

