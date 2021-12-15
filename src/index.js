import react from "react";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleAddTask}>
          <input type="text" names="names"></input>
          <button>AddTask</button>
        </form>
      </div>
    );
  }
}

const Task = (props) => {
  if (props.isExists) {
    return (
      <div>
        <ul>
          {props.names.map((name) => (
            <li>{name}</li>
          ))}
        </ul>
        <h4>Already Exsists Plz enter new value</h4>
      </div>
    );
  }
  if (!props.isClear) {
    return (
      <div>
        <ul>
          {props.names.map((name) => (
            <div>
              <li>{name}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  } else {
    console.log("dodi");
    return <h4>plz enter new value</h4>;
  }
};

const DeleteAll = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteAll}>
        {props.names.length > 0 ? "Delete All" : "Nothing to Delete"}
      </button>
    </div>
  );
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.state = {
      names: [],
      isClear: false,
      isExists: false,
      a: "a",
    };
  }

  handleDeleteAll() {
    return this.setState(() => ({ names: [] }));
  }

  handleAddTask(e) {
    e.preventDefault();

    if (this.state.names.includes(e.target[0].value)) {
      return this.setState((prev) => ({
        isExists: true,
        names: prev.names,
      }));
    } else {
      this.setState(() => ({ isExists: false }));
    }

    if (e.target[0].value === "") {
      this.setState({ isClear: true });
    } else {
      return this.setState((prev) => ({
        names: prev.names.concat(e.target[0].value),
        isClear: false,
      }));
    }
  }

  render() {
    return (
      <div>
        <h1>To Do App</h1>
        <AddTask handleAddTask={this.handleAddTask} names={this.state.names} />
        <Task
          names={this.state.names}
          isClear={this.state.isClear}
          isExists={this.state.isExists}
        />
        <DeleteAll
          handleDeleteAll={this.handleDeleteAll}
          names={this.state.names}
        />
      </div>
    );
  }
}

ReactDOM.render(<ToDo />, document.getElementById("root"));
