const React = require("react");

class Edit extends React.Component {
  render() {
    const {blogs} = this.props
    return (
      <div>
        <h1>Edit Page</h1>

        <form action={`/blogs/${blogs._id}?_method=put`} method='post'>
          Name: <input type="text" name="name" defaultValue={blogs.name} />
          <br />
          Color: <input type="text" name='color' defaultValue={blogs.color} />
          <br />
          {/* Ready to Eat: { fruit.readyToEat ? <input type="checkbox" name='readyToEat' defaultChecked /> : <input type='checkbox' name='readyToEat'/>}
          <br /> */}
          <input type="submit" value="Update Blogs" />
        </form>
      </div>
    );
  }
}

module.exports = Edit;