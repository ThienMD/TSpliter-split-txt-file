/**
 * Created by thienmd on 5/4/19
 */

const {ipcRenderer} = require('electron')
const toastr = require('toastr')
const {dialog} = require('electron').remote;
const fs = require('fs');

let dir;
let file;
let numOfLine = 3000;

const dialogOptions = {
    defaultPath: "c:/",
    filters: [
        {name: "Text", extensions: ["txt"]}
    ],
    properties: ["openFile"]
};

const dialogFolderOptions = {
    defaultPath: "c:/",
    properties: ["openDirectory"]
};

//delte todo by its text value
const deleteTodo = (e) => {
    ipcRenderer.send('delete-todo', e.target.textContent)
}

document.getElementById('btChooseFile').addEventListener('click', () => {
    dialog.showOpenDialog(dialogOptions, files => {
        if (files !== undefined) {
            console.log(files);
            file = files[0]
            const tfFile = document.getElementById('tfFile')
            tfFile.value = file
        }
    });
})

document.getElementById('btChooseFolder').addEventListener('click', () => {
    dir = dialog.showOpenDialog(dialogFolderOptions)
    const tfFolder = document.getElementById('tfFolder')
    tfFolder.value = dir
})

document.getElementById('btSplit').addEventListener('click', () => {
    var loading = document.getElementById("loading");

    numOfLineText = document.getElementById('tfNumberOfLine').value
    numOfLine = parseInt(numOfLineText, 10)
    if(!numOfLine) {
        toastr.error('Vui lòng nhập số dòng')
        return
    }
    if (!file || !dir) {
        toastr.error('Vui lòng chọn file và thư mục trước.')
        return
    }
    loading.style.display = "flex";
    fs.readFile(file, function (err, buf) {
        const data = buf.toString()
        //save file
        const dataArr = data.split("\n")
        var text = ''
        let numFile = 0
        for (var i = 0; i < dataArr.length; i++) {
            text += dataArr[i] + "\n"
            if ((i % numOfLine === 0 && i > 0) || i === dataArr.length - 1) {
                numFile++
                fs.writeFile(`${dir}/file_${numFile}.txt`, text, (err) => {
                    if (err) console.log(err);
                });
                text = ""
            }
            if(i === dataArr.length -1 ) {
                toastr.success('Chia file thành công')
                loading.style.display = "none";
            }
        }
    });

})

ipcRenderer.on('todos', (event, todos) => {
    // get the todoList ul
    // const todoList = document.getElementById('todoList')
    //
    // // create html string
    // const todoItems = todos.reduce((html, todo) => {
    //     html += `<li class="todo-item">${todo}</li>`
    //
    //     return html
    // }, '')
    //
    // // set list html to the todo items
    // todoList.innerHTML = todoItems
    //
    // // add click handlers to delete the clicked todo
    // todoList.querySelectorAll('.todo-item').forEach(item => {
    //     item.addEventListener('click', deleteTodo)
    // })
})
