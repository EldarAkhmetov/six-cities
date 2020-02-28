import React from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItemId: null
      };

      this._changeActiveItemId = this._changeActiveItemId.bind(this);
    }

    _changeActiveItemId(activeItemId) {
      this.setState({activeItemId});
    }

    render() {
      const {activeItemId} = this.state;

      return (
        <Component
          {...this.props}
          activeItemId={activeItemId}
          changeActiveItemId={this._changeActiveItemId}
        />
      );
    }
  }

  WithActiveItem.displayName =
    `WithActiveItem(${Component.displayName ||
    Component.name ||
    `Component`})`;

  return WithActiveItem;
};

export default withActiveItem;
