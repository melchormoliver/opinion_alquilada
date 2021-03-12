export interface LatLon {
  lat: number;
  lon: number;
}

interface Provincia {
  nombre_completo: string;
  fuente: string;
  iso_id: string;
  nombre: string;
  id: string;
  categoria: string;
  iso_nombre: string;
  centroide: LatLon;
}

export default Provincia;
