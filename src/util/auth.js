import Cookies from "js-cookie"

/**这个时候命名避开cookies的一些常规命名 */
const TokenKey = "Authorization"

function getToken() {
  return Cookies.get(TokenKey)
}

function setToken(token) {
  Cookies.set(TokenKey, token)
}

function removeToken() {
  Cookies.remove(TokenKey)
}

export { getToken, setToken, removeToken }
