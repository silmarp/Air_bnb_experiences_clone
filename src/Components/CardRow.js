import Card from './Card'
import Data_object from '../data'

export default function CardRow(){
    console.log(Data_object)
    
    const cards = Data_object.map(
        experience => {
            return (
            <div className=''>
                <Card 
                    id          = {experience.id}
                    title       = {experience.title}
                    info        = {experience.description}
                    price       = {experience.price}
                    img         = {experience.coverImg}
                    rating      = {experience.stats.rating}
                    reviewCount = {experience.stats.reviewCount}
                    location    = {experience.location}
                    openSpots   = {experience.openSpots}
                    />
            </div>
            )        
        }
    );

    return (
        <div className='flex flex-row mx-auto max-w-4xl overflow-x-auto '>
            {cards}
        </div>
    )
}