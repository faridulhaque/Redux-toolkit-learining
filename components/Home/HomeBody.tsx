import React from "react";
import homeBodyStyles from "../../styles/HomeBody.module.css";

const HomeBody = () => {
  return (
    <>
      <h1 className="heading">Welcome to react-toolkit-practice</h1>

      <div className={homeBodyStyles.counter}>
        <button>+</button>
        <span>0</span>
        <button>-</button>
      </div>
    </>
  );
};

export default HomeBody;
