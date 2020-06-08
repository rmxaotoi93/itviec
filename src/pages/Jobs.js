import React, { useState, useEffect } from 'react'
import {Container} from 'react-bootstrap'
import Job from './Job'

export default function Jobs() {
  
  let [jobs,setJobs] = useState()
  const getData = async () => {
    let url =`${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs`;
    let data = await fetch(url);
    let result = await data.json();
    setJobs(result);
  };

 useEffect(() => {
    getData();
  }, []);
    return (
        <div>
       <Container>
       {jobs && jobs.map(item => <Job job={item} key={item.id} />)}
       </Container>
      </div>
    )
}
