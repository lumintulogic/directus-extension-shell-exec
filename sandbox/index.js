import test from "../src/api.js";

console.log(test.handler({directory:"./",command:"npx fast --upload --json",output:'plainText'}));