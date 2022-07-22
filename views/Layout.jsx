const React = require('react');

function Layout({ title, children }) {
  return (

    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <script defer src="/js/application.js" />
        <script defer src="/js/bootstrap.bundle.min.js" />
        <title>{title}</title>
      </head>

      <body>
        <header>
          <h1><span className="badge bg-secondary">FlashCard</span></h1>
        </header>
        <div className="card text-center" style={{fontStyle:"oblique"}}>
          {children}
        </div>
      </body>
    </html>
  );
}

module.exports = Layout;
