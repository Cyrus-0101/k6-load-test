# k6 Load Testing (Stress, Spike, Load, Soak).
- This script details a step by step load, stress and spike test. We use Webpack to bundle up our scripts and be able to add faker to our script to send data.

## Installation:
- Begin by running

```sh
    npm i
```
Then run

```sh
    npm test
```

## What's going on?

[Grafana k6](https://k6.io/docs) - Is an open-source load testing tool that makes performance testing easy and productive for teams. Its free, developer-centric and extensible.

We use k6 with [faker](https://www.npmjs.com/package/faker/v/4.1.0) to generate fake data to post on the blockchain and use k6/http, to send http requests and add option to simulate virtual users and set duration limits for testing.

We send requests to our server through the stages where we define how many virtual users can send data and for how long.

The results are posted on the terminal, which include:
- Data recieved by the Blockchain
- Data Sent by the Blockchain
- Virtual Users - VUs
- HTTP metadata etc.

Although we can opt to use [Cloud Monitoring](https://k6.io/docs/cloud/analyzing-results/overview/), to store and compare all our results.
