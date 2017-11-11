import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Language extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
        <DropdownToggle caret color="success">
          เลือกภาษา
        </DropdownToggle>
        <DropdownMenu>
     
          <DropdownItem><span className="flag-icon flag-icon-th"></span><p style={{display: "inline-block"}}> &nbsp; &nbsp;ไทย</p></DropdownItem>
          <DropdownItem divider />
          <DropdownItem><span className="flag-icon flag-icon-gb"></span><p style={{display: "inline-block"}}> &nbsp; &nbsp;อังกฤษ</p></DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}