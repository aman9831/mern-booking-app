const Footer = () => {
    return( 
        <div className="bg-gradient-to-r from-[#003844] to-[#FFFDF7] py-10">
        <div className="container mx-auto flex justify-between items-center">
            <span className="text-3xl text-white font-bold tracking-tight">
                Trip<div style={{ display: 'inline-block' }} className="border-2 border-black rounded-tr-xl rounded-bl-xl rounded-tl-md rounded-br-md px-1 py-1 mx-1 bg-red-600">My</div>Make.com
            </span>
            <span className="text-black font-bold tracking-tight flex gap-4">
                <p className="cursor-pointer">Privacy Policy</p>
                <p className="cursor-pointer">Terms of Service</p>
            </span>
        </div>
    </div>
    )
}

export default Footer