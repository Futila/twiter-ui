import { Sparkle } from "phosphor-react";

import "./Header.css";

interface Headerprops {
  title: string;
}

export function Header(props: Headerprops) {
  return (
    <div className="timeline-header">
      {props.title}
      <Sparkle />
    </div>
  );
}
