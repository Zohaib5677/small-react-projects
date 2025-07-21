import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import "./Slide.css"
function Slider() {
    const [images, setimages] = useState([]);
    const [currentSlide, setcurrentslide] = useState(0)
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(null);

    useEffect(() => {
        fetch('https://picsum.photos/v2/list')
            .then(response => response.json())
            .then(data => {
                setimages(data);
                setloading(false);
            })
            .catch(error => {
                seterror(true);
                setloading(false);
            });
    }, []);

  function handleprevious(){
    setcurrentslide(currentSlide===0 
        ? images.length-1 
        : currentSlide-1)
  } 
  function handlenext(){
    setcurrentslide(currentSlide===images.length-1
        ? 0 
        : currentSlide+1)
  } 

    if (loading) {
        return <div>Please wait data is loading</div>
    }
    if (error !== null) {
        return <div>error  occured</div>
    }


    console.log(images);

    return (
        <div className="container">
            <h1>Slider</h1>
            <BsArrowLeftCircleFill onClick={handleprevious} className='arrow arrow-left' />
            {images 
                ?
                images.map((imageItem,index) => {
                   return( <img 
                    key={imageItem.id}
                     className={currentSlide===index 
                        ? "current-image"
                        : "current-image hide-current-image"
                     }
                      src={imageItem.download_url}
                       alt="iamges url"
                       
                       />
                   )
                })
                : null
            }
            <BsArrowRightCircleFill onClick={handlenext} className='arrow arrow-right' />
            <span className='circle-indicator'>
                {
                    images &&
                    images.map((_, index) => {
                        return <button 
                        key={index}
                         className={currentSlide===index
                            ? "current-indicator"
                            : "current-indicator hide-current-indicator"
                         }
                         onClick={()=>setcurrentslide(index)}
                         
                         ></button>;
                    })
                }
            </span>
        </div>
    )
}

export default Slider