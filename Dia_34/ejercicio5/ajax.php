<?php

$alumno = $_REQUEST['alumno'];

$materia = $_REQUEST['materia'];

switch ($alumno){

	case 'Juan Félix Mateos':

		switch ($materia){

			case 'Matemáticas':

				echo '7.5';

				break;

			case 'Lenguaje':

				echo '9.5';

				break;

		}

		break;

	case 'Ana Irene Palma':

		switch ($materia){

			case 'Matemáticas':

				echo '8.5';

				break;

			case 'Lenguaje':

				echo '7.5';

				break;

		}

		break;

	}

?>

