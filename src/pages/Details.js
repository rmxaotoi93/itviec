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
    
    <div className="job-content" onClick={() => jobSelect()} style={{margin: 50}}>
  <Row>
        <Col>
          <div className="jobcard-logo">
            <img src={job.img} />
          </div>
        </Col>
        <Col xs={7} >
          <div className="jobcard-descriptions">
            <h2 className="jobcard-title">{job.title}</h2>
            <div>$ {job.salary}</div>
            <div>
              <ul className="benefit-list" style={{width:'100%'}}>
                {job.benefits.map(benefit => (
                  <li>{benefit}</li>
                ))}
              </ul>
            </div>
            
            
            
          </div>
          <div>
              {job.tags.map(tag => (
                <Badge variant="success" className="badge-style" style={{marginRight:10}}>
                  {tag}
                </Badge>
              ))}
            </div>
            <div>
              {job.description}
               
            </div>
            <Button>Apply Now</Button>
        </Col>
        <Col >
          <div className="date-location-box">
            {job.isHotjob && (
              <div style={{backgroundColor: "#ff9e34", color:'white', textAlign:'center', marginBottom:20}} className="hotjob-label">Hot Job</div>
            ) }

            <div className="jobcard-location">
              <div>{job.city}</div>
              <div>District {job.district}</div>
            </div>
            <div className="job-time">{moment(job.time).fromNow()}</div>
          </div>
        </Col>
   
      </Row>
     
 </div>
        
    
   
 
  );
}
