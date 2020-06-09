<?php
	class Alumno extends CI_Model {
		private $username;
		private $passwd;
		private $tipo;
		private $nombre;
		private $apellidos;
		private $email;
		private $telefono;
		private $verificado;
	
		public function getUserName() {
			return $this->username;
		}
	
		public function getPasswd() {
			return $this->passwd;
		}
	
		public function getTipo() {
			return $this->tipo;
		}

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
			$this->username = '';
			$this->passwd = '';
			$this->tipo = '';
			$this->nombre = '';
			$this->apellidos = '';
			$this->email = '';
			$this->telefono = '';
			$this->verificado = '';
	
			// Càrrega i obertura de la BD
			$this->load->database('escueladb');    // -> $this->db
		}

		public function getAlumnos() {
			$query = $this->db->get('alumnos');    // SELECT * FROM alumnos;
			$alumnos = [];
			foreach ($query->result() as $data) {
				$alumno = $this->createAlumnoFromRawObject($data);
				array_push($alumnos, $alumno);
			}
			
			return $alumnos;
		}

		public function getAlumno($alumno) {
			$query = $this->db->get_where('alumnos', array('username' => $alumno));
			$alumnos = [];
			foreach ($query->result() as $data) {
				$alumno = $this->createAlumnoFromRawObject($data);
				array_push($alumnos, $alumno);
			}
			
			return $alumnos;
		}

		public function editAlumno($datos, $alumno) {
			$query = $this->db->query("UPDATE alumnos set nombre ='" . $datos['nombre'] . "', apellidos ='" . $datos['apellidos'] . "', telefono ='" . $datos['telefono'] . "', email ='" . $datos['email'] . "' WHERE username = '" . $alumno . "';");
		
			return $query;
		}

		private function createAlumnoFromRawObject($data) {
			$alumno = new Alumno();
	
			$alumno->username = $data->username;
			$alumno->passwd = $data->passwd;
			$alumno->tipo = $data->tipo;
			$alumno->nombre = $data->nombre;
			$alumno->apellidos = $data->apellidos;
			$alumno->email = $data->email;
			$alumno->telefono = $data->telefono;
			$alumno->verificado = $data->verificado;
	
			return $alumno;
		}

		public function toArray() {
			return array(
				'username' => $this->username,
				'passwd' => $this->passwd,
				'tipo' => $this->tipo,
				'nombre' => $this->nombre,
				'apellidos' => $this->apellidos,
				'email' => $this->email,
				'telefono' => $this->telefono,
				'verificado' => $this->verificado
			);
		}
	}
?>
