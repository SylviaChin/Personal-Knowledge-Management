var trueTypeId = 0;
var contentId = -1;

init();

function init() {
    initDb();
    //initType();
    //initModel();

}

function initDb() {
    if (!localStorage.trueType || !localStorage.contents) {
        var trueTypeJson = [{
            "id": 0,
            "name": "默认分类",
            "child": [0]
        }];
        var contentsJson = [{
            "id": -1,
            "name": "笔记使用介绍",
            "content": "这是一些说明介绍",
            "data": "2017-7-23",
            "pid": 0
        }];
        localStorage.trueType = JSON.stringify(trueTypeJson);
        localStorage.contents = JSON.stringify(contentsJson);
    }
}

/*
 *查询分类
 */
function queryTrueType() {
    return JSON.parse(localStorage.trueType);
}

function addTrueType(name) {
    if(!name) {
        alert('Name is Undefined!');
    } else {
        var trueTypeTemp = JSON.parse(localStorage.trueType);
        var newTrueType = {};
        newTrueType.id = trueTypeTemp[trueTypeTemp.length - 1].id + 1;
        newTrueType.name = name;
        newTrueType.child = [];
        trueTypeTemp.push(newTrueType);
        localStorage.trueType = JSOn.stringify(trueTypeTemp);

    }
}

function addContent(contenObj) {

}

function saveContent() {
    addClickEvent($(".save"), function() {
        console.log('save');
        console.log(currentTrueType);
        console.log(currentContent);

        var title = $('').val();
        var content = $('').val();
        var date = $('').val();
        if(title === '') {
            alert('The Title is Empty!');
        } else if(content === '') {
            alert('The content is Empty');
        } else if(date === '') {
            alert('The date is Empty');
        } else {
            var contentObj = {};
            contentObj.name = title;
            contentObj.date = date;
            contentObj.content = content;

            if(currentTrueType)
        }
    })
}
