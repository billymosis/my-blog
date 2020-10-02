import prism from "@theme-ui/prism/presets/theme-ui"

export default {
  initialColorModeName: "light",
  breakpoints: ["768px", "1024px", "1440px", "2560px"],
  colors: {
    text: "#000",
    background: "#fff",
    primary: "lightblue",
    secondary: "hsl(260, 100%, 57%)",
    accent: "hsl(280, 100%, 57%)",
    muted: "#222",
    gray: "rgba(207,203,203,60%)",
    modes: {
      black: {
        text: "#fff",
        background: "#000",
        primary: "#0ff",
        secondary: "#0fc",
        accent: "#f0f",
        muted: "#111",
        gray: "#888",
      },
      dark: {
        text: "#fff",
        background: "hsl(180, 5%, 15%)",
        primary: "hsl(180, 100%, 57%)",
        secondary: "hsl(50, 100%, 57%)",
        accent: "hsl(310, 100%, 57%)",
        muted: "hsl(180, 5%, 5%)",
        gray: "hsl(180, 0%, 70%)",
      },
      deep: {
        text: "#fff",
        background: "hsl(230,25%,18%)",
        primary: "hsl(260, 100%, 80%)",
        secondary: "hsl(290, 100%, 80%)",
        highlight: "hsl(260, 20%, 40%)",
        accent: "hsl(290, 100%, 80%)",
        muted: "hsl(230, 20%, 0%)",
        gray: "hsl(210, 50%, 60%)",
      },
      hack: {
        text: "hsl(120, 100%, 75%)",
        background: "hsl(120, 20%, 10%)",
        primary: "hsl(120, 100%, 40%)",
        secondary: "hsl(120, 50%, 40%)",
        accent: "hsl(120, 100%, 90%)",
        muted: "hsl(120, 20%, 7%)",
        gray: "hsl(120, 20%, 40%)",
      },
      pink: {
        text: "hsl(350, 80%, 10%)",
        background: "hsl(350, 100%, 90%)",
        primary: "hsl(350, 100%, 50%)",
        secondary: "hsl(280, 100%, 50%)",
        accent: "hsl(280, 100%, 20%)",
        muted: "hsl(350, 100%, 88%)",
        gray: "hsl(350, 40%, 50%)",
      },
    },
  },
  cards: {
    /*     primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    }, */
  },

  buttons: {
    primary: {
      color: "background",
      bg: "primary",
    },
    secondary: {
      color: "background",
      bg: "secondary",
    },
    gray: {
      color: "muted",
      bg: "gray",
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    monospace: '"Roboto Mono", Menlo, monospace',
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
  },
  fontSizes: [14, 16, 18, 20, 24, 32, 48, 64, 72, 96],
  sizes: {
    container: 768,
    wide: 1280,
    mobile: 320,
    sidebar: 256,
  },
  text: {
    heading: {
      fontSize: 2,
      fontWeight: "heading",
      lineHeight: "heading",
      textTransform: "uppercase",
      my: 2,
    },
    small: {
      fontSize: 0,
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
  },
  prism,
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontSize: 2,
      transitionProperty: "background-color",
      transitionTimingFunction: "ease-out",
      transitionDuration: ".4s",
      p: {
        my: 1,
      },
      a: {
        textDecoration: "none",
        color: "inherit",
        ":hover,:focus": {
          color: "primary",
        },
      },
      h1: {
        variant: "text.heading",
        mt: 2,
      },
      h2: {
        variant: "text.heading",
        mt: 4,
        mb: 3,
        fontSize: 1,
      },
      h3: {
        variant: "text.heading",
        fontSize: 0,
      },
      h4: {
        variant: "text.heading",
      },
      h5: {
        variant: "text.heading",
      },
      h6: {
        variant: "text.heading",
      },
      img: {
        maxWidth: "100%",
        height: "auto",
      },
      pre: {
        fontFamily: "monospace",
        fontSize: 1,
        bg: "muted",
        p: 3,
        borderRadius: 8,
        overflowX: "auto",
        variant: "prism",
      },
      code: {
        fontFamily: "monospace",
        color: "secondary",
      },
      inlineCode: {
        fontFamily: "monospace",
        color: "secondary",
      },
      hr: {
        border: 0,
        my: 4,
        borderBottom: "1px solid",
        borderColor: "muted",
      },
      table: {
        width: "100%",
        borderCollapse: "separate",
        borderSpacing: 0,
      },
      th: {
        textAlign: "left",
        py: 2,
        borderBottomStyle: "solid",
      },
      td: {
        textAlign: "left",
        py: 2,
        borderBottom: "1px solid",
        borderColor: "muted",
      },
      blockquote: {
        fontWeight: "bold",
        mx: 0,
        px: 3,
        my: 5,
        borderLeft: "4px solid",
      },
      div: {
        "&.footnotes": {
          variant: "text.small",
        },
      },
      navlink: {
        variant: "text.caps",
        color: "inherit",
        textDecoration: "none",
        ":hover,:focus": {
          color: "primary",
        },
      },
      navitem: {
        variant: "styles.navlink",
        display: "inline-flex",
        alignItems: "center",
        fontWeight: "bold",
      },
      aside: {
        display: ["none", "none", "block"],
      },

      figcaption: {
        textAlign: "center",
        fontStyle: "italic",
        fontSize: "small",
      },
      main: {
        flexGrow: 99999,
        flexBasis: 0,
        minWidth: 320,
        px: 4,
        borderStyle: "none none none solid",
        borderImage:
          "linear-gradient(to bottom,rgba(0, 0, 0, 0),#e6e6e6,rgba(0, 0, 0, 0)) 1 100%",
      }
    },
    ul: {
      listStyleType: "none",
      p: 0,
    },
  },
}
