import SideBar from './Authentication/Constants/SideBar';
import '../App.css';
import Header from './Header/Header';

function PendingDoc() {
  return (
    <>
      <div>
        <SideBar />
      </div>
      <div className="headeroneach">
        <Header heading="Pending Documents" />
      </div>
      <div className="text-9">
        <h1> welcome to Pending Documents</h1>
      </div>
    </>
  );
}

export default PendingDoc;
