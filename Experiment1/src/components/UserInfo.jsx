import { useState } from 'react'

import React from 'react'


function UserInfo(props) {
  


  return (
    <>

        <h2>{props.user.name}</h2>
        <h2>{props.user.email}</h2>
        <h2>{props.user.location}</h2>
      
    </>
  );
}

export default UserInfo;
