import SideBar from './Authentication/Constants/SideBar';
import '../App.css';
import Header from './Header/Header';

function DashBoard() {
  return (
    <>
      <div>
        <SideBar />
      </div>
      <div className="headeroneach">
        <Header heading="DashBoard" />
      </div>
      <div className="text-9">
        <h1> welcome to DashBoard</h1>
      </div>
    </>
  );
}

export default DashBoard;
