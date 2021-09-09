import  { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container, Grid, Typography, IconButton } from '@material-ui/core';
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));
function Shop() {
    const [items, setItems] = useState([]);
    const [expand, setExpand] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        fetchiItems();

    }, []);

    const fetchiItems = async () => {
        await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setItems(json)
            );
    }
    const handleExpand = () => {
        setExpand(!expand);
    }
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                {items.map(item => {
                    return (
                        <Grid key={item.id} item>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={item.image}
                                        title={item.title} />

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">{item.title.length > 20 ? item.title.substring(0, 17) + '...' : item.title}</Typography>
                                    </CardContent>
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {item.description.substring(0, 60) + '...'}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="favourite add"><FavoriteIcon /></IconButton>
                                    <IconButton aria-label="share"><ShareIcon /></IconButton>
                                    <IconButton className={clsx(classes.expand, {
                                        [classes.expandOpen]: expand,
                                    })}
                                        onClick={handleExpand}
                                        aria-expanded={expand}><ExpandMoreIcon /></IconButton>

                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default Shop;
