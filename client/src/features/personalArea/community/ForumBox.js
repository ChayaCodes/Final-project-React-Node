import { Grid, Typography, Box } from '@mui/material';
import Avatar from './Avatar';
import formatDate from '../../../formatDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamondTurnRight } from '@fortawesome/free-solid-svg-icons';

const ForumBox = ({ forum }) => {
    return (
        <Grid container spacing={2} columns={3}>
            <Grid item xs={2}>
                <Box>
                    <b>{"פורום שידוכים"}</b>
                    <Typography>{"פורום להורים משדכים, מיועד להתייעץ על נושאים חשובים בלבד"}</Typography>
                </Box>
            </Grid>
            <Grid item xs={1}>
                <Grid container>
                    <Grid item xs={6}>
                        <h5>נושאים</h5>
                        <p>50</p>
                    </Grid>
                    <Grid item xs={6}>
                        <h5>הודעות</h5>
                        <p>100</p>
                    </Grid>
                </Grid>
                <Grid container>
                        <Avatar 
                        user={{color:'red'}}/>
                    <Grid>
                        <p>תוסף קטן לאלמנטור</p>
                        <span>
                            <a>מנהל</a>•<>היום בשעה 13:55</>
                        </span>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default ForumBox;