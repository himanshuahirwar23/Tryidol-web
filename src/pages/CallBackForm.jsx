import React from 'react';
import '../styles/CallBackForm.css'; 

const CallBackForm = () => {
  return (
    <div className='CallBack'>
        <div className="callback-form">
      <h2>Request a Call Back.</h2>
      <p>
        Would you like to speak to one of our customer success executives over the phone?
        Just submit your details and we’ll be in touch shortly. You can also email us if you would prefer.
      </p>
      <form action="/submit" method="POST">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="discussion">I would like to discuss:</label>
            <select id="discussion" name="discussion">
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Web Development">Web Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Name" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Phone number" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default CallBackForm;
