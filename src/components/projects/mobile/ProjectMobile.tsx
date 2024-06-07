
import styles from "../styles.module.css";

export default function ProjectMobile({ project }): JSX.Element {
  return (
    <div className={"container" + " " + styles.project_container}>
      <div className={"row" + " " + styles.row_custom}>
        <div className={"col" + " " + styles.col_custom}>
          <div className={styles.project_picture_container}>
            <img
              src={project.pictureRoute}
              width={project.pictureWidthMobile}
              height={project.pictureHeightMobile}
            />
          </div>
          <div className={styles.project_title_small_container}>
            <div className={styles.project_title_small}>{project.title}</div>
          </div>
        </div>
      </div>
    </div>
  
  );
}