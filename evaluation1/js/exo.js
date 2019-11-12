
 function exercice1(QTECOM,PU){
     QTECOM=parseInt(prompt("saisir la quantité commandée"));
     PU=parseInt(prompt("saisir le prix unitaire"));
    TOT=QTECOM*PU;
    
          if(TOT>500){PORT=0;}            // si le total est superieur a 500 on a un port nul
          else{PORT=Math.max((0.02*TOT),6);}/* si le total est inferiur ou egal a  500 euros
                                              le port prends la valeur maximal de 6  et 2% DU TOTAL*/
    
          if(TOT<=100){REM=0;}    // si le total est inferieur a 100 il y aura aucune remise          
                 else {if(TOT<=200){REM+=0.05*TOT;}  // si le total est entre  100  et 200 EUROSil y aura une remise  de 5% DU TOTAL
                       else{REM=0.1*TOT;}// si le total est superieur a 200 euros il y aura une remise  de 10% DU TOTAL
                       }
    PAP=TOT+PORT-REM;
    alert("le total est :"+" "+TOT+"\n"+"le port : "+" "+PORT+"\n"+"la remise est :"+" "+REM+"\n "+"le prix à payer est:"+" "+PAP);   
    }
    function exercice2(N){ N=parseInt(prompt("saisir un nombre entier"));
    var S=0;//initialisation de la somme
    
    for (i=0;i<N;i++)
    {S+=i;}//on a in troduit une variable a chaque iteration on l 'ajout le nombre i
    alert("la somme des nombres inferieurs à N sont :"+S);}

    function exercice3(){var i=1;
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
        alert("le maximun est :"+Max+"\n le minumum est :"+Inf);
        
        }

    function exercice4(){var N;
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
        alert("le nombre des jeunes est :"+" "+ctj+"\n"+"le nombre des moyens est :"+" "+ctm+"\n"+"le nombre des vieux est :"+" "+ctv);
        }


    function TableMultiplication(){
   var tab="";
        for(i=0;i<=9;i++)
      {tab+=7+" "+"x"+" "+i+" "+"="+7*i+"\n"; } 
       alert("la table de multiplucation de 7 est \n"+tab);
     } 
 



    var exercice6 =function (){
let tab=["Audrez","Aurelien","Flavien","Jérémy","Laurent","Melik","Nouara","Salim","Samuel","Stephane"];
    let mots=prompt("saisir un mot à chercher dans le tableau");
    let pos=tab.indexOf(mots);//pos corresponds a la premiere position ou se trouve le mots recherché
    if(pos!=-1){for(j=pos;j<tab.length;j++){tab[j]=tab[j+1];}/*chaque cellule prends la valeur de celle
                                                              qui la suive a partir de la position du mots recherche*/
             tab[(tab.length)-1]='""';
               alert(tab);}
          else{alert("ce mots ne se trouve pas dans le tableau");
                      }
    }