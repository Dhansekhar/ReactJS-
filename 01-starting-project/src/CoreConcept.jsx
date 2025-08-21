//<li>,<h3 Title>, <p> <img>
function CoreConcept(props){
    // console.log("props" , props);
    
    
    return(
         <li>
             <img src={props.image} alt="concept"></img>
             <h3> {props.title} </h3>
             {/* <h3>{props.dhana}</h3> */}
             <p> {props.discrption}</p>
             
       
       </li>

    )
}
export default CoreConcept;


// function CoreConcept({image,title,discrption}){
//     // console.log("props" , props);

    
//     return(
//          <li>
//              <img src={image} alt="concept"></img>
//              <h3> {title} </h3>
//              <p> {discrption}</p>
       
//        </li>

//     )
// }
// export default CoreConcept;
