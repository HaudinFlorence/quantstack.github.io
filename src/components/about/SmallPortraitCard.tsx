import styles from "./styles.module.css";
import SocialMediaContacts from "./SocialMediaContacts";

import { useEffect, useRef } from "react";

export default function SmallPortraitCard({ person, avatarUrl }) {
  const elementRef = useRef(null);

  // Later in your component, you can access getBoundingClientRect
  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getClientRect();
      // You can now use rect to position other elements or for any other purpose
      console.log(rect)
    }
  }, []);

  return (
    <div ref={elementRef} className={styles.small_portrait_card}>
      <div className="flex-full-centered">
        <div className={styles.avatar}>
          <img src={avatarUrl} width={"160px"} height={"160px"} />
        </div>
      </div>
      <div className={styles.small_card_complete_name}>
        {person.completeName}
      </div>
      <div className={styles.small_card_position}>{person.position}</div>
      <div style={{ marginTop: "var(--ifm-spacing-xl)" }}>
        <SocialMediaContacts person={person}></SocialMediaContacts>
      </div>
    </div>
  );
}
