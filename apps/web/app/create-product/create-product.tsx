'use client';

import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import createProduct from "./actions/create-product";

export default function CreateProduct() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create Product
        </Typography>
        <Box component="form" action={createProduct} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Name"
            name="name"
            id="name"
            type="text"
            required
            fullWidth
          />
          <TextField
            label="Price"
            name="price"
            id="price"
            type="number"
            required
            fullWidth
            inputProps={{ min: 0, step: 0.01 }}
          />
          <Button type="submit" variant="contained" color="primary" size="large">
            Create
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
