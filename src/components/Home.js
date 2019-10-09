import React, { Component } from 'react';
import Firebase from '../Firebase';
import _ from 'lodash';
import '../App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      city: '',
      search: '',
      personDetails: {}
    };

    //bind
    this.renderData = this.renderData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //lifecycle
  componentDidMount() {
    Firebase.database().ref('/nannydetails').on('value', (snapshot) => {
      this.setState({
        personDetails: snapshot.val()
      })
    });
  }

  //handle change
  handleChange(event) {
    this.setState({
      city: (event.target.value).toLowerCase()
    });
  }

  //handle submit
  handleSubmit(event) {
    event.preventDefault();
    Firebase.database().ref('/nannydetails').orderByChild('city').equalTo(this.state.city).on('value', (snapshot) => {
      this.setState({
        personDetails: snapshot.val()
      })
    });
    this.setState({
      city: ''
    });
  }

  //render data
  renderData() {
    return _.map(this.state.personDetails, (personDetail, key) => {
      return(
        <div className="pt-2 pb-1 m-2 border border-dark bg-warning row" key={key}>
          <div className="col-md-3 col-xs-3 text-right">
            <img src={require('./profile.png')} alt="cam"/>
          </div>
          <div className="col-md-9 col-xs-9">
            <div className="headline">
              <h1>Full Name: </h1>
              <p>{personDetail.fullname}</p>
            </div>
            <div className="headline">
              <h1>Contact Number: </h1>
              <p>{personDetail.phone}</p>
            </div>
            <div className="headline">
              <h1>Experience: </h1>
              <p>{personDetail.experience}</p>
            </div>
            <div className="headline">
              <h1>City: </h1>
              <p>{personDetail.city}</p>
            </div>
            <div className="headline">
              <h1>State: </h1>
              <p>{personDetail.state}</p>
            </div>
          </div>
        </div>
      )
    });
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
                  value={this.state.city}
                  type="text" 
                  className="form-control" 
                  name="city" 
                  placeholder="Enter the City...." required/>
              </div>
              <button type="submit" className="btn btn-primary col-sm-12">Search</button>
            </form>
          </div>
        </div>
        {this.state.personDetails? this.renderData():
          <div className="alert alert-danger">
            <strong>No Data Found!</strong>
          </div>
        }
      </div>
    );
  }
}

export default Home;