import FirstAndLastName from "./Components/FirstAndLastName";
import FirstNameAndAge from "./Components/FirstNameAndAge";
import FirstAndLastNameAndAge from "./Components/FirstAndLastNameAndAge";
import UnorderedList from "./Components/UnorderedList";
import OrderedList from "./Components/OrderedList";
import ColoredParagraph from "./Components/ColoredParagraph/ColoredParagraph";

function App() {

    const people = [
        {firstName: 'John', lastName: 'Doe', age: 20},
        {firstName: 'Jack', lastName: 'Doe', age: 30},
        {firstName: 'Jane', lastName: 'Doe', age: 40},
        {firstName: 'John', lastName: 'Malkovich', age: 25},
        {firstName: 'Jack', lastName: 'Malkovich', age: 35},
        {firstName: 'Jane', lastName: 'Malkovich', age: 45},
        {firstName: 'John', lastName: 'Johnson', age: 20},
        {firstName: 'John', lastName: 'Gates', age: 28},
        {firstName: 'Jack', lastName: 'Gates', age: 38},
        {firstName: 'Jane', lastName: 'Gates', age: 48},
    ];

    return (
        <div className="App" style={{padding: '20px'}}>
            <FirstAndLastName people={people}/>
            <hr/>
            <FirstNameAndAge people={people}/>
            <hr/>
            <FirstAndLastNameAndAge people={people}/>
            <hr/>

            <UnorderedList people={people}/>
            <hr/>
            <OrderedList people={people}/>
            <hr/>
            <ColoredParagraph people={people} />
            <hr/>
        </div>
    );
}

export default App;
