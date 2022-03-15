<?php
	//header("Content-type: text/xml");
	$empresa = $_POST['empresa'];
	$valor = rand(10,100)/10;
	echo <<<FIN
	<?xml version="1.0" encoding="UTF-8" ?>
	<cotizacion>
	<empresa>$empresa</empresa>
	<valor>$valor</valor>
	</cotizacion>
	FIN;
?>