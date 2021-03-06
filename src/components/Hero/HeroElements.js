import styled from "styled-components";
import imgBg from "../../images/pizza-3.jpg";

export const HeroContainer = styled.div`
  background:linear-gradient(to right, rgba(0,0,0,0.7),
  rgba(0,0,0,0.1)), 
  
  url(${imgBg});
  height:100vh;
  background-size:cover;
  background-position:center;
`
export const HeroContent = styled.div`
  height:calc(100vh-80px);
  max-height:100%;
  width:100vw;
  padding:0 rem calc((100vw-130px) /2);
`
export const HeroItems = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:flex-start;
 height:100vh;
 max-height:100%;
 padding:0rem 2rem;
 width:650px;
 color:white;
 text-transform:uppercase;
 line-height:1.5;
 font-weight:bold; 

 @media screen and (max-width:650px){
     width:100%;
 }
`
export const HeroH1 = styled.h1`
  font-size:clamp(2.5rem, 10vw, 5rem);
  margin-bottom:1rem;
  box-shadow:3px 5px #e9ba23;
  letter-spacing:1px;
`
export const HeroP = styled.p`
  font-size:clamp(2rem, 2.5vw, 3rem);
  margin-bottom:2rem;
`
export const HeroBtn = styled.button`
  font-size:1.4rem;
  padding:1rem 4rem;
  border-radius:5px;
  border:none;
  background:#e31837;
  color:white;
  transition:all 0.3s ease-in-out;

  &:hover{
      background:#ffc500;
      transition: 0.3s ease-out;
      cursor:pointer;
      color:black;
  }
`
