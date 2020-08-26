import React from 'react';
import MovieCard from './MovieCard'
import NotFound from '../Search/NotFound'
import "./MovieComponents.css"

export default function MovieList({keyword,data,rateindex}){
  if(rateindex!=="")
    data=data.filter((element) => element.rate >= rateindex)
  return(
    <div className="CardsWrapper">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
      {(data.length===0)?<NotFound/>:
        (keyword==='')?
        data.map( (el,i) => <MovieCard key={i} movie={el}/> ) :(
          data.filter(el=> el.title.toLowerCase().includes(keyword.toLowerCase().trim())).length===0 ?
            <NotFound/>:
            data.filter( (el)=>  el.title.toLowerCase().includes(keyword.toLowerCase().trim()))
            .map( (el,i) =>
                            <MovieCard key={i} movie={el}/>

            ) ) }
      </div>
    </div>
  )
}
