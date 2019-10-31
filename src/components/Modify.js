import React, { Component } from 'react';
import Firebase from '../Firebase';
import _ from 'lodash';
import '../App.css';


class Modify extends Component {

  constructor(props) {
    super(props);
    //state
    this.state = {
      personDetails: {},
      details: {}
    };

    //bind
    this.renderData = this.renderData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  //lifecycle
  componentDidMount() {
    Firebase.database().ref('/nannydetails').on('value', (snapshot) => {
      this.setState({
        personDetails: snapshot.val()
      })
    })
  }

  //handle change
  handleChange(event, personDetail) {
    const editDetails = personDetail;
    editDetails[event.target.name] = event.target.value.toLowerCase();
    this.setState({
      details: editDetails
    });
  }

  //render data
  renderData() {
    return _.map(this.state.personDetails, (personDetail, key) => {
      return(
        <div className="pt-2 pb-1 m-2 border border-dark bg-warning" key={key}>
          
          <div className="p-2 m-4">
            <div className="headline">
              <h1>Full Name: </h1>
              <input className="form-control" type="text" name="fullname" defaultValue={personDetail.fullname} onChange={(e) => {this.handleChange(e, personDetail)}}/>
            </div>
            <div className="headline">
              <h1>Contact Number: </h1>
              <input className="form-control" type="text" name="phone" defaultValue={personDetail.phone} onChange={(e) => {this.handleChange(e, personDetail)}}/>
            </div>
            <div className="headline">
              <h1>Experience: </h1>
              <input className="form-control" type="text" name="experience" defaultValue={personDetail.experience} onChange={(e) => {this.handleChange(e, personDetail)}}/>
            </div>
            <div className="headline">
              <h1>City: </h1>
              <input className="form-control" type="text" name="city" defaultValue={personDetail.city} onChange={(e) => {this.handleChange(e, personDetail)}}/>
            </div>
            <div className="headline">
              <h1>State: </h1>
              <input className="form-control" type="text" name="state" defaultValue={personDetail.state} onChange={(e) => {this.handleChange(e, personDetail)}}/>
            </div>
            <button className="btn btn-success mt-2 mr-1" type="button" onClick={() => this.saveEdit(key)}><i className="fa fa-pencil-square-o"></i> Save Edit</button>
            <button className="btn btn-danger  mt-2" type="button" onClick={() => this.handleDelete(key)}><i className="fa fa-trash"></i> Delete</button>
          </div>
        </div>
      )
    });
  }

  //handle save edit
  saveEdit(key) {
    const newDetail = this.state.details;
    
    Firebase.database().ref(`/nannydetails/${key}`).update({
      fullname: newDetail.fullname,
      phone: newDetail.phone,
      experience: newDetail.experience,
      city: newDetail.city,
      state: newDetail.state
    });
    alert("User Details Edited!");
  }

  //handle delete
  handleDelete(key) {
    const user= Firebase.database().ref(`/nannydetails/${key}`);
    user.remove();
  }

  render() {
    return (
      <div className="container mt-4">
      <h3 className="text-center">Click on the save button to save the data of the respective user.</h3>
        {this.renderData()}
      </div>
    );
  }
}

export default Modify;