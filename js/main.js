var trueTypeId = 0;
var contentId = -1;

init();

function init() {
    initDb();
    initType();
    initModel();
}

function initDb() {
    if (!localStorage.trueType || !localStorage.contents) {
        var trueTypeJson = [{
            "id": 0,
            "name": "默认分类",
            "pid": 0
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
