import SideBar from './Authentication/Constants/SideBar';
import '../App.css';
import Header from './Header/Header';

function ImportantDoc() {
  return (
    <>
      <div>
        <SideBar />
      </div>
      <div className="headeroneach">
        <Header heading="Important Documents" />
      </div>
      <div className="text-9">
        <h1> welcome to Important Documents</h1>
      </div>
    </>
  );
}

export default ImportantDoc;
