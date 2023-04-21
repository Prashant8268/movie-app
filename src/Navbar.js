import {Component} from 'react';
import styled from 'styled-components';


const Nav = styled.div`
width: 100%;
height: 70px;
background: linear-gradient(170deg,#1bc059,#0d47a1);
display: flex;
padding-top:10px;
justify-content: space-between;

`;

const Title = styled.h1`
font-size: 30px;
color: #fff;
font-weight:600;
font-family: Montserrat, sans-serif;
text-transform:"uppercase";
margin-left: 20px; 
&:hover{color:#0f0}
`;


const CartIconContainer = styled.div`
position: relative;
cursor:pointer;

`;


const CartImg = styled.img`
height: 48px;
margin-right:20px; `;


const CartCount = styled.span`

        background:${(props)=>props.color};
        border-radius: 50%;
        padding: 4px 8px;
        position: absolute;
        right:10px;
        top: -5px;
        font-size: 12px;
        visibility: ${(props)=> (props.show?"visible":"hidden")}
`




class Navbar extends Component{
    

    render(){
        const {cartCount} = this.props;
        

        return (
            <>
            <Nav>
                <Title>
                  Movie app
                </Title>
               
                
                <CartIconContainer >
                    <CartImg  src = "https://cdn-icons-png.flaticon.com/512/2838/2838895.png" alt='image' />
                    <CartCount color="yellow" show={true} >{cartCount}</CartCount>
                </CartIconContainer>
                </Nav>
            </>
        )
    }
}
export default Navbar;


// below is example of inline styling using objects

// const styles = {
//     nav:{
//             width:"100%", 
//             height:70, 
//             background: '#4267b2',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center' 
//          },
//     title: {
//         fontSize: 30,
//         color:'#fff',
//         fontWeight:600,
//         fontFamily:'"Montserrat", sans-serif',
//         textTransform:"uppercase",
//         marginLeft: 20 

//     },
//     cartContainer:{
//         position: 'relative',
//         cursor:"pointer",
//     },
//     cartIcon:{
//         height: 48,
//         marginRight:20
//     },
//     cartCount:{
//         background:"orange",
//         borderRadius: "50%",
//         padding: "4px 8px",
//         position: "absolute",
//         right:10,
//         top: -5,
//         fontSize: 12
//     }
//   }
    

