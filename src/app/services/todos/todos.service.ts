import { Injectable } from '@angular/core';
import { 
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  updateDoc,
  deleteDoc
  
 } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Todo{
  id: string;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private firestore: Firestore) { }

  getTodos():Observable<any>{
    const todosRef = collection(this.firestore, 'todos');
    return collectionData(todosRef, {idField: 'id'}) as Observable<Todo[]>;
  }
  addTodo(todo: Todo):Promise<any>{
    const todosRef = collection(this.firestore, 'todos');
    return addDoc(todosRef,todo);
  }
  
  updateTodo({id,title,completed}: Todo):Promise<any>{
    const docRef = doc(this.firestore, `todos/${id}`);
    return updateDoc(docRef, {title,completed});
  }

  deleteTodo(id:String):Promise<any>{
    const docRef = doc(this.firestore, `todos/${id}`);
    return deleteDoc(docRef);
  }
}
