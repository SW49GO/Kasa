import Styles from '../styles/Tags.module.css'

/**
 * Function to display tags
 * @param {Object} props the datas of one apartment from data.json
 * @returns Component function Tags
 */
function Tags(props){

    // Retrieving the data object (log) passed as props
    const objetFind=props.log;
    // Object to Array with values tags 
    const tags = Object.values(objetFind.tags);

    return (<div className={Styles.container}>
            {tags.map((item,index)=> {
                return <div className={Styles.tags} key={index}>{item}</div>
            })}
            </div>)
}
export default Tags