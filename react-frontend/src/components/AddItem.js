import React, { Component } from 'react';

class AddItem extends Component {
  // static seems like a bad idea. Done per: https://eslint.org/docs/rules/class-methods-use-this
  static render() {
    return (
      <div>
        <h2>Welcome to Add Item</h2>
      </div>
    );
  }
}
