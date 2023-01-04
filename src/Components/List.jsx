import React from "react";
import { useEffect, useState, useRef,  } from "react";
import useScroll from "../Hooks/useScroll";
const List = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 20;
    const parantRef = useRef()
    const childRef = useRef()
    const intersected = useScroll(parantRef, childRef, () => fetchTodos(page, limit));
    function fetchTodos(page, limit) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prev => [...prev, ...json]);
                setPage(prev => prev + 1)
            })
    
}

    return (
        <div ref={parantRef} style={{height: '80vh', overflow: 'auto'}}>
            {todos.map(todo =>
                <div key={todo.id} style={{ padding: 30, border: '2px solid black' }}>
                   {todo.id}. {todo.title}
                </div>
            )}
            <div ref={childRef} style={{ height: 20, background: 'green'}}/>
        </div>
    );
};

export default List;