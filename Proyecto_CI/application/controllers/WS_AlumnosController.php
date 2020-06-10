<?php
    use chriskacerguis\RestServer\RestController;
	require_once(APPPATH . 'libraries/codeigniter-restserver/src/RestController.php');
	require_once(APPPATH . 'libraries/codeigniter-restserver/src/Format.php');

    class WS_AlumnosController extends RestController {

        public function __construct() {
			parent::__construct();

			$this->load->model('alumno');
		}

		
		protected function getAlumnos_get() {
			$alumnos = $this->alumno->getAlumnos();
			
			if (count($alumnos) == 0) {
				$httpcode = RestController::HTTP_NOT_FOUND;
				$message = array(
					'msg' => 'Alumnos no encontrados'
				);
			} else {
				$message = [];
				$httpcode = RestController::HTTP_OK;
				foreach ($alumnos as $alumno) {
					array_push($message, $alumno->toArray());
				}
			}
			
			$this->setHeaders();
			$this->response($message, $httpcode);
		}

		protected function getAlumnosNoVerificados_get() {
			$alumnos = $this->alumno->getAlumnosNoVerificados();
			
			if (count($alumnos) == 0) {
				$httpcode = RestController::HTTP_NOT_FOUND;
				$message = array(
					'msg' => 'Alumnos no encontrados'
				);
			} else {
				$message = [];
				$httpcode = RestController::HTTP_OK;
				foreach ($alumnos as $alumno) {
					array_push($message, $alumno->toArray());
				}
			}
			
			$this->setHeaders();
			$this->response($message, $httpcode);
		}

		protected function getAlumno_get($alumno) {
			$alumnos = $this->alumno->getAlumno($alumno);
			
			if (count($alumnos) == 0) {
				$httpcode = RestController::HTTP_NOT_FOUND;
				$message = array(
					'msg' => 'Alumnos no encontrados'
				);
			} else {
				$message = $alumnos[0]->toArray();
				$httpcode = RestController::HTTP_OK;

			}
			
			$this->setHeaders();
			$this->response($message, $httpcode);
		}

		protected function editAlumno_post($alumno) {
			$datos = $this->post('datos');

			$result = $this->alumno->editAlumno($datos, $alumno);

			if($result) {
				$httpcode = RestController::HTTP_OK;
				$message = array(
					'msg' => 'Editado con exito'
				);
			} else {
				$httpcode = RestController::HTTP_INTERNAL_ERROR;
				$message = array(
					'msg' => 'Error'
				);
			}

			$this->setHeaders();
			$this->response($message, $httpcode);
		}

		protected function editAlumnoAsistencia_post($alumno) {
			$variable = $this->post('variable');

			$result = $this->alumno->editAlumnoAsistencia($variable, $alumno);

			if($result) {
				$httpcode = RestController::HTTP_OK;
				$message = array(
					'msg' => 'Editado con exito'
				);
			} else {
				$httpcode = RestController::HTTP_INTERNAL_ERROR;
				$message = array(
					'msg' => 'Error'
				);
			}

			$this->setHeaders();
			$this->response($message, $httpcode);
		}

		protected function verificarAlumno_post($alumno) {
			$datos = $this->post('datos');

			$result = $this->alumno->verificarAlumno($alumno);

			if($result) {
				$httpcode = RestController::HTTP_OK;
				$message = array(
					'msg' => 'Varificado con exito'
				);
			} else {
				$httpcode = RestController::HTTP_INTERNAL_ERROR;
				$message = array(
					'msg' => 'Error'
				);
			}

			$this->setHeaders();
			$this->response($message, $httpcode);
		}
		
		protected function insertAlumno_post() {
			$datos = $this->post('datos');

			$result = $this->alumno->insertAlumno($datos);

			if($result) {
				$httpcode = RestController::HTTP_OK;
				$message = array(
					'msg' => 'Insertado con exito'
				);
			} else {
				$httpcode = RestController::HTTP_INTERNAL_ERROR;
				$message = array(
					'msg' => 'Error'
				);
			}

			$this->setHeaders();
			$this->response($message, $httpcode);
		}

		public function getAlumnos_options() {
			$this->setOptions();
		}

		public function getAlumnosNoVerificados_options() {
			$this->setOptions();
		}

		public function getAlumno_options() {
			$this->setOptions();
		}

		public function editAlumno_options() {
			$this->setOptions();
		}

		public function editAlumnoAsistencia_options() {
			$this->setOptions();
		}

		public function insertAlumno_options() {
			$this->setOptions();
		}

		public function verificarAlumno_options() {
			$this->setOptions();
		}
		
		protected function setHeaders() {
			$this->output->set_header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-type, Accept");
            $this->output->set_header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
			$this->output->set_header("Access-Control-Allow-Origin: *");
		}

		protected function setOptions() {
			$this->output->set_header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-type, Accept, Authorization");
			$this->output->set_header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
			$this->output->set_header("Access-Control-Allow-Origin: *");

			$this->response(NULL, RestController::HTTP_OK);
		}
    }
?>

