import React, {useState} from "react"
import {StyledWrap, StyledInnerWrap, StyledImg} from './Hero.styles'



function Hero(){

    return (
        <StyledWrap>
            <StyledInnerWrap>
            <div>
            <StyledImg src ='https://picsum.photos/200/300'/>
            </div>
            </StyledInnerWrap>
        </StyledWrap>
    )
}

export default Hero