import Player from "./Player";

function PlayerList(props) {
  const players = props.playerData.map((player) => {
    return (
      <Player
        key={player.gamerTag}
        fistName={player.fistName}
        lastName={player.lastName}
        win={player.win}
      />
    );
  });

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {players}
    </section>
  );
}

export default PlayerList;
