import { Injectable } from "@angular/core";

export interface Task {
  id: number;
  description: string;
  isFinish: boolean;
}

@Injectable({ providedIn: "root" })

export class TaskManagementService {
  private Tasks: Task[] = [];


  private GetIndexOfTaskByID =
    (taskId: number): number => this.Tasks.findIndex(taskItem => taskItem.id == taskId);

  AddTask(taskDescription: string) {
    const currentItemId = this.Tasks.length - 1;
    let task: Task = {
      id: currentItemId + 1,
      description: taskDescription,
      isFinish : false
    }
    this.Tasks.push(task)
  }

  UpdateTaskDescription(description: string, taskId: number) {
     const taskFoundId = this.GetIndexOfTaskByID(taskId)
    if (taskFoundId > -1)
      this.Tasks[taskFoundId].description = description;
  }

  // TODO use to findIndex method to edit the
  toggleActiveTask(taskId: number) {
    const taskFoundId = this.GetIndexOfTaskByID(taskId)
    if (taskFoundId > -1)
      this.Tasks[taskFoundId].isFinish = !this.Tasks[taskFoundId].isFinish;
  }


  DeleteTask(Ids: number[]) {
    // Delete per item
    for (let index = 0; index < Ids.length; index++) {
      const indexOfTaskId = this.GetIndexOfTaskByID(Ids[index]);
      if (indexOfTaskId < 0)
      {
        // TODO record the failure of that index
      } else {
        this.Tasks.splice(indexOfTaskId, 1);
      }
    }
  }

}

