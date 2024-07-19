import './index.scss';
import Picture from '../../../assets/images/Bild1.jpg'
// import {useEffect, useRef} from 'react'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
// import gsap from 'gsap-trial'


const Logo = ()=>{

//     const bgRef=useRef();
//     const svgRef=useRef();
//     const solidLogoRef=useRef();

//     useEffect(() => {
//     gsap.registerPlugin(DrawSVGPlugin);

    
//     if (gsap.plugins.drawSVG) {
//     const targets = svgRef.current.querySelectorAll('path, polygon');
//     console.log("Targets found:", targets.length);

//     const timeline = gsap.timeline();
//     timeline.to(bgRef.current, { duration: 1, opacity: 1 })
//             .from(targets, {
//                 drawSVG: 0,
//                 duration: 2,
//                 stagger: 0.3,
//                 onComplete: () => console.log("Animation complete"),
//                 onStart: () => console.log("Animation started"),
//                 onError: (e) => console.log("Animation error", e)
//             });
// }
// }, []);

    return (
        <div className='logo-container' > 
            <img className='solid-logo' src={Picture} alt='s' />
                
        </div>
    )
}

export default Logo