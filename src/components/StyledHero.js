import styled from 'styled-components';
import defaultImg from '../images/room-1.jpeg';
const StyledHero= styled.header`
min-height: 60vh;
background: url(${props => props.img?props.img:defaultImg}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;`

// const StyledHero= styled.img`
// border: 1px solid #ddd;
//   border-radius: 4px;
//   padding: 50px;
//   width: 150px;
//   background-color:${props => props.color}`

export default StyledHero;
