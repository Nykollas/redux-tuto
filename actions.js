export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}


//Action example
//There's a text argument to be passed to the object which will represent the action
//Action object model: {
//			"type":"TYPE_CONSTANT",
//			"value":value
//		       }

//Add task
export function addTodo(text) {
	return { type: ADD_TODO, text }
}

//Set task completed
export function toggleTodo(index) {
	return { type: TOGGLE_TODO, index };
}

//Set visibility filter
export function setVisibilityFilter(filter) {
	return { type: SET_VISIBILITY_FILTER, filter }
}

