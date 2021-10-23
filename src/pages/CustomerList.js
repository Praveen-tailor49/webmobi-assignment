import { Helmet } from 'react-helmet';
import { Container } from '@material-ui/core';
// import CustomerListResults from '../components/customer/CustomerListResults';
// import CustomerListToolbar from '../components/customer/CustomerListToolbar';
// import customers from '../__mocks__/customers';

const CustomerList = () => (
  <>
    <Helmet>
      <title>Teams</title>
    </Helmet>
    <Container maxWidth={false} />
  </>
);

export default CustomerList;
