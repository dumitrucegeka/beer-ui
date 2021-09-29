import axios, { AxiosRequestConfig } from 'axios';
import Beer from '../models/Beer.interface';

const BeerApiService = {
  apiUrl: 'https://api.punkapi.com/v2/beers',

  getById(id: number): Promise<Beer> {
    return axios.get<Beer[]>(`${BeerApiService.apiUrl}/${id}`).then((result) => result.data[0]);
  },

  getAll(params?: AxiosRequestConfig): Promise<Beer[]> {
    return axios.get<Beer[]>(`${BeerApiService.apiUrl}/`, params).then((result) => result.data);
  },
};

export default BeerApiService;
