import React from 'react'

const Card = ({songs}) => {
  return (
    <div>
        <div className='row'>
            {songs.map(song=>{
                return(
                    <div className='col-md-3' key={song.id}>
                        <div className='card'>
                            <img src={song.img} className="card-img-top" alt={song.title}/>
                            <div className='card-body'>
                                <h3 className='card-title'>{song.title} - {song.movie}</h3>
                                <audio controls src={song.song}/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default Card

