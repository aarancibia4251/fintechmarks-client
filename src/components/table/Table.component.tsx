import React from 'react';
import {Maker} from '../../interfaces/Maker';
import {deleteMaker} from '../../data/rest/makers.service';

interface Props {
  makers: Array<Maker>;
  selectedMaker: (maker: Maker) => void;
  actionEvent: () => void;
  setKey: (key: number) => void;
}

const TableComponent = ({makers, selectedMaker, actionEvent, setKey}: Props) => {

  const handleClick= (maker: Maker) => {
    selectedMaker(maker);
    setKey(maker.id);
  }

  const handlerDelete = async (id: number) => {
    try {
      await deleteMaker(id);
      actionEvent();
    } catch (e) {

    }
  }

  return (
    <table className="table mt-5">
      <thead>
      <tr>
        <th scope="col">Primer nombre</th>
        <th scope="col">Segundo nombre</th>
        <th scope="col">Email</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      {
        makers.map((maker) => (
          <tr key={maker.email} className="pointer">
            <td>{maker.firstname}</td>
            <td>{maker.lastname}</td>
            <td>{maker.email}</td>
            <td className="d-flex flex-row justify-content-around">
              <button type="button"
                      onClick={() => handleClick(maker)}
                      className="btn btn-success">Editar</button>
              <button type="button"
                        onClick={() => handlerDelete(maker.id)}
                        className="btn btn-danger">Eliminar</button></td>
          </tr>
        ))
      }
      </tbody>
    </table>
  )
}

export default TableComponent;
