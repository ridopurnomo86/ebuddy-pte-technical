"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Container, Typography } from "@mui/material";
import { getUserData } from "@/api/userApi";

export default async function Home() {
  const data = await getUserData();

  return (
    <Container
      component="main"
      sx={{
        paddingY: 4,
      }}
    >
      <React.Fragment>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Recent Users
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
          See more users
        </Button>
      </React.Fragment>
    </Container>
  );
}
