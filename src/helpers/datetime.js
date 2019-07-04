import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-BR');

export const toDate = (date, format = 'DD/MM/YYYY HH:mm:ss') => {
  return moment(date).format(format);
};

export const now = () => moment().utc();
