import { toast } from 'react-toastify';

const defaultOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const notifySuccess = (
  message = '🦄 Hello world Success !',
  options = defaultOptions
) => toast.success(message, options);

export const notifyError = (
  message = '🦄 Hello world Error !',
  options = defaultOptions
) => toast.error(message, options);

export const notifyInfo = (
  message = '🦄 Hello world Info !',
  options = defaultOptions
) => toast.info(message, options);
