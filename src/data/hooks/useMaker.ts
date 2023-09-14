import {useEffect, useState} from 'react';
import {getMakers} from '../rest/makers.service';
import {Maker} from '../../interfaces/Maker';

interface Props {
  value: boolean;
}

export const useMaker = ({value}: Props) => {
  const [makers, setMakers] = useState<Array<Maker>>([]);
  useEffect(() => {
    getMakers()
      .then((makersRest) => setMakers(makersRest))
      .catch();
  }, [value]);
  return {
    makers,
  }
}
