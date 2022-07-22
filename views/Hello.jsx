const React = require('react');
const Layout = require('./Layout');

module.exports = function Hello({ title, greetings }) {
  return (
    <Layout title={title}>
      <h1 className="card-title">
        <b>
          {title}
        </b>
      </h1>
      <p className="card-title">

        {greetings}
      </p>
      <form action="/categories" method="post">
        <div className="input-group mb-3">
          <input type="text" name="player" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button className="btn btn-outline-secondary" type="submit" id="button-addon2">ЖМЯК!</button>
        </div>
      </form>
    </Layout>
  );
};
//  <input type="text" name="player" />
//         <button type="submit">ЖМЯК!</button>
