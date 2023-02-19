import React from "react";

class OrderedList extends React.Component {
    render() {
        return <>
            <ol>
                {this.props.people.map((el, index) => (
                    (el.firstName.length > 0) ? <li key={index}>{el.firstName} {el.lastName}: {el.age}</li>
                        : <li key={index}>Name can't be left empty!</li>
                ))}
            </ol>
        </>
    }
}

export default OrderedList;