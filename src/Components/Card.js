import { BsFillStarFill } from 'react-icons/bs'
import { IconContext } from "react-icons";

export default function Card(props) {
    return(
        <card className='flex flex-col
                        max-w-sm max-h-sm
                        px-6 py-6
                        shadow-md
                        '>
 
            <div className='basis-1/4'>
                <img src={props.img} className='rounded-lg shadow-md' />
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
                <p className='text-center text-gray-700'>   {props.info} </p>
                <h4>From: ${props.price.toFixed(2)} / person</h4>
            </description>
        </card>
        
    )
}