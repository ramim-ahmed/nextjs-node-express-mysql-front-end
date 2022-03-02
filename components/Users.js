import React from 'react';
import styles from '../styles/Users.module.css';
import User from './User';
const Users = ({data}) => {
  return (
   <div className={styles.users}>
       {data.map(user => <User key={user.id} user={user} />)}
   </div>
  )
}

export default Users