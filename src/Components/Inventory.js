import {
  Grid,
  InputAdornment,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import LogoAndIcons from "../Images";
import Moment from "react-moment";
import { Search } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  inventory,
  inventoryUnmount,
} from "../Modules/actions/inventoryAction";
import { totalInfo } from "../Modules/actions/totalCarrotsAndQuantityAction";

const useStyles = makeStyles({
  iconEye: {
    width: "20px",
    height: "20px",
    marginRight: "5px",
  },
  tableHead: {
    backgroundColor: "gray",
    color: "white",
  },
});

function Inventory() {
  const [inventoryMap, setInventoryMap] = useState([]);

  const dispatch = useDispatch();
 
  let inventoryResults = useSelector((state) => state);
  const { inventoryInfo } = inventoryResults;
  const {totalInfoReducers}=inventoryResults
  const {squQuantity,diamondCarrot}=totalInfoReducers
  console.log(squQuantity,diamondCarrot,totalInfoReducers, "totalReducers");




  useEffect(() => {
    dispatch(inventory());
    dispatch(totalInfo())
    console.log(inventoryResults, "inventory resuls");
    
  }, [inventoryInfo]);

  useEffect(() => {
    if (
      inventoryResults.inventoryInfo.inventory &&
      inventoryResults.inventoryInfo.inventory.data_array
    ) {
      setInventoryMap(inventoryResults.inventoryInfo.inventory.data_array);
    }
  }, [inventoryResults]);

  useEffect(() => {
    return () => {
      dispatch(inventoryUnmount());
    };
  }, []);

  const classes = useStyles();
  const item = inventoryMap.map((data) => {
    return (
      <TableRow key={data.sku_number}>
        <TableCell>{data.sku_number}</TableCell>
        <TableCell align="right"> {data.design_code}</TableCell>
        <TableCell align="right">{data.metal_type}</TableCell>
        <TableCell align="right">{data.design_category}</TableCell>
        <TableCell align="right">{data.diamond_weight}</TableCell>
        <TableCell align="right">{data.net_weight}</TableCell>
        <TableCell align="right">{data.sales_value}</TableCell>
        <TableCell align="right">{data.sku_quantity}</TableCell>
        <TableCell align="right">
          <Moment format="DD-MM-YY">{data.createdAt}</Moment>
        </TableCell>

        <TableCell align="right">
          <span>
            <img
              className={classes.iconEye}
              src={LogoAndIcons["Eye"]}
              alt="i"
            />
            <img
              className={classes.iconEye}
              src={LogoAndIcons["Pdf"]}
              alt="p"
            />
          </span>
        </TableCell>
      </TableRow>
    );
  });
  return (
    <Grid container>
      <Grid item container style={{ marginBottom: "10px" }}>
        <Grid item lg={4}>
          <TextField
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item lg={4}>
          <Typography variant="h5">Total Stones: {squQuantity?squQuantity:0} </Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography variant="h5"> Total Carrot: {diamondCarrot?diamondCarrot.toFixed(3):0} </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Table component={Paper}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell>SKU</TableCell>
              <TableCell align="right">Design Code</TableCell>
              <TableCell align="right">Material</TableCell>
              <TableCell align="right">Design Category</TableCell>
              <TableCell align="right">Diamond Ct.</TableCell>
              <TableCell align="right">Net Weight</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">SKU QTY</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Actinos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{item}</TableBody>
        </Table>
      </Grid>
    </Grid>
  );
}

export default Inventory;
