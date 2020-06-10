<?php
	class Clase extends CI_Model {
		private $id;
		private $hora;
		private $dia;
		private $lugar;
		private $nivel;
		private $profesor;
		private $color;
	
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

		public function getColor() {
			return $this->color;
		}
	
		public function __construct() {
			$this->id = '';
			$this->hora = '';
			$this->dia = '';
			$this->lugar = '';
			$this->nivel = '';
			$this->profesor = '';
			$this->color = '';
	
			// Càrrega i obertura de la BD
			$this->load->database('escueladb');    // -> $this->db
		}

		public function getClases() {
			$query = $this->db->get('clases');
			$clases = [];
			foreach ($query->result() as $data) {
				$clase = $this->createClaseFromRawObject($data);
				array_push($clases, $clase);
			}
			
			return $clases;
		}

		public function getNextClaseProf($profesor) {
			$query = $this->db->query("SELECT * from clases where dia>=CURRENT_DATE and hora<(CURRENT_TIME(0) + '01:00:00'::interval) and profesor = '" . $profesor . "' order by hora,dia asc limit 1;");
			
			if ($query->num_rows() != 1) return null;
			else return $query->result_array()[0];
		}

		public function getNextClaseAlumn($alumno) {
			$query = $this->db->query("SELECT clases.* from clases INNER JOIN horarios on clases.ID=horarios.clase where horarios.alumno='" . $alumno . "' and clases.dia>=CURRENT_DATE and clases.hora<(CURRENT_TIME(0) + '01:00:00'::interval) order by hora,dia asc limit 1;");
			
			if ($query->num_rows() != 1) return null;
			else return $query->result_array()[0];
		}
	
		public function getClasesProfesor($profesor) {
			$query = $this->db->get_where('clases', array('profesor' => $profesor));
			$clases = [];
			foreach ($query->result() as $data) {
				$clase = $this->createClaseFromRawObject($data);
				array_push($clases, $clase);
			}
			
			return $clases;
		}

		public function getClasesAlumno($alumno) {
			$query = $this->db->query("SELECT clases.* from clases INNER JOIN horarios on clases.ID=horarios.clase where horarios.alumno='" . $alumno . "';");
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
			$clase->color = $data->color;
	
			return $clase;
		}

		public function toArray() {
			return array(
				'id' => $this->id,
				'hora' => $this->hora,
				'dia' => $this->dia,
				'lugar' => $this->lugar,
				'nivel' => $this->nivel,
				'profesor' => $this->profesor,
				'color' => $this->color
			);
		}
	}
?>
