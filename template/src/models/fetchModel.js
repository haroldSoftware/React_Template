//============================================================================//
const endPointHome = `http://localhost:3300/`;
const endPointRegister = `http://localhost:3300/register/`;
const endPointLogin = `http://localhost:3300/login`;
//============================================================================//

class FetchModel {

//============================================================================//
//=================================ALL========================================//
//============================================================================//

  static all = () => {
    return fetch(endPointHome)
      .then(response => response.json())
      .catch(err => console.log('Could not get data \n', err));
  };

//============================================================================//
//::::::::::::::::::::::::::::::::REGISTER:::::::::::::::::::::::::::::::::::://
//============================================================================//

  static createRegister = (input1) => {
    return fetch(endPointRegister, {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input1)
    })
      .then(response => response.json())
      .catch(err => console.error('Sorry create regs error', err));

  }

//============================================================================//

  static deleteRegisters = (input1) => {
    return fetch(endPointRegister + `${input1.oid}`, {
      method: "DELETE",
    })
      .catch(err => console.error(`Sorry delete regs error`, err));
  };

//============================================================================//

  static updateRegisters = (input1) => {
    return fetch(endPointRegister + `${input1.oid}`, {
      method: "PUT",
      mode: "cors",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(input1)
    })
      .then(response => response.json())
      .catch(err => console.error('Sorry update regs error', err));
  }

//============================================================================//

//============================================================================//
//::::::::::::::::::::::::::::::::::LOGIN::::::::::::::::::::::::::::::::::::://
//============================================================================//

  static loginUser = (creds) => {
    return fetch(endPointLogin, {
      method: "POST",
      mode: "cors",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(creds)
    })
      .then(response => response.json())
      .catch(err => console.error('Sorry fetch login error', err));
  }

//============================================================================//

};

export default FetchModel;

//============================================================================//
//=====================================END_ALL================================//
//============================================================================//
