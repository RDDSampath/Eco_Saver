import { Route, Routes } from 'react-router-dom';
import { Container, Box } from '@mui/material';
// import Sidebar from './Sidebar';
import Summary from './Summary';
import OrderHistory from './OrderHistory';
import ProductManagement from './ProductManagement';
import NewView from './NewView';

const SalesDashboard = () => {
    return (
      <Box flexGrow={1} display="flex">
        {/* <Sidebar /> */}
        <Container>
          <Routes>
            <Route exact path="/sales-dashboard" element={<Summary />} />
            <Route path="/sales-dashboard/order-history" element={<OrderHistory />} />
            <Route path="/sales-dashboard/product-management" element={<ProductManagement />} />
            <Route path="/sales-dashboard/newview" element={<NewView />} />
          </Routes>
        </Container>
      </Box>
    );
  }
  
  export default SalesDashboard;