import Box from "@mui/material/Box";
import { CardContent, List, ListItem, ListItemText } from "@mui/material";

function ScrollList() {
  return (
    <Box className="scrollBox">
      <CardContent>
        <h3 className="orders">Order History</h3>
      </CardContent>
      <List>
        {orders.map((i) => (
          <ListItem key={i.key}>
            <ListItemText primary={i.id} className="orderId" />
            <ListItemText primary={i.customer_id} className="customerId" />
            <ListItemText primary={i.product_id} className="productId" />
            <ListItemText primary={i.ordered_at} className="date" />
            <ListItemText primary={i.total} className="total" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
export default ScrollList;
