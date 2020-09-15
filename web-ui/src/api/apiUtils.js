export async function handleResponse(response) {
  return response.data;
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.log(`API call failed. ${error}`);
  throw error;
}
