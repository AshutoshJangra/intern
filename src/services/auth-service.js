import * as jwt from "jsonwebtoken";
import * as moment from "moment";

class AuthService {
  tokenKey = "auth_token";

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }



  decode(token) {
    return jwt.decode(JSON.parse(token));
  }

  saveToken(token) {
    console.log(token);
    localStorage.setItem(this.tokenKey, JSON.stringify(token.token));
  }

  invalidateUser() {
    localStorage.removeItem(this.tokenKey);
  }

  getExpiration(token) {
    const exp = this.decode(token).exp;

    return moment.unix(exp);
  }

  isValid(token) {
    return moment().isBefore(this.getExpiration(token));
  }

  isAuthenticated() {
    const token = this.getToken();

    return token && this.isValid(token) ? true : false;
  }
}

export default new AuthService();
