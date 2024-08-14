import fs from 'fs/promises';
import path from 'path';

// Определение пути к файлу задач
const filePath = path.resolve(new URL(import.meta.url).pathname, '../../data/tasks.json');

// Пример задачи, которую вы хотите добавить
const taskToAdd = {
    task: "",
    funcName: "",
    solution: {
        base: "",
        es6: ""
    }
};

// Функция для добавления задачи в файл
async function addTask(task) {
    try {
        // Чтение текущих задач из JSON-файла
        const data = await fs.readFile(filePath, 'utf8');
        let tasks = [];
        try {
            tasks = JSON.parse(data);
        } catch (err) {
            console.error('Ошибка парсинга JSON:', err);
        }
        
        // Добавление новой задачи
        const newTask = { id: Date.now(), ...task };
        tasks.push(newTask);
        
        // Запись обновленных задач обратно в JSON-файл
        await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
        console.log('Задача успешно добавлена:', newTask);
    } catch (err) {
        console.error('Ошибка чтения или записи файла:', err);
    }
}

// Вызов функции для добавления задачи
addTask(taskToAdd);
