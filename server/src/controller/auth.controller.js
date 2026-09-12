const login = async (req, res) => {
    res.json('login')
}
const logout = async (req, res) => {
    res.json('logout');
}
const getUser = async (req, res) => {
    res.json('getUser')
}

export {login,logout,getUser}