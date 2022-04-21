import React from 'react'
import { useContext } from 'react'
import { NetworkContext } from '../../../api/ContextApi'
const UpdateProfile = () => {
  let value = useContext(NetworkContext);
  return (
    <div>UpdateProfile
      <li>{ value.network}</li>
      <li>{value.plan}</li>
    </div>
  )
}

export default UpdateProfile
