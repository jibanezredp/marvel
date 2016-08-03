import fetch from 'isomorphic-fetch';
import crypto from 'crypto';

export const fetchJSON = (url, options) => (
  fetch(url, options).then(res => res.json()).catch(console.warn)
);

export const urlParams = () => {
  const ts = Date.now();
  const apikey = '298bab46381a6daaaee19aa5c8cafea5';
  const privkey = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
  const hash = crypto.createHash('md5').update(`${ts}${privkey}${apikey}`).digest('hex');
  return `?ts=${ts}&apikey=${apikey}&hash=${hash}`;
};
