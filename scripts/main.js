
const list = document.getElementById('students');
students.forEach((student) => {
    const listItem = document.createElement('div');
    listItem.innerHTML = `<a href="${student.github}" target="_blank">${student.name}</a>`;
    list.appendChild(listItem);
});