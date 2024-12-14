const HOME_TEAM_WON = 1

const tournamentWinner = (competitions, results) => {
    const scores = {}
    let currentBestTeam = ""
    let isFirstGame = true

    competitions.forEach((item, index) => {
        const [homeTeam, awayTeam] = item

        let winningTeam

        if (results[index] === HOME_TEAM_WON) {
            winningTeam = homeTeam
        } else {
            winningTeam = awayTeam
        }

        if (!Object.keys(scores).includes(winningTeam)) {
            scores[winningTeam] = 0
        }

        scores[winningTeam] += 3

        if (scores[winningTeam] > scores[currentBestTeam] && !isFirstGame) {
            currentBestTeam = winningTeam
        } else if (isFirstGame) {
            currentBestTeam = winningTeam
        }

    })

    return currentBestTeam
}


/**
 * 0 in result means a second param
 * [HTML, C#] - 0 in result = C#, 1 - HTML
 *
 * for winn you get 3 points
 */

const competitions = [
    ["HTML", "C#"],
    ["C#", "python"],
    ["python", "HTML"]
]

const results = [0, 0, 1]

console.log(tournamentWinner(competitions, results)) // python