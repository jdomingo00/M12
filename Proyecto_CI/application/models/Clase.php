<?php
	class Clase extends CI_Model {
		private $id;
		private $hora;
		private $dia;
		private $lugar;
		private $nivel;
		private $profesor;
	
		public function getId() {
			return $this->id;
		}
	
		public function getHora() {
			return $this->hora;
		}
	
		public function getDia() {
			return $this->dia;
		}

		public function getLugar() {
			return $this->lugar;
		}
	
		public function getNivel() {
			return $this->nivel;
		}
	
		public function getProfesor() {
			return $this->profesor;
		}
	
		public function __construct() {
			$this->id = '';
			$this->hora = '';
			$this->dia = '';
			$this->lugar = '';
			$this->nivel = '';
			$this->profesor = '';
	
			// Càrrega i obertura de la BD
			$this->load->database('escueladb');    // -> $this->db
		}

		public function getClases() {
			// $query = $this->db->query("SELECT * FROM usuarios"); = pg_query();
			$query = $this->db->get('clases');    // SELECT * FROM clases;
			$clases = [];
			foreach ($query->result() as $data) {
				$clase = $this->createClaseFromRawObject($data);
				array_push($clases, $clase);
			}
			
			return $clases;
		}
	
		public function getClasesProfesor($profesor) {
			// $query = $this->db->query("SELECT * FROM usuarios"); = pg_query();
			$query = $this->db->get_where('clases', array('profesor' => $profesor));
			$clases = [];
			foreach ($query->result() as $data) {
				$clase = $this->createClaseFromRawObject($data);
				array_push($clases, $clase);
			}
			
			return $clases;
		}
	
		private function createClaseFromRawObject($data) {
			$clase = new Clase();
	
			$clase->id = $data->id;
			$clase->hora = $data->hora;
			$clase->dia = $data->dia;
			$clase->lugar = $data->lugar;
			$clase->nivel = $data->nivel;
			$clase->profesor = $data->profesor;
	
			return $clase;
		}

		public function toArray() {
			return array(
				'id' => $this->id,
				'hora' => $this->hora,
				'dia' => $this->dia,
				'lugar' => $this->lugar,
				'nivel' => $this->nivel,
				'profesor' => $this->profesor
			);
		}
	}
?>
