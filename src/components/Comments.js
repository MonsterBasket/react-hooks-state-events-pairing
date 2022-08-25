function Comments({comments}){
    return <>
    <h3>{comments.length} Comments</h3>
        {comments.map(a => <div><h4>{a.user}</h4><p>{a.comment}</p></div>)}
    </>
}
export default Comments;