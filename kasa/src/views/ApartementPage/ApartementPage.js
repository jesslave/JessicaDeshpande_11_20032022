import { Navigate } from "react-router-dom";
import Collapsible from '../../components/Collapsible/Collapsible';
import Tag from '../../components/Tag/Tag';
import Stars from '../../components/Stars/Stars';
import Profile from '../../components/Profile/Profile';
import Carousel, { CarouselItem } from '../../components/Carousel/Carousel';
import ApartementTitleAndLocation from '../../components/ApartementTitleAndLocation/ApartementTitleAndLocation';
import { useParams } from 'react-router-dom';
import {data} from '../../data/data';
import './ApartementPage.css';

export default function ApartementPage() {

    const { id } = useParams();
    const apartment = getApartment(id);
    const equipments =  apartment == null ? null : apartment.equipments.map((item) => 
        <li key={item}>{item}</li>
     )

    if (apartment == null) return <Navigate to="/notfound" />
    
    return (
        <main className="mainApartment">
            <section>
                <Carousel>
                {apartment.pictures.map((pictureAdress, index) => (
                  
                        <CarouselItem><img className="carouselPicture" alt="" src={pictureAdress} key={Date.now()}/></CarouselItem>
                    ))}
                </Carousel>
            </section>
            <section className="titleAndProfile">
                <ApartementTitleAndLocation title={apartment.title} location={apartment.location}/>
                <Profile host={apartment.host}/>
            </section>
            <section className="tagAndRating">
                <div>
                    {apartment.tags.map((tag, index) => (
                        <Tag tag={tag} key={index} />
                    ))}
                </div>
                <div>
                    <Stars rating={apartment.rating}/>
                </div>
            </section>
            <section className="apartmentCollapsible">
                <Collapsible title='Description' text={apartment.description}></Collapsible>
                <Collapsible title='Équipements' text={equipments}></Collapsible>
            </section>
        </main>
    )
}

//Return the apartment of the given ID
function getApartment(id) {
    const apartment = data.filter((currentApartment) => {
        return currentApartment.id === id; 
      })[0];
    return apartment;
}