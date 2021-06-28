import React from 'react';

// class Form extends React.Component {
//   state = {
//     firstName: "John",
//     lastName: "Henry"
//   }

//   handleFirstNameChange = event => {
//     this.setState({
//       firstName: event.target.value
//     })
//   }

//   handleLastNameChange = event => {
//     this.setState({
//       lastName: event.target.value
//     })
//   }

//   render() {
//     return (
//       <form>
//         <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
//         <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
//       </form>
//     )
//   }
// }

// handleSubmit = event => {
//   event.preventDefault()
//   let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
//   this.sendFormDataSomewhere(formData)
// }

// listOfSubmissions = () => {
//   return this.state.submittedData.map((data, idx) => {
//     return <div key={idx}><span>{data.firstaName}</span><span>{data.lastName}</span></div>
//   })
// }

// render() {
//   return (
//     <div>
//       <form onSubmit={event => this.handleSubmit(event)}>
//         <input type="text" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
//         <input type="text" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
//         <input type="submit" />
//       </form>
//       {this.listOfSubmissions()}
//     </div>
//   )
// }

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            name="lastName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.lastName} />
        </form>
      </div>
    )
  }
}

export default Form;