import { Product } from "@repo/types";
import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

export default async function Products() {
    const response = await fetch(`${process.env.API_URL}/products`, {
        next: {tags: ['products']}
    });
    const products: Product[] = await response.json();

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Products
            </Typography>
            <List>
                {products.map((product) => (
                    <ListItem key={product.id}>
                        <ListItemText primary={`${product.name} - $${product.price}`} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );

}
