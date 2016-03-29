import React from 'react';
import { connect } from 'react-redux'
import Notes from './Notes';
import { addNote } from '../dux/notes';

@connect(
  (state) => ({
    lanes: state.notes
  })
)
export default class App extends React.Component {

  render() {
    return (
      <div>
        <Notes />
      </div>
    )
  }

}
