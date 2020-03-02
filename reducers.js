
//Importando actions
import {
	SET_VISIBILITY_FILTER,
	ADD_TODO,
	TOGGLE_TODO,
	VisibilityFilters
} from './actions';

//Importando API responsável por combinar reducers de estados independentes
import {combineReducers } from 'redux';

//Importando constante action responsável pelo estado do filtro das tarefas
const { SHOW_ALL } = VisibilityFilters;

//reducer responsável pelo tarefas
function todos(state = [], action) {
	//Filtrando tipo da action
	switch( action.type){
		case ADD_TODO:
			//Retornando estado atualizando com a nova tarefa
			return [
				...state,
				{
					text:action.text,
					completed:false
				}
			]
		case TOGGLE_TODO:
			//Retornando estado os status das tarefas atualizados
			return state.map((value, index) => { 
				if(action.index == index)
					return Object.assign({}, value, {completed:!state.completed});
				return value
			});
		default:
			//Padrão
			return state
			
	}
}

//Reducer responsável pelo visualização das tarefas
function visibilityFilter(state = SHOW_ALL, action){
	switch(action.type){
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}

// Repare que ambos os  reducers possuem states complementares ao state da aplicação
//combineReducers tem o propósito de permitir que os reducers interajam com o state da aplicação e não com states complementares
const todoApp = combineReducers({
	visibilityFilter,
	todos
})


//Exportando reducers combinados
export default todoApp;


