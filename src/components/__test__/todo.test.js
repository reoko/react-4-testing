import { render, screen, cleanup } from '@testing-library/react';
import Todo from '../todo';

afterEach(() => {
    cleanup();
});

test('Should render non-completed todo', () => {
    const todo = {id: 1, title: 'wash dishes', completed: false};
    render(<Todo todo={todo} />);

    const todoElement = screen.getByTestId('todo-1');
    const strikeElement = todoElement.querySelector('strike');

    expect(strikeElement).not.toBeInTheDocument();

    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('wash dishes');
});

test('Should render completed todo', () => {
    const todo = {id: 2, title: 'wash car', completed: true};
    render(<Todo todo={todo} />);

    const todoElement = screen.getByTestId('todo-2');
    const strikeElement = todoElement.querySelector('strike');

    expect(strikeElement).toBeInTheDocument();
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('wash car');
});