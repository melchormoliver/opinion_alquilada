import OpinionService from './types/OpinionService';
import vecinoChips from '../../helpers/VecinoChips';

const opinionServiceImpl: OpinionService = {
  getVecinoChips: () => {
    return vecinoChips;
  },
};

export default opinionServiceImpl;
