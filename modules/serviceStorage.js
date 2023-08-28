const userName = prompt(`Пожалуйста, авторизируйтесь`);

let data = JSON.parse(localStorage.getItem(userName)) || [];

const taskNumberStorage = (name) => {
  return data.findIndex(el => el.task === name);
};

const setTableStorage = (contact) => {
  data = JSON.parse(localStorage.getItem(userName)) || [];
  data.push(contact);
  localStorage.setItem(userName, JSON.stringify(data));
};

const removeStorage = (name) => {
  for (let i = data.length; i--;) {
    if (data[i].task === name) {
      data.splice(i, 1);
    }
  }
  localStorage.setItem(userName, JSON.stringify(data));
};

const doneStorage = (task) => {
  for (let i = data.length; i--;) {
    if (data[i].task === task) {
      data[i].done = `Выполнена`;
      data[i].text = `text-decoration-line-through`;
      data[i].bg = `table-success`;
    }
  }
  localStorage.setItem(userName, JSON.stringify(data));
};

export default {
  data,
  setTableStorage,
  taskNumberStorage,
  removeStorage,
  doneStorage,
};
