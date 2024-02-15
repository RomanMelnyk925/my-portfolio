import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Melnyk Roman </b> 
                  and I am a <b className="purple">Full-stack software developer </b> 
                  ,graduated at <b className="purple">Lviv Polytechnic National University </b>
                      in L'viv, Ukraine.
                <br />
                <br />
                I provide advanced web solutions using  &nbsp;
                  <b className="purple">
                    {" "}
                    ReactJs/NextJS, Laravel, MongoDB/PostgreSQL & Tailwind, SCSS {" "}
                  </b>
                  technologies and build mobile app with&nbsp;
                  <b className="purple">
                    {" "}
                    Native Android & IOS and ReactNative & Flutter. {" "}
                  </b> 
                <br />
                <br />
                I am proficient in developing scalable web APIs and designing custom user interfaces with the latest technologies, have a strong working knowledge of the full stack life cycle, from concept to implementation.
I am highly capable of responding to &nbsp;
                  <b className="purple">
                    {" "}
                    pressure situations {" "}
                  </b>  and I always aim to bring &nbsp;
                  <b className="purple">
                    {" "}
                    innovative solutions {" "}
                  </b> to the table.
                <br />
                
                <br />In my free time, I enjoy learning new technologies.
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
