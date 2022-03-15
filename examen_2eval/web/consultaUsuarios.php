<?php 
if (isset($_GET["servidor"])){
   if ($_GET["servidor"] =="GOOGLE"){
     $lista= json_decode('[{"nombre":"pedro","foto":"user1.png","clave":"1234"},
     {"nombre":"marcos","foto":"user2.png","clave":"1134"},
     {"nombre":"jose","foto":"user3.png","clave":"3134"},
     {"nombre":"antonio","foto":"user4.png","clave":"2134"},
     {"nombre":"pilar","foto":"user5.png","clave":"5134"},
     {"nombre":"maria","foto":"user1.png","clave":"1234"},
     {"nombre":"karmelo","foto":"user2.png","clave":"3134"},
     {"nombre":"sergio","foto":"user3.png","clave":"2134"},
     {"nombre":"sofia","foto":"user4.png","clave":"4134"},
     {"nombre":"sonia","foto":"user5.png","clave":"5134"}
     ]');
   }
   if ($_GET["servidor"] =="AZURE"){
     $lista= json_decode('[{"nombre":"Paloma","foto":"user1.png","clave":"1234"},
     {"nombre":"marcos","foto":"user2.png","clave":"1134"},
     {"nombre":"jose","foto":"user3.png","clave":"3134"},
     {"nombre":"antonio","foto":"user4.png","clave":"1234"},
     {"nombre":"pilar","foto":"user5.png","clave":"5134"},
     {"nombre":"maria","foto":"user1.png","clave":"1234"},
     {"nombre":"karmelo","foto":"user2.png","clave":"3134"},
     {"nombre":"sergio","foto":"user3.png","clave":"1234"},
     {"nombre":"sofia","foto":"user4.png","clave":"4134"},
     {"nombre":"sonia","foto":"user5.png","clave":"1234"}
     ]');
   }
   if ($_GET["servidor"] =="AWS"){
     $lista= json_decode('[{"nombre":"Fernando","foto":"user1.png","clave":"1234"},
     {"nombre":"marcos","foto":"user2.png","clave":"1134"},
     {"nombre":"jose","foto":"user3.png","clave":"3134"},
     {"nombre":"antonio","foto":"user4.png","clave":"1234"},
     {"nombre":"pilar","foto":"user5.png","clave":"5134"},
     {"nombre":"maria","foto":"user1.png","clave":"1234"},
     {"nombre":"karmelo","foto":"user2.png","clave":"3134"},
     {"nombre":"sergio","foto":"user3.png","clave":"2134"},
     {"nombre":"sofia","foto":"user4.png","clave":"1234"},
     {"nombre":"sonia","foto":"user5.png","clave":"1234"}
     ]');
   }
   echo json_encode($lista);
 } else {
  echo "ERROR: FALTAN PARAMETROS";
 }
?>
