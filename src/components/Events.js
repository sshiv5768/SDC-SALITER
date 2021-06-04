import "../css/Events.css";
import "aos/dist/aos.css";
import AOS from "aos";
import event from "../team4.png";
import { Button, Heading, Paragraph } from "grommet";
AOS.init();

function Events() {
  return (
    <>
      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <Heading className="featurette-heading" margin="medium" d>
            Meet. Inspire. Contribute.
          </Heading>
          <Paragraph margin="medium">
            Connect with techies. Get inspired. Stay motivated.
          </Paragraph>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src={event}
            alt="ks"
          />
        </div>
      </div>
    </>
  );
}

export default Events;
