import React from 'react';
import Note from './Note';
import { connect } from 'react-redux'
import { addNote, editNote, deleteNote } from '../dux/notes'


@connect(
  (state) => ({
    notes: state.notes
  }),
  (dispatch) => ({
    onAdd: () => dispatch(addNote()),
    onEdit: (id, task) => dispatch(editNote(id, task)),
    onDelete: id => dispatch(deleteNote(id))
  })
)
export default class Notes extends React.Component {

  render() {
    const {notes, onAdd, onEdit, onDelete} = this.props

    return (
      <div>
        <button onClick={onAdd} >+</button>
        <ul className="notes">{notes.map(note =>
          <li className="note" key={note.id}>
            <Note
              task={note.task}
              onEdit={onEdit.bind(null, note.id)}
              onDelete={onDelete.bind(null, note.id)} />
          </li>
        )}</ul>
      </div>
    )
  }

}
