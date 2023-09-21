import React, { useState } from 'react';

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);

    const images = [
        "https://www.candorblog.com/wp-content/uploads/2017/05/travel-022-768x432.jpg",
        "https://blog-content.ixigo.com/wp-content/uploads/2016/09/shutterstock_386861746-770x430.jpg",
        "https://edinburgers.co.uk/wp-content/uploads/2023/01/travelling.jpg",
    ];

    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setSlideIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div>
            <div className='sliderdiv'>
                <div className="imagediv_slider">
                    {images.map((imageUrl, index) => (
                        <img
                            key={index}
                            className={`mySlides ${index === slideIndex ? 'active' : ''}`}
                            src={imageUrl}
                            style={{ width: "100%", height: "100%", display: index === slideIndex ? "block" : "none" }}
                            alt="not found"
                        />
                    ))}

                    <button className="left_slider sliderbut" onClick={prevSlide}>&#10094;</button>
                    <button className="right_slider sliderbut" onClick={nextSlide}>&#10095;</button>
                </div>
            </div>
        </div>
    );
}

export default Slider;


// import React, { useState, useEffect, useRef } from 'react';

// function Slider() {
//     const [slideIndex, setSlideIndex] = useState(0);
//     const slideElements = useRef([]);


//     const showDivs = (n) => {
//         const x = slideElements.current;

//         if (x.length > 0) {
//             if (n >= x.length) {
//                 setSlideIndex(0);
//             } else if (n < 0) {
//                 setSlideIndex(x.length - 1);
//             }

//             x.forEach((slide, i) => {
//                 if (i === slideIndex) {
//                     slide.style.display = "block";
//                 } else {
//                     slide.style.display = "none";
//                 }
//             });
//         }
//     };

//     const plusDivs = (n) => {
//         setSlideIndex(slideIndex + n);
//     };
//     useEffect(() => {
//         showDivs(slideIndex);
//     });



//     return (
//         <div>
//             <div className='sliderdiv'>
//                 <div className="imagediv_slider">
//                     <img
//                         ref={(el) => (slideElements.current[0] = el)}
//                         className="mySlides"
//                         src="https://www.candorblog.com/wp-content/uploads/2017/05/travel-022-768x432.jpg"
//                         style={{ width: "100%", height: "100%" }}
//                         alt="not found"
//                     />
//                     <img
//                         ref={(el) => (slideElements.current[1] = el)}
//                         className="mySlides"
//                         src="https://blog-content.ixigo.com/wp-content/uploads/2016/09/shutterstock_386861746-770x430.jpg"
//                         style={{ width: "100%", height: "100%" }}
//                         alt="not found"
//                     />
//                     <img
//                         ref={(el) => (slideElements.current[2] = el)}
//                         className="mySlides"
//                         src="https://edinburgers.co.uk/wp-content/uploads/2023/01/travelling.jpg"
//                         style={{ width: "100%", height: "100%" }}
//                         alt="not found"
//                     />

//                     <button className="left_slider sliderbut" onClick={() => plusDivs(-1)}>
//                         &#10094;
//                     </button>
//                     <button className="right_slider sliderbut" onClick={() => plusDivs(1)}>
//                         &#10095;
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Slider;

