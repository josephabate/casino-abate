import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

//writes to local storage
export const updateBalanceToSession = (money) => {
    //rewrite to session storage
    const userSessionData = JSON.parse(sessionStorage.getItem("user"))
    userSessionData.money = money;
    sessionStorage.setItem("user", JSON.stringify(userSessionData));
    const user = { id: userSessionData.id, money: userSessionData.money }

    //log in route
    axios({
        method: "PUT",
        withCredentials: true,
        url: `${API_URL}/user/money`,
        data: user
    }).then((res) => {
    })
        .catch((err) => {
            console.log(err)
        })
}

