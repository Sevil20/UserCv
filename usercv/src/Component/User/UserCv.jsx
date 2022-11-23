import React, { Component } from 'react'
import Contact from './Contact'
import Experience from './Experience'
import PersonalInfo from './PersonalInfo'

 class UserCv extends Component {
  render() {
    return (
      <div style={{display:'flex', width:'70%',marginLeft:'180px'}}>
        <PersonalInfo/>
        <Contact/>
        <Experience/>
      </div>
    )
  }
}
export default UserCv