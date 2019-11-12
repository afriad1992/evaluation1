var TOT,PORT,PAP,REM;
var QTECOM=parseInt(prompt("saisir la quantité commandée"));
var PU=parseInt(prompt("saisir le prix unitaire"));
TOT=QTECOM*PU;

      if(TOT>500){PORT=0;}            // si le total est superieur a 500 on a un port nul
      else{PORT=Math.max((0.02*TOT),6);}/* si le total est inferiur ou egal a  500 euros
                                          le port prends la valeur maximal de 6  et 2% DU TOTAL*/

      if(TOT<=100){REM=0;}    // si le total est inferieur a 100 il y aura aucune remise          
             else {if(TOT<=200){REM+=0.05*TOT;}  // si le total est entre  100  et 200 EUROSil y aura une remise  de 5% DU TOTAL
                   else{REM=0.1*TOT;}// si le total est superieur a 200 euros il y aura une remise  de 10% DU TOTAL
                   }
PAP=TOT+PORT-REM;
console.log("le total est :"+" "+TOT+"\n"+"le port : "+" "+PORT+"\n"+"la remise est :"+" "+REM+"\n "+"le prix à payer est:"+" "+PAP);




