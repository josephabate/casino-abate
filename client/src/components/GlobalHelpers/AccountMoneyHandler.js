//writes to local storage
export const updateBalanceToSession = (money) => {
    //rewrite to session storage
    const userSessionData = JSON.parse(sessionStorage.getItem("user"))
    userSessionData.money = money;
    sessionStorage.setItem("user", JSON.stringify(userSessionData));
}

