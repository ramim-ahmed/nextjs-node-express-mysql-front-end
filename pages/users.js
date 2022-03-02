import React from 'react'
import Users from '../components/Users'
import styles from '../styles/Home.module.css'
const users = ({users}) => {
  return (
    <div className={styles.main}>
       <Users data={users} />
    </div>
  )
}

export default users;

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:5000/api/all-users');
  const data = await res.json();
  console.log(data);
  return {
    props: {
      users: data
    }, // will be passed to the page component as props
  }
}