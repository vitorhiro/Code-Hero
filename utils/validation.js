export function validationResponse(response) {
  if (response?.code !== 200) {
    return false;
  }
  return true;
}
