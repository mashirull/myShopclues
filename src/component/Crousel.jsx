import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Crousel = ({images , height}) => {

   
  return (
    <div className="h-full">
        <Carousel autoPlay = {true}  infiniteLoop = {true}  showStatus = {false} showArrows = {false} showThumbs={false} stopOnHover={false}>
            {images.map((curImg ,i)=>{
                return (
                    <div key={i} >
                        <img src={curImg} alt={`image${i}`}  className={`w-full h-${height}`}/>
                    </div>
                )
            })}
        </Carousel>
    </div>
  )
}

export default Crousel