import SideBar from './Authentication/Constants/SideBar';
import '../App.css';
import Header from './Header/Header';

function TaxDeclaration() {
  return (
    <>
      <div>
        <SideBar />
      </div>
      <div className="headeroneach">
        <Header heading="Tax Declaration" />
      </div>
      <div className="text-9">
        <h1> welcome to Tax Declaration</h1>
      </div>
    </>
  );
}

export default TaxDeclaration;
