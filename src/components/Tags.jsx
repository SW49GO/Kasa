import Styles from '../styles/Tags.module.css'

function Tags(props){
    const objetFind=props.log;
    const tags = Object.values(objetFind.tags);

    return (<div className={Styles.container}>
            {tags.map((item,index)=> {
                return <div className={Styles.tags} key={index}>{item}</div>
            })}
            </div>)
}
export default Tags