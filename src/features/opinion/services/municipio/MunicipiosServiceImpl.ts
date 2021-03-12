import Provincia from '../provincia/types/Provincia';
import * as mockMunicipios from './mocks/municipios.json';
import Municipio from './types/Municipio';
import MunicipiosService from './types/MunicipiosService';

const provinciasServiceImpl: MunicipiosService = {
  getMunicipiosOfProvincia: (provincia: Provincia) => {
    return mockMunicipios.municipios.filter((item: Municipio) => {
      item.provincia.id !== provincia.id;
    });
  },
};

export default provinciasServiceImpl;
