import '../styles/appartment.css'

function Stars(props){
    const objetFind= props.log

    let numberTags = parseInt(objetFind.rating)
    const defaultTags=5;

    const starIcons=[];
    for(let i=0; i<defaultTags;i++){
        if(numberTags !== 0){
            starIcons.push( <i key={i} className="fa-solid fa-star activeTags"></i>)
            numberTags--;
        }else{
            starIcons.push( <i key={i} className="fa-solid fa-star noActiveTags"></i>)
        }
    }
    return <div className='logement_avis_stars'>
            {starIcons}
           </div>
}

export default Stars