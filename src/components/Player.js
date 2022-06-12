import React from "react";

function Player(props) {
  return (
    <article className="Player">
      <h1>
        {props.firstName} <span>{props.gamerTag}</span> {props.lastName}
      </h1>
      {props.win === 0 && <h2 className="zero">Currently with no wins :( </h2>}

      {props.win === 1 && <h2>Currently at 1 win</h2>}

      {props.win > 1 && <h2>Currently at {props.win} wins</h2>}
    </article>
  );
}

export default Player;
