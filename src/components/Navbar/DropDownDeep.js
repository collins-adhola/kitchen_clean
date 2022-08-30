
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import './Navbar.css' ;
import './Navbar.scss';
import styles from 'styled-components'


function DropDownDeep() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        className="untoggled-button"
        style={{ color: "black",backgroundColor: 'transparent',border: 'none' }}
        id="dropdown-basic"
      >
        DEEP CLEANING SERVICES
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">KITCHEN DEEP CLEANING</Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          COOKING EQUIPMENT CLEANING
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">STRUCTURAL CLEANING</Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          EXTRACTION AND DUCT CLEANING
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownDeep;

