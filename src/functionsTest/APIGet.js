import axios from 'axios';

class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }

  static secondApi() {
    return axios.get('/users.json').then(resp => resp.data);
  }

  static callRealAPI() {
    return axios.get('https://picsum.photos/200').then(resp => {
      console.log('resp', resp);
      return resp
    })
  }
}

export default Users;