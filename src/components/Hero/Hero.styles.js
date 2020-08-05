import styled from 'styled-components'
import {Colors} from '../../utilities/styles/helpers'

const {red, transparentRed} = Colors

export const StyledWrap = styled.div`
        height: 400px;
        width: 100vw;
        margin-left: -24px;
        background-image: url('https://codetheweb.blog/assets/img/posts/full-image-hero/image.jpg');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        position: relative;
        margin-bottom: 15px;
`;

export const StyledInnerWrap = styled.div`
        display: flex;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: ${transparentRed};
        zIndex: 4;
        justify-content: center;
        align-content: center;
`;

export const StyledImg = styled.img`
        border-radius: 50px;
        margin-top: 3.70em;
        height: 340px;
        box-shadow: 10px 10px 104px -9px rgba(0,0,0,0.75);

`