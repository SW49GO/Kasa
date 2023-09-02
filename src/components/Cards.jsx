import HeaderPicture from './HeaderPicture';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../utils/hooks/useFetch';
import Styles from '../styles/Cards.module.css'

function Cards(){
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch("http://localhost:3000/data.json");
  const datas = Object.values(data);

  if (error) {
    return <span>Il y a un problème</span>
  }

  if(!isLoading){
    return (<div className={Styles.container}>
               <HeaderPicture/>
                <div className={Styles.galery}>
                {datas.map((val) => (
                    <article className={Styles.galery_card} key={val.id} onClick={() => navigate(`/Appartment/${val.id}`)}>
                        <div>
                            <img className={Styles.galery_card_image} src={val.cover}  alt="logement"/>
                        </div>
                        <p>{val.title}</p> 
                    </article>
                ))}
                </div>
            </div>)
  }
}
export default Cards

