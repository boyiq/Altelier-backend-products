import http from 'k6/http';
import { sleep, check } from 'k6';


export const options = {
  scenarios:{
    load_test: {
      executor: 'per-vu-iterations',
      vus: 100,
      iterations: 1,
      maxDuration: '60s',
    }
  }
};

export default function () {
  const base_url = 'http://localhost:3001/related';
  const max = 1000000;
  const min = 800000;
  const id = Math.floor(Math.random() * (max - min + 1)) + min;
  http.get(`${base_url}?id=${id}`);
  sleep(1);
}