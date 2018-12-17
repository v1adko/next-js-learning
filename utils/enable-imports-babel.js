require("babel-register")({
  babelrc: false,
  presets: ["env", "react"],
  plugins: [
    [
      "transform-runtime",
      {
        polyfill: false,
        regenerator: true
      }
    ]
  ]
});
