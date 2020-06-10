import React, { useState, useEffect } from 'react'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Badge} from 'react-bootstrap'
import moment from 'moment'
import { useHistory, useLocation } from "react-router-dom";
import '../App.css'


export default function Job({job}) {
  let history = useHistory();
  const jobSelect = () => {
    history.push(`/jobs/${job.id}`);
  };

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
    )
}
