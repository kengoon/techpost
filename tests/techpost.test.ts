
import { tx } from "@hirosystems/clarinet-sdk";
import { Cl } from "@stacks/transactions";
import { describe, expect, it } from "vitest";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const address1 = accounts.get("wallet_1")!;
const address2 = accounts.get("wallet_2")!;

/*
  The test below is an example. To learn more, read the testing documentation here:
  https://docs.hiro.so/stacks/clarinet-js-sdk
*/

describe("example tests", () => {
  it("ensures simnet is well initalised", () => {
    expect(simnet.blockHeight).toBeDefined();
  });

  // it("shows an example", () => {
  //   const { result } = simnet.callReadOnlyFn("counter", "get-counter", [], address1);
  //   expect(result).toBeUint(0);
  // });
});

describe("get-total-post function test", () => {
  it("get's the total tech post made", () => {
    const { result } = simnet.callReadOnlyFn("techpost", "get-total-post", [], deployer);
    expect(result).toBeUint(0);
  })
})

describe("write post function test", () => {
  it("writes a post in the blockchai", () => {
    const [ block ] = simnet.mineBlock([
      tx.callPublicFn("techpost", "write-post", [
        Cl.stringUtf8("Oblee is a tech event, quote me wrong")], address1
      ),
      tx.callPublicFn("techpost", "write-post", [
        Cl.stringUtf8("Clarity is an oblee blockchain, you can't tell me otherwise")],
        address2
      )
    ])

    const totalPost = simnet.callReadOnlyFn("techpost", "get-total-post", [], deployer);
    expect(totalPost.result).toBeUint(2);
  })
})
