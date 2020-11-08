import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Form, Header, Segment } from 'semantic-ui-react';


export default function ItemForm () {
    return (
        <div>
            <Segment clearing>
                <Header content="Donate"/>
                <Form>
                    <Form.Field>
                        <input type="text" placeholder="Item"/>
                    </Form.Field>

                    <Form.Field>
                        <input type="text" placeholder="Item Description"/>
                    </Form.Field>

                    <Form.Field>
                        <input type="text" placeholder="City"/>
                    </Form.Field>

                    <Form.Field>
                        <input type="text" placeholder="Venue"/>
                    </Form.Field>

                    <Form.Field>
                        <input type="date" placeholder="Date"/>
                    </Form.Field>

                    <button   class="ui teal basic button"floated="left" content="Cancel">Cancel</button>
                    <button  class="ui teal basic button" floated="right" content="Submit">Submit</button>
                </Form>
            </Segment>

        </div>
     
     
    );
  }
