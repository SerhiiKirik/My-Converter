import { BASE_URL, KEY } from './consts';
import { Rate } from '../components/types';
import { request } from './request';

export const getData = async (urlParams = '', searchParams = '') => request<Rate>(`${BASE_URL}${urlParams}?access_key=${KEY}&${searchParams}`);
