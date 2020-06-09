<?php
	class Alumno extends CI_Model {
		// private $userName;
		// private $passwd;
		// private $tipo;
		private $nombre;
		private $apellidos;
		private $email;
		private $telefono;
		private $verificado;
	
		// public function getUserName() {
		// 	return $this->userName;
		// }
	
		// public function getPasswd() {
		// 	return $this->passwd;
		// }
	
		// public function getTipo() {
		// 	return $this->tipo;
		// }

		public function getNombre() {
			return $this->nombre;
		}
	
		public function getApellidos() {
			return $this->apellidos;
		}
	
		public function getEmail() {
			return $this->email;
		}

		public function getTelefono() {
			return $this->telefono;
		}

		public function getVerificado() {
			return $this->verificado;
		}
	
		public function __construct() {
			// $this->userName = '';
			// $this->passwd = '';
			// $this->tipo = '';
			$this->nombre = '';
			$this->apellidos = '';
			$this->email = '';
			$this->telefono = '';
			$this->verificado = '';
	
			// Càrrega i obertura de la BD
			$this->load->database('escueladb');    // -> $this->db
		}

		public function getAlumnos() {
			// $query = $this->db->query("SELECT * FROM usuarios"); = pg_query();
			$query = $this->db->get('alumnos');    // SELECT * FROM alumnos;
			$alumnos = [];
			foreach ($query->result() as $data) {
				$alumno = $this->createAlumnoFromRawObject($data);
				array_push($alumnos, $alumno);
			}
			
			return $alumnos;
		}

		private function createAlumnoFromRawObject($data) {
			$alumno = new Alumno();
	
			// $alumno->userName = $data->userName;
			// $alumno->passwd = $data->passwd;
			// $alumno->tipo = $data->tipo;
			$alumno->nombre = $data->nombre;
			$alumno->apellidos = $data->apellidos;
			$alumno->email = $data->email;
			$alumno->telefono = $data->telefono;
			$alumno->verificado = $data->verificado;
	
			return $alumno;
		}

		public function toArray() {
			return array(
				// 'userName' => $this->userName,
				// 'passwd' => $this->passwd,
				// 'tipo' => $this->tipo,
				'nombre' => $this->nombre,
				'apellidos' => $this->apellidos,
				'email' => $this->email,
				'telefono' => $this->telefono,
				'verificado' => $this->verificado
			);
		}
	}
?>
