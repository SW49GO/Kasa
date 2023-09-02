import Styles from '../styles/Stars.module.css'

function Stars(props){
    const objetFind= props.log

    let numberTags = parseInt(objetFind.rating)
    const defaultTags=5;

    const starIcons=[];
    for(let i=0; i<defaultTags;i++){
        if(numberTags !== 0){
            starIcons.push( <i key={i} className={`fa-solid fa-star ${Styles.fa} ${Styles.activeTags}`}></i>)
            numberTags--;
        }else{
            starIcons.push( <i key={i} className={`fa-solid fa-star ${Styles.fa} ${Styles.noActiveTags}`}></i>)
        }
    }
    return <div className={Styles.container}>
            {starIcons}
           </div>
}

export default Stars