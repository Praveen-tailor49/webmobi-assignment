import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from '@material-ui/core';
import {
  Button, Box, Card, CardActions, CardContent, Collapse, List, ListItemButton, ListItemText, ListItemIcon, Switch,
} from '@mui/material';

import {
  Chat, ExpandLess, LockOutlined
} from '@mui/icons-material';

const Teams = () => (
  <>
    <Helmet>
      <title>WebMOBI Assignment</title>
    </Helmet>
    <Container maxWidth={false}>
      <Card sx={{ minWidth: 275, mt: 1 }}>
        <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box>
            <List component="nav">
              <ListItemButton selected={false}>
                <ListItemText primary="General" />
              </ListItemButton>
              <ListItemButton selected={false}>
                <ListItemText primary="Privacy" />
              </ListItemButton>
              <ListItemButton selected>
                <ListItemText primary="Features" />
              </ListItemButton>
              <ListItemButton selected={false}>
                <ListItemText primary="Customization" />
              </ListItemButton>
              <ListItemButton selected={false}>
                <ListItemText primary="Integration" />
              </ListItemButton>
              <ListItemButton selected={false}>
                <ListItemText primary="Session Settings" />
                <LockOutlined sx={{ ml: 1 }} />
              </ListItemButton>
              <ListItemButton selected={false}>
                <ListItemText primary="My Plans" />
              </ListItemButton>
            </List>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <ListItemButton>
              <ListItemIcon>
                <Chat />
              </ListItemIcon>
              <ListItemText primary="Audience Q&A" />
              <Switch checked />
              <ExpandLess />
            </ListItemButton>

            <Collapse in timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="Moderation"
                    secondary="Easily review all questions before they go live."
                  />
                  <Switch />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText
                    primary="Labels"
                    secondary="Categorize and filter questions."
                  />
                  <Switch checked />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText
                    primary="Downvotes"
                    secondary="Enable downvoting of questions."
                  />
                  <Switch checked />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText
                    primary="Replies"
                    secondary="Allow participants to reply to or comment on questions."
                  />
                  <Switch checked />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText
                    primary="Anonymous questions"
                    secondary="Let your participants send anonymous."
                  />
                  <Switch checked />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText
                    primary="Maximum question length"
                    secondary="Show number of votes instead of percentage"
                  />
                  <Switch />
                </ListItemButton>
                <Box sx={{ ml: 1 }}>
                  <Button sx={{ ml: 1 }} variant="outlined">160</Button>
                  <Button sx={{ ml: 1 }} variant="outlined">240</Button>
                  <Button sx={{ ml: 1 }} variant="contained">300</Button>
                </Box>
                <ListItemButton>
                  <ListItemText
                    primary="Close questions"
                    secondary="Prevent the participants from sending new questions to your event."
                  />
                  <Switch checked />
                </ListItemButton>
              </List>
            </Collapse>
          </Box>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button size="big" variant="contained" color="primary">
            Save
          </Button>
        </CardActions>
      </Card>
    </Container>
  </>
);

export default Teams;
