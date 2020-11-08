import React from 'react'
import { Item,List,Icon, Segment,Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ItemDetail from './ItemDetail';

 
export default function ListItem(){
    return (
     <Segment.Group>
         <Segment>
             <Item.Group>
                 <Item>
                     
                     <Item.Image size ='tiny'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXDXPekRNEUaY27ItoyoqoTnPgM8qJUs8vZoBRI1yYGWxAow0n3hKJNr7jfuc9hL0fcJEln5M&usqp=CAc"
                     />
                     <Item.Content>
                     <Item.Header content="Item to be donated"/>
                         <Item.Description>
                             Person in charge(Mr.X) 
                         </Item.Description>
                         </Item.Content>
                 </Item>
             </Item.Group>
         </Segment>


          <Segment>
             <span>
                 <Icon name='clock'/>Date
                 <Icon name='marker'/>Venue
                 <Icon name="phone"/>Contact
             </span>
         </Segment>

        <Segment secondary>
             <List horizontal>
                 <ItemDetail/>
                
             </List>
         </Segment>

         <Segment clearing>
             <h3>Further details</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non dicta illum sit quasi voluptates inventore fugit cumque reiciendis doloremque labore placeat, voluptatem, officiis repudiandae excepturi veniam iusto quam harum?</p>
             <Button color='teal' floated='right' content='View' />

         </Segment>
     </Segment.Group>
     
    );

}