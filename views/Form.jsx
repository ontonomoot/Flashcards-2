const React = require('react');

function Form(params) {
  return (
    <form id="form" action="/orders" method="post">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Order title</label>
        <input type="text" className="form-control" name="title" />
      </div>

      <div className="mb-3">
        <select className="form-select" aria-label="Default select example" name="type">
          <option selected>Select type</option>
          <option defaultValue="appartment">appartment</option>
          <option defaultValue="commercial">commercial</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">Add order</button>
    </form>
  );
}

module.exports = Form;
