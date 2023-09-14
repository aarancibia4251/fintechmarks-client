import React, {useState} from 'react';
import {Maker} from '../../interfaces/Maker';
import {createMaker, updateMaker} from '../../data/rest/makers.service';

interface Props {
  selectedMaker?: Maker;
  actionEvent: () => void;
  setKey: (key: number) => void;
}

const InputFormComponent = ({selectedMaker, actionEvent, setKey}: Props) => {
  const [id] = useState<number>(selectedMaker?.id ?? 0);
  const [firstname, setFirstname] = useState<string>(selectedMaker?.firstname ?? '');
  const [lastname, setLastname] = useState<string>(selectedMaker?.lastname ?? '');
  const [email, setEmail] = useState<string>(selectedMaker?.email ?? '');

  const handledSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (id) {
        await updateMaker({id, firstname, lastname, email});
      } else {
        await createMaker({id: null, firstname, lastname, email});
      }
      setKey(new Date().getTime());
    } catch (e) {

    } finally {
      actionEvent();
    }
  }

  return (
    <form onSubmit={handledSubmit}>
      <div className="card">
        <h5 className="card-header">Crear un maker</h5>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <input className="form-control"
                     value={firstname}
                     onChange={(e) => setFirstname(e.target.value)}
                     type="text" placeholder="Primer nombre" aria-label="default input example" />
            </div>
            <div className="col-md-3">
              <input className="form-control"
                     value={lastname}
                     onChange={(e) => setLastname(e.target.value)}
                     type="text" placeholder="Segundo nombre" aria-label="default input example" />
            </div>
            <div className="col-md-2">
              <input className="form-control"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     type="email" placeholder="Email" aria-label="default input example" />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-success">Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default InputFormComponent;
