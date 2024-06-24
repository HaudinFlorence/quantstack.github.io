/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "QuantStack",
  "tagline": "",
  "url": "https://new-quantstack.net",
  "baseUrl": "/quantstack.github.io/",
  "organizationName": "/HaudinFlorence/",
  "projectName": "quantstack.github.io",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "staticDirectories": [
    "static"
  ],
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "./sidebars.ts",
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        "theme": {
          "customCss": "./src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "",
      "logo": {
        "alt": "QuantStack Logo",
        "src": "img/quantstack/logo-website.svg"
      },
      "items": [
        {
          "to": "/projects/",
          "className": "custom_navbar_item",
          "label": "Projects",
          "position": "left"
        },
        {
          "to": "/services/",
          "className": "custom_navbar_item",
          "label": "Services",
          "position": "left"
        },
        {
          "to": "/about/",
          "className": "custom_navbar_item",
          "label": "About us",
          "position": "left"
        },
        {
          "to": "/careers/",
          "className": "custom_navbar_item",
          "label": "Careers",
          "position": "left"
        },
        {
          "to": "/blog/",
          "className": "custom_navbar_item",
          "label": "Blog",
          "position": "left"
        },
        {
          "to": "/contact/",
          "label": "CONTACT US",
          "position": "right",
          "className": "contact"
        },
        {
          "to": "https://github.com/QuantStack",
          "title": "GitHub",
          "position": "right",
          "target": "_blank",
          "className": "github-icon"
        },
        {
          "to": "https://www.linkedin.com/company/quantstack/mycompany/",
          "title": "LinkedIn",
          "position": "right",
          "target": "_blank",
          "className": "linkedin-icon"
        },
        {
          "to": "https://twitter.com/QuantStack",
          "title": "X",
          "position": "right",
          "target": "_blank",
          "className": "x-icon"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "links": [
        {
          "title": " ",
          "items": [
            {
              "label": " ",
              "className": "quantstack-astronaut-footer",
              "href": "/home"
            }
          ]
        },
        {
          "title": "Follow QuantStack on",
          "items": [
            {
              "label": "GitHub",
              "className": "github-icon",
              "href": "https://github.com/QuantStack"
            },
            {
              "label": "LinkedIn",
              "className": "linkedin-icon",
              "href": "https://www.linkedin.com/company/quantstack/mycompany/"
            },
            {
              "label": "X",
              "className": "x-icon",
              "href": "https://twitter.com/QuantStack"
            }
          ]
        },
        {
          "title": "Menu ",
          "items": [
            {
              "label": "Home",
              "href": "/home/"
            },
            {
              "label": "Projects",
              "href": "/projects/"
            },
            {
              "label": "Services",
              "href": "/services/"
            },
            {
              "label": "About",
              "href": "/about/"
            },
            {
              "label": "Careers",
              "href": "/careers/"
            },
            {
              "label": "Blog",
              "href": "/blog/"
            }
          ]
        },
        {
          "title": "QuantStack office ",
          "items": [
            {
              "html": "\n              \n               <div class=\"quantstack-address\">\n                      16, avenue Curti <br/>\n                      94100 Saint-Maur-des-Fossés <br/>\n                      France\n                  </div>\n               \n                    "
            }
          ]
        }
      ],
      "copyright": "Copyright © 2024 · QuantStack website · Built with Docusaurus",
      "style": "light"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": false
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "backgroundColor": "hsl(220, 13%, 18%)",
          "color": "hsl(220, 14%, 71%)",
          "textShadow": "0 1px rgba(0, 0, 0, 0.3)"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "cdata"
            ],
            "style": {
              "color": "hsl(220, 10%, 40%)"
            }
          },
          {
            "types": [
              "doctype",
              "punctuation",
              "entity"
            ],
            "style": {
              "color": "hsl(220, 14%, 71%)"
            }
          },
          {
            "types": [
              "attr-name",
              "class-name",
              "maybe-class-name",
              "boolean",
              "constant",
              "number",
              "atrule"
            ],
            "style": {
              "color": "hsl(29, 54%, 61%)"
            }
          },
          {
            "types": [
              "keyword"
            ],
            "style": {
              "color": "hsl(286, 60%, 67%)"
            }
          },
          {
            "types": [
              "property",
              "tag",
              "symbol",
              "deleted",
              "important"
            ],
            "style": {
              "color": "hsl(355, 65%, 65%)"
            }
          },
          {
            "types": [
              "selector",
              "string",
              "char",
              "builtin",
              "inserted",
              "regex",
              "attr-value"
            ],
            "style": {
              "color": "hsl(95, 38%, 62%)"
            }
          },
          {
            "types": [
              "variable",
              "operator",
              "function"
            ],
            "style": {
              "color": "hsl(207, 82%, 66%)"
            }
          },
          {
            "types": [
              "url"
            ],
            "style": {
              "color": "hsl(187, 47%, 55%)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "textDecorationLine": "line-through"
            }
          },
          {
            "types": [
              "inserted"
            ],
            "style": {
              "textDecorationLine": "underline"
            }
          },
          {
            "types": [
              "italic"
            ],
            "style": {
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "important",
              "bold"
            ],
            "style": {
              "fontWeight": "bold"
            }
          },
          {
            "types": [
              "important"
            ],
            "style": {
              "color": "hsl(220, 14%, 71%)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "onBrokenAnchors": "warn",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "format": "mdx",
    "mermaid": false,
    "mdx1Compat": {
      "comments": true,
      "admonitions": true,
      "headingIds": true
    },
    "anchors": {
      "maintainCase": false
    }
  }
};
