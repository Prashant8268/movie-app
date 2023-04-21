// import React from "react";

// class Student extends React.Component {

//     render(){

//         // destructure 

//         const {name} = this.props;
//         // this.props holds values of props

//         return (
//             <>
//             <h1>{this.props.name}</h1>
//             </>
//         )
//     }
// }

// Student.defaultProps = {
//     name: "Prashant"
// }
// props in functions can not be modified 
function Student(props){
    return (
        <>
             <h1>{props.name}</h1>
         </>

    )
}
export default Student;



