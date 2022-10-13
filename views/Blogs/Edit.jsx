const React = require("react");

class Edit extends React.Component {
  render() {
    const {blogs} = this.props
    return (
      <div>
        <h1>Edit Page</h1>

        <form action={`/blog/${blogs._id}?_method=put`} method='POST'>
          Title: <input type="text" name="title" defaultValue={blogs.title} />
          <br />
          Body: <input type="text" name='body' defaultValue={blogs.body} />
          <br />
          Author: <input type="text" name='author' defaultValue={blogs.author} />
          <br />
          
          
          <input type="submit" value="Update Blogs" />
        </form>
      </div>
    );
  }
}

module.exports = Edit;