import React from "react";
function UserPage(){
    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return(
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default UserPage;