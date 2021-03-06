import React from "react";
import jamesResume from "../../assets/Resume2021.v2.pdf";
import Pdf from "../PDF/PDF";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

function Resume() {
  return (
    <div className='Resume'>
      <Link to={jamesResume} target='_blank' download>
        <Button id="downloadbtn" raised ripple animated='vertical' color='yellow'>
          <Button.Content hidden>Download</Button.Content>
          <Button.Content visible>
            <Icon name='download' />
          </Button.Content>
        </Button>
      </Link>
      <div className='all-page-container'>
        <Pdf pdf={jamesResume} />
      </div>

      <hr />
    </div>
  );
}

export default Resume;
