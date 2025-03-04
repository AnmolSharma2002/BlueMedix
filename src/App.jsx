import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Users from "./components/Users";
import Products from "./components/Products";
import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            FakeStore Dashboard
          </Typography>
          <Button color="inherit" component={Link} to="/users">Users</Button>
          <Button color="inherit" component={Link} to="/products">Products</Button>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "20px" }}>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
