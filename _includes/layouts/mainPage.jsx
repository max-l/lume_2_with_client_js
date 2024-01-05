

export default ({ title, children }, helpers) => (
    <html>
      <head>
        <title>{title}</title>
        <script type="module" src={helpers.url("/main.js")} bundle="true"></script>
      </head>
      <body>
        <h1>abc</h1>
        {children}
      </body>
    </html>
  )