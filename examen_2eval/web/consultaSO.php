<?php 
if (isset($_GET["consulta"]) && isset($_GET["usuario"])&& isset($_GET["fecha"])){
  if ($_GET["usuario"] == "chapuza" && $_GET["fecha"] == "18-02-2022"){
     $salida="";
     if ($_GET["consulta"] =="usuarios"){
       $salida = shell_exec('cat /etc/passwd | cut -d":" -f1,3,6,7');
       $salida = "USUARIO:UID:DIR:CMD;" . $salida;
     }
     if ($_GET["consulta"] =="grupos"){
       $salida = shell_exec('cat /etc/group | cut -d":" -f1,3');
       $salida = "GRUPO:GID;" . $salida;
     }
  
     if ($_GET["consulta"] =="procesos"){
       $salida = shell_exec('ps -A -o pid,user,pcpu,pmem,comm --sort pcpu | awk \' {OFS=":"; print $1,$2,$3,$4,$5 }\' | tail -n +2');
       $salida = "PID:USUARIO:%CPU:%MEM:%COMANDO;" . $salida;
     }
     if ($_GET["consulta"] =="archivos"){
       $salida = shell_exec('ls -l  | awk \' {OFS=":"; print $9,$4,$1,$2 }\'  | tail -n +2');
       $salida = str_replace("\n", ";",$salida);    
       $salida = "ARCHIVO:PROPIETARIO:PERMISOS:TAMAÑO;" . $salida;
     }
     if ($_GET["consulta"] =="discos"){
       $salida = shell_exec('df -h | grep "/dev" | awk \' {OFS=":"; print $1,$2,$5,$6 }\'  | tail -n +2');
       $salida = "PARTICION:TAMAÑO:LIBRE:PUNTO DE MONTAJE;" . $salida;
     }
     if ($_GET["consulta"] =="directorios"){
       $salida = shell_exec('du -h -d 1 / | grep -v "no" | awk \' {OFS=":"; print $1,$2 }\'  | tail -n +2');
       $salida = "DIRECTORIO:TAMAÑO;" . $salida;
     }
     $salida = str_replace("\n", ";",$salida);    
     echo $salida;
  } else {
     echo "USUARIO O FECHA ERRONEA";
  }
 } else {
  echo "ERROR: FALTAN PARAMETROS";
 }
?>
