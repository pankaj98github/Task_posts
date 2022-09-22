export default (state, action) => {
    switch (action.type) {
    case "ADD_POST":
        return{
            posts: [action.payload, ...state.posts]
        }
        default:
            return state;
    }
}