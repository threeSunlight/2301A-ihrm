const getters = {
  // 开放username
  username: (state) => state.users.userInfo.username,
  userId: (state) => state.users.userInfo.userId,
  staffPhoto: (state) => state.users.userInfo.staffPhoto,
  userInfo: (state) => state.users.userInfo
}
export default getters
