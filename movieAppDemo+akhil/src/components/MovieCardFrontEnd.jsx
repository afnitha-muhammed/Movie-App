import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MovieCardFrontEnd({MovieObject}) {
    return (
        <>
        <Card style={{ width: '350px' }}>
          <Link to={'/moviedetails'}><Card.Img variant="top" src={MovieObject.poster_img}   width={'100%'} height={'450px'}/></Link>
          
          
        </Card>
        
        <div  style={{width:'320px'}}>
        <p className='fs-2 mt-3 fw-bolder d-flex justify-content-between'><Link to={'/moviedetails'} style={{textDecoration:'none'}}>{MovieObject.Title}</Link> </p>
        <p className='fw-bolder'><span style={{fontWeight:'900'}}>Cast:</span> {MovieObject.Actor},{MovieObject.Actoress}, {MovieObject.Director}<br/> {MovieObject.Date}</p>
        </div>
        </>
      )
}

export default MovieCardFrontEnd