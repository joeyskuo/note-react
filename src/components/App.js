import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import Note from './Note';

const roar = (message) => {
    console.log(message);
}
roar('roaaaar!');

class App extends Component {

    constructor() {
        super();

        this.state = {
            text: '',
            notes: []
        }
    }

    submit() {
        const {notes, text} = this.state;

        notes.push({text});

        this.setState({notes})
    }

    render() {
        return (
            <div>
                <h2>Note to Self</h2>
                <Form inline>
                    <FormControl onChange={event => {
                        this.setState({text: event.target.value})
                    }}/>
                    {' '}
                    <Button onClick={() => this.submit()}>Submit</Button>
                </Form>
                {
                    this.state.notes.map((note, index) => {
                        return (
                            <Note key={index} note={note}/>
                        )
                    })
                }
            </div>
        )
    }
}
export const color = 'blue';
export const number = 22;
export default App;
