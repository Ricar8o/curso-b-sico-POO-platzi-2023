const fruits = [
    "melon",
    "melon",
    "mango",
    "banana",
    "apple",
    "banana",
    "apple",
];

function removeDuplicates(values) {
    let uniqueSet = new Set(values)
    return [...uniqueSet];
}

console.log(removeDuplicates(fruits))

function taskManager() {

    const tasks = new Map();

    function addTask(key, labels) {
        key = key.toLowerCase()
        if (tasks.has(key)) {
            let updated = [...tasks.get(key), ...labels]
            tasks.set(key, new Set(updated))
        } else {
            tasks.set(key, new Set(labels))
        }
    }
    function printTasks() {
        return tasks;
    }

    return {
        addTask,
        printTasks
    }
}

const myTaskManager = taskManager()
myTaskManager.addTask("Comprar leche", ["compras", "urgente"]);
myTaskManager.addTask("Sacar al perro", ["mascotas"]);
myTaskManager.addTask("Hacer ejercicio", ["salud"]);
myTaskManager.addTask("Comprar leche", ["lácteos"]);
myTaskManager.addTask("Comprar leche", ["tag1"]);

console.log(myTaskManager.printTasks());