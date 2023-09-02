import { useFetch } from '../utils/hooks/useFetch';
import Slideshow from './Slideshow';
import Stars from './Stars';
import Tags from './Tags';
import Collapse from './Collapse';
import Styles from '../styles/Appartment.module.css'

function Appartment(){
    const url = (window.location.pathname).split('/');
    const idu= url[2];
    const data = useFetch(`http://localhost:3000/data.json`);

    const collapse =useFetch(`http://localhost:3000/collapse.json`);
    const collData = Object.values(collapse.data);
    const newData =collData.slice(-2);

    if (!data.isLoading || !collapse.isLoading){
        const datas = Object.values(data.data);
        const objetTrouve = datas.find(objet => objet.id === idu);
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
    }
   
  if (data.error || collapse.error) {
    return <span>Il y a un problème</span>
  }
   
}

export default Appartment