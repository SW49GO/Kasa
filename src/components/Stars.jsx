import Styles from '../styles/Stars.module.css'

/**
 * Function to display the stars
 * @param {Object} props the datas of one apartment from data.json
 * @returns Component function Stars
 */
function Stars(props){
    
    // Retrieving the data object (log) passed as props
    const objetFind= props.log
    // Number of stars to display depending on the item's rating
    let numberTags = parseInt(objetFind.rating)
    const defaultTags=5;
    // Array to store star icons to display
    const starIcons=[];

    // Star display management with color style
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