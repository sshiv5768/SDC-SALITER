import "../css/AboutUs.css";
import Typewriter from "typewriter-effect";
import { Anchor } from "grommet";
import { Instagram, Github } from "grommet-icons";
function AboutUs() {
  return (
    <>
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 id="aboutus">
              <Typewriter
                class="fw-light"
                options={{
                  strings: ["About us", "Be a part of us!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p class="lead text-muted">
              [R'PYPRO'] is a local student developer community. We are more
              than a community, we are family of learners and contributors. We
              belive in community growth. Our biggest milestone: from local to
              global.
            </p>
            <p>
              <Anchor
                href="https://www.instagram.com/cdpypro/"
                icon={<Instagram />}
                hoverIndicator
              />
              <Anchor
                href="https://github.com/sshiv5768/sdc-saliter.github.io"
                icon={<Github />}
                hoverIndicator
              />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
