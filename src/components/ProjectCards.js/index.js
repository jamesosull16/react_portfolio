import React from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import "./style.css";

function ProjectCard({ title, image, description, repoUrl, appUrl }) {
  return (
    <Card>
      <Image alt={title} src={image} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          color='olive'
          className='button'
          variant='info'
          onClick={() => (window.location = repoUrl)}
          animated='vertical'
        >
          <Button.Content hidden>Github Repo</Button.Content>
          <Button.Content visible>
            <Icon name='github' />
          </Button.Content>
        </Button>

        <Button
          color='blue'
          className='button'
          variant='info'
          onClick={() => (window.location = appUrl)}
          animated='vertical'
        >
          <Button.Content hidden>Application</Button.Content>
          <Button.Content visible>
            <Icon name='tablet alternate' />
          </Button.Content>
        </Button>
      </Card.Content>
    </Card>
  );
}

export default ProjectCard;
