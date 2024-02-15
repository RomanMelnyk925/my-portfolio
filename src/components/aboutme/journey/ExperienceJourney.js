import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        {/* <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link> */}
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2022 - Continuing"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">INFOPULSE</h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Senior Mobile Developer
          </h6>
          <p>
            •Implemented automated testing processes that reduced the number of
            bugs by 50% and improved overall app performance by 30%.
          </p>
          <p>
            •Implemented automated build and deployment processes, reducing the
            average project delivery time by 25% and increasing team
            productivity by 30% over a one-year period.
          </p>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2019 - 2022"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            SIGMA SOFTWARE GROUP
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Frontend,Backend Developer
          </h6>
          <p>
            •Integrated mobile applications with backend services, resulting in
            a 40% increase in app functionality and a 25% increase in user
            engagement.
          </p>
          <p>
            •Implemented security and data protection measures, resulting in a
            50% decrease in security breaches and a 20% increase in user trust.
          </p>
          <p>
            •Collaborated with cross-functional teams to define and ship new
            features, resulting in a 30% increase in app downloads and a 15%
            increase in revenue.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2016 - 2019"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">INTETICS INC</h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Junior Mobile Developer
          </h6>
          <p>
            •Developed and maintained technical documentation for mobile
            applications, resulting in a 20% increase in team productivity and a
            10% decrease in development time.
          </p>
          <p>
            •Implemented automated build and deployment processes, reducing the
            average project delivery time by 25% and increasing team
            productivity by 30% over a one-year period.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
