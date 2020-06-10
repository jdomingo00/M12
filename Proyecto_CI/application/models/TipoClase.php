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
	
			$this->load->database('escueladb');
		}

		public function getTipoClases() {
			$query = $this->db->get('tipoclases');
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
