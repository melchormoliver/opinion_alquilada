import OpinionService from '../types/OpinionService';
import vecinoChips from '../helpers/VecinoChips';

const opinionService: OpinionService = {
  getVecinoChips: () => {
    return vecinoChips;
  },
};

export default opinionService;
