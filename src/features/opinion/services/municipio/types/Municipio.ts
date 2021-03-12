import { LatLon } from '../../provincia/types/Provincia';

interface ProvinciaReducida {
  nombre: string;
  id: string;
  interseccion: number;
}

interface Municipio {
  nombre_completo: string;
  fuente: string;
  nombre: string;
  id: string;
  provincia: ProvinciaReducida;
  categoria: string;
  centroide: LatLon;
}

export default Municipio;
