import i00 from '../Static/i00.jpg'
import i11 from '../Static/i11.jpg'
import i22 from '../Static/i22.jpg'
import i33 from '../Static/i33.jpg'
import i44 from '../Static/i44.jpg'
import i55 from '../Static/i55.jpg'
import i66 from '../Static/i66.jpg'
import i77 from '../Static/i77.jpg'
import i88 from '../Static/i88.jpg'

export default function Hero(){
    return(
        <div className="flex flex-col px-6 py-12 items-center">
            <div className="flex flex-row items-center
                            gap-3
                            px-12 py-6
                            max-w-4xl
            ">

                <div className="basis-1/5">
                    <img src={i00} className='rounded-lg'></img>
                </div>

                <div className="flex flex-col basis-1/5 gap-2">
                    <img src={i11} className='rounded-lg'></img>
                    <img src={i22} className='rounded-lg'></img>
                </div>

                <div className="flex flex-col basis-1/5 gap-2">
                    <img src={i33} className='rounded-lg'></img>
                    <img src={i44} className='rounded-lg'></img>
                </div>

                <div className="flex flex-col basis-1/5 gap-2">
                    <img src={i55} className='rounded-lg'></img>
                    <img src={i66} className='rounded-lg'></img>
                </div>

                <div className="flex flex-col basis-1/5 gap-2">
                    <img src={i77} className='rounded-lg'></img>
                    <img src={i88} className='rounded-lg'></img>
                </div>

            </div>
            <div className="text-center">
                <h1>Online experiences</h1>
                <p>
                    Join Unique interative activities led by one-of-a-kind hosts-all without leaving home.
                </p>
            </div>
        </div>
    )
}