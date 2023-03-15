import React, { useMemo } from "react";

export const RenderProgress: React.FC<{
  progress: number;
}> = ({ progress }) => {
  const style: React.CSSProperties = useMemo(() => {
    return {
      width: "100%",
      height: 10,
      borderRadius: 5,
      appearance: "none",
      backgroundColor: "var(--unfocused-border-color)",
    };
  }, []);

  const fill: React.CSSProperties = useMemo(() => {
    return {
      backgroundColor: "white",
      height: 10,
      borderRadius: 5,
      transition: "width 0.1s ease-in-out",
      width: `${progress * 100}%`,
    };
  }, [progress]);

  return (
    <div>
      <div style={style}>
        <div style={fill}></div>
      </div>
    </div>
  );
};
