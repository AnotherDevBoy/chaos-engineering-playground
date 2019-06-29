import http from "k6/http";
import { sleep } from "k6";

const url = process.env.APP_URL

export default function() {
  http.get(url);
  sleep(1);
};
