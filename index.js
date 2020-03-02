import { createStore } from 'redux';
import todoApp from './reducers';
import {addTodo, toggleTodo } from './actions';

//Criando store a partir dos reducers
const store = createStore(todoApp);

//Log do estado inicial
let state = store.getState();
console.log(state)

const actionAddTodo = addTodo("Primeira tarefa");
//Executando a action responsável por adicionar uma tarefa
store.dispatch(actionAddTodo);

//Log do estado atualizado
state = store.getState();
console.log(state);