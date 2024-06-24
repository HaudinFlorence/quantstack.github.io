import styles from "./styles.module.css";

import OpennessMD from "@site/src/components/about/Values/openness.md";
import ScienceMD from "@site/src/components/about/Values/science.md";
import IntegrityMD from "@site/src/components/about/Values/integrity.md";
import OptimismMD from "@site/src/components/about/Values/optimism.md";
//import OpennessPicture from "@site/static/img/values/openness.svg";
//import SciencePicture from "@site/static/img/values/science.svg";
//import OptimismPicture from "@site/static/img/values/optimism.svg";
//import IntegrityPicture from "@site/static/img/values/integrity.svg";
import { ValueCardMobile } from "@site/src/components/about/ValueCard";
import { ValueCardDesktop } from "@site/src/components/about/ValueCard";
import { useEffect, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

const valuesDescriptions = [OpennessMD, ScienceMD, IntegrityMD, OptimismMD];
const valuesPictures = [
  OpennessPicture,
  SciencePicture,
  OptimismPicture,
  IntegrityPicture,
];

export function SciencePicture() {
  return (
    <ThemedImage
      alt="Icon representing the science value, representing an atom."
      sources={{
        light: useBaseUrl("/img/values/science-light.svg"),
        dark: useBaseUrl("/img/values/science-dark.svg"),
      }}
    />
  );
}

export function OpennessPicture() {
  return (
    <ThemedImage
      alt="Icon representing the openness value, four people connected together."
      sources={{
        light: useBaseUrl("/img/values/openness-light.svg"),
        dark: useBaseUrl("/img/values/openness-dark.svg"),
      }}
    />
  );
}

export function IntegrityPicture() {
  return (
    <ThemedImage
      alt="Icon representing the integrity value, with an heart inside a hand ."
      sources={{
        light: useBaseUrl("/img/values/integrity-light.svg"),
        dark: useBaseUrl("/img/values/integrity-dark.svg"),
      }}
    />
  );
}

export function OptimismPicture() {
  return (
    <ThemedImage
      alt="Icon representing the optimism value, with a smiling face ."
      sources={{
        light: useBaseUrl("/img/values/optimism-light.svg"),
        dark: useBaseUrl("/img/values/optimism-dark.svg"),
      }}
    />
  );
}

const valuesNames = ["Openness", "Science", "Optimism", "Integrity"];
const cardColors = ["yellow", "white", "yellow", "white"];

export function FourValuesMobile() {
  return (
    <div className="four_values_container">
      <ul className={"row" + " " + styles.row_custom}>
        {valuesNames.map((value, index) => (
          <li className="cards_list" key={index}>
            <div className="col">
              <ValueCardMobile
                value={value}
                ValuePicture={valuesPictures[index]}
                ValueComponent={valuesDescriptions[index]}
                color={cardColors[index]}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FourValuesDesktop() {
  return (
    <div className="main-container-with-margins">
      <div className="four_values_container">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <h1 className="h1-padding-none">Our values </h1>
          </div>
        </div>
        <ul className={"row" + " " + styles.row_custom}>
          {valuesNames.map((value, index) => (
            <li className="cards_list" key={index}>
              <div className="col">
                <ValueCardDesktop
                  value={value}
                  ValuePicture={valuesPictures[index]}
                  ValueComponent={valuesDescriptions[index]}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const breakpointValue: number = 996;

export default function FourValues() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpointValue);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpointValue);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return <div>{isDesktop ? <FourValuesDesktop /> : <FourValuesMobile />}</div>;
}
