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
			
			// parent::setHeaders();
			$this->response($message, $httpcode);
		}

		public function getAlumnos_options() {
			$this->setOptions();
		}
		
		protected function setHeaders($token = null) {
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

