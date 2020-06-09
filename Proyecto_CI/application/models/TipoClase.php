<?php
	class TipoClase extends CI_Model {
		private $nivel;
		private $descripcion;

		public function getNivel() {
			return $this->nivel;
		}
	
		public function getDescripcion() {
			return $this->descripcion;
		}
	
		public function __construct() {
			$this->nivel = '';
			$this->descripcion = '';
	
			// Càrrega i obertura de la BD
			$this->load->database('escueladb');    // -> $this->db
		}

		public function getTipoClases() {
			// $query = $this->db->query("SELECT * FROM usuarios"); = pg_query();
			$query = $this->db->get('tipoclases');    // SELECT * FROM tipoClases;
			$tipoClases = [];
			foreach ($query->result() as $data) {
				$tipoClase = $this->createTipoClaseFromRawObject($data);
				array_push($tipoClases, $tipoClase);
			}
			
			return $tipoClases;
		}

		private function createTipoClaseFromRawObject($data) {
			$tipoClase = new TipoClase();
	
			$tipoClase->nivel = $data->nivel;
			$tipoClase->descripcion = $data->descripcion;
	
			return $tipoClase;
		}

		public function toArray() {
			return array(
				'nivel' => $this->nivel,
				'descripcion' => $this->descripcion
			);
		}
	}
?>
