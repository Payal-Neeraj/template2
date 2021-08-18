import React,{useEffect} from 'react'
import styled from 'styled-components';
import { InfoData } from '../data/InfoData.js';
import { InfoData1 } from '../data/InfoData1.js';
import { InfoData2 } from '../data/InfoData2.js';
import Button from './Button.js'
import Aos from 'aos';
import 'aos/dist/aos.css';


const Section = styled.section `
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;
const Container = styled.div `
    padding: 3rem calc{(100vw  - 1300px)/2};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;
    margin-top: 3rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;
const ColumnLeft = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
line-height: 1.4;
padding: 1rem 2rem;
order: ${({reverse}) => (reverse ? '2' : '1')};
h1{
    margin-bottom: 1rem;
     font-size: clamp(1.5rem, 6vw, 2rem);
}
p{
    margin-bottom: 2rem;
}
`;
const ColumnRight = styled.div `
padding: 1rem 2rem;
order: ${({reverse}) => (reverse ? '1' : '2')};
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 768px){
    order: ${({reverse}) => (reverse ? '2' : '1')};
}
img{
width: 100%;
height: 100%;
object-fit: cover;
@media screen and (max-width: 768px){
    height: 90%;
    width: 90%;
}

`;

const ColumnLeft1 = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '2' : '1')};

     h1{
        margin-bottom: 2.5rem;
         font-size: clamp(1.5rem, 6vw, 2rem);
        color: white;
    } 

     /* p{
        margin-bottom: 2rem;
        color: white;
    }   */

    img{
        width: 50%;
        height: 50%;
        object-fit: cover;
        margin-bottom: 1rem;
        
        @media screen and (max-width: 768px){
            height: 90%;
            width: 90%;
        }
`;
const ColumnRight1 = styled.div `
padding: 1rem 2rem;
order: ${({reverse}) => (reverse ? '1' : '2')};
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px){
    order: ${({reverse}) => (reverse ? '2' : '1')};
}

img{
    width: 50%;
    height: 50%;
    object-fit: cover;
    margin-bottom: -6rem;
    @media screen and (max-width: 768px){
        height: 90%;
        width: 90%;
    }

`;

const ColumnLeft2 = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '2' : '1')};

    h1{
        margin-bottom: 1rem;
         font-size: clamp(1.5rem, 6vw, 2rem);

    }

    p{
        margin-bottom: 2rem;
    }
`;
const ColumnRight2 = styled.div `
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '1' : '2')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        order: ${({reverse}) => (reverse ? '2' : '1')};
}

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 768px){
        height: 90%;
        width: 90%;
    }

`;

const Wrapper = styled.div `
    background-color: black;
    width: 100%;
    height: 100%;
    background-color: #000d1a;
    display:flex;
    justify-content: center;
    align-items: center; 
    
    `;
const InfoSection = () => {
    useEffect(() =>{
        Aos.init({ duration: 2000 });
    }, []);
    console.log(InfoData);
    return (
        <Section>
            {InfoData.map((data, key) => {
                return (
                <Container data-aos="fade-left">
                    <ColumnLeft >
                        <h1>{data.heading}</h1>
                        <p>{data.paragraphOne}</p>
                        <p>{data.paragraphTwo}</p>
                        <Button to="/viewhomes" primary="true" >{data.buttonLabel}</Button>
                    </ColumnLeft>
                    <ColumnRight reverse={data.reverse} >
                    <img src={data.image}  alt="home" />
                    </ColumnRight>
                </Container>
                );
            })}

            <Wrapper>       

            {InfoData1.map((data, key) => {
                return (  
                    
                <Container data-aos="fade-up">

                    <ColumnLeft1 >
                    <h1>View our newest home design</h1> 
                        <img src={data.image1} to="/newhomesdesign" alt="home" />                                              
                    </ColumnLeft1>
                     <ColumnRight1  >
                    <img src={data.image2} to="/newhomesdesign" alt="home" />
                    
                    </ColumnRight1> 
                </Container>
                );
            })}

</Wrapper>

            {InfoData2.map((data, key) => {
                return (
                <Container data-aos="fade-right">
                    <ColumnLeft2 >
                        <div css={'background-color: black;'}></div>
                        <h1>{data.heading}</h1>
                        <p>{data.paragraphOne}</p>
                        <p>{data.paragraphTwo}</p>
                        <Button to="/stunninginteriors" primary="true" >{data.buttonLabel}</Button>
                    </ColumnLeft2>
                    <ColumnRight2 reverse={data.reverse} >
                    <img src={data.image} alt="home" />
                    </ColumnRight2>
                    
              
                </Container>            
                );              
            })}
            
        </Section>
    )
}

export default InfoSection
