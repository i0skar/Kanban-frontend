import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

constructor(private http: HttpClient) { }
    addUser(user: User) {
        return this.http.post(environment.apiUrl + 'User/AddUser', user, {responseType: 'text'});
        // return this.http.post('http://localhost:8080/kanban/user', user);
    }

    patchUser(id: number) {
        return this.http.patch(environment.apiUrl + 'User/PatchUser?userId=' + id, {responseType: 'text'});
    }

    getAllUsers() {
        return this.http.get(environment.apiUrl + 'User/GetAllUsers');
    }

    deleteUser(id: number) {
        return this.http.delete(environment.apiUrl + 'User/DeleteUser?userId=' + id, { responseType: 'text' });
    }
}
