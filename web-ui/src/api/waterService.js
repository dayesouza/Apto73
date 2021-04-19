import { handleResponse, handleError } from './apiUtils';
import API from './API';

const url = `/water-gallons/`;
export default class WaterService {
  static get = async () => {
    return API.get(url).then(handleResponse).catch(handleError);
  };

  static save = async (values) => {
    const method = values._id ? 'PUT' : 'POST';
    const newUrl = values._id ? url.concat(values._id) : url;
    return API(newUrl, {
      method,
      data: values,
    })
      .then(handleResponse)
      .catch(handleError);
  };

  static delete = async (id) => {
    const newUrl = url.concat(id);
    return API.delete(newUrl, {}).then(handleResponse).catch(handleError);
  };
}
