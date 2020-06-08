import React, {useState} from 'react'
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Badge, Button, Row, Col, Container } from "react-bootstrap";
import moment from "moment";
import { useHistory } from "react-router-dom";


export default function Details(props) {
    let history = useHistory();
    const jobSelect = () => {
      history.push(`/job/${job.id}`);
    };
  
    const { id } = useParams();
    let [job, setJob] = useState(null);
    console.log({ props });
    const getData = async () => {
        let url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs/${id}`;
        let data = await fetch(url);
        let result = await data.json();
        setJob(result);
        console.log('sẹtob',result);
        
      };
      useEffect(() => {
        getData();
      }, []);
      if (job === null) {
        return <div>Loading dât</div>;
      }
    return (
       <Container>
            <div className="job-content" onClick={() => jobSelect()}>
    
    <Row  >
          <Col>
            <div className="jobcard-logo">
              <img src={job.img} />
            </div>
          </Col>
          <Col xs={8}>
            <div className="jobcard-descriptions">
              <h2 className="jobcard-title">{job.title}</h2>
              <div>$ {job.salary}</div>
              <div>
                <ul className="benefit-list">
                  {job.benefits.map(benefit => (
                    <li>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div>
                {job.tags.map(tag => (
                  <Badge variant="danger" className="badge-style" style={{marginRight:10}}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Col>
          <Col>
            <div className="date-location-box">
              {job.isHotjob && (
                <div className="hotjob-label">Hot Job</div>
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
       </Container>
  );
}
