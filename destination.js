import React, {Component} from "react";

const SavedItineraries = React.createContext(null);

export default SavedItineraries;

export const withSavedItineraries = (Element) => {
    return (props) => {
        return (
            <SavedItineraries.Consumer>
                {val => {
                    <Element savedItineraries={val} {...props} />
                }}
            </SavedItineraries.Consumer>
        );
    }
}

// export default class Destination extends Component {
//     name = "";
//     address = "";
    
//     constructor() {

//     }
    
//     render () {
//         return(

//         );
//     }
// }