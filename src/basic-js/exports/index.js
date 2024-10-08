const { nodeExport } = require("./node-export");
import { product } from "./node-export";
import sum from "./bun-export";

const main = () => {
  console.log(nodeExport);
  console.log(product(2, 3));
  console.log(sum(2, 3));
  //   console.log(sum(2, 3));
};

main();
