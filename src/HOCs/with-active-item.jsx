import React from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItemId: null
      };

      this._itemClickHandler = this._itemClickHandler.bind(this);
    }

    _itemClickHandler(activeItemId) {
      this.setState({activeItemId});
    }

    render() {
      const {activeItemId} = this.state;

      return (
        <Component
          {...this.props}
          activeItemId={activeItemId}
          changeActiveItemId={this._itemClickHandler}
        />
      );
    }
  }

  WithActiveItem.displayName = `WithActiveItem(${Component.displayName ||
    Component.name ||
    `Component`})`;

  return WithActiveItem;
};

export default withActiveItem;
