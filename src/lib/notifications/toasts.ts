import { ReactText } from 'react';
import { Alert } from 'rsuite';

export const notifySuccess = (msg: string): void => Alert.success(msg);
export const notifyError = (msg: string): void => Alert.error(msg);
export const notifyWarn = (msg: string): void => Alert.warning(msg);
export const notifyInfo = (msg: string): void => Alert.info(msg);
