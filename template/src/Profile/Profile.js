//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

import React from 'react';
import FetchModel from '../models/fetchModel';
import Popup from '../Popup/Popup';

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

class Profile extends React.Component {

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  state = {

  };

  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup = (event) => {
    event.preventDefault();
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  nullFunc = (event) => {
    event.preventDefault();
    return null;
  }

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//===========================REACT_COMPONENT_RENDERING==========================
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  render() {
    return (
      <div>
        <div className="profileInfo">

          <form>

            <button onClick={this.nullFunc}>
              OnClick=Null
            </button>
            <button className="popup" onClick={this.togglePopup.bind(this)}>
              [==PopUp==]
            </button>

          </form>
          <br/>

          {this.state.showPopup ?
            <Popup
            text='This Is Your Pop Up Component'
            closePopup={this.togglePopup}
            />
            : null
          }

        </div>
      </div>

    );
  }

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

};

export default Profile;

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//================================END_ALL=======================================
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
