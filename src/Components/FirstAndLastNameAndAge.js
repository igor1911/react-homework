import HeadingFour from "./HeadingFour/HeadingFour";

function FirstAndLastNameAndAge({people}) {
    return <>
        {people.map((el, index) => (
            // (el.firstName.length > 0) ? <h4 key={index}>{el.firstName} {el.lastName}: {el.age}</h4>
            (el.firstName.length > 0) ? <HeadingFour key={index}
                    firstName={el.firstName}
                    lastName={el.lastName}
                    age={el.age}
                />
                : <HeadingFour key={index}/>
        ))}
    </>

}

export default FirstAndLastNameAndAge;