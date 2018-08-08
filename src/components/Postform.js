import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add form</h1>
        <div>
          <form onSubmit={this.onSubmit}>
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
            <br />
            <label htmlFor="body">body</label>
            <br />
            <textarea
              value={this.state.body}
              name="body"
              onChange={this.onChange}
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

Postform.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(Postform);
