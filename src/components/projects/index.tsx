import styles from "./styles.module.css";
import HeaderComponent from "./Header";
import ScheduleAMeeting from "./ScheduleAMeeting";
import { useState, useEffect } from "react";
import AllProjectsMobile from "./mobile/AllProjectsMobile";
import { AllProjectsDeskTop } from "./desktop/AllProjectsDesktop";

const breakpointValue: number = 996;

export default function Projects() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpointValue);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpointValue);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      <div className="main-container-with-margins">
        <div>
          <HeaderComponent />

          {isDesktop ? <AllProjectsDeskTop /> : <AllProjectsMobile />}
        </div>
      </div>
      <div>
        <div className={styles.schedule_container}>
          <ScheduleAMeeting />
        </div>
      </div>
    </div>
  );
}
