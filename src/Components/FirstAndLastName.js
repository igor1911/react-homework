function FirstAndLastName({people}) {
    return <>
        {people.map((el, index) => (
            (el.firstName.length > 0) ? <h4 key={index}>{el.firstName} {el.lastName}</h4>
                : <h4 key={index}>Name can't be left empty!</h4>
        ))}
    </>
}

export default FirstAndLastName;