export default function BulbState({ lightOn }) {
  return (
    <div>
      {lightOn ? (
        <img
          src="https://img.icons8.com/?size=100&id=WWRW41cpXB4o&format=png&color=000000"
          alt="bulbOn"
        />
      ) : (
        <img
          src="https://img.icons8.com/?size=100&id=tlXZO3hU3TSG&format=png&color=000000"
          alt="bulbOff"
        />
      )}
    </div>
  );
}
