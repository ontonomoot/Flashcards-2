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
      <div className="card" style={{ width: '18rem' }}>
        <ul className="list-group list-group-flush"> 
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>

    </Layout>
  );
};


