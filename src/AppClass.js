import React, { Component, Fragment } from "react";
import "./AppClass.css";
import Input from "./Input";

export default class AppClass extends Component {
  constructor(props) {
    super(props);

    this.lastNameRef = React.createRef(null);
    this.firstNameRef = React.createRef();
    this.dobRef = React.createRef(null);

    this.state = {
      isTrue: false,
      crowd: [],
    };
  }

  setFirstName(newName) {
    this.setState({ firstName: newName });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.firstName !== "" && this.state.lastName !== "") {
      this.addPerson(this.state.firstName, this.state.lastName, this.state.dob);
    }
    console.log(this.state.firstName, this.state.lastName, this.state.dob);
  };

  addPerson = (newFirst, newLast, newDob) => {
    let newPerson = {
      id: this.state.crowd.length + 1,
      firstName: newFirst,
      lastName: newLast,
      newDob: newDob,
    };

    const newList = this.state.crowd.concat(newPerson);

    const sorted = newList.sort((a, b) => {
      if (a.lastName < b.lastName) {
        return -1;
      } else if (a.lastName > b.lastName) {
        return 1;
      }
      return 0;
    });

    this.setState({
      crowd: sorted,
      firstName: "",
      lastName: "",
      dob: "",
    });

    this.firstNameRef.current.value = "";
    this.lastNameRef.current.value = "";
    this.dobRef.current.value = "";
  };

  componentDidMount() {
    this.setState({
      firstName: "",
      lastName: "",
      dob: "",
      crowd: [
        {
          id: 1,
          firstName: "Vitor",
          lastName: "Silva",
          dob: "2000-01-02",
        },
        {
          id: 2,
          firstName: "Smith",
          lastName: "Silva",
          dob: "1996-01-02",
        },
      ],
      isTrue: false,
    });
  }

  toggleTrue = () => {
    if (this.state.isTrue) {
      this.setState({
        isTrue: false,
      });
      return;
    }
    this.setState({
      isTrue: true,
    });
  };

  render() {
    return (
      <>
        <hr />
        <h1 className="h1-green">{this.props.msg}</h1>
        <hr />
        {this.state.isTrue && (
          <>
            <p>Value of isTrue is true</p>
            <hr />
          </>
        )}
        {this.state.isTrue ? <p>Is true</p> : <p>Is false</p>}
        <hr />
        <a
          href="#!"
          className="btn btn-outline-secondary"
          onClick={this.toggleTrue}
        >
          Toggle isTrue
        </a>

        <hr />
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="first-name">
              First Name:
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              ref={this.firstNameRef}
              autoComplete="first-name-new"
              className="form-control"
              onChange={(event) =>
                this.setState({ firstName: event.target.value })
              }
            ></input>
          </div>

          <Input
            ref={this.lastNameRef} // pretty different implementation on Input.js
            title="Last Name:"
            type="text"
            name="last-name"
            autoComplete="last-name-new"
            className="form-control"
            onChange={(event) =>
              this.setState({ lastName: event.target.value })
            }
          ></Input>

          <Input
            ref={this.dobRef}
            title="Dob:"
            type="date"
            name="dob"
            autoComplete="dob-new"
            className="form-control"
            onChange={(event) => this.setState({ dob: event.target.value })}
          ></Input>

          <input
            type="submit"
            value="Submit"
            className="btn btn-primary"
          ></input>
        </form>

        <div>
          First Name: {this.state.firstName} <br />
          Last Name: {this.state.lastName} <br />
          DoB: {this.state.dob} <br />
        </div>

        <hr />

        <h3>People</h3>
        <ul className="list-group">
          <li className="list-group-item"></li>
          {this.state.crowd.map((m) => (
            <li key={m.id} className="list-group-item">
              {m.firstName} {m.lastName}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
