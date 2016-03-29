import React from 'react';


export default class Note extends React.Component {

  render() {
    const {connectDragSource, connectDropTarget, isDragging,
      onMove, id, editing, ...props} = this.props;
    // Pass through if we are editing
    const dragSource = editing ? a => a : connectDragSource;

    return (
      <li style={{ opacity: isDragging ? 0 : 1 }}
        {...props}>
            {props.children}
      </li>
    );
  }

}












// import React from 'react';
//
// export default class Note extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       editing: false
//     };
//   }
//
//   render() {
//     return this.state.editing
//           ? this.renderEdit()
//           : this.renderNote()
//   }
//
//   renderEdit = () => {
//     return <input type="text"
//       ref={
//         (e) => e ? e.selectionStart = this.props.task.length : null
//       }
//       autoFocus={true}
//       defaultValue={this.props.task}
//       onBlur={this.finishEdit}
//       onKeyPress={this.checkEnter} />;
//   };
//
//   renderNote = () => {
//     const onDelete = this.props.onDelete;
//     return (
//       <div onClick={this.edit}>
//       <span className="task">{this.props.task}</span>
//         {onDelete ? this.renderDelete() : null }
//       </div>
//     );
//   };
//
//   renderDelete = () => {
//     return <button
//       className="delete"
//       onClick={this.props.onDelete}>x</button>;
//   };
//
//   edit = () => {
//     this.setState({
//       editing: true
//     });
//   };
//
//   checkEnter = (e) => {
//     if(e.key === 'Enter') {
//       this.finishEdit(e);
//     }
//   };
//
//   finishEdit = (e) => {
//     const value = e.target.value;
//
//     if(this.props.onEdit) {
//       this.props.onEdit(value);
//       this.setState({
//         editing: false
//       });
//     }
//   };
//
// }
