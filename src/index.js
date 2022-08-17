import http from "k6/http";
import * as faker from "faker/locale/en_US";

const setObj = {
  userId: faker.random.uuid(),
};

export const options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: "10s", target: 5 },
    { duration: "10s", target: 10 },
    { duration: "1m30s", target: 50 },
    { duration: "20s", target: 0 },
  ],
};

export default function () {
  //  http.get("http://test.k6.io");
  http.post("http://test.k6.io", setObj);
}
