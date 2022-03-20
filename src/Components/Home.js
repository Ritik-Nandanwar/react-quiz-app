// https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple
//https://opentdb.com/api_config.php
import React, { useContext, useState, useEffect } from "react";
import { Container,MenuItem,InputLabel, Select, Typography, Input, FormControl, FormHelperText, TextField, Card, Paper, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MainContext } from "../Context";
import Categories from '../Categories'
import axios from "axios";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
    app: {
      display:"flex", 
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center"
  },
  mainCard:{
    padding:20,
    marginTop:"20vh",
    border:"4px solid black"
  }
});
const Home = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const { content, setContent } = useContext(MainContext);
  const getContent = async () => {
    let data = await axios.get(
      "https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple"
    );
    console.log(data.data.results);
    setContent(data.data.results);
  };
  const classes = useStyles();
  return (
    <div className={classes.app}>
    <Card className={classes.mainCard}> 
      <TextField required style={{minWidth:200 , margin:20}} select label="Difficulty" variant="outlined"/>
      <TextField required style={{minWidth:200 , margin:20}} select label="Type" variant="outlined"/>
      <TextField onChange={(e) =>console.log(e.target.value)} required style={{minWidth:200 , margin:20}} select label="Category" variant="outlined">
        {Categories.map(cat=>(
          <MenuItem key={cat.value} value={cat.category ?.loading}>{cat.category}</MenuItem>
        ))}
      </TextField>
    </Card> 
    <Link to={'/quiz'} style={{ border:"1px solid red",borderRadius:8, marginTop:100,color:"red" , padding:20}}>Start test</Link>
    </div>
  );
};

export default Home;
