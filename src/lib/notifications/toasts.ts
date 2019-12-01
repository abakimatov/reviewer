import { ReactText } from 'react';
import { toast } from 'react-toastify';

export const notifySuccess = (msg: string): ReactText => toast.success(msg);
export const notifyError = (msg: string): ReactText => toast.error(msg);
export const notifyWarn = (msg: string): ReactText => toast.warn(msg);
export const notifyInfo = (msg: string): ReactText => toast.info(msg);
