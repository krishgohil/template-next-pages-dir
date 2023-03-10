import { Composition } from "remotion";
import { MyComposition } from "./MyComp/Composition";
import "../styles/global.css";
import { COMP_NAME, defaultMyCompProps } from "../types/MyComp";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id={COMP_NAME}
        component={MyComposition}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
        defaultProps={defaultMyCompProps}
      />
    </>
  );
};
