<?php
    use chriskacerguis\RestServer\RestController;
	require_once(APPPATH . 'libraries/codeigniter-restserver/src/RestController.php');
	require_once(APPPATH . 'libraries/codeigniter-restserver/src/Format.php');

    class WS_ProfesoresController extends RestController {

        public function __construct() {
			parent::__construct();

			$this->load->model('profesor');
		}

		
		protected function getProfesores_get() {
			$profesores = $this->profesor->getProfesores();
			
			if (count($profesores) == 0) {
				$httpcode = RestController::HTTP_NOT_FOUND;
				$message = array(
					'msg' => 'Profesores no encontrados'
				);
			} else {
				$message = [];
				$httpcode = RestController::HTTP_OK;
				foreach ($profesores as $profesor) {
					array_push($message, $profesor->toArray());
				}
			}
			
			$this->setHeaders();
			$this->response($message, $httpcode);
		}

		protected function getProfesor_get($profesor) {
			$profesores = $this->profesor->getProfesor($profesor);
			
			if (count($profesores) == 0) {
				$httpcode = RestController::HTTP_NOT_FOUND;
				$message = array(
					'msg' => 'Profesor no encontrados'
				);
			} else {
				$message = $profesores[0]->toArray();
				$httpcode = RestController::HTTP_OK;
			}
			
			$this->setHeaders();
			$this->response($message, $httpcode);
		}

		protected function editProfesor_post($profesor) {
			$datos = $this->post('datos');

			$result = $this->profesor->editProfesor($datos, $profesor);

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

		public function getProfesores_options() {
			$this->setOptions();
		}

		public function getProfesor_options() {
			$this->setOptions();
		}

		public function editProfesor_options() {
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

