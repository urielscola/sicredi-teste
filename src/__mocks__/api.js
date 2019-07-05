import AxiosMockAdapter from 'axios-mock-adapter';
import { instance } from '../services';

const apiMock = new AxiosMockAdapter(instance);

export default apiMock;
