import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../api";
import { Container, Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Product List</Typography>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card variant="outlined">
              <CardMedia 
                component="img"
                height="150"
                image={product.image}
                alt={product.title}
                style={{ objectFit: "contain", padding: "10px" }}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography color="textSecondary">${product.price}</Typography>
                <Button 
                  variant="contained" 
                  color="error" 
                  onClick={() => handleDelete(product.id)} 
                  style={{ marginTop: "10px" }}>
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Products;
