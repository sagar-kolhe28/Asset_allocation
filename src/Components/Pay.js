import SideBar from './Authentication/Constants/SideBar';
import '../App.css';
import Header from './Header/Header';

function Pay() {
  return (
    <>
      <div>
        <SideBar />
      </div>
      <div className="headeroneach">
        <Header heading="Pay" />
      </div>
      <div className="text-9">
        <h1> welcome to Pay</h1>
      </div>
    </>
  );
}

export default Pay;
