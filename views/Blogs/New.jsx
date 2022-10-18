const React = require("react");


class New extends React.Component {
  render() {
    return (
      <body>
      <div>
        <h1> Add New Blog</h1>

        <form action='/blog' method='POST'>
          Blog Name: <input type="text" name="title" />
          <br />
          Blog Description: <input type="text" name="body" />
          <br />
          Author: <input type="text" name="author" />
          <br />
          <input type="submit" value="Create new blog" />
        </form>
      </div>
    </body>
    );
  }
}

module.exports = New
