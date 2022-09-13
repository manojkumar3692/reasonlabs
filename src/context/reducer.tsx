export const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
      break;
    case "DELETE_USER":
        return { ...state, users: action.payload };
        break;  
    default:
      throw new Error('anoasd')
  }
};
