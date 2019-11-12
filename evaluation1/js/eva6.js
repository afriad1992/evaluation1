var tab=["Audrez","Aurelien","Flavien","Jérémy","Laurent","Melik","Nouara","Salim","Samuel","Stephane"];
var mots=prompt("saisir un mot à chercher dans le tableau");
var pos=tab.indexOf(mots);//pos corresponds a la premiere position ou se trouve le mots recherché
if(pos!=-1){for(j=pos;j<tab.length;j++){tab[j]=tab[j+1];}/*chaque cellule prends la valeur de celle
                                                          qui la suive a partir de la position du mots recherche*/
           tab[(tab.length)-1]='""';
           alert(tab);}
      else{alert("ce mots ne ce trouve pas dans le tableau");
                  }
