import React from "react";
import './ColoredParagraph.css';

class ColoredParagraph extends React.Component {
    render() {
        return <>
            {this.props.people.map((el, index) => (
                (el.firstName.length > 0) ? <p key={index}>{el.firstName} {el.lastName}: {el.age}</p>
                    : <p key={index}>Name can't be left empty!</p>
            ))}
        </>
    }
}

export default ColoredParagraph;