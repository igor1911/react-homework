import React from "react";

class UnorderedList extends React.Component {
    render() {
        return <>
            <ul>
                {this.props.people.map((el, index) => (
                    (el.firstName.length > 0) ? <li key={index}>{el.firstName} {el.lastName}: {el.age}</li>
                        : <li key={index}>Name can't be left empty!</li>
                ))}
            </ul>
        </>
    }
}

export default UnorderedList;