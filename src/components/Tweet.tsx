import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";

export function Tweet() {
  return (
    <a href="#" className="tweet">
      <img src="https://github.com/Futila.png" alt="Fernando Futila" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Fernando Futila</strong>
          <span>@Futila</span>
        </div>
        <p>
          Acabei de migrar um projeto React GIGANTE de create-react-app para
          Vite e os resultados foram:
          <br />
          ✅ npm start: De 32s para 400ms (sim, demorava 30s) ✅ npm build: De
          120s para 22s
          <br />
          Além disso, troquei do Yarn para o PNPM e o install das deps mudou de
          24s para 8s 🔥
        </p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </a>
  );
}
