import { handleResponse, handleError } from './apiUtils';
import API from './API';

const url = `/residents/`;
export default class ResidentsService {
  static get = async () => {
    return await API.get(url).then(handleResponse).catch(handleError);
  };

  static save = async (values) => {
    const method = values._id ? 'PUT' : 'POST';
    const newUrl = values._id ? url.concat(values._id) : url;
    return await API(newUrl, {
      method,
      data: values,
    })
      .then(handleResponse)
      .catch(handleError);
  };

  static delete = async (id) => {
    const newUrl = url.concat(id);
    return await API.delete(newUrl, {}).then(handleResponse).catch(handleError);
  };
}
