export const splitCookies = (cookies: string[]) => {
   return cookies[0].split('; SameSite=Lax, ');
};

export const getAccessToken = (cookies: string[]) =>
   splitCookies(cookies)
      .find((str) => str.includes('access_token'))!
      .split(';')
      .find((str) => str.includes('access_token'))!
      .split('=')[1];

export const getRefreshToken = (cookies: string[]) =>
   splitCookies(cookies)
      .find((str) => str.includes('refresh_token'))!
      .split(';')
      .find((str) => str.includes('refresh_token'))!
      .split('=')[1];

export const getExpireTime = (cookies: string[]) =>
   splitCookies(cookies)
      .find((str) => str.includes('is_authenticated=True'))!
      .split(';')
      .find((str) => str.includes('expires'))!
      .split('=')[1];
