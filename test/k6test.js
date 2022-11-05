import http from 'k6/http';
import { URLSearchParams } from 'https://jslib.k6.io/url/1.0.0/index.js';
import { sleep, check } from 'k6';


export const options = {
  vus: 10,
  duration: '1m',
};

export default function () {
  const endpoints = ['/product', '/styles', '/related'];
  const base_url = 'http://localhost:3001/related';

  http.get(`${base_url}?id=1`);
  sleep(1);
}