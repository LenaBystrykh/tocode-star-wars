import axios from 'axios'

const url = 'https://swapi.dev/api/'

class DataService {
    getAllCharacters(): Promise<any> {
        return axios.get(`${url}/people`)
    }
}

export default new DataService()
