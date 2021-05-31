import "../css/Team.css";
import profile from "../profile-pic.png";
import profile1 from "../profile-pic2.png";
import {
  Image,
  Card,
  Grid,
  CardFooter,
  CardHeader,
  Heading,
  CardBody,
  Button,
} from "grommet";
import { Linkedin, Github } from "grommet-icons";

function Team() {
  return (
    <>
      <Grid rows={["xsmall"]}>
        <Heading margin="large">Meet the team of learners..</Heading>
      </Grid>
      <div id="team" className="box">
        <Card
          elevation="medium"
          width="small"
          margin="large"
          background="#fffff"
        >
          <CardBody height="small">
            <Image fit="cover" src={profile} a11yTitle="bridge" />
          </CardBody>
          <CardHeader pad={{ horizontal: "medium" }}>Shivlal Sharma</CardHeader>
          <CardFooter pad={{ horizontal: "small" }} background="light-2">
            <Button icon={<Linkedin color="plain" />} hoverIndicator />
            <Button icon={<Github color="plain" />} hoverIndicator />
          </CardFooter>
        </Card>
        <Card
          elevation="medium"
          width="small"
          margin="large"
          background="#fffff"
        >
          <CardBody height="small">
            <Image fit="cover" src={profile1} a11yTitle="bridge" />
          </CardBody>
          <CardHeader pad={{ horizontal: "medium" }}>Vatsal Vohera</CardHeader>
          <CardFooter pad={{ horizontal: "small" }} background="light-2">
            <Button icon={<Linkedin color="plain" />} hoverIndicator />
            <Button icon={<Github color="plain" />} hoverIndicator />
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default Team;
