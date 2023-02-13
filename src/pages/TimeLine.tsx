import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./TimeLine.css";

const tweets = [
  "Meu primeiro tweet",
  "Esse é o meu tweet",
  "Funcionouuuuu o Deploy",
];

export function TimeLine() {
  return (
    <main className="timeline">
      <Header title="Home" />

      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/Futila.png" alt="Fernando Futila" />
          <textarea id="tweet" placeholder="What's happening?"></textarea>
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
