import Provincia from './Provincia';

interface ProvinciasService {
  getProvincias: () => Promise<Provincia[]>;
}

export default ProvinciasService;
