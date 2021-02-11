import { IonChip, IonIcon, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import VecinoChip from '../../types/VecinoChip';

interface SelectableChipProps {
  chips: VecinoChip[];
}

const SelectableChips: React.FC<SelectableChipProps> = ({ chips }) => {
  const [myChips, setMyChips] = useState<VecinoChip[]>(chips);

  const selectChip = (id: string) => {
    setMyChips(
      chips.map((chip) => {
        if (chip.id !== id) {
          return chip;
        }
        chip.selected = !chip.selected;
        return chip;
      })
    );
  };

  return (
    <>
      {myChips.map((chip, index) => {
        return (
          <IonChip
            id={index.toString()}
            key={index}
            outline={chip.selected}
            onClick={() => selectChip(chip.id)}
            color={chip.selected ? 'primary' : 'terciary'}
          >
            <IonIcon icon={chip.icon} />
            <IonLabel>{chip.name}</IonLabel>
          </IonChip>
        );
      })}
    </>
  );
};

export default SelectableChips;
