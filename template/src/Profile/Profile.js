//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

import React from 'react';
import FetchModel from '../models/fetchModel';
import Popup from '../Popup/Popup';

const THREE = require('three');
const OrbitControls = require('three-orbitcontrols');

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

class Profile extends React.Component {


//==============================================================================


  componentDidMount() {

    const width = 500;
    const height = 500;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75,width / height,0.1,1000);
    this.camera.position.z = 20;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor('#000000');
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)
    let camera = this.camera;
    let renderer = this.renderer;
    var controls = new THREE.OrbitControls( camera, renderer.domElement );
  //==============================================================================
    const geometry1 = new THREE.BoxGeometry(1, 1, 1)
    const material1 = new THREE.MeshBasicMaterial({ color: '#433F81'     })
    this.cube1 = new THREE.Mesh(geometry1, material1)
    this.cube1.position.set(0,25,0);
    this.scene.add(this.cube1)
//==============================================================================
//==============================================================================
    const geometry2 = new THREE.BoxGeometry(1, 10, 1)
    const material2 = new THREE.MeshBasicMaterial({ color: '#103A22'     })
    this.cube2 = new THREE.Mesh(geometry2, material2)
    this.cube2.position.set(10,5,0);
    this.scene.add(this.cube2)

    const geometry2a = new THREE.BoxGeometry(1, 4, 1)
    const material2a = new THREE.MeshBasicMaterial({ color: '#103A22'     })
    this.cube2a = new THREE.Mesh(geometry2a, material2a)
    this.cube2a.position.set(7,2,0);
    this.scene.add(this.cube2a)

    const geometry2b = new THREE.BoxGeometry(4, 1, 1)
    const material2b = new THREE.MeshBasicMaterial({ color: '#103A22'     })
    this.cube2b = new THREE.Mesh(geometry2b, material2b)
    this.cube2b.position.set(9,4,0);
    this.scene.add(this.cube2b)

    const geometry2c = new THREE.BoxGeometry(4, 1, 1)
    const material2c = new THREE.MeshBasicMaterial({ color: '#103A22'     })
    this.cube2c = new THREE.Mesh(geometry2c, material2c)
    this.cube2c.position.set(9,0,0);
    this.scene.add(this.cube2c)


//==============================================================================
//==============================================================================
    const geometry3 = new THREE.BoxGeometry(7, 1, 1)
    const material3 = new THREE.MeshBasicMaterial({ color: '#FFFFFF'     })
    this.cube3 = new THREE.Mesh(geometry3, material3)
    this.cube3.position.set(0,9,0);
    this.scene.add(this.cube3)

    const geometry3a = new THREE.BoxGeometry(7, 1, 1)
    const material3a = new THREE.MeshBasicMaterial({ color: '#FFFFFF'     })
    this.cube3a = new THREE.Mesh(geometry3a, material3a)
    this.cube3a.position.set(0,5,0);
    this.scene.add(this.cube3a)

    const geometry3b = new THREE.BoxGeometry(7, 1, 1)
    const material3b = new THREE.MeshBasicMaterial({ color: '#FFFFFF'     })
    this.cube3b = new THREE.Mesh(geometry3b, material3b)
    this.cube3b.position.set(0,1,0);
    this.scene.add(this.cube3b)

    const geometry3c = new THREE.BoxGeometry(1, 9, 1)
    const material3c = new THREE.MeshBasicMaterial({color: '#FFFFFF'})
    this.cube3c = new THREE.Mesh(geometry3c, material3c)
    this.cube3c.position.set(4,5,0);
    this.scene.add(this.cube3c)
//==============================================================================
    this.start()
  } // ends componentDidMount()
  componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
  stop = () => {
    cancelAnimationFrame(this.frameId)
  }
  animate = () => {
   this.cube1.rotation.x += 0.01
   this.cube1.rotation.y += 0.01
   this.renderScene()
   this.frameId = window.requestAnimationFrame(this.animate)
  }
  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

//==============================================================================






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

  resetComponent = (event) => {
    event.preventDefault();
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 20;
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
      <div>
        <div
          className="home3D"

          ref={(mount) => { this.mount = mount }}
        >
        </div>
        <span className="buttonBarHome3D">
          <button onClick={this.resetComponent}>
          Reset
          </button>
        </span>
      </div>
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
      </div>

    );
  }

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

};

export default Profile;

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//================================END_ALL=======================================
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
