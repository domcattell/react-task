export default () => {
    if(localStorage.getItem('pretend-json-token') === "0000") {
        return true
    } else {
        return false
    }
}

/**
 * pretend helper function to check if web token is valid or not.
 * usually sets x-auth-token which would then go the server, in which
 * the server would run a check to see if the token is valid or not.
 * if the token is valid, the user will stay logged in, else their
 * session will expire.
 * 
 * Used in this instance for @isAuthenticated in the global state. It
 * simply reads the return value based on if the token is valid, in this
 * app for demonstration purposes, the only token that is valid is "000"
 */