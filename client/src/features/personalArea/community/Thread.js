import Editor from "./Editor";
import { useGetPostsQuery } from "../../../store/posts/postsApiSlice";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

const Thread = () => {
    const { threadId } = useParams();

    const { data, error, isLoading, isSuccess, isError } = useGetPostsQuery(threadId);

    const handleAddPost = () => {
        console.log("add post")
    }

    if (isLoading) {
        return <div>Loading...</div>
    } if (isError) {
        console.log(error)
        return <div style={{ color: "red" }}>{error && <div>{error.message}</div>}</div>
    } if (isSuccess) {
        console.log(data)
        return <div>
            {
                data.map((post) => {
                    if (!post) return null;
                    return (
                        <div key={post.id}>
                            <p>{post.content}</p>
                        </div>
                    )
                })
            }
            <Editor />
            <Button onClick={handleAddPost}>הוספת תגובה</Button>
        </div>
    }
}

export default Thread;