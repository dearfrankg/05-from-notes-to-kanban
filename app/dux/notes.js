import uuid from 'node-uuid';

//////////////////////////////////
// DUX
// A file that contains constants, action-creators and reducers
//

//////////////////////////////////
// CONSTANTS
//
export const CREATE_NOTE = 'CREATE_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'


//////////////////////////////////
// ACTION CREATORS
//
function action(type, payload = {}) {
  return {type, ...payload}
}

export const createNote = () => action(CREATE_NOTE, {note: {id: uuid.v4(), task: 'New Note'}})
export const updateNote = (params) => action(UPDATE_NOTE, {...params})
export const deleteNote = id => action(DELETE_NOTE, {id})


////////////////////////////////
// REDUCERS
//
export const notes = (state = [], action) => {
  switch(action.type) {
    case CREATE_NOTE:
      return [...state, action.note]

    case UPDATE_NOTE:
      return state.map(note => {
        if (note.id === action.id) {
          let payload = {...action}
          delete payload.type
          return {...note, ...payload}
        }
        return note
      })

    case DELETE_NOTE:
      return state.filter(note => note.id !== action.id)

    default:
      return state
  }
}
