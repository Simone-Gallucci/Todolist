// Seleziona gli elementi dal DOM
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Funzione per aggiungere un'attività
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === "") return alert("Inserisci un'attività!");

    // Crea un elemento della lista
    const li = document.createElement("li");
    li.classList.add("todo-item");

    // Aggiungi il testo dell'attività
    const span = document.createElement("span");
    span.textContent = todoText;

    // Crea il pulsante elimina
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Elimina";
    deleteBtn.classList.add("delete-btn");

    // Aggiungi evento per completare l'attività
    span.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Aggiungi evento per eliminare l'attività
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    // Assembla l'elemento della lista
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    // Pulisci l'input
    todoInput.value = "";
}

// Aggiungi evento al pulsante "Aggiungi"
addBtn.addEventListener("click", addTodo);

// Aggiungi evento per premere "Invio"
todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTodo();
});
