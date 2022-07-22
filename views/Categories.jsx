const React = require('react');
const Layout = require('./Layout');

module.exports = function Categories({ title, greetings, category }) {
  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <p>
        {greetings}
      </p>
      <form action="/categories" method="post">
        <dev>{category}</dev>
      </form>
      <dev>
          <button type="submit">Ответ</button>
      </dev>
    </Layout>
  );
};
