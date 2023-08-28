import { useFetch } from '../utils/hooks/useFetch';
import Slideshow from './Slideshow';
import Stars from './Stars';
import Tags from './Tags';
import Collapse from './Collapse';

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
                <article className='logement_caroussel'>
                  <Slideshow tabPictures={pictures}/>
                </article>
                <article className='logement_detail'>
                  <div className='logement_title'>
                    <p className='logement_title_name'>{objetTrouve.title}</p>
                    <p className='logement_title_city'>{objetTrouve.location}</p>
                   <Tags log={objetTrouve}/>
                  </div>
                  <div className='logement_avis'>
                    <div className='logement_avis_detail'>
                      <div className='logement_avis_name'>{objetTrouve.host.name.split(' ').map((val, index) => (<p key={index}>{val}</p>))}</div>
                      <div className='logement_avis_picture'>
                        <img src={objetTrouve.host.picture} alt="profil" />
                      </div>
                    </div>
                    <Stars log={objetTrouve}/>
                  </div>
                </article>
                <article className='logement_dropdown'>
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