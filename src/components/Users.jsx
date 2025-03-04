import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../api";
import { Container, Card, CardContent, Typography, Button, Grid } from "@mui/material";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>User List</Typography>
      <Grid container spacing={3}>
        {users.map(user => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">{user.name.firstname} {user.name.lastname}</Typography>
                <Typography color="textSecondary">{user.email}</Typography>
                <Button 
                  variant="contained" 
                  color="error" 
                  onClick={() => handleDelete(user.id)} 
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

export default Users;
