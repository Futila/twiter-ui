import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./TimeLine.css";

export function TimeLine() {
  const [newTweet, setNewTweet] = useState("");

  const [tweets, setTweets] = useState([
    "Meu primeiro tweet",
    "Esse é o meu tweet",
    "Funcionouuuuu o Deploy",
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  }
  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/Futila.png" alt="Fernando Futila" />
          <textarea
            onChange={(event) => setNewTweet(event.target.value)}
            value={newTweet}
            id="tweet"
            placeholder="What's happening?"
          ></textarea>
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
