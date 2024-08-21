import fs from 'fs/promises';
import path from 'path';

const filePath = path.resolve(new URL(import.meta.url).pathname, '../../data/tasks.json');

//Сюда вписать новую задачу для файла tasks.json
const taskToAdd = {
    task_name: "",
    task_theme: "",
    task: "",
    example: "",
    funcName: "",
    solution: {
        base: "",
        es6: ""
    }
};

async function addTask(task) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        let tasks = [];
        try {
            tasks = JSON.parse(data);
        } catch (err) {
            console.error('Ошибка парсинга JSON:', err);
        }
        
        const newTask = { id: Date.now(), ...task };
        tasks.push(newTask);
        
        await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
        console.log('Задача успешно добавлена:', newTask);
    } catch (err) {
        console.error('Ошибка чтения или записи файла:', err);
    }
}

addTask(taskToAdd);
//Чтобы запустить скрипт, нужно в терминале в папке Services запустить команду node addTask.js
