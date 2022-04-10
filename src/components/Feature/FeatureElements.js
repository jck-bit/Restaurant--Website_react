import styledComponents from "styled-components";
import FeaturePic from '../../images/featured3.jpg';

export const FeatureContainer = styledComponents.div`
 background:linear-gradient(to right, rgba(0,0,0,0.7),
 rgba(0,0,0,0.1)), 
 url(${FeaturePic});
 height:100vh;
 max-height:500px;
 background-size:cover;
 background-position:center;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 color:#fff;
 text-align:center;
 padding:0rem 1rem;

 h1 {
     font-size:clamp(2.5rem, 5vw, 5rem);
 }

 p {
    font-size:clamp(1rem, 3vw, 2rem);
    margin-bottom:1rem;
    font-size:clamp(1rem, 3vw, 2rem);
}
`
export const FeatureButton = styledComponents.button`
    font-size:1.4rem;
    padding:0.6rem 3rem;
    border-radius:3px;
    border:none;
    background:#ffc500;
    color:#000;
    transition:all 0.2s ease-out;

    &:hover{
       cursor:pointer;
         background:#e31837;
         transition: 0.2s ease-out; 
    }
`
