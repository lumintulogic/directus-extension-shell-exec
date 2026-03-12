import test from "../src/api.js";

console.log(await test.handler({directory:"./",command:"npx fast --upload --json",output:'plainText'}));
