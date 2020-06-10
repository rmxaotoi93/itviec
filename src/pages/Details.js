import React, {useState} from 'react'
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Badge, Button, Row, Col, Container } from "react-bootstrap";
import moment from "moment";
import { useHistory } from "react-router-dom";


export default function Details(props) {
    let history = useHistory();
    const jobSelect = () => {
      history.push(`/jobs/${job.id}`);
    };
    
    const { id } = useParams();
    let [job, setJob] = useState(null);
    console.log({ props });
    const getData = async () => {
        let url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs/${id}`;
        let data = await fetch(url);
        let result = await data.json();
        setJob(result);
 
        
      };
      useEffect(() => {
        getData();
      }, []);
      if (job === null) {
        return <div>Loading dât</div>;
      }
    return (
       <Container style={{marginTop:100}}>
            <div onClick={() => jobSelect()}>
    
    <Row  >
          <Col>
            <div >
              <img src={job.img} />
            </div>
          </Col>
          <Col xs={8}>
            <div>
              <h2 >{job.title}</h2>
              <div style={{float:'left'}}>$ {job.salary}</div>
              <div> 
                <ul >
                  {job.benefits.map(benefit => (
                    <li>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div>
                {job.tags.map(tag => (
                  <Badge variant="danger" >
                    {tag}
                  </Badge>
                ))}
              </div>
            
            </div>
          </Col>
          <Col>
            <div className="date-location-box">
              {job.isHotjob && (
                <div>Hot Job</div>
              ) }
  
              <div >
                <div>{job.city}</div>
                <div>District {job.district}</div>
              </div>
              <div >{moment(job.time).fromNow()}</div>
            </div>
          </Col>
        </Row>
        <div>
              {job.description}
               
            </div>
        <Button>Apply Now</Button>
   </div>
       </Container>
  );
}
