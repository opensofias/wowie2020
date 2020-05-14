/*TODO*/
const turn = () => {
	fall ()
	paint ()
}

/*TODO*/
const fall = () => {
	if ( /*free space below*/ ) {
		/* lower piece */
	} else {
		/* finish move */
	}
}

const piecesTypes = [[
		[1, 1]
		[1, 1]
	], [
		[1, 1, 1, 1]
	], [
		[0, 1, 0],
		[1, 1, 1]
	], [
		[0, 1, 1],
		[1, 1, 0]
	], [
		[1, 1, 0],
		[0, 1, 1]
	], [
		[1, 0, 0],
		[1, 1, 1]
	], 	[
		[0, 0, 1],
		[1, 1, 1]
	]
]

const paint = (arena, piece) => {
	const context = document.getElementById ('canvas').getContext('2d')

	
}


/* TODO
* keyboard listener
* crawly phase
* counters

*/