import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';


class App extends Component {

    render(){
        return(
         <div>
             <h2>Note to Self</h2>
            <Form>
                <FormControl />
                <Button>Submit</Button>
            </Form>
         </div>
        )
    }
}
export const color = 'blue';
export const number = 22;
export default App;
