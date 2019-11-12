var N;
var ctj=0;
 var ctm=0;
 var ctv=0;
do{N=parseInt(prompt("saisir votre age"));
if(N<20){ctj++;}/*on a introduit un compteur des jeunes il s incremente a 
                 chaque fois on trouve un age qui correspont a un jeune*/

if(20<=N && N<=40){ctm++;}/*on a introduit un compteur des moyens il s incremente a 
                      chaque fois on trouve un age qui correspont a un age moyen*/

if(N>40){ctv++;}/*on a introduit un compteur des vieux il s incremente a 
                chaque fois on trouve un age qui correspont a un vieux*/

}

while (N!=100);
console.log("le nombre des jeunes est :"+" "+ctj+"\n"+"le nombre des moyens est :"+" "+ctm+"\n"+"le nombre des vieux est :"+" "+ctv);
