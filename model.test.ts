import * as tf from "@tensorflow/tfjs-node";
import { expect } from "chai";

describe("tensorflow.js", () => {
  it("Check that it loaded", () => {
    expect(tf.version.tfjs.length).greaterThan(3);
  });
});
