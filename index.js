Components
Notes
Changelog
Pricing
Log in
Sign up
API
Components AI offers a collection of APIs that you can use to integrate with your own tooling. It's important to note that these APIs are experimental and subject to change.

See typeface APIs →

Import
In order to get up and running with our tooling quickly, we offer import endpoints for themes.

Theme
Turn a url into a theme object.

curl 'https://components.ai/api/import-theme?url=google.com'
If you want a JS object rather than our internal schema you can use the
as
query param.

curl 'https://components.ai/api/import-theme?url=google.com&as=js'
If you have a Components AI theme id, you can pass that directly.

curl 'https://components.ai/api/import-theme?id=swcKAKDNDUUseUYPPwRj&as=js'
Palette
Turn a url into a palette.

curl 'https://components.ai/api/import-palette?url=google.com'
If you want a JS object rather than our internal schema you can use the
as
query param.

curl 'https://components.ai/api/import-palette?url=google.com&as=js'
Format
POST a string of code and receive a formatted version back.
Suckerurl=www.suck.com
Supported formats

js
jsx
ts
tsx
css
html
md
mdx
json
vue
gql
yaml
curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"format": "html", "src": "<body style=\"width:1200px; height:675px; text-align:center;\"><h1 style=\"color:tomato\">Hello, world! <br />HTML IS NOW FORMATTED!</h1>"}' \
  https://components.ai/api/format
Conversion
In order to convert between different web formats, we offer a collection of conversion APIs for JSX, HTML, and PNGs.

Url to MD(X)
Turn a url and its HTML into a Markdown string.

curl 'https://components.ai/api/url-to-md?url=components.ai'
HTML to PNG
Convert a string of HTML to a PNG.

curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"src": "<body style=\"width:1200px; height:675px; text-align:center;\"><h1 style=\"color:tomato\">Hello, world! <br />HTML IS NOW PNG</h1>"}' \
  https://components.ai/api/html-to-png > img.png
JSX to HTML
Convert JSX styled with Theme UI's
sx
prop to a string of HTML.

curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"src": "<h1 sx={{ color: \'tomato\', lineHeight: 1, margin: 0 }}>Hello, world!</h1>"}' \
  https://components.ai/api/jsx-to-html
You'll receive a JSON response that includes a string of HTML.

{
  "html": "\n    <head>\n      <meta charset=\"utf-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n      <style>\n        * {\n          box-sizing: border-box;\n        }\n\n        body {\n          margin: 0;\n          \n          font-family: system-ui, sans-serif;\n          display: block;\n        }\n      </style>\n    </head>\n    <body id=\"body\">\n      <style data-emotion=\"css-global 381i8l\">body{color:text;background-color:background;}</style><style data-emotion=\"css-global 1d7m1w5\">*{box-sizing:border-box;}body{margin:0;}</style>undefined\n    </body>\n  "
}
JSX to PNG
Convert JSX styled with Theme UI's
sx
prop to a hosted PNG image.

Publish
curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"src": "<h1 sx={{ color: \"tomato\", lineHeight: 1, margin: 0 }}>Hello, world!</h1>"}' \
  https://components.ai/api/jsx-to-png/publish
You'll receive a response which includes the image hash and a URL.

{
  "hash": "7ecdee251e5ca60e0ed1351573e680a8a596a52586773b6c1b7a6f29ce1c5e96",
  "url": "https://compai.pub/v1/png/7ecdee251e5ca60e0ed1351573e680a8a596a52586773b6c1b7a6f29ce1c5e96"
}
Save a local image
If you don't want to host the image with our service and save the image locally, you can do so by removing
/publish
from the URL.

curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"src": "<h1 sx={{ color: \"tomato\", lineHeight: 1, margin: 0 }}>Hello, world!</h1>"}' \
  https://components.ai/api/jsx-to-png > img.png
Syntax highlighting
Turn a string of code into tokenized HTML for Prism or highlight.js.

curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"src": "<h1 sx={{ color: \"tomato\", lineHeight: 1, margin: 0 }}>Hello, world!</h1>", "language": "html", "highlighter": "prism"}' \
  https://components.ai/api/syntax-highlight
You'll receive a response which includes the image hash and a URL.

{
  "html": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&#x3C;</span>h1</span> <span class=\"token attr-name\">sx</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span>{{</span> <span class=\"token attr-name\"><span class=\"token namespace\">color:</span></span> <span class=\"token attr-name\">\"tomato\",</span> <span class=\"token attr-name\"><span class=\"token namespace\">lineHeight:</span></span> <span class=\"token attr-name\">1,</span> <span class=\"token attr-name\"><span class=\"token namespace\">margin:</span></span> <span class=\"token attr-name\">0</span> <span class=\"token attr-name\">}}</span><span class=\"token punctuation\">></span></span>Hello, world!<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&#x3C;/</span>h1</span><span class=\"token punctuation\">></span></span>"
}
URL to JSON
Convert a URL into a JSX-like JSON structure.

curl https://components.ai/api/url-to-json?url=https://johno.com
Note: This API is prone to timeouts. If you'd like, you can use the npm package.

MQIFY
Convert a string of CSS to utility-based classes for given media queries.

curl -X POST -H "Content-Type: application/json" -d '{"src": ".f1 { font-size: 1rem }", "mediaQueries": [16, 32, 64]}' https://components.ai/api/css/mqify
Product
Studio
Theme
Syntax Highlighting
Publisher
Color Scales
Color
SVG
SVG Grid
Skyscrapers
Delaunay
Circle Packing
Voronoi
Simplex
Color
Color
Color Scales
Gradients
Bootstrap Colors
Theme
Tachyons
Bootstrap
Docs
CSS.GUI
3D Type
Color Picker
© Copyright 2018–2022
hello@components.ai
@components_ai
Terms
Privacy
