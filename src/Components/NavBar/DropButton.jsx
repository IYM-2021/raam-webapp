import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "../../css/Styles.css";

const DropButton = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown className="Dropdown" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="Dropdown-Toggle" caret>
        Events &emsp;
      </DropdownToggle>
      <DropdownMenu className="Dropdown-Menu" right>
        <DropdownItem className="Dropdown-Item" href="/Fraissard">
          Sandrine Fraissard
        </DropdownItem>
        <DropdownItem className="Dropdown-Item" href="/Samarth">
          Dr. Amit Samarth
        </DropdownItem>
        <DropdownItem className="Dropdown-Item" href="/Baetz">
          <strong>James Baetz</strong>
          {/* BOLD THE ACTIVE ATHLETE */}
        </DropdownItem>
        <DropdownItem className="Dropdown-Item" href="/Haase">
          Dave Haase
        </DropdownItem>
        <DropdownItem className="Dropdown-Item" href="/MacDonald">
          James MacDonald
        </DropdownItem>
        <DropdownItem className="Dropdown-Item" href="/Cross">
          Julia Cross
        </DropdownItem>
        <DropdownItem className="Dropdown-Item" href="/Hering">
          Jackie Hering
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default DropButton;
