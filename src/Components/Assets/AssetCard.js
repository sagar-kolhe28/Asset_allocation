import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import apiClient from '../../Interceptor/Interceptor';
// import AssetForm from './AssetForm';
import logo from '../../Icons/Group 1604.svg';

// eslint-disable-next-line react/prop-types
function AssetCard({ devicename, model, serialnumber, issuedate }) {
  const history = useHistory();

  const deleteAsset = () => {
    // const history = useHistory();
    apiClient
      .delete(`Assets?Device_Name=eq.{devicename}`)
      .then((response) => {
        console.log(response);
        // alert('Asset deleted sucessfully');
        history.push({ pathname: '/Assets' });
      })
      .catch((error) => {
        console.log('error in deleting Asset record', error);
      });
  };
  return (
    <>
      <div className="icons">
        <img src={logo} alt="oops" className="logo-1" />
      </div>
      <div className="block-1">
        <div className="Dname"> Device Name </div>
        <div className="Dname1"> {devicename} </div>
      </div>
      <div className="block-2">
        <div className="Dname"> Model </div>
        <div className="Dname1"> {model} </div>
      </div>
      <div className="block-3">
        <div className="Dname"> Serial No </div>{' '}
        <div className="Dname1"> {serialnumber} </div>
      </div>
      <div className="block-4">
        <div className="Dname"> Issue Date </div>
        <div className="Dname1"> {issuedate} </div>
      </div>

      <button
        type="button"
        className="btn123"
        onClick={() => deleteAsset(devicename)}
      >
        Delete
      </button>
      <button type="button" className="btn1234">
        Edit
      </button>
    </>
  );
}
AssetCard.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default AssetCard;
