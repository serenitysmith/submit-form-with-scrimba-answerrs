import React, { useState } from "react";
import "./App.css";
export default function App() {


  //to meet below challenge we first need dto add a stat function/
// we do that here with an object array inste of our tate
const[formData, setFormData] = React.useState({
  email: "",
  password:"",
  passwordConfirm: "",
  // booleen is box checked or nah 
  joinedNewsLetter: true


  //we then need to add these objects as name values in our inputs
})


  /**
   * Challenge: Connect the form to local state
   *
   * 1. Create a state object to store the 4 values we need to save.
   * 2. Create a single handleChange function that can
   *    manage the state of all the inputs and set it up
   *    correctly
   * 3. When the user clicks "Sign up", check if the
   *    password & confirmation match each other. If
   *    so, log "Successfully signed up" to the console.
   *    If not, log "passwords to not match" to the console.
   * 4. Also when submitting the form, if the person checked
   *    the "newsletter" checkbox, log "Thanks for signing
   *    up for our newsletter!" to the console.
   */



  // Define the handleChange function to handle changes in form inputs
  function handleChange(event) {
    const {name, value, type, checked} = event.target
    //the paraentheses make this an implicit return statemet, returns an object


    // Update the form state based on the input type (text/checkbox)
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked  : value   
    }))
}// we make a handle change event with name value, type etc so we know what event was modified 

console.log(formData)


// Define the handleSubmit function to handle form submission
  function handleSubmit(event) {
    event.preventDefault() // Prevent the form from submitting (reloading the page)


        // Check if the password and confirmation match

    if(formData.password === formData.passwordConfirm) {
      console.log("Successfully signed up")
  } else {
      console.log("Passwords do not match")
      return // Exit the function early if passwords don't match
  }
  // Check if the user wants to join the newsletter
  if(formData.joinedNewsLetter) {
      console.log("Thanks for signing up for our newsletter!")
  }
  }
// Check if the user wants to join the newsletter
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input type="password" placeholder="Password" className="form--input"
        name="password" 
        onChange={handleChange}
        value={formData.password}/>
        
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="passwordConfirm"
          onChange={handleChange}
          value={formData.passwordConfirm}
        />

        <div className="form--marketing">
          <input id="okayToEmail" type="checkbox" 
          onChange={handleChange}
          name="joinedNewsLetter"
              checked={formData.joinedNewsLetter}
              />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}


// Notable points in the code:

// The handleChange function is used to manage changes in the form inputs. It updates the form state based on the input type, whether it's a text input or a checkbox.

// The form data is logged to the console when the user interacts with the form.

// The handleSubmit function checks if the password and confirmation match and logs a message based on the result. It also checks if the user wants to join the newsletter and logs a message accordingly.

// Input fields have name, onChange, and value attributes to bind them to the form state and the handleChange function.