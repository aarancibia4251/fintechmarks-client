import InputFormComponent from '../input-form/InputForm.component';
import TableComponent from '../table/Table.component';
import React, {useState} from 'react';
import {useMaker} from '../../data/hooks/useMaker';
import {Maker} from '../../interfaces/Maker';

const DirectoryComponent = () => {
  const [selectedMaker, setSelectedMaker] = useState<Maker>();
  const [saved, setSaved] = useState<boolean>();
  const [key, setKey] = useState(new Date().getTime());
  const {makers} = useMaker({value: saved});

  const handleAction = () => {
    setSaved(prevState => !prevState);
    setSelectedMaker(null);
  }

  return (
    <div className="container mt-5">
      <InputFormComponent key={key} selectedMaker={selectedMaker} setKey={setKey} actionEvent={handleAction} />
      <TableComponent makers={makers} selectedMaker={setSelectedMaker} setKey={setKey} actionEvent={handleAction} />
    </div>
  )
}

export default DirectoryComponent;
