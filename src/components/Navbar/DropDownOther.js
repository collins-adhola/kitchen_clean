
import { Button, ButtonGroup,Dropdown } from "react-bootstrap";
import "./Navbar.css";
import "./Navbar.scss";

function DropDownOther() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        className="untoggled-button"
        style={{
          color: "black",
          backgroundColor: "transparent",
          border: "none",
        }}
        id="dropdown-basic"
      >
        OTHER CLEANING SERVICES
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
          INFECTION CONTROL CLEANING
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          TUMBLE DRYER VENT CLEANING
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">CARPET CLEANING</Dropdown.Item>
        <Dropdown.Item href="#/action-3">DOMESTIC CLEANING</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownOther;
