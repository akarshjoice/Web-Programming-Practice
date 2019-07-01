var y=document.getElementById("2")
 function fun()
   { var p=document.createElement("li"); 
     var s=document.getElementById("1").value;
     var t=document.createTextNode(s);
     p.appendChild(t);
     document.getElementById("3").appendChild(p);
   }

function callfun()
  {
  	count+=1;
  	var p=z.nextSibling();
  	p.nodeValue=count;
  }

y.addEventLisner('click',fun,false);
window.addEventLisner('DOMnodeInserted',callfun,false);
