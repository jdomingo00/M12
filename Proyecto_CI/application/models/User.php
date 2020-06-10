<?php
	class User extends CI_Model {
		private $username;
		private $passwd;
		private $tipo;
	
		public function getUserName() {
			return $this->username;
		}
	
		public function getPasswd() {
			return $this->passwd;
		}
	
		public function getTipo() {
			return $this->tipo;
		}
	
		public function __construct() {
			$this->username = '';
			$this->passwd = '';
			$this->tipo = '';
	
			$this->load->database('escueladb');
		}

		public function getUsers() {
			$query = $this->db->get('usuarios');
			$users = [];
			foreach ($query->result() as $data) {
				$user = $this->createuserFromRawObject($data);
				array_push($users, $user);
			}
			
			return $users;
		}
	
	
		private function createUserFromRawObject($data) {
			$user = new User();

			$user->username = $data->username;
			$user->passwd = $data->passwd;
			$user->tipo = $data->tipo;
	
			return $user;
		}

		public function toArray() {
			return array(
				'username' => $this->username,
				'passwd' => $this->passwd,
				'tipo' => $this->tipo
			);
		}


		public function login($userName, $passwd) {
			$condition = array('username' => $userName, 'passwd' => $passwd, 'verificado' => true);
			$query = $this->db->get_where('usuarios', $condition);
	
			if ($query->num_rows() != 1) return null;
			else return $query->result_array()[0]['tipo'];
		}
	}
?>
