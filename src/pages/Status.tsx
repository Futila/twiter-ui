import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Status.css";

const answers = ["Concordo", "Olha, faz sentido", "Parabéns pelo progresso"];

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sed perspiciatis molestias ea fugit ab sapiente ipsam provident velit nemo. Quo similique aliquid voluptatem hic nisi. Molestiae neque quidem sed." />

      <Separator />
      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/Futila.png" alt="Fernando Futila" />
          <textarea id="tweet" placeholder="Tweet your answer"></textarea>
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
