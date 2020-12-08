import { patchRequest } from "./api/api-utils";
import Game from "./components/Game/Game";

const game = new Game("#playArea", 20, 2, 2000, 0);

console.log(game);