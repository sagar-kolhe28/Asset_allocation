import SideBar from './Authentication/Constants/SideBar';
import '../App.css';
import Header from './Header/Header';

function Reimbursement() {
  return (
    <>
      <div>
        <SideBar />
      </div>
      <div className="headeroneach">
        <Header heading="Reimbursement" />
      </div>
      <div className="text-9">
        <h1> welcome to Reimbursement</h1>
      </div>
    </>
  );
}

export default Reimbursement;
