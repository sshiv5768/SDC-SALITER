import "../css/InfoHeader.css";
import logo from "../desi.svg";
import { Button, Heading, Paragraph } from "grommet";

function InfoHeader() {
  return (
    <>
      <div id="body" class="">
        <div class="row">
          <div class="col-6">
            <Heading margin="small" alignSelf="end">
              Student Developer Community
            </Heading>
            <Paragraph margin="small">
              SAL Institute of Technology and Engineering Research
            </Paragraph>
            <Button primary label="Join Discord" margin="small" />
          </div>
          <div class="col-6">
            <img src={logo} class="img-fluid flex-end" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}
export default InfoHeader;
