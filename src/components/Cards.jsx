import HeaderPicture from './HeaderPicture';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../utils/hooks/useFetch';
import Styles from '../styles/Cards.module.css'

/**
 * Function to display each apartment
 * @returns Component function Cards
 */
function Cards(){

  // Using the useNavigate hook to get a navigation function
  const navigate = useNavigate();
  // useFetch custom hook to make an HTTP request and get JSON data, isLoading and error
  const { data, isLoading, error } = useFetch("http://localhost:3000/data.json");
  // Transformation of data into an array of objects (datas)
  const datas = Object.values(data);

  if (error) {
    return <span>Il y a un problème</span>
  }

  // Once the loading is complete
  if(!isLoading){
    return (<div className={Styles.container}>
               <HeaderPicture/>
                <div className={Styles.galery}>
                {datas.map((item) => (
                  // Uniquely identifying each element by its ID -> key={item.id}
                    <article className={Styles.galery_card} key={item.id} onClick={() => navigate(`/Apartment/${item.id}`)}>
                        <div>
                            <img className={Styles.galery_card_image} src={item.cover}  alt="logement"/>
                        </div>
                        <p>{item.title}</p> 
                    </article>
                ))}
                </div>
            </div>)
  }
}
export default Cards

