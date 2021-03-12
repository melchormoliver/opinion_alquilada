import Provincia from '../../provincia/types/Provincia';
import Municipio from './Municipio';

interface MunicipiosService {
  getMunicipiosOfProvincia: (provincia: Provincia) => Municipio[];
}

export default MunicipiosService;
