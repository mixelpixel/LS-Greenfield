import axios from 'axios';

class ItemService {
  /* eslint no-console: 0  */
  sendData(data) {
    axios.post('http://localhost:4200/items/add/post', {
      item: data,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default ItemService;
