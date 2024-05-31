import React , {useEffect , useState } from 'react'
import './RowPost.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import axios from '../../axios'
import YouTube from 'react-youtube';
import { API_KEY } from '../../Constants/Constants';
import { imageUrl } from '../../Constants/Constants'




function RowPost( props) {
    
    const [movies , setMovies] = useState([]);
    const [urlId , setUrlId] = useState("");
    const [showVideo , setShowVideo] = useState(false)

    useEffect(()=>{
        axios.get(props.url)
        .then((response) =>{
            console.log(response.data);
            setMovies(response.data.results)
        })
        .catch((error)=>{
            console.log(error);
        })

    },[])
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleMovieTrailer = ((id)=>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((response) =>{
            console.log(response.data);
            if(response.data.results.length !== 0){
                setUrlId(response.data.results[0])
                setShowVideo(true)
            }else{
                console.log("trailer not available");
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    })

    const handleCloseVideo = () => {
        setShowVideo(false);
        setUrlId('');
    };

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=>{
              return <img onClick={()=>handleMovieTrailer(obj.id)} className={props.isSmall ?'smallposter' :'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />

                })}

               
               
            </div>
        
         {showVideo && (
            <div className="video-container">
                {urlId && <YouTube videoId={urlId.key} opts={opts}  />}
                <button onClick={handleCloseVideo} className="close-button">
                        <i className="fas fa-times"></i>
                    </button>
            </div>
         )}
        </div>
    )
}

export default RowPost