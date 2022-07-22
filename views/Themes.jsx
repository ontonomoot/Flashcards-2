const React = require('react');
const Layout = require('./Layout');

module.exports = function Themes({
  title, greetings, text1, text2, text3,
}) {
  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <p>
        {greetings}
      </p>
      {/* <dev>{text1}</dev> */}
      <form action="/input1" method="post">
        <button type="submit">{text1}</button>
      </form>
      {/* <dev>{text2}</dev> */}
      <form action="/input2" method="post">
        <button type="submit">{text2}</button>
      </form>
      {/* <dev>{text3}</dev> */}
      <form action="/input3" method="post">
        <button type="submit">{text3}</button>
      </form>
    </Layout>
  );
};
