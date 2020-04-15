export function storeUserToken(userToken) {
  localStorage.setItem('user-token', userToken);
}

export function getUserToken() {
  return localStorage.getItem('user-token');
}

export function buildActionTypes(baseAction) {
  return {
    REQUEST: `${baseAction}Request`,
    SUCCESS: `${baseAction}Success`,
    FAILURE: `${baseAction}Failure`,
  };
}
