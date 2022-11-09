import http from 'k6/http';
import { sleep, check } from 'k6';


export const options = {
  stages: [
    { duration: '10s', target: 100 }, // below normal load
    { duration: '10s', target: 100 },
    { duration: '30s', target: 1250 }, // normal load
    { duration: '1m', target: 1250 },
    { duration: '30s', target: 2500 }, // around the breaking point
    { duration: '1m', target: 2500 },
    { duration: '1m', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function () {
  const base_url = 'http://localhost:3001/products';
  const max = 1985102;
  const min = 1786500;
  const id = Math.floor(Math.random() * (max - min + 1)) + min;
  http.get(`${base_url}/${id}/styles`)
  sleep(1);
}