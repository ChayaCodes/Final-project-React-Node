import { Grid, Typography, Box } from '@mui/material';
import Avatar from './Avatar';
import formatDate from '../../../formatDate';

const ForumBox = ({ forum }) => {
    return (
        <Grid container spacing={2} style={{ padding: "10px", marginTop: "10px", marginRight: "5vw" }} key={forum._id} onClick={() => window.location.href = `/personal-area/community/${forum._id}`}>
            <Grid item xs={6} alignItems={"right"}>
                <Typography variant="b" style={{ textAlign: "right", fontWeight: "700" }}>{forum.name}</Typography>
                <Typography style={{ textAlign: "right" }}>{forum.description}</Typography>

            </Grid>
            <Grid item xs={3} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Box>
                    {forum.lastThreadUser && <Avatar user={forum.lastThreadUser} />}
                    {forum.lastThread && <Typography>נושא אחרון שנפתח
                        <br />
                        {formatDate(forum.lastThread.createdAt)} • {forum.lastThread && forum.lastThread.userName}</Typography>}
                </Box>
                <Box style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography>
                        <Typography>נושאים: </Typography>
                        <Typography>{forum.threadsCount ? forum.threadsCount : 0}</Typography>
                    </Typography>
                    <Typography>
                        <Typography>הודעות: </Typography>
                        <Typography>{forum.postsCount ? forum.postsCount : 0}</Typography>
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={1} >
                l
            </Grid>
        </Grid>
    )
}

export default ForumBox;