import ProvinciaService from '../types/ProvinciasService';
import * as mockProvincias from '../mocks/provincias.json';

const provinciasServiceImpl: ProvinciaService = {
  getProvincias: () => {
    return Promise.resolve(mockProvincias.provincias);
  },
};

export default provinciasServiceImpl;
