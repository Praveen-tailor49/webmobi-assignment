import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';

const Dashboard = () => (
  <>
    <Helmet>
      <title>WebMOBI Assignment</title>
    </Helmet>
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100%', py: 3 }}>
      <Container maxWidth={false} />
    </Box>
  </>
);

export default Dashboard;
