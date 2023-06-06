import React ,{useEffect}from 'react'
import { useMutation, useQuery } from '@apollo/client'
import {QUERY_EXE} from '../utils/queries'
const Profile = () => {
  const { loading, data } = useQuery(QUERY_EXE);
  const dataHere=data?.getUser?.savedExercise

console.log(dataHere)
 
 
  return (
    <div>
      Profile
    </div>
  )
}

export default Profile
