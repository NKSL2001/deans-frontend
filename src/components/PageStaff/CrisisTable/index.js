import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

let id = 0;
function createData(type, location, status) {
  id += 1;
  return { id, type, location, status };
}

const rows = [
  createData("Fire", "Jurong", "Pending"),
  createData("Suicide", "NTU", "Resolved")
];

function CrisisList(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Crisis Type</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Action</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.type}
                </TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>
                  <Button variant="contained">Dispatch</Button>
                </TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CrisisList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CrisisList);
