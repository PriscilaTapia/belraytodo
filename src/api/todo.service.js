export const obetenerTodos = async () => {
  const resp = await fetch("http://localhost:4000/api/todo", { method: "GET" });
  const body = await resp.json();

  if (body.ok === false) {
    return [];
  }

  return body.todos;
};

export const crearTodoDB = async (nuevoData) => {
  const resp = await fetch(`http://localhost:4000/api/todo`, {
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(nuevoData),
    method: "POST",
  });

  const body = await resp.json();

  if (body.ok) {
    console.log("creado");
  }
  //TODO: alerta
};

export const eliminarTodo = async (id) => {
  const resp = await fetch(`http://localhost:4000/api/todo/delete/${id}`, {
    method: "PUT",
  });
  const body = await resp.json();

  if (body.ok) {
    console.log("eliminado");
  }
};

export const editarTodoDB = async (id, nuevoData) => {
  const resp = await fetch(`http://localhost:4000/api/todo/update/${id}`, {
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(nuevoData),
    method: "PUT",
  });
  const body = await resp.json();

  if (body.ok) {
    console.log("editado");
  }
};
