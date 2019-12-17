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
    {status !== "SUCCESS" ?<a className="close" onClick={this.props.close} >&times;</a> : <div />}
        <div className="content bg">
        <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xoqvroan"
        method="POST"
      > 
        
        {status === "SUCCESS" ? <p class="formSubmission dispTitle">Thanks for contacting! <br /> We will get back to you soon &#128512; </p> : <label className="formSubmission dispTitle"> {this.props.msg} </label>}
        <br /><br />
        <div class="row dispSide">
        {status === "SUCCESS" ? <div /> : <label className="form">Full name:</label>}
        {status === "SUCCESS" ? <div /> : <input className="formText" type="text" name="name" required/>}
        </div>
        {status === "SUCCESS" ? <div /> : <input type = "hidden" name="PetName" value={this.props.name} readOnly/>}
        {status === "SUCCESS" ? <div /> : <input type = "hidden" name="PetBreed" value={this.props.slug} readOnly/>}
        {status === "SUCCESS" ? <div /> : <input type = "hidden" name="PetID" value={this.props.id} readOnly/>}
        <div class="row dispSide">
        {status === "SUCCESS" ? <div /> : <label className="form">User Email: </label>}
        {status === "SUCCESS" ? <div /> : <input type="email" className="formText" name="userEmail" required/>}
        </div>
        {console.log(this.props.uemail)}
        {status === "SUCCESS" ? <div /> : <input type = "hidden" name="email" value={this.props.uemail} readOnly/>}
        <div class="row dispSide">
        {status === "SUCCESS" ? <div /> : <label className="form">Phone no :</label>}
        {status === "SUCCESS" ? <div /> : <input type="number" className="formText" name="phone" required/> }
        </div>
        <div class="row dispSide">
        {status === "SUCCESS" ? <div /> : <label className="form">Message:</label>}
        {status === "SUCCESS" ? <div /> : <textarea className="formTextarea" name="Message"></textarea>}
        </div>
        <div class="dispTitle">
        {status === "SUCCESS" ? <Link to="/choosepets">Back to adoption</Link> : <button className="formsubmit" type="submit">Contact</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </div>
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
