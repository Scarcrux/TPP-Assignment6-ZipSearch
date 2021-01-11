import React from "react";
import ReactDOM from "react-dom";
import GetData from './GetData'
import { Container, Row, Col, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

function GetZip() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = event => {
     setSearchTerm(event.target.value);
   };

  return (
    <div>
      <div className="mb-4">
        <div>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Zip Code</InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
            />
          </InputGroup>
        </div>
      </div>
      {searchTerm.split('').length === 5 &&
        <GetData zip={searchTerm} />
      }
            {searchTerm.length !== 5 &&
        <div>
          <div>
            <p>No Results</p>
          </div>
        </div>
      }
    </div>
   );
 }

export default GetZip;
