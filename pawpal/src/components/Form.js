import React from "react";
import { Link } from "react-router-dom";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }
  render() {
  const { status } = this.state;
  return (
<>
        <a className="close" onClick={this.props.close} >
          &times;
        </a>
        <div className="content">
        <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xoqvroan"
        method="POST"
      >
        {status === "SUCCESS" ? <p class="formSubmission">Thanks for submission!</p> : <label className="formSubmission">Contact Form: </label>}
        <br /><br />
        {status === "SUCCESS" ? <div /> : <label className="form">Full name:</label>}
        {status === "SUCCESS" ? <div /> : <input type = "hidden" name="PetName" value={this.props.name} readOnly/>}
        {status === "SUCCESS" ? <div /> : <input type = "hidden" name="PetBreed" value={this.props.slug} readOnly/>}
        {status === "SUCCESS" ? <div /> : <input type = "hidden" name="PetID" value={this.props.id} readOnly/>}
        {status === "SUCCESS" ? <div /> : <input className="formText" type="text" name="name" required/>}
        {status === "SUCCESS" ? <div /> : <label className="form">Email:</label>}
        {status === "SUCCESS" ? <div /> : <input type="email" className="formText" name="userEmail" required/>}
        {console.log(this.props.uemail)}
        {status === "SUCCESS" ? <div /> : <input type = "hidden" name="email" value="nithinbs18@gmail.com" readOnly/>}
        {status === "SUCCESS" ? <div /> : <label className="form">Phone number:</label>}
        {status === "SUCCESS" ? <div /> : <input type="number" className="formText" name="phone" required/> }
        {status === "SUCCESS" ? <div /> : <label className="form">Message:</label>}
        {status === "SUCCESS" ? <div /> : <textarea className="formTextarea" name="Message"></textarea>}
        {status === "SUCCESS" ? <Link to="/choosepets">Back to adoption</Link> : <button className="formsubmit" type="submit">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
        </div>
        </ >
    )}


submitForm(ev) {
  ev.preventDefault();
  const form = ev.target;
  const data = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      form.reset();
      this.setState({ status: "SUCCESS" });
    } else {
      this.setState({ status: "ERROR" });
    }
  };
  xhr.send(data);
}
}
