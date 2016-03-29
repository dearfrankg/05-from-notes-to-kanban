import uuid from 'node-uuid';

//////////////////////////////////
// DUX
// A file that contains constants, action-creators and reducers
//

//////////////////////////////////
// CONSTANTS
//
export const ADD_NOTE = 'ADD_NOTE'
export const EDIT_NOTE = 'EDIT_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'


//////////////////////////////////
// ACTION CREATORS
//
function action(type, payload = {}) {
  return {type, ...payload}
}

export const addNote = () => action(ADD_NOTE, {note: {id: uuid.v4(), task: 'New Note'}})
export const editNote = (id, task) => action(EDIT_NOTE, {id, task})
export const deleteNote = id => action(DELETE_NOTE, {id})


////////////////////////////////
// REDUCERS
//
export const notes = (state = [], action) => {
  switch(action.type) {
    case ADD_NOTE:
      return [...state, action.note]

    case EDIT_NOTE:
      return state.map(note => {
        if (note.id === action.id) {
          return {...note, task: action.task}
        }
        return note
      })

    case DELETE_NOTE:
      return state.filter(note => note.id !== action.id)

    default:
      return state
  }
}
