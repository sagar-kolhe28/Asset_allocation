import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';
import PropTypes from 'prop-types';
import apiClient from '../../Interceptor/Interceptor';

function ModelEdit({
  isOpenModal,
  closeModal,
  devicename,
  model,
  serialnumber,
  issuedate,
}) {
  const history = useHistory;
  const [Asset, setAsset] = useState({
    Device_Name: '',
    Model: '',
    Serial_No: '',
    Issue_Date: '',
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
      .patch(`Assets?Serial_No=eq.${serialnumber}`, {
        headers: {
          'Content-Type': 'application/json',
          Prefer: 'return=representation',
        },

        data: {
          Device_Name: 'Device_Name',
          Model: 'Model',
          Serial_No: 'Serial_No',
          Issue_Date: 'Issue_Date',
        },
      })
      .then((response) => {
        console.log(response);
        history.push({ pathname: '/Assets' });
      });

    const newData = {
      ...Asset,
      id: new Date().getTime().toString(),
    };
    setRecords([...records, newData]);
  };

  return (
    <Modal isOpen={isOpenModal} toggle={closeModal}>
      <ModalBody>
        <div className="main_div11">
          <form className="signup-form" action="" onSubmit={handleSubmit}>
            <div className="username-box">
              <input
                type="text"
                placeholder={devicename}
                className="form-control1"
                value={Asset.Device_Name}
                onChange={handdleInput}
                name="Device_Name"
                id="Device_Name"
              />
            </div>
            <div className="username-box">
              <input
                type="text"
                placeholder={model}
                className="form-control1"
                value={Asset.Model}
                onChange={handdleInput}
                name="Model"
                id="Model"
              />
            </div>
            <div className="username-box">
              <input
                type="number"
                placeholder={serialnumber}
                className="form-control1"
                value={Asset.Serial_No}
                onChange={handdleInput}
                name="Serial_No"
                id="Serial_No"
              />
            </div>

            <div className="username-box">
              <input
                type="date"
                className={issuedate}
                name="Issue_Date"
                value={Asset.Issue_Date}
                onChange={handdleInput}
                id="Issue_Date"
              />
            </div>
            <div>
              <button onClick={closeModal} className="btn12" type="submit">
                <p className="btn-txt"> Update</p>
              </button>
            </div>
          </form>
        </div>
      </ModalBody>
    </Modal>
  );
}

ModelEdit.propTypes = {
  devicename: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
ModelEdit.propTypes = {
  model: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
ModelEdit.propTypes = {
  serialnumber: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
ModelEdit.propTypes = {
  issuedate: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
ModelEdit.propTypes = {
  isOpenModal: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
ModelEdit.propTypes = {
  closeModal: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
export default ModelEdit;
