export const App = () => {
	const player1 = "Max Mustermann Mustermann";
	const player1_match_score = 0;
	const player1_game_score = 0;
	const player2 = "Max Mustermann";
	const player2_match_score = 0;
	const player2_game_score = 0;

	return (
		<div className="root">
			<div className="player" data-serve={true}>
				{player1}
			</div>
			<div className="match_score">{player1_match_score}</div>
			<div className="game_score">{player1_game_score}</div>
			<div className="player" data-serve={true}>
				{player2}
			</div>
			<div className="match_score">{player2_match_score}</div>
			<div className="game_score">{player2_game_score}</div>
			<div className="score">Musterstad 1 - 2 Musterstadt</div>
		</div>
	);
};
