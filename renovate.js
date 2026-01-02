module.exports = {
  extends: ["config:best-practices"],
  packageRules: [
  {
    matchDatasources: ["npm"],
    minimumReleaseAge: "14 days",
  }]
};
