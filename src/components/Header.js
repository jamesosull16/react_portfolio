import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Segment, Image, List, Button, Icon } from "semantic-ui-react";
import Hello from "../assets/images/hellonew.png";

function Header() {
  const history = useHistory();

  return (
    <Segment>
      <Grid columns={2} relaxed='very' stackable>
        <Grid.Column>
          <Image alt='helloworld' src={Hello} size='medium' rounded />
          <List relaxed divided>
            <List.Item>
              <List.Content>
                <List.Header>James O'Sullivan</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Software Engineer</List.Header>
              </List.Content>
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column verticalAlign='middle'>
          <List divided relaxed>
            <List.Item>
              <List.Content>
                <Button
                  fluid
                  animated='vertical'
                  onClick={() => history.push("/home")}
                  color='teal'
                >
                  <Button.Content hidden>Home</Button.Content>
                  <Button.Content visible>
                    <Icon name='home' />
                  </Button.Content>
                </Button>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <Button
                  fluid
                  animated='vertical'
                  onClick={() => history.push("/projects")}
                  color='teal'
                >
                  <Button.Content hidden>Projects</Button.Content>
                  <Button.Content visible>
                    <Icon name='computer' />
                  </Button.Content>
                </Button>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <Button
                  fluid
                  animated='vertical'
                  onClick={() => history.push("/resume")}
                  color='teal'
                >
                  <Button.Content hidden>Resume</Button.Content>
                  <Button.Content visible>
                    <Icon name='file alternate outline' />
                  </Button.Content>
                </Button>
              </List.Content>
            </List.Item>
          </List>
          <div>
            <List>
              <List.Item>
                <List.Content>
                  <Button
                    fluid
                    animated='vertical'
                    href='https://github.com/jamesosull16'
                    color='blue'
                  >
                    <Button.Content hidden>Github</Button.Content>
                    <Button.Content visible>
                      <Icon name='github' />
                    </Button.Content>
                  </Button>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Content>
                  <Button
                    fluid
                    animated='vertical'
                    href='https://www.linkedin.com/in/james-o-sullivan-5081b941/'
                    color='blue'
                  >
                    <Button.Content hidden>LinkedIn</Button.Content>
                    <Button.Content visible>
                      <Icon name='linkedin' />
                    </Button.Content>
                  </Button>
                </List.Content>
              </List.Item>
            </List>
          </div>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default Header;
