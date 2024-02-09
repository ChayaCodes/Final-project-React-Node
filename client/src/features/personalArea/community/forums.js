import { useGetForumsQuery } from '../../../store/forums/forumApiSlice';

const Forums = () =>{
    const{data, isLoading, isError, isSuccess, error} = useGetForumsQuery()

    if(isLoading){
        return <div>Loading...</div>
    }if(isError){
        console.log(error)
        return <div style={{color: "red"}}>{error && <div>{error.message}</div>}</div>
    }if(isSuccess){
        console.log(data)
        return <div>forums</div>
    }
}

export default Forums;