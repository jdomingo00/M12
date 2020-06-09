<?php
    use chriskacerguis\RestServer\RestController;
	require_once(APPPATH . 'libraries/codeigniter-restserver/src/RestController.php');
	require_once(APPPATH . 'libraries/codeigniter-restserver/src/Format.php');

    class WS_TipoClasesController extends RestController {

        public function __construct() {
			parent::__construct();

			$this->load->model('tipoClase');
		}

		
		protected function getTipoClases_get() {
			$tipoClases = $this->tipoClase->gettipoClases();
			
			if (count($tipoClases) == 0) {
				$httpcode = RestController::HTTP_NOT_FOUND;
				$message = array(
					'msg' => 'tipoClases no encontrados'
				);
			} else {
				$message = [];
				$httpcode = RestController::HTTP_OK;
				foreach ($tipoClases as $tipoClase) {
					array_push($message, $tipoClase->toArray());
				}
			}
			
			// parent::setHeaders();
			$this->response($message, $httpcode);
		}

		public function getTipoClases_options() {
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

