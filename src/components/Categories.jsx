import React from 'react'
import "./CSS/categories.css";
import categoriesData from "./json/data.json"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Categories() {
  return (
    <div className='container-lg'>
        <div className="d-grid">
        <h6>Kategoriler</h6>
          <div className="categories ms-5">
            {
              categoriesData.map((item, index) => (
                <Card key={index} sx={{ width: 150, margin: "15px 25px 10px 0", height : 120 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="50"
                    image={item.img}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom component="div"  className='typo-categories text-center'>
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              ))
            }
          </div>
        </div>
      </div>
  )
}

export default Categories