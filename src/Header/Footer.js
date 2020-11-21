import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import {withStyles} from '@material-ui/core/styles';

const useStyles = theme => ({
    footer: {
        padding: theme.spacing(1, 1),
        marginTop: 'auto',
        backgroundColor:
                theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
});

export class Footer extends Component {
    render() {
        const{classes}= this.props;
        return (
            <div  style={{minWidth: '100vw'}}>
            <Container>
                {/* <Copyright/> */}
            </Container>
        </div>
        )
    }
}

export default withStyles(useStyles)(Footer);
