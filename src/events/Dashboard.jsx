import React from "react";
import ListItem from "./ListItem";
import 'semantic-ui-css/semantic.min.css';
import { Grid } from "semantic-ui-react";
import ItemForm from "./ItemForm";


  export default function Dashboard(){
    return (
      <Grid>
        
        <Grid.Column width={10}>
          <ListItem/>
      
        </Grid.Column>

        <Grid.Column width={6}>
          <ItemForm/>
        </Grid.Column>

      </Grid>
     
    );

}