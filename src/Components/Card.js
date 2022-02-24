import { BsFillStarFill } from 'react-icons/bs'
import { IconContext } from "react-icons";
import {FaStoreAltSlash} from 'react-icons/fa'

export default function Card(props) {
    
    return(
        <card className='flex flex-col
                        max-w-xs max-h-xs
                        px-6 py-6
                        shadow-md
                        '>
 
            <div className='basis-1/4 relative'>
                {props.openSpots === 0 &&
                    <h3 className='inline-flex items-center text-black absolute bg-white rounded-xl mx-2 my-2'>
                        <IconContext.Provider value={{ color: "#000000", className: "global-class-name" }}>
                            <FaStoreAltSlash /> sold out
                        </IconContext.Provider>
                    </h3>
                }
                <img src={props.img} className='rounded-lg shadow-md object-cover w-full h-full' />
            
            </div>
 
            <rating className='basis-1/4 grid grid-col-3 grid-flow-col items-center gap-1 justify-start'>
                <IconContext.Provider value={{ color: "#c9424b", className: "global-class-name" }}>
                    <h3> <BsFillStarFill/> </h3>
                </IconContext.Provider>
                <h4 className='text-center'>{props.rating.toFixed(1)}</h4>
                <span className='text-gray-400'>({props.reviewCount}) - {props.location}</span>
            </rating>
 
            <description className='basis-1/4'>
                <h3 className='text-center'>{props.title}</h3>
                <p className='text-center text-gray-700 truncate max-h-40'>   {props.info} </p>
                <h4>From: ${props.price.toFixed(2)} / person</h4>
            </description>
        </card>
        
    )
}