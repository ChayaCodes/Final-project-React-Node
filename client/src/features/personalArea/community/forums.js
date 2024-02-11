import { Box, Typography, Paper, Grid } from '@mui/material';
import { useGetForumsQuery } from '../../../store/forums/forumApiSlice';

const Forums = () => {
    const { data: forums, isLoading, isError, isSuccess, error } = useGetForumsQuery()

    

    if (isLoading) {
        return <div>Loading...</div>
    } if (isError) {
        console.log(error)
        return <div style={{ color: "red" }}>{error && <div>{error.message}</div>}</div>
    } if (isSuccess) {
        console.log(forums)

        return <Box>
            {forums.map(forum => {
                return (
                    <Box key={forum._id} component={Paper} style={{ padding: "1rem", margin: "1rem", display: "flex", flexDirection: "row", justifyContent: "space-between" }}
                        onClick={() => { window.location.href = `/personal-area/community/${forum._id}` }}>
                        <Box>
                            <Typography>{forum.name}</Typography>
                            <Typography>{forum.description}</Typography>
                        </Box>
                        <Box>
                            <Box>
                                <Typography>{`נושא אחרון שנפתח\n${forum.lastTread && new Date(forum.lastTread.createdAt).toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })}•${forum.lastTread && forum.lastTread.userName}`}</Typography>
                            </Box>
                        </Box>
                    </Box>
                )
            }
            )}
        </Box>
    }
}

export default Forums;