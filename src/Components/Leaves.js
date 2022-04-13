import SideBar from './Authentication/Constants/SideBar';
import '../App.css';
import Header from './Header/Header';

function Leaves() {
  return (
    <>
      <div>
        <SideBar />
      </div>
      <div className="headeroneach">
        <Header heading="Leaves" />
      </div>
      <div className="text-9">
        <h1> welcome to Leaves</h1>
      </div>
    </>
  );
}

export default Leaves;
