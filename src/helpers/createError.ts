const messages: { [key: number]: string } = {
  400: "Bad Request",
  401: "Not Authorize",
  403: "Fobidden",
  404: "Not Found",
  409: "Conflict",
};

export const createError = (
  status: number,
  message: string = messages[status]
): Error => {
  const error = new Error(message) as Error & { status: number };
  error.status = status;
  return error;
};
