import React from 'react';

const withLoginForm = (Component) => {
  class WithLoginForm extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``
      };

      this._onUserInput = this._onUserInput.bind(this);
    }

    render() {
      const {email, password} = this.state;

      return (
        <Component
          {...this.props}
          email={email}
          password={password}
          onChangeHandler={this._onUserInput}
        />
      );
    }

    _onUserInput(evt) {
      const target = evt.target;

      this.setState({
        [target.name]: target.value
      });
    }
  }

  WithLoginForm.displayName =
    `WithLoginForm(${Component.displayName ||
    Component.name ||
    `Component`})`;

  return WithLoginForm;
};

export default withLoginForm;
