const React = require('react');
const Layout = require('./Layout');

module.exports = function Hello({ title, greetings }) {
  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <p>
        {greetings}
      </p>
      <form action="/categories" method="post">
        <input type="text" name="player" />
        <button type="submit">ЖМЯК!</button>
      </form>
    </Layout>
  );
};
