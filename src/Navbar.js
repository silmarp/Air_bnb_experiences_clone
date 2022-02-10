import airbnb from './Static/airbnb.svg'

export default function Navbar() {
    return(
        <nav className='flex flex-row 
                        outline outline-gray-300 outline-1 
                        px-2 py-2
                        drop-shadow-lg
        '>
            <img src={airbnb} className='logo basis-1' ></img>
        </nav>
    )

}