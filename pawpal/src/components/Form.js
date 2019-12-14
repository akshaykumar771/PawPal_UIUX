import React from "react";

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
        <a className="close" onClick="">
          &times;
        </a>
        <div className="content">
        <form
        onSubmit={this.submitForm}
        // action="https://formspree.io/xoqvroan"
        method="POST"
      >
        <label className="header">Contact Form</label><br /><br />
        <label className="form">Full name:</label>
        <input className="formText" type="text" name="name" required/>
        <input type = "hidden" name="email" value="nithinbs18@gmail.com" readonly/>
        <label className="form">Message:</label>
        <input type="text" className="formText" name="message" required/>
        <label className="form">Phone number:</label>
        <input type="text" className="formText" name="phone" required/>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="formsubmit" type="submit">Submit</button>}
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
