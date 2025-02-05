import React from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles, Theme, createStyles } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 200,
            width: 400,
        },
        control: {
            padding: theme.spacing(2),
        },
        gridInBetweenSpacing: {
            marginTop: 40,
        },
        card: {
            // maxWidth: 345,
            width: 340
          },
        media: {
            height: 140,
          },
        
    }),
);

export default function Inventory(props: any) {
  const classes = useStyles();
  const { handleUserUIViewChange } = props

  const handleOnClick = (listView: string) => {
    handleUserUIViewChange(listView)
  }

  return (
    <Grid container className={classes.root} spacing={0} >
      <h1 style={{textAlign: 'center'}}> Inventory </h1>
      <Grid item lg={12}>
        <Grid className={classes.gridInBetweenSpacing} container justify="center" spacing={5}>

          <Grid key={"Tools"} item>
            <Card className={classes.card}>
              <CardActionArea onClick={() => handleOnClick('ToolsList')}>
                <CardMedia
                  className={classes.media}
                  image={"https://software-dev-proj.s3-us-west-1.amazonaws.com/metal-wheels.jpg"}
                />
                <CardContent>
                  <Typography align='center' variant="h5" component="h2">
                    Tools List
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" fullWidth onClick={() => handleOnClick('ToolsList')}> 
                  View More
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid key={"Materials"} item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={"https://software-dev-proj.s3-us-west-1.amazonaws.com/Inventory.jpg"}
                />
                <CardContent>
                  <Typography align='center' variant="h5" component="h2">
                    Materials List
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" fullWidth>
                  View More
                </Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}
