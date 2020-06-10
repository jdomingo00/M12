<?php
	class Profesor extends CI_Model {
		private $username;
		private $passwd;
		private $tipo;
		private $nombre;
		private $apellidos;
		private $email;
		private $telefono;
	
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
	
		public function __construct() {
			$this->username = '';
			$this->passwd = '';
			$this->tipo = '';
			$this->nombre = '';
			$this->apellidos = '';
			$this->email = '';
			$this->telefono = '';
	
			// Càrrega i obertura de la BD
			$this->load->database('escueladb');    // -> $this->db
		}

		public function getProfesores() {
			$query = $this->db->get('profesores');    // SELECT * FROM profesores;
			$profesores = [];
			foreach ($query->result() as $data) {
				$profesor = $this->createProfesorFromRawObject($data);
				array_push($profesores, $profesor);
			}
			
			return $profesores;
		}

		public function getProfesor($profesor) {
			$query = $this->db->get_where('profesores', array('username' => $profesor));
			$profesores = [];
			foreach ($query->result() as $data) {
				$profesor = $this->createProfesorFromRawObject($data);
				array_push($profesores, $profesor);
			}
			
			return $profesores;
		}

		public function editProfesor($datos, $profesor) {
			$query = $this->db->query("UPDATE profesores set nombre ='" . $datos['nombre'] . "', apellidos ='" . $datos['apellidos'] . "', telefono ='" . $datos['telefono'] . "', email ='" . $datos['email'] . "' WHERE username = '" . $profesor . "';");
		
			return $query;
		}

		public function insertProfesor($datos) {
			$query = $this->db->query("INSERT INTO profesores VALUES ('" . $datos['username'] . "', '" . $datos['passwd'] . "', 1, true, '" . $datos['nombre'] . "', '" . $datos['apellidos'] . "', '" . $datos['email'] . "', '" . $datos['telefono'] . "');");
		
			return $query;
		}

		public function getListAlumnosProf($profesor) {
			$query = $this->db->query("SELECT alumnos.nombre, alumnos.apellidos from alumnos inner join horarios on alumnos.username=horarios.alumno where horarios.clase = (SELECT clases.ID from clases where dia>=CURRENT_DATE and hora<(CURRENT_TIME(0) + '01:00:00'::interval) and profesor = '" . $profesor . "' order by hora,dia asc limit 1);");
			
			return $query->result_array();
		}

		private function createProfesorFromRawObject($data) {
			$profesor = new Profesor();
	
			$profesor->username = $data->username;
			$profesor->passwd = $data->passwd;
			$profesor->tipo = $data->tipo;
			$profesor->nombre = $data->nombre;
			$profesor->apellidos = $data->apellidos;
			$profesor->email = $data->email;
			$profesor->telefono = $data->telefono;
	
			return $profesor;
		}

		public function toArray() {
			return array(
				'username' => $this->username,
				'passwd' => $this->passwd,
				'tipo' => $this->tipo,
				'nombre' => $this->nombre,
				'apellidos' => $this->apellidos,
				'email' => $this->email,
				'telefono' => $this->telefono
			);
		}
	}
?>
