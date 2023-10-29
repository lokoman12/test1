export const baseURL = 'https://sumeet.app/api/v1';

const withBaseURL = (url: string) => `${baseURL}/${url}`;

export default withBaseURL;
