import "./src/styles/elements/base.css"
import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"

import BoardGame from "./src/objects/BoardGame"
import PlayerGame from "./src/components/PlayerName"

const root = document.querySelector("#root")

root.insertAdjacentHTML(
  "beforeend",
  `
${PlayerGame("Player 1")}
${PlayerGame("Player 2")}
${BoardGame(6)}
`
)
