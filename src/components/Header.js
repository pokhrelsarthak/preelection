import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import "./Header.css";
import img1 from "./img1.png";
import Cabinet from "./Cabinet";

const Header = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    setMenuOpen(props.render);
  }, [props.render]);
  return (
    <>
      <nav className="header-container">
        <div className="Container center">
          <div className="ui fixed">
            <div className="header-content">
              <div className="logo-heading-container">
                <img style={{marginTop:'5px'}} src={img1} alt="Logo" className="logo" />
                <h2 style={{paddingTop: '20px'}}> Karnataka 2023 Election results</h2>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen &&(
        <nav>
          <div className="Container center">
          <div className="ui fixed">
            <div id="id1" className="header-content" style={{ display: "flex", justifyContent: "space-around",paddingTop:"10px",paddingBottom:'10px' }}>
              <Link to="home">
                <button className="btn btn-warning">Home</button>
              </Link>
              <Link to="charts">
                <button className="btn btn-warning">Charts</button>
              </Link>
              <Link to="reports">
                <button className="btn btn-warning">Reports</button>
              </Link>
              <Link to="cabi">
              <button className="btn btn-warning" style={{ whiteSpace: "nowrap", width: "auto" }}>
                Cabinet Ministers
              </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      )}
    </>
  );
};

export default Header;