import React from 'react';
import { Grid, Container, List, Divider, Input } from 'semantic-ui-react';


export default class FooterMenu extends React.Component {
  render() {
    return (
        <Container fluid three column grid id="footer">
          <Grid columns="three">
            <Grid.Row>
              <Grid.Column>
                <List>
                  Navigation
                  <Divider/>
                  <List.Item>About Us</List.Item>
                  <List.Item>Videos</List.Item>
                  <List.Item>Store Location</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  Main Menu
                  <Divider/>
                  <List.Item>Mens</List.Item>
                  <List.Item>Women</List.Item>
                  <List.Item>Kids</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  Connect
                  <Divider/>
                  <List.Item>Sign Up for the Latest Updates</List.Item>
                  <List.Item><Input action='Join' placeholder="Enter Email Address"/></List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}
