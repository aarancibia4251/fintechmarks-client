import axios from 'axios';
import {Constants} from '../../shared/constants';
import {Maker} from '../../interfaces/Maker';

export const getMakers = (): Promise<Array<Maker>> => {
  return new Promise(((resolve, reject) => {
    axios.get(Constants.URL_MS + '/makers', {
    })
      .then(((results) => results.data._embedded?.makerResponseList || []))
      .then(makers => resolve(makers))
      .catch(e => reject(e))
  }));
}

export const createMaker = (maker: Maker): Promise<Maker> => {
  return new Promise(((resolve, reject) => {
    axios.post(Constants.URL_MS + '/makers', maker)
      .then(((results) => results.data))
      .then(products => resolve(products))
      .catch(e => reject(e))
  }));
}

export const updateMaker = (maker: Maker): Promise<Maker> => {
  return new Promise(((resolve, reject) => {
    axios.put(Constants.URL_MS + '/makers', maker)
      .then(((results) => results.data))
      .then(products => resolve(products))
      .catch(e => reject(e))
  }));
}

export const deleteMaker = (id: number): Promise<Maker> => {
  return new Promise(((resolve, reject) => {
    axios.delete(Constants.URL_MS + `/makers/${id}`)
      .then(((results) => results.data))
      .then(products => resolve(products))
      .catch(e => reject(e))
  }));
}
