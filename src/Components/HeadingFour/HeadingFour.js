import PropTypes from 'prop-types';

function HeadingFour({firstName, lastName, age}) {
    return <>
        <h4>{firstName} {lastName}: {age}</h4>
    </>
}

export default HeadingFour;

HeadingFour.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number
}

HeadingFour.defaultProps = {
    firstName: 'No name given',
    age: 0
}