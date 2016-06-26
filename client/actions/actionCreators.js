//add agent
export function addAgent(name, title){
  return{
    type:'ADD_AGENT',
    name,
    title
  }
}

//increment
export function increment(index){
  return {
    type:'INCREMENT_LIKES',
    index
  }
}

//add comment
export function addComment(postId, author, comment){
  return{
    type:'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//remove comment
export function removeComment(postId, i){
   return{
     type:'REMOVE_COMMENT',
     postId,
     i
   }
 }
