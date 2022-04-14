/* eslint-disable no-undef */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import apiClient from '../../Interceptor/Interceptor';
import './style.css';

function AssetForm({ history, getAssetList }) {
  // const history = useHistory();

  const [Asset, setAsset] = useState({
    Device_Name: '',
    Model: '',
    Serial_No: '',
    Issue_Date: '',
    User_Name: localStorage.getItem('userName'),
    phone_number: localStorage.getItem('phone_number'),
  });
  const [records, setRecords] = useState([]);
  const handdleInput = (event) => {
    const InputData = event.target.name;
    const { value } = event.target;

    setAsset({ ...Asset, [InputData]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apiClient
      .post('Assets', Asset)
      .then((response) => {
        console.log(response);
        alert('Asset Added Sucessfully');
        getAssetList();

        history.push({ pathname: '/Assets' });
      })
      .catch((error) => {
        console.log('error during Adding Assets', error);
      });

    const newData = {
      ...Asset,
      id: new Date().getTime().toString(),
    };
    setRecords([...records, newData]);
  };

  return (
    <div className="main_div1">
      <form className="signup-form" action="" onSubmit={handleSubmit}>
        <div className="card-text">Want New Asset?</div>
        <div className="login-text1">Device Name </div>
        <div className="username-box">
          <input
            type="text"
            placeholder="Enter Device Name"
            className="form-control1"
            value={Asset.Device_Name}
            onChange={handdleInput}
            name="Device_Name"
            id="Device_Name"
          />
        </div>
        <div className="login-text1">Model</div>
        <div className="username-box">
          <input
            type="text"
            placeholder="Enter Model Name"
            className="form-control1"
            value={Asset.Model}
            onChange={handdleInput}
            name="Model"
            id="Model"
          />
        </div>
        <div className="login-text1">Serial Number</div>
        <div className="username-box">
          <input
            type="number"
            placeholder="Enter Serial Number"
            className="form-control1"
            required
            value={Asset.Serial_No}
            onChange={handdleInput}
            name="Serial_No"
            id="Serial_No"
          />
        </div>

        <div className="login-text1">Issue Date</div>
        <div className="username-box">
          <input
            type="date"
            className="form-control1"
            required
            value={Asset.Issue_Date}
            onChange={handdleInput}
            name="Issue_Date"
            id="Issue_Date"
          />
        </div>
        <div>
          <button className="btn12" type="submit">
            <p className="btn-txt"> Send Request</p>
          </button>
        </div>
      </form>
    </div>
  );
}
AssetForm.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
AssetForm.propTypes = {
  getAssetList: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default AssetForm;
