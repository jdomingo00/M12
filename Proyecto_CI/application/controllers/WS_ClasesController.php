<?php
    use chriskacerguis\RestServer\RestController;
	require_once(APPPATH . 'libraries/codeigniter-restserver/src/RestController.php');
	require_once(APPPATH . 'libraries/codeigniter-restserver/src/Format.php');

    class WS_ClasesController extends RestController {

        public function __construct() {
			parent::__construct();

			$this->load->model('clase');
		}

		
		protected function getClases_get() {
			$clases = $this->clase->getClases();
			
			if (count($clases) == 0) {
				$httpcode = RestController::HTTP_NOT_FOUND;
				$message = array(
					'msg' => 'Clases no encontradas'
				);
			} else {
				$message = [];
				$httpcode = RestController::HTTP_OK;
				foreach ($clases as $clase) {
					array_push($message, $clase->toArray());
				}
			}
			
			$this->setHeaders();
			$this->response($message, $httpcode);
		}

		protected function getNextClaseProf_get($profesor) {
			$clases = $this->clase->getNextClaseProf($profesor);
			
			if ($clases == null) {
				$httpcode = RestController::HTTP_NOT_FOUND;
				$message = array(
					'msg' => 'Clase no encontrada'
				);
			} else {
				$message = $clases;
				$httpcode = RestController::HTTP_OK;
			}
			
			$this->setHeaders();
			$this->response($message, $httpcode);
		}

		protected function getNextClaseAlumn_get($alumno) {
			$clases = $this->clase->getNextClaseAlumn($alumno);
			
			if ($clases == null) {
				$httpcode = RestController::HTTP_NOT_FOUND;
				$message = array(
					'msg' => 'Clase no encontrada'
				);
			} else {
				$message = $clases;
				$httpcode = RestController::HTTP_OK;
			}
			
			$this->setHeaders();
			$this->response($message, $httpcode);
		}

		protected function getClasesProfesor_get($profesor) {
			$clases = $this->clase->getClasesProfesor($profesor);
			
			if (count($clases) == 0) {
				$httpcode = RestController::HTTP_NOT_FOUND;
				$message = array(
					'msg' => 'Clases no encontradas'
				);
			} else {
				$message = [];
				$httpcode = RestController::HTTP_OK;
				foreach ($clases as $clase) {
					array_push($message, $clase->toArray());
				}
			}
			
			$this->setHeaders();
			$this->response($message, $httpcode);
		}

		protected function getClasesAlumno_get($alumno) {
			$clases = $this->clase->getClasesAlumno($alumno);
			
			if (count($clases) == 0) {
				$httpcode = RestController::HTTP_NOT_FOUND;
				$message = array(
					'msg' => 'Clases no encontradas'
				);
			} else {
				$message = [];
				$httpcode = RestController::HTTP_OK;
				foreach ($clases as $clase) {
					array_push($message, $clase->toArray());
				}
			}
			
			$this->setHeaders();
			$this->response($message, $httpcode);
		}

		public function getClases_options() {
			$this->setOptions();
		}

		public function getNextClaseProf_options() {
			$this->setOptions();
		}

		public function getNextClaseAlumn_options() {
			$this->setOptions();
		}

		public function getClasesProfesor_options() {
			$this->setOptions();
		}

		public function getClasesAlumno_options() {
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
