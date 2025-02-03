import abir from '../images/abir.png'
const BioData = () => {
    return (
        <div className="flex flex-col rounded-[20px]">
            <div className='flex justify-center '>
                <img src={abir} alt="" className='w-[200px] rounded-xl mx-auto mt-[60px]' />

            </div>

            <div className="text-[#FFFFFF] text-center mt-8">
                    <p className='text-[24px]'>HI I'M <span className='text-[#2FF093]'>ABIR</span></p>
                    <p>Software Developer</p>   
                    <p className='mt-4'>sheikhabir196@gamil.com</p>  
                    <p className='mt-1'>+88 01402 741287 </p>  
                    
                    <div className='mt-6'>
                       
                    </div>     
                        
                        </div>
          
        </div>
    );
};

export default BioData;