import CreateProduct from "./create-product/create-product";
import Products from "./products/products";
import { Container, Typography, Box } from '@mui/material';

export const dynamic = 'force-dynamic';
export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Products
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <CreateProduct />
        <Products />
      </Box>
    </Container>
  );
}
