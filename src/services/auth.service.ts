import { Injectable } from '@angular/core';
import { CredenciaisDTO } from '../models/credenciais.dto';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { LocalUser } from '../models/local_user';
import { StorageService } from './storage.service';
import * as jwt_decode from 'jwt-decode';
import { CartService } from './domain/cart.service';

@Injectable()
export class AuthService {

    jwtHelper: Injectable = new Injectable();

    constructor(
        public http: HttpClient,
        public storage: StorageService,
        public cartService: CartService) {
    }

    authenticate(creds: CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    refreshToken() {
        return this.http.post(
            `${API_CONFIG.baseUrl}/auth/refresh_token`,
            {},
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    successfulLogin(authorizationValue: string) {
        const tok = authorizationValue.substring(7);
        const user: LocalUser = {
            token: tok,
            email: this.decodePayloadJWT(tok).sub
        };
        this.storage.setLocalUser(user);
        this.cartService.createOrClearCart();
    }

    decodePayloadJWT(tok): any {
        try {
            return jwt_decode(localStorage.getItem(tok));
        } catch (Error) {
          return null;
        }
    }

    logout() {
        this.storage.setLocalUser(null);
    }
}
