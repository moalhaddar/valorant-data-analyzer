import vmh from "../valorant_match_history.json";

const valorant_match_history = vmh.filter(x => !["Not Applicable", "Unknown"].includes(x.game_type));

const date_diff_in_ms:  (ending_date: Date, starting_date: Date) => number = (ending_date, starting_date) => ending_date.getTime() - starting_date.getTime()
const ms_to_hours: (ms: number) => number = (ms) => (((ms / 1000) / 60) / 60 )

const get_sum_time_in_hours: (game_type: string) => number = (game_type) => 
	valorant_match_history
	.filter(x => (x.game_type === game_type || game_type === "All"))
	.reduce( (acc, curr) => acc + ms_to_hours(date_diff_in_ms(new Date(curr.game_end_time_utc), new Date(curr.game_start_time_utc))), 0)

const get_sum_game_outcome: (game_outcome: "Win" | "Loss", game_type: string) => number = (game_outcome, game_type) =>
	valorant_match_history
	.filter(x => (x.game_type === game_type || game_type === "All"))
	.reduce( (acc, curr) => acc + (curr.game_outcome === game_outcome ? 1 : 0), 0)

const get_sum_games_played: (game_type: string) => number = (game_type) => 
	valorant_match_history.filter(x => (x.game_type === game_type || game_type === "All")).length

const print_summary: (game_type: string) => void = (game_type) => {
	console.log(`${game_type} games played: ${get_sum_games_played(game_type)}`)
	console.log(`${game_type} games results (W/L): ${get_sum_game_outcome("Win", game_type)}/${get_sum_game_outcome("Loss", game_type)}`)
	console.log(`${game_type} Winrate: ${((get_sum_game_outcome("Win", game_type)/(get_sum_games_played(game_type))) * 100).toFixed(1)}`);
	console.log(`Hours wasted in ${game_type}: ${get_sum_time_in_hours(game_type).toFixed(1)}\n`)
}

const unique_game_types = [...new Set(valorant_match_history.map(x => x.game_type)), "All"];

console.log(`Showing results from ${valorant_match_history[0].game_start_time_utc} to ${valorant_match_history[valorant_match_history.length - 1].game_start_time_utc}\n`)
unique_game_types.forEach((game_type => print_summary(game_type)));

