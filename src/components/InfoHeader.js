import "../css/InfoHeader.css";
import logo from "../desi.svg";
import { Button, Heading, Paragraph } from "grommet";

function InfoHeader() {
  return (
    <>
      <div id="body" class="container">
        <div class="box1">
          <Heading margin="small" alignSelf="center">
            Student Developer Community
          </Heading>
          <Paragraph margin="small" alignSelf="center">
            SAL Institute of Technology and Engineering Research
          </Paragraph>
          <Button primary label="Join Discord" margin="small" />
        </div>
        <div class="box2">
          <img src={logo} class="illustration" alt="..." />
        </div>
      </div>
    </>
  );
}
export default InfoHeader;
