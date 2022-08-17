import http from "k6/http";
import * as faker from "faker/locale/en_US";

const setObj = {
  farmerId: faker.random.uuid(),
  whReceiptId: faker.random.uuid(),
  applicantName: faker.name.firstName(),
  warehouseName: faker.company.companyName(),
  applicantPhoneNo: faker.random.uuid(),
  applicantEmail: faker.internet.email(),
  timestamp: faker.date.past(),
  userAddress: faker.address.city(),
  warehouseAddress: faker.company.bsBuzz(),
  whrReceiptId: faker.random.uuid(),
  salesOrder: faker.random.uuid(),
  grade: faker.company.companyName(),
  unit: faker.company.companyName(),
  warehouseId: faker.random.uuid(),
  numberOfPackges: faker.random.uuid(),
  commodity: faker.commerce.department(),
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
  http.post("https://uat-warehouses.whrrl.in/", setObj);
}
