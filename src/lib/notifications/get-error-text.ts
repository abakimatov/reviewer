export const getErrorText = (
  errorCode: string,
  messages: Map<string, string>
): string => messages.get(errorCode) || messages.get('default');
