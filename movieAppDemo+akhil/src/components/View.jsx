import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import MovieCardFrontEnd from './MovieCardFrontEnd'
import { getMovieApi } from '../services/allApi'

function View() {
    const [Movies, setMovies] = useState([])
    const getmovie = async()=>{
        const result = await getMovieApi()
        setMovies(result.data);
      }
      useEffect(()=>{
        getmovie()
      },[])
    return (
        <>
         { Movies?.length>0?
        Movies?.map((item)=>(
            <Row className='w-100'>
                <Col xs={12} md={6} lg={4} xl={3} className='justify-content-center align-items-center' >
                    <MovieCardFrontEnd MovieObject={item}/>
                </Col> 
            </Row>))
   :
   <p>No Movies Yet</p>
        }
        </>
    )
}

export default View