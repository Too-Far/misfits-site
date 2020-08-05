import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import "react-awesome-slider/dist/styles.css"
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AwesomeSlider from "react-awesome-slider"
import PhotoCard  from '../PhotoCard/PhotoCard'
import {StyledWrapper} from './Slider.Styles'

const Slider =()=>{
    const data = useStaticQuery(graphql`
    {
        tmrc {
            picturess {
                caption
                photo {
                    url
                }
            }
        }
    }
    `)
    const photo = data.tmrc.picturess
    return(
        <StyledWrapper>
        <AwesomeSlider animation='cubeAnimation'>
            {photo.map(d=>(
            <div>
                <PhotoCard data={d} url={d.photo.url} />
            </div>
            ))}
        </AwesomeSlider>
        </StyledWrapper>
    )
}
export default Slider