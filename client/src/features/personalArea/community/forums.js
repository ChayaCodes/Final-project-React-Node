import { Box, Typography, Paper, Grid } from '@mui/material';
import { useGetForumsQuery } from '../../../store/forums/forumApiSlice';
import Avatar from './Avatar';

const Forums = () => {
    const { data: forums, isLoading, isError, isSuccess, error } = useGetForumsQuery()



    if (isLoading) {
        return <div>Loading...</div>
    } if (isError) {
        console.log("isError: ")
        console.log(error)
        return <div style={{ color: "red" }}>{error && <div>{error.message}</div>}</div>
    } if (isSuccess) {
        console.log(forums)


        return <Box>

            {forums.map(forum => {
                console.log(forum)
                return (
                    <Grid container spacing={2} style={{ padding: "10px" , marginTop:"10px"}} key={forum._id} onClick={() => window.location.href = `/community/${forum._id}`}>
                        <Grid item xs={6} >
                            <Typography variant="b" style={{ textAlign: "right" }}>{forum.name}</Typography>
                            <Typography style={{ textAlign: "right" }}>{forum.description}</Typography>

                        </Grid>
                        <Grid item xs={1} >
                            {forum.lastThreadUser && <Avatar user={forum.lastThreadUser} />}

                        </Grid>
                        <Grid item xs={3} style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                        {forum.lastThread && <Typography>{`נושא אחרון שנפתח\n${ new Date(forum.lastThread.createdAt).toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })}•${forum.lastThread && forum.lastThread.userName}`}</Typography>}

                            <Box style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
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
            )}
        </Box>
    }
}

export default Forums;