module.exports = {
  title: "We do takeaway",
  tagline:
    "Documentation and architcture for FOSS food ordering and delivery platform",
  url: "https://www.wedotakeaway.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/logo.jpg",
  organizationName: "We-Do-Takeaway", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "We do takeaway",
      logo: {
        alt: "Takeaway logo",
        src: "img/logo.jpg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/We-Do-Takeaway",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/wedotakeaway",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/wedotakeaway",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/We-Do-Takeaway",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} We do takeaway. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/We-Do-Takeaway/docs-and-architecture/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
