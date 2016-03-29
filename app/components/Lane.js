import React from 'react';
import { connect } from 'react-redux'
import Notes from './Notes.js'
import * as laneActions from '../dux/lanes';
import * as noteActions from '../dux/notes';

@connect((state) => ({
  allNotes: state.notes
}), {
  ...laneActions,
  ...noteActions
})
export default class Lane extends React.Component {


  render() {
    const {lane, allNotes, ...props} = this.props;
    const laneNotes = lane.notes
        .map(id => allNotes[ allNotes.findIndex((note) => note.id === id) ])
        .filter(note => note)
    const laneId = lane.id;

    return (
      <div {...props}>
        <div className="lane-header">
          <div className="lane-add-note">
            <button onClick={this.addNote.bind(this, laneId)}>+</button>
          </div>
          <div className="lane-name">{lane.name}</div>
        </div>
        <Notes
            notes={laneNotes}
            onValueClick={id => props.updateNote({id, editing: true})}
            onEdit={(id, task) => props.updateNote({id, task, editing: false})}
            onDelete={id => this.deleteNote(laneId, id)} />
      </div>
    )

  }

  addNote(laneId, e) {
    e.stopPropagation()
    const o = this.props.createNote()
    this.props.attachToLane(laneId, o.note.id)
  }

  deleteNote(laneId, noteId) {
    this.props.detachFromLane(laneId, noteId)
    this.props.deleteNote(noteId)
  }


}
