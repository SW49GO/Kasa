import { useFetch } from '../utils/hooks/useFetch';
import { useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import Slideshow from './Slideshow';
import Stars from './Stars';
import Tags from './Tags';
import Collapse from './Collapse';
import Styles from '../styles/Apartment.module.css'
import isValidApartmentId from '../utils/function/isValidApartmentId';

/**
 * Function to display all the information of an apartment 
 * @returns Component function Apartment
 */
function Apartment(){
    const navigate=useNavigate()
    const url = (window.location.pathname).split('/');
    const idu= url[2];
    const data = useFetch(`http://localhost:3000/data.json`);

    useEffect(() => {
      if (!data.isLoading && !data.error) {
        if (!isValidApartmentId(idu, data.data)) {
          navigate('/error');
        }
      }
    }, [idu, data.isLoading, data.data, data.error, navigate]);

    const collapse = useFetch(`http://localhost:3000/collapse.json`);
    const collData = Object.values(collapse.data);
    const newData =collData.slice(-2);

    if (!data.isLoading && (!collapse.isLoading || !collapse.error)){
        const datas = Object.values(data.data);
        const objetTrouve = datas.find(objet => objet.id === idu);
    if (objetTrouve) {
        const pictures = objetTrouve.pictures;

      return <section>
            <article className={Styles.container_slideshow}>
              <Slideshow tabPictures={pictures}/>
            </article>
            <article className={Styles.container_detail}>
              <div className={Styles.title}>
                <p className={Styles.name}>{objetTrouve.title}</p>
                <p className={Styles.city}>{objetTrouve.location}</p>
              </div>
              <Tags log={objetTrouve}/>
              <div className={Styles.container_avis}>
                <div className={Styles.avis_detail}>
                  <div className={Styles.avis_name}>{objetTrouve.host.name.split(' ').map((val, index) => (<p key={index}>{val}</p>))}</div>
                  <div className={Styles.avis_picture}>
                    <img src={objetTrouve.host.picture} alt="profil" />
                  </div>
                </div>
              </div>
              <Stars log={objetTrouve}/>
            </article>
            <article className={Styles.container_collapse}>
            {newData.map((item,index)=>( 
              <Collapse key={index} title={item.title} description={index === 1 ? objetTrouve.equipments.map((val,descIndex)=>(<p key={descIndex}>{val}</p>)) : objetTrouve.description}/>
            ))}
            </article>
          </section>
    }else{
      return <span>Il y a eu un problème</span>;
    }
  }
}

export default Apartment