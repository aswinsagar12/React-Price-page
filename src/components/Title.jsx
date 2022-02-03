import React from "react";
import "./Title.css";

export default function Title({ text }) {
  return (
    <>
      <h1 className="header">
        Publish Flawlessly.
        <br /> Analyze Effortlessly. Engage Authentically.
      </h1>
      <p className="paragraph">
        We've built simpler social media tools for busy people. Enjoy our free
        plan as you get started,
        <br /> or trial our full toolkit priced to make marketing your business
        on social affordable.
      </p>
    </>
  );
}
