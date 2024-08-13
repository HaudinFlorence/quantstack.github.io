import styles from "../styles.module.css";

export default function ProjectDesktop({
  project,
  ProjectDescriptionMD,
}): JSX.Element {
  if (project.reverse === "false") {
    return (
      <div className={"container" + " " + styles.project_container}>
        <div
          className={"row" + " " + "row-padding-none" + " " + "row-margin-none"}
        >
          <div
            className={
              "col col--6 col--offset-1" +
              " " +
              styles.col_project_text
            }
          >
            <div className={styles.project_title}>{project.title}</div>
            <div className={styles.project_description}>
              <ProjectDescriptionMD />
            </div>
          </div>
          <div
            className={
              "col col--4" +
              " " +
              styles.col_project_picture +
              " " +
              styles.col_project_picture_right
            }
            style={{ border: project.pictureBorderDesktop }}
          >
            <div className={styles.project_picture}></div>
            <img
              src={project.pictureRoute}
              width={project.pictureWidthDesktop}
              height={project.pictureHeightDesktop}
            />
          </div>
        </div>
      </div>
    );
  } else if (project.reverse === "true") {
    return (
      <div className={"container" + " " + styles.project_container}>
        <div
          className={"row" + " " + "row-padding-none" + " " + "row-margin-none"}
        >
          <div
            className={
              "col col--4 col--offset-1" +
              " " +
              styles.col_project_picture +
              " " +
              styles.col_project_picture_left
            }
            style={{ border: project.pictureBorderDesktop }}
          >
            <div className={styles.project_picture}>
              <img
                src={project.pictureRoute}
                width={project.pictureWidthDesktop}
                height={project.pictureHeightDesktop}
              />
            </div>
          </div>

          <div
            className={
              "col col--6" +
              " " +
              styles.col_project_text 
            }
          >
            <div className={styles.project_title}>{project.title}</div>
            <div className={styles.project_description}>
              <ProjectDescriptionMD />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
