/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../styles/Users.module.css';
const User = ({user}) => {
  return (
    <div className={styles.user}>
        <h1>Name: {user.name}</h1>
        <p>Designation: {user.designation}</p>
        <p>Phone: {user.phone}</p>
        <p>email: {user.email}</p>
    </div>
  )
}

export default User