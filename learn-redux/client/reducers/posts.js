// a reducer takes in:
// - the action (info about what happened)
// - copy of current state


function posts(state = [], action){ // set initial state to empty array
	console.log(state, action);
	return state;
}

export default posts;