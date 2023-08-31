// import { useState} from 'react'
import '../styles/home.css'
import HeaderPicture from './HeaderPicture';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../utils/hooks/useFetch';

function Cards(){
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch("http://localhost:3000/data.json");
  const datas = Object.values(data);

  if (error) {
    return <span>Il y a un problème</span>
  }

  if(!isLoading){
    return (<div className="homePage">
               <HeaderPicture/>
                <div className='homePage_galery'>
                {datas.map((val) => (
                    <article className='homePage_galery_card' key={val.id} onClick={() => navigate(`/Appartment/${val.id}`)}>
                        <div>
                            <img className="image" src={val.cover}  alt="logement"/>
                        </div>
                        <p>{val.title}</p> 
                    </article>
                ))}
                </div>
            </div>)
  }
}
export default Cards

