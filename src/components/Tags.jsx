import '../styles/appartment.css'

function Tags(props){
    const objetFind=props.log;
    console.log('objetFind:', objetFind)
    const tags = Object.values(objetFind.tags);
    console.log('tags:', tags)
   
    return (<div className='logement_title_tags'>
            {tags.map((item,index)=> {
                return <div className="Logement_tags" key={index}>{item}</div>
            })}
            </div>)
}
export default Tags