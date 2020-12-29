import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = theme => ({
    root: {
        maxWidth: 200,
        minWidth: 200,

        maxHeight: 275,
        minHeight: 275,
    },
    media: {
        height: '25%',
        paddingTop: '56.25%', // 16:9
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
    avatar: {
        backgroundColor: red[500],
    },
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridGap: `${theme.spacing.unit * 3}px`
    },
});

export class ProductCard extends Component {
    render() {
        const {classes} = this.props;
        let StaticProduct = [
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            },
            {
                productName: "IPhone",
                productPrice: "100",
                productDes: "Test",
                color: "red",
                offerPrice: "90",
                photoUrl:"/Static/Images/Cards/rashmika.jpg",
                rating: "4.5"
            }
        ];
        return (
                <Grid container spacing={24}>
                    {StaticProduct.map((item, i) => {
                        return (
                                <Grid item md={2} style={{alignContent: 'center'}}>
                                    <Card className={classes.root} style={{
                                        minWidth: '200px',
                                        alignSelf: 'flex-start',
                                        margin: '10px',
                                        position: 'relative'
                                    }}>
                                        <CardHeader
                                                avatar={
                                                    <Avatar aria-label="recipe">
                                                        R
                                                    </Avatar>
                                                }
                                                action={
                                                    <IconButton aria-label="settings">
                                                        <MoreVertIcon/>
                                                    </IconButton>
                                                }
                                                title={item.productName}
                                                subheader="September 14, 2016"
                                        />
                                        <CardMedia
                                                src={item.photoUrl}
                                                title="Paella dish"
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item.productPrice}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing style={{alignItems: "center"}}>
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteIcon/>
                                            </IconButton>
                                            <IconButton aria-label="share">
                                                <ShareIcon/>
                                            </IconButton>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Price: {item.productPrice}
                                            </Typography>
                                        </CardActions>
                                        <Button variant="outlined" size="small" color="primary"
                                                className={classes.margin}>
                                            Add To Cart
                                        </Button>
                                        <Collapse timeout="auto" unmountOnExit>
                                            <CardContent>
                                                <Typography paragraph> {item.color}</Typography>
                                                <Typography paragraph>
                                                    {item.productDes}
                                                </Typography>
                                                <Typography paragraph>
                                                    {item.offerPrice}
                                                </Typography>
                                                <Typography paragraph>
                                                    {item.rating}
                                                </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </Grid>
                        )
                    })}
                </Grid>
        )
    }
}

export default withStyles(useStyles)(ProductCard);
