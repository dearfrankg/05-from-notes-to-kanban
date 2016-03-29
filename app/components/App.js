import React from 'react';
import { connect } from 'react-redux'
import Lanes from './Lanes';
import * as laneActions from '../dux/lanes';

@connect((state) => ({
  allLanes: state.lanes
}), {
  ...laneActions
})
export default class App extends React.Component {

  render() {
    const { allLanes, addLane } = this.props

    return (
      <div>
        <button
            className="add-lane"
            onClick={addLane} >+</button>
        <Lanes lanes={allLanes} />
      </div>
    )
  }

}
