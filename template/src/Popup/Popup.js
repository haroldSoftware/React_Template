import React from 'react';

class Popup extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>
            close
          </button>
        </div>
      </div>
    );
  }
}


export default Popup;
