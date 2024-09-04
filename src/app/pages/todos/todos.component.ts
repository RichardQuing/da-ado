import { Component } from '@angular/core';
import { TodosService, Todo } from '../../services/todos/todos.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  todos: Todo[] = []
  form: FormGroup;

  constructor(private todosService: TodosService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ["", Validators.required],
      completed: [false],
    });
  }
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todosService.getTodos().subscribe((todos) => {
      this.todos = todos;
    })
  }

  addTodo(): void {
    if (this.form.invalid) return;
    const todo = this.form.value;
    this.todosService.addTodo(todo)
      .then((response) => {
        this.todos.push(response);
        this.form.reset();
      })
      .catch((error) => console.log(error));
  }

  updateTodo(id: string): void {
    if (this.form.invalid) return;
    const newTodo = { id, ...this.form.value };
    this.todosService.updateTodo(newTodo)
      .then((response) => {
        const index = this.todos.findIndex((todo) => todo.id === response.id);
        this.todos[index] = response;
        this.form.reset();
      })
      .catch((error) => console.log(error));
  }

  deleteTodo(id: string): void {
    this.todosService.deleteTodo(id)
    .then(() => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    })
    .catch((error) => console.log(error));
  }
}