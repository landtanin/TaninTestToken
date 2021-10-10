const SampleToken = artifacts.require("SampleToken");

module.exports = function (deployer) {
  deployer.deploy(SampleToken, "TaninExampleToken", "TET", 10000000);
};
