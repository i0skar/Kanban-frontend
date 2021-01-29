import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task.model';

@Injectable()
export class TaskService {

constructor(private http: HttpClient) { }
  addTaskWithUser(task: Task) {
    return this.http.post(environment.apiUrl + 'KanbanTask/AddTaskWithUser', task, {responseType: 'text'});
    // return this.http.post('http://localhost:8080/kanban/task', task);
  }

  patchTaskStatus(status: {status: string}, id: number) {
    return this.http.patch(environment.apiUrl + 'KanbanTask/PatchTaskStatus?kanbanTaskId=' + id, status, {responseType: 'text'});
  }

  patchTaskProgressStatus(progStat: {progressStatus: number}, id: number) {
    return this.http.patch(environment.apiUrl + 'KanbanTask/PatchTaskProgressStatus?kanbanTaskId=' + id, progStat, {responseType: 'text'});
  }

  patchTaskWithUser(task: Task) {
    return this.http.patch(environment.apiUrl + 'KanbanTask/PatchTaskWithUser', task, {responseType: 'text'});
  }

  getSingleTask(id: number) {
    return this.http.get(environment.apiUrl + 'KanbanTask/GetSingleTask?kanbanTaskId=' + id);
  }

  getTasksByPriority() {
    return this.http.get(environment.apiUrl + 'KanbanTask/GetTasksByPriority');
    // return this.http.get('http://localhost:8080/kanban/tasks');
  }

  deleteTask(id: number) {
    return this.http.delete(environment.apiUrl + 'KanbanTask/DeleteTask?kanbanTaskId=' + id, {responseType: 'text'});
  }
}

