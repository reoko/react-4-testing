import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
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

test('matches snaphot', () => {
    const todo = {id: 1, title: 'wash dishes', completed: false};
    const tree = renderer.create(<Todo todo={todo} />).toJSON;
    expect(tree).toMatchSnapshot();
    //console.log(tree);
});

//kentcdodds/react-testing-library