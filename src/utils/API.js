import axios from 'axios';

export default {
    getEmployee(){
        return axios.get('https://randomuser.me/api/?nat=us&exc=login&noinfo&results=25');
    }
}