import React, {useState} from "react"
import {StyledWrap, StyledInnerWrap, StyledImg} from './Hero.styles'
import { useStaticQuery, graphql } from "gatsby"
import {Paper} from '@material-ui/core'




function Hero(){
    const data = useStaticQuery(graphql `
    {
     tmrc {
        brandStuffs {
            logoPatch {
                url
      }
    }
  }
    }
    `)
    const photo = data.tmrc.brandStuffs
     const getPhoto =()=>{
        let url = ''
        photo.map(d=>{
            url = d.logoPatch.url
    })
    return(url)
}
    return (
        <StyledWrap>
            <StyledInnerWrap>
            <StyledImg src={getPhoto()}/>
            </StyledInnerWrap>
        </StyledWrap>
    )
}

export default Hero