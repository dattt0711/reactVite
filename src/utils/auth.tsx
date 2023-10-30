export const saveAccessTokenToLS = (accessToken: string) => {
    localStorage.setItem('access_token', accessToken);
}

export const clearAccessTokenToLS = () => {
    localStorage.removeItem('access_token');
}
export const getAccessTokenToLS = () => localStorage.getItem('access_token') || '';