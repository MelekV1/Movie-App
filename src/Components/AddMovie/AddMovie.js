import React ,{useState} from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



export default function AddMovie({Add}){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name,setName]=useState("")
  const [posterUrl,setPosterUrl]=useState("")
  const [description,setDescription]=useState("")
  const [rate,setRate]=useState(5)

  const handleSubmit=(e)=>{
    const movieToAdd={
      title:name,
      posterUrl:posterUrl,
      description:description,
      rate:rate,
    }
    Add(e,movieToAdd)
    let data=`{title:${name},posterUrl:${posterUrl},description:${description},rate:${rate}`
    console.log(data)
    setName("")
    setPosterUrl("")
    setDescription("")
    setRate(5)
  }
  return (
    <React.Fragment>
      <div className="Add" style={{textAlign:"center"}}>
        <Button variant="outline-success" onClick={handleShow} style={{margin:"10px" , borderRadius:"30px" ,boxShadow:"5px 5px 2px green"}}>
        <h3>Add movie to the list</h3>
          <FontAwesomeIcon icon={faFolderPlus}  size="7x"/>
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><b style={{color:"green"}}>New Movie</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form.Group>
          <Form.Row>
            <Form.Label column sm>
              <h4 style={{color:"green"}}>Title</h4>
            </Form.Label>
            <Col>
              <Form.Control type="text" placeholder="Movie title" onChange={(e)=>{setName(e.target.value)}} />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column  sm>
              <h4 style={{color:"green"}}>posterUrl</h4>
            </Form.Label>
            <Col>
              <Form.Control type="text" placeholder="posterUrl" onChange={(e)=>{setPosterUrl(e.target.value)}}/>
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column  sm>
              <h4 style={{color:"green"}}>Description</h4>
            </Form.Label>
            <Col>
              <Form.Control type="text" placeholder="Movie summary" onChange={(e)=>{setDescription(e.target.value)}} />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column sm>
              <h4 style={{color:"green"}}>Rate</h4>
            </Form.Label>
            <Col>
              <Form.Control type="number" placeholder="from 1 star to 5 star" onChange={(e)=>{setRate(e.target.value)}}/>
            </Col>
          </Form.Row>
        </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSubmit}>
            <FontAwesomeIcon icon={faPlus}/> <b>Add</b>
          </Button>
        </Modal.Footer>
      </Modal>
      </React.Fragment>
    )
}
