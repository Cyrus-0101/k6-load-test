import http from "k6/http";
import * as faker from "faker/locale/en_US";
import { check, fail } from "k6";

const setObj = {
  farmerId: faker.random.uuid(),
  whReceiptId: faker.random.uuid(),
  applicantName: faker.name.firstName(),
  warehouseName: faker.company.companyName(),
  applicantPhoneNo: faker.phone.phoneNumber("+91 ##### #####"),
  applicantEmail: faker.internet.email(),
  timestamp: faker.date.past(),
  userAddress: faker.address.city(),
  warehouseAddress: faker.address.city(),
  whrReceiptId: faker.random.uuid(),
  salesOrder: faker.random.uuid(),
  grade: faker.company.bsBuzz(),
  unit: "kg",
  warehouseId: faker.random.uuid(),
  numberOfPackges: faker.random.number(),
  commodity: faker.commerce.department(),
};

export const options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: "2s", target: 1 },
    // { duration: "10s", target: 100 },
    // { duration: "1m30s", target: 500 },
    // { duration: "20s", target: 0 },
  ],
};

const url = "https://beta-blockchain-node.whrrl.in/api/wh/token";

const date = setObj.timestamp;
const seconds = date.getTime() / 1000;
const datee = Math.trunc(seconds);

const postData = {
  otherDetails: JSON.stringify(setObj),
  timestamp: datee,
  commodity: setObj.commodity,
  expiryDate: "415263412",
  quantity: Math.ceil(faker.random.number({ min: 10, max: 1000 })),
  marketValueAtTheTimeDepositPerUnit: faker.random.number({
    min: 100,
    max: 10000,
  }),
  totalMarketValue: faker.random.number({ min: 150, max: 10000 }),
  farmerAddress: "0x148e772046b59f5a61ea0f0322110ece5f6bb146",
};

export default function () {
  const res = http.post(url, JSON.stringify(postData), {
    headers: { "Content-Type": "application/json" },
  });

  console.log(JSON.stringify(res));

  if (
    !check(res, {
      "status code MUST be 200": (res) => res.status == 200,
    })
  ) {
    fail("status code was *not* 200");
  }
}
