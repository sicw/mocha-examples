import { equal } from "assert";
import index from "./";

/**
  注意执行的命令路径
  which mocha
  /Users/sicwen/.nvm/versions/node/v14.16.0/bin/mocha
  需要用工程内部的mocha
  ./node_modules/mocha/bin/mocha.js
  mocha --reuqire ts-node/register 等价于 .mocharc.json中配置的
*/
describe("Typescript usage suite", () => {
  it("should be able to execute a test", () => {
    equal(true, true);
  });
  it("should return expected string", () => {
    equal(index("incoming"), "incoming-static");
  });
});
