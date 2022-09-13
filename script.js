import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://64.227.14.236:3000/cqIDP/login');
  sleep(1);
}
