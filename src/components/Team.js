import "../css/Team.css";
import logo from "../brooke.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

function Team() {
  const classes = useStyles();
  return (
    <>
      <div class="row mx-2 my-1">
        <div class="col-lg-4">
          <Avatar alt="Remy Sharp" src={logo} className={classes.large} />

          <h2>Shivlal Sharma</h2>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p>
            <a class="btn btn-secondary" href="#">
              View details »
            </a>
          </p>
        </div>
        <div class="col-lg-4">
          <Avatar alt="Remy Sharp" src={logo} className={classes.large} />

          <h2>Somyaraj Rana</h2>
          <p>
            Another exciting bit of representative placeholder content. This
            time, we've moved on to the second column.
          </p>
          <p>
            <a class="btn btn-secondary" href="#">
              View details »
            </a>
          </p>
        </div>
        <div class="col-lg-4">
          <Avatar alt="Remy Sharp" src={logo} className={classes.large} />
          <h2>Vatsal Shah</h2>
          <p>
            And lastly this, the third column of representative placeholder
            content.
          </p>
          <p>
            <a class="btn btn-secondary" href="#">
              View details »
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Team;
