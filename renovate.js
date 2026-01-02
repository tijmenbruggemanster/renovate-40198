module.exports = {
  extends: ["config:best-practices"],
  minimumReleaseAge: "14 days",
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
  ]
};
