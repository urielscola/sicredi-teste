import axios from 'axios';
import Factory from './factory';

const BASE_URL = process.env.REACT_APP_BASE_URL;
export const instance = axios.create({ BASE_URL });

export const headers = () => ({ 'Content-Type': 'application/json' });
export const config = () => ({ headers: headers() });

export const DragonsService = Factory({
  instance,
  config,
  resourceName: 'dragon'
});
