import React, { Component } from 'react';
import Firebase from '../Firebase';
import '../App.css';

class Add extends Component {

  constructor(props) {
    super(props);
    //state
    this.state = {
      fullname: '',
      phone: '',
      experience: '',
      city: '',
      state: ''
    };

    //bind
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //handle change
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value.toLowerCase()
    });
  }

  //handle submit
  handleSubmit(event) {
    event.preventDefault();
    const personDetail = {
      fullname: this.state.fullname,
      phone: this.state.phone,
      experience: this.state.experience,
      city: this.state.city,
      state: this.state.state
    }
    Firebase.database().ref('/nannydetails').push(personDetail);
    this.setState({
      fullname: '',
      phone: '',
      experience: '',
      city: '',
      state: ''
    });
    alert("Added New User Details!");
  }
  
  render() {
    
    return (
      <div className="container mt-4">
        <div className="justify-content-center row">
          <div className="col-sm-6">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input 
                  onChange={this.handleChange}
                  value={this.state.fullname}
                  type="text" 
                  className="form-control" 
                  name="fullname" 
                  placeholder="Full Name...." required/>
              </div>
              <div className="form-group">
                <input 
                  onChange={this.handleChange}
                  value={this.state.phone}
                  type="text" 
                  className="form-control" 
                  name="phone" 
                  placeholder="Contact Number...." 
                  required/>
              </div>
              <div className="form-group">
                <textarea 
                  onChange={this.handleChange}
                  value={this.state.experience}
                  type="text" 
                  className="form-control" 
                  name="experience" 
                  placeholder="Experiences and Work Done....">
                </textarea>
              </div>
              <div className="form-group">
                <input 
                  onChange={this.handleChange}
                  value={this.state.city}
                  type="text" 
                  className="form-control" 
                  name="city" 
                  placeholder="City...." 
                  required/>
              </div>
              <div className="form-group">
                <input 
                  onChange={this.handleChange}
                  value={this.state.state}
                  type="text" 
                  className="form-control" 
                  name="state" 
                  placeholder="State...." 
                  required/>
              </div>
              <button type="submit" className="btn btn-primary col-sm-12">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Add;