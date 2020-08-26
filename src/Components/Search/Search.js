import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./search.css"
export default function Search({Searcher,RateFilter}){
    return (
      <nav className="NavBar">
        <ul className="Movie-time-nav" role="navigation">
            <li className="logo">
              <img src="movielogo.png" alt="movie-time-logo" style={{width :"50%" ,height:"auto"}}/>
            </li>
            <li className="search">
              <Row>
                <Col sm><FontAwesomeIcon icon={faSearch} size="lg" style={{color:"orange"}} /></Col>
                <Col sm={8}>
                  <input
                  type='text'
                  placeholder='Search movie ...'
                  onChange={ (e)=>Searcher(e.target.value)}
                  />
                </Col>
              </Row>
            </li>
            <li className="search">
              <Row>
                <Col sm><FontAwesomeIcon icon={faStar} size="lg" style={{color:"orange"}} /></Col>
                <Col sm={8}>
                  <input type="number"
                    placeholder='Rate threshold ...'
                    onChange={(e)=>RateFilter(e.target.value)}
                    />
                </Col>
              </Row>
            </li>
        </ul>
      </nav>
  )
}
