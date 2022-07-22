const React = require('react');
const Layout = require('./Layout');

module.exports = function Chosen({
  theme, quest
}) {
  return (
    <Layout theme={theme}>
      <h2>{quest}</h2>
      <form action="/ans1" method="post">
        <button type="submit">Ответ</button>
      </form>
      <h2>{quest}</h2>
      <form action="/ans2" method="post">
        <button type="submit">Ответ</button>
      </form>
      <h2>{quest}</h2>
      <form action="/ans3" method="post">
        <button type="submit">Ответ</button>
      </form>
      <h2>{quest}</h2>
      <form action="/ans4" method="post">
        <button type="submit">Ответ</button>
      </form>

    </Layout>
  );
};
