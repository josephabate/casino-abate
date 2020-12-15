import axios from 'axios';

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
        url: `/user/money`,
        data: user
    }).then((res) => {
    })
        .catch((err) => {
            console.log(err)
        })
}

