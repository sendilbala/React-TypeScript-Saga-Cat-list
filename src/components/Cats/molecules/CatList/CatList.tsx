import React, { useEffect, useState } from 'react';


import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
// import {catListData} from '../../mocks/CatList.mock';
import Paper from '@material-ui/core/Paper';

import { CatListProps } from '../../types/CatList.types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

import { routeUrls } from '../../../../routes';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,

    //flexGrow: 1,
  },
  gridList: {
    width: 800,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  media: {
    height: 140,
  },
  paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));


const CatList = ({
  listData,
  isRequest,
  dispatchGetCatList,
  favouriteCatRequest,
  error,
}:CatListProps) => {

  const [favourites, setfavourites] = useState([]);
     //add the id to the array of clicked items if it doesn't exist but if it does exist remove it. this makes sure that double clicking on an item brings it back to normal
  const handleIconFavourites = (id) => {

       let result ;

       if( favourites.includes(id)) {
         result = favourites.filter(click => click != id)
        } else{ 
          result = [...favourites, id]
          favouriteCatRequest(id)
        }

       setfavourites(result)
  }

  const [votes, setVotes] = useState([]);
     //add the id to the array of clicked items if it doesn't exist but if it does exist remove it. this makes sure that double clicking on an item brings it back to normal
  const handleVotes = (id) => {
       let result =  votes.includes(id)? votes.filter(click => click != id): [...votes, id]
       setVotes(result)
      // change <AddCircleIcon /> to <BlockIcon /> at "id"
  }

  const classes = useStyles();

  useEffect(() => {
    if (!isRequest && listData && listData.length === 0 && error === null) {
      dispatchGetCatList();
    }
  }, []);

  return (
    <div className={classes.root}>
    <Grid  container  spacing={1}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <p>My Cat list</p>
          <a href={routeUrls.UPLOAD_URL}>Upload</a>
        </Paper>
      </Grid>
    {listData.map((card) => (
      <Grid item xs={3}  key={card.id}>

        <Card className={classes.root} >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={card.url}
              title={card.id}
            />
            
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites" onClick={ () => handleIconFavourites(card.id)}>
                { 
                  favourites.includes(card.id) ? <FavoriteIcon style={{ color: 'red'}}/> : <FavoriteIcon style={{ color: 'grey'}}/> 
                }
            </IconButton>
            <IconButton aria-label="like" onClick={ () => handleVotes(card.id)}>

                { 
                  votes.includes(card.id) ? <ThumbUpIcon style={{ color: 'orange'}}/> : <ThumbUpIcon /> 
                }
            </IconButton>
            
          </CardActions>
        </Card>
      </Grid>

    ))}
    </Grid>
    </div>
  );
}

CatList.defaultProps = {
  listData: [],
  isRequest: false,
  error: '',
};

export default CatList;

