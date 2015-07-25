var currentTypeId = 0; //当前笔记本ID
var currentContentId = -1; //当前内容ID

init();

function init() {
    initDb();
    showType();
    //initType();
    //initModel();

}

/*
 * 初始化本地储存的内容
 */
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
 * 进入页面的时候展示Type
 */
function showType() {
    var type = JSON.parse(localStorage.trueType);
    for (var i = 0; i < type.length; i++) {
        var typeName = type[i].name;
        var liTmp = '<li>' + typeName + '</li>';
        $(".trueType>ul").append(liTmp);
    }

}



/*
 * 点击增加分类
 */
function clickAddType() {
    console.log('I am click AddType');
    $(".trueType>ul").append('<li><input type="text" /></li>');
    $(".addType").css("display", "none");
    $(".saveType").css("display", "block");
}

/*
 * 保存分类
 */
function clickSaveType() {
    console.log('I am save Type');
    var name = $(".trueType>ul>li>input[type='text']").val();
    addType(name);
}

function addType(name) {
    if (!name) {
        alert('Name is Undefined!');
    } else {
        var trueTypeTemp = JSON.parse(localStorage.trueType);
        var newTrueType = {};
        newTrueType.id = trueTypeTemp[trueTypeTemp.length - 1].id + 1; //最后一个的ID + 1
        newTrueType.name = name;
        newTrueType.child = [];
        trueTypeTemp.push(newTrueType);
        localStorage.trueType = JSON.stringify(trueTypeTemp);
    }
    //更新Type
    var newType = '<li>' + name + '</li>';
    $(".trueType>ul>li>input[type='text']").css('display', 'none');
    $(".addType").css("display", "block");
    $(".saveType").css("display", "none");
    $(".trueType>ul").append(newType);
}

/*
 * 新建笔记内容
 */
function clickNewNote() {
    $(".contentTitleFont").html('<input type="text" />');
    $(".contentTrue").html('<textarea name="" id=""></textarea>');
    $('.saveContent').css("display", "block");
    $('.deleteContent').css("display", "block");
}

/*
 * 保存笔记内容
 */
function clickSaveContent() {
    var title = $(".contentTitleFont input").val();
    var content = $(".contentTrue textarea").val();
    saveContent(title, content);
}

function saveContent(title, content) {
    console.log('save');
    if (title === '') {
        alert('The Title is Empty!');
    } else if (content === '') {
        alert('The content is Empty');
    } else {
        var newContent = {};
        var conentTmp = JSON.parse(localStorage.contents);
        newContent.id = conentTmp[conentTmp.length -1].id + 1;
        newContent.name = title;
        newContent.content = content;
        newContent.pid = 0;
        conentTmp.push(newContent);
        localStorage.contents = JSON.stringify(conentTmp);
    }

}
