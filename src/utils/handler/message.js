
import { errorMessages } from './ErrorMessages';
import { showToastMsg } from '../helper';

export const errorHandler = response => {
  if (response.status) {
    let _message = errorMessages[response.status].title;
    showToastMsg(_message);
  }
};
