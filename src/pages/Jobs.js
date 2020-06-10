import React, { useState, useEffect } from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Row, Col } from 'react-bootstrap'
import Job from './Job'
import '../App.css'
import Details from './Details'

let originList = []
export default function Jobs() {

  let [jobs, setJobs] = useState()
  let [keyword, setKeyword] = useState('')
  const getData = async () => {
    let url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs`;
    let data = await fetch(url);
    let result = await data.json();
    setJobs(result);
    console.log('job',result)
  };
  
  const clickSearch = () =>{
    if(keyword == ''){
      return setJobs(originList)
    }
    originList = jobs

    const newList = originList.filter((item) => item.title.toLowerCase().includes(keyword.toLowerCase()))
    console.log('newlist',newList);
    
    setJobs(newList)
  }
  useEffect(() => {
    getData();
  }, []);

  if (jobs === null) {
    return <div>Loading dât</div>;
  }
  return (
    <div>
     <Row>
       <Col>
       <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        <Button >Login</Button>
        </Navbar.Collapse>
      </Navbar>
      <div className="bgItviec">
        <div>
                  <img className="logoIt" width="108" height="42" src="https://itviec.com/assets/logo-itviec-65afac80e92140efa459545bc1c042ff4275f8f197535f147ed7614c2000ab0f.png"></img>

        </div>
        <div>
        <Form inline style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{width:500}} onChange={(e) =>{setKeyword(e.target.value)}} />
          <Button onClick={()=>clickSearch()} variant="outline-danger" style={{color:'white', backgroundColor:'red'}}>Search</Button>
        </Form>
        </div>
      </div>
      <Container style={{ marginTop:50 }}>
        {jobs && jobs.map(item => <Job job={item} key={item.id} />)}
      </Container>
       </Col>
     </Row>
    </div>
  )
}
