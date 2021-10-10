const SampleToken = artifacts.require("SampleToken");

module.exports = function (deployer) {
  deployer.deploy(SampleToken, "TaninExampleToken", "TET", 1000000000000000);
};
