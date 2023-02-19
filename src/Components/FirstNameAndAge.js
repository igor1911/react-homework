function FirstNameAndAge({people}) {
    return <>
        {people.map((el, index) => (
            (el.firstName.length > 0) ? <h4 key={index}>{el.firstName}: {el.age}</h4>
                : <h4 key={index}>Name can't be left empty!</h4>
        ))}
    </>
}

export default FirstNameAndAge;