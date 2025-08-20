import { v4 } from "uuid";

//#region src/main.ts
function debug() {
	return `example-${v4()}`;
}

//#endregion
export { debug as default };