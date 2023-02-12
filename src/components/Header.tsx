import { Sparkle } from "phosphor-react";

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
