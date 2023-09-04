import Collapse from "../../components/Collapse"
import HeaderPicture from "../../components/HeaderPicture"
import { useFetch } from "../../utils/hooks/useFetch";

/**
 * Function to display components HeaderPicture and Collapse, dropdown list in About page
 * @returns Component function About
 */
function About(){

    const { data, isLoading, error } = useFetch("http://localhost:3000/collapse.json");
    const datas = Object.values(data);
    // Enleve les 2 derniers
    datas.splice(-2);
    if (error) {
        return <span>Il y a un problème</span>
      }
    if(!isLoading){
    return <div>
        <HeaderPicture/>
        {datas.map((item,index)=>( 
        <Collapse key={index} title={item.title} description={item.description}/>
        ))}
        </div>
        }
}
 export default About