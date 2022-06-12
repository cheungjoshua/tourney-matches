export const preparePlayerData = (obj) => {
  let result = Object.values(obj);
  return result;
};

export const addWinsToPlayers = (playerData, matchData) => {
  return playerData.map((player) => {
    const currentWins = matchData.reduce((acc, match) => {
      if (match.winner === player.gamerTag) {
        return (acc = +1);
      } else {
        return acc;
      }
    }, 0);
    player.win = currentWins;
    return player;
  });
};
