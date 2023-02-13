import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Status.css";

export function Status() {
  const [newAnswer, setNewAnswer] = useState("");

  const [answers, setAnswers] = useState([
    "Concordo",
    "Olha, faz sentido",
    "Parabéns pelo progresso",
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sed perspiciatis molestias ea fugit ab sapiente ipsam provident velit nemo. Quo similique aliquid voluptatem hic nisi. Molestiae neque quidem sed." />

      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/Futila.png" alt="Fernando Futila" />
          <textarea
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => setNewAnswer(event.target.value)}
            id="tweet"
            placeholder="Tweet your answer"
          ></textarea>
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
