import { Button } from "react-bootstrap";
import styles from "./CardsDisplay.module.css";

const CardsDisplay = ({ characters, culprit, onClick, quotes }) => {
  const Serialize = (string) => string.split(" ").join("_");
  return (
    <div className={styles.cardSection}>
      {characters.map((character) => (
        <div key={character.char_id} className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <img
                className={styles.cardImage}
                src={character.img}
                alt={character.name}
              />
            </div>
            <div className={styles.flipCardBack}>
              <div className={styles.charInfo}>
                <div className={styles.cardTitle}>
                  <a
                    href={`https://breakingbad.fandom.com/wiki/${Serialize(
                      character.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {character.name}
                  </a>
                </div>
                <div>Birthday: {character.birthday}</div>
                <div>Nickname: {character.nickname}</div>
                {character.occupation.map((job) => (
                  <div key={job}>{job}</div>
                ))}
              </div>
              <div className="text-center">
                {quotes.find((quote) => quote.author === character.name)
                  ? quotes.find((quote) => quote.author === character.name)
                      .quote
                  : ""}
              </div>
              <div className={styles.deathCountButton}>
                <Button
                  variant="outline-danger"
                  name={character.name}
                  onClick={onClick}
                >
                  {culprit && character.name === culprit[0].name
                    ? culprit[0].deathCount
                    : "Reveal Kill Count"}
                </Button>
              </div>
              <div
                className={styles.charStatus}
                style={
                  character.status === "Alive"
                    ? { color: "green" }
                    : { color: "yellow" }
                }
              >
                {character.status}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsDisplay;
