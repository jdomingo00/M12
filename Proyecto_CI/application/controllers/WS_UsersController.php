<?php
    use chriskacerguis\RestServer\RestController;
	require_once(APPPATH . 'libraries/codeigniter-restserver/src/RestController.php');
	require_once(APPPATH . 'libraries/codeigniter-restserver/src/Format.php');

    class WS_LoginController extends RestController {

        public function __construct() {
			parent::__construct();

			$this->load->model('user');
		}

		
		protected function getUsers_get() {
			$users = $this->user->getUsers();
			
			if (count($users) == 0) {
				$httpcode = RestController::HTTP_NOT_FOUND;
				$message = array(
					'msg' => 'Users no trobats'
				);
			} else {
				$message = [];
				$httpcode = RestController::HTTP_OK;
				foreach ($users as $user) {
					array_push($message, $user->toArray());
				}
			}
			
			// parent::setHeaders();
			$this->response($message, $httpcode);
		}

		public function getUsers_options() {
			$this->setOptions();
		}
		
		protected function login_get($userName, $passwd) {
			$user = $this->user->login($userName, $passwd);

			if($user == null) {
				$httpcode = RestController::HTTP_NOT_FOUND;
				$message = array(
					'msg' => 'User ' . $userName . ' no trobat'
				);
			} else {
				$httpcode = RestController::HTTP_OK;
				$message = $user;
			}

			parent::setHeaders();
			$this->response($message, $httpcode);
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
