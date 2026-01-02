module.exports = {
  extends: ["config:best-practices"],
  hostRules: [
    {
      hostType: "npm",
      matchHost: "pkgs.dev.azure.com",
      username: "apikey",
      password: process.env.RENOVATE_TOKEN,
    },
    {
      hostType: "nuget",
      matchHost: "pkgs.dev.azure.com",
      username: "apikey",
      password: process.env.RENOVATE_TOKEN,
    },
  ],
  packageRules: [
    {
      matchDatasources: ["npm"],
      minimumReleaseAge: "14 days",
    },
    {
      description: "Only allow minor standard upgrades",
      matchUpdateTypes: ["major", "patch", "pin"],
      enabled: false,
    },
    {
      groupName: "@lingui",
      matchPackageNames: ["@lingui/**"],
    },
    {
      groupName: "Microsoft.EntityFrameworkCore",
      matchPackageNames: [
        "Microsoft.EntityFrameworkCore.**",
        "Microsoft.EntityFrameworkCore",
      ],
    },
    {
      groupName: "Microsoft.AspNetCore",
      matchPackageNames: ["Microsoft.AspNetCore.**"],
    },
    {
      groupName: "Microsoft.FeatureManagement",
      matchPackageNames: [
        "Microsoft.FeatureManagement.**",
        "Microsoft.FeatureManagement",
      ],
    },
    {
      groupName: "@storybook",
      matchPackageNames: [
        "@storybook/**",
        "storybook",
        "eslint-plugin-storybook",
      ],
    },
    {
      groupName: "@microsoft",
      matchPackageNames: [
        "@microsoft/applicationinsights-web",
        "@microsoft/applicationinsights-clickanalytics-js",
      ],
    },
    {
      groupName: "ag-grid",
      matchPackageNames: ["ag-grid-**", "@ag-grid-**"],
    },
    {
      groupName: "@azure",
      matchPackageNames: ["@azure/**"],
    },
    {
      groupName: "React",
      matchPackageNames: ["react", "react-dom"],
    },
    {
      groupName: "ESlint",
      matchPackageNames: ["@eslint/**", "@eslint", "eslint"],
    },
    {
      groupName: "Playwright",
      matchPackageNames: ["@playwright/**", "playwright"],
    },
    {
      groupName: "Microsoft.Identity.Web",
      matchPackageNames: [
        "Microsoft.Identity.Web",
        "Microsoft.Identity.Web.**",
      ],
    },
  ],
  prHourlyLimit: 10,
  platformAutomerge: true,
  rangeStrategy: "bump",
  dependencyDashboard: true,
  enabledManagers: ["npm", "nuget"], // not updating the bicep files for now.
  repositories: ["StarLight 2.0/StarLight2"],
};
