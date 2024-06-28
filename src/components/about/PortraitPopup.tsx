import SmallPortraitCard from "./SmallPortraitCard";
import Popup from "reactjs-popup";
import LargePortraitCard from "./LargePortraitCard";
import styles from "./styles.module.css";

export function Anchor() {
  return <div className={styles.anchor}>ANCHOR</div>;
}
export default function PopupPortrait({
  person,
  subTeamAvatarsUrl,
  subTeamBioComponent,
}) {
  return (
    <div>
    
      <Popup
        className={styles.portrait_popup}
        trigger={
          <div>
            <SmallPortraitCard
              person={person} avatarUrl={subTeamAvatarsUrl} />
          </div>
        }
        overlayStyle={{
          backgroundColor: "var(--ifm-background-color-popup-overlay)",
          opacity: "0.4",
          width: "100%",
          height: "100%",
        }}
        position={"center center"}
        offsetX={300}
      offsetY={300}
      >
        <LargePortraitCard
          person={person}
          avatarUrl={subTeamAvatarsUrl}
          BioComponent={subTeamBioComponent}
        ></LargePortraitCard>
      </Popup>
    </div>
  );
}
