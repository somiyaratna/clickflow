import "./Loader.css";

const Loader = ({ width, height, color }) => {
  return (
    <span
      style={{
        width: width,
        height: height,
        border: `3px solid ${color}`,
        borderBottomColor: "transparent",
        borderRadius: "50%",
        display: "inline-block",
        boxSizing: "border-box",
        animation: "rotation 1s linear infinite",
      }}
    ></span>
  );
};

export default Loader;
