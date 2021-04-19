import { list } from './model'
import '../css/reset.css'
import '../css/index.css'

// 机型遍历渲染
function loadModel() {
    var listDom = '';
    var listSortDom = '';
    var sortIndex = 0;
    for (var a in list) {
        sortIndex++;
        var itemDom = '';
        for (var b in list[a].data) {
            var res = findObjKey('image', list[a].data[b]);
            res.path.unshift(b);
            res.path.unshift(a);
            var url = './static/devices-min/' + res.path.join('/') + '/' + res.target.image[0] + '.png';
            var position = res.target.position;
            itemDom += '<li data-path="' + res.path.toString() + '">' +
                '<div class="preview-box" ' + (res.target.width ? ('style="width: ' + res.target.width + 'px"') : (list[a].width ? ('style="width: ' + list[a].width + 'px"') : '')) + '>' +
                '<img class="preview-frame" src="' + (sortIndex === 1 ? url : '') + '" data-img="' + url + '" alt="" onload="window.setScreenArea(this, [' + position.toString() + '], [' + res.target.size.toString() + '])">' +
                '<div class="preview-location">' +
                '<div class="preview-img" ' + (res.target.radius ? ('style="border-radius: ' + res.target.radius + '"') : '') + '></div>' +
                '</div>' +
                '</div>' +
                '<p class="list-name">' + b + '</p>' +
                '</li>';
        };
        listDom += '<div class="list-box ' + (sortIndex === 1 ? '' : 'list-box-hide') + ' list-' + a + '">' +
            '<ul class="list">' + itemDom + '</ul>' +
            '</div>';
        listSortDom += '<li data-type="' + a + '"' + (sortIndex === 1 ? 'class="sort-selected"' : '') + '>' + list[a].name + '</li>';
    };
    listSortDom = '<ul class="sort-list">' + listSortDom + '</ul>';
    document.querySelector('.content').innerHTML = listSortDom + listDom;

    document.querySelector('.sort-list').onclick = function (e) {
        var target = e.target || e.srcElement;
        if (target.nodeName.toLowerCase() === 'li') {
            // 切换内容样式
            var listDomAll = document.querySelectorAll('.list-box');
            // 隐藏
            for (var i = 0; i < listDomAll.length; i++) {
                listDomAll[i].classList.add('list-box-hide');
            }
            var showEl = document.querySelector('.list-' + target.dataset.type);
            var showImgEl = showEl.querySelectorAll('.preview-frame');
            if (!showImgEl[0].getAttribute('src')) {
                for (var i = 0; i < showImgEl.length; i++) {
                    showImgEl[i].src = showImgEl[i].dataset.img;
                }
            }
            // 显示
            showEl.classList.remove('list-box-hide');
            // 切换分类样式
            var listSortDomAll = document.querySelectorAll('.sort-list>li');
            for (var i = 0; i < listSortDomAll.length; i++) {
                listSortDomAll[i].classList.remove('sort-selected');
            }
            target.classList.add('sort-selected');
        }
    };

    // 点击弹窗
    var listEls = document.querySelectorAll('.list>li');
    for (var i = 0; i < listEls.length; i++) {
        listEls[i].onclick = popup;
    };
}
loadModel();

// 模型图屏幕定位
window.setScreenArea = function (elFrame, position, size) {
    var elImg = elFrame.parentElement.querySelector('.preview-location').querySelector('.preview-img');
    var objFrame = {
        domWidth: elFrame.width,
        domHeight: elFrame.height,
    };
    elImg.style.left = Math.floor(position[0] / (size[0] / objFrame.domWidth)) - 1 + 'px';
    elImg.style.top = Math.floor(position[1] / (size[1] / objFrame.domHeight)) - 1 + 'px';
    elImg.style.width = Math.ceil((position[2] - position[0]) / (size[0] / objFrame.domWidth)) + 2 + 'px';
    elImg.style.height = Math.ceil((position[3] - position[1]) / (size[1] / objFrame.domHeight)) + 2 + 'px';
};


/* ------------------------------------ 弹窗变量 ------------------------------------ */


// 弹窗机型数据
var popupData = {};
// 设备图对象
var objFrame = {};
// 上传图对象
var objImg = { el: new Image() };
objImg.el.onload = function () {
    objImg.width = this.width;
    objImg.height = this.height;
};
var colorReg = new RegExp(/^#([a-fA-F\d]{6}|[a-fA-F\d]{3})$/);
var elImg = document.querySelector('.preview-img-popup');

// 设备图DOM
var elImgFrame = document.querySelector('.preview-frame-popup');
elImgFrame.onload = function () {
    // 获取dom宽高
    objFrame.domWidth = elImgFrame.width;
    objFrame.domHeight = elImgFrame.height;
    calcRotate(this);
    document.querySelector('.setting-box-cover').classList.add('setting-box-show');
    removeLoading();
};
elImgFrame.onerror = function () {
    removeLoading();
};
var selectElColor = document.getElementsByName('img-color')[0];

/* ------------------------------------ 事件 ------------------------------------ */

// 弹窗关闭
document.querySelector('.setting-close').onclick = function () {
    document.querySelector('.setting-box-cover').classList.remove('setting-box-show');
};

// 弹窗处理函数
function popup() {
    createLoading(this.querySelector('.preview-box'));
    var path = this.dataset.path.split(',');
    var obj = list;
    for (var i = 0; i < path.length; i++) {
        obj = i === 0 ? obj[path[i]].data : obj[path[i]];
    }
    obj.url = path.join('/');
    popupData = obj;

    // 弹窗标题
    document.querySelector('.setting-header>span').innerHTML = path[1];

    // 设备对象数据
    objFrame = { start: { x: popupData.position[0][0], y: popupData.position[0][1] }, end: { x: popupData.position[1][0], y: popupData.position[1][1] }, width: popupData.size[0], height: popupData.size[1] };

    // 加载模型图
    elImgFrame.src = './static/devices/' + popupData.url + '/' + popupData.image[0] + '.png';

    // 颜色DOM生成
    var colorDom = '';
    for (var i = 0; i < popupData.image.length; i++) {
        colorDom += '<option value="' + popupData.image[i] + '">' + popupData.image[i] + '</option>';
    }
    selectElColor.innerHTML = colorDom;
    elImgFrame.style.transform = 'rotate(0)';
    document.getElementsByName('img-rotate')[0].value = 0;
    elImg.style.borderRadius = popupData.radius || '0';
};

// 创建loading
function createLoading(el) {
    var loadingEl = document.createElement('div');
    loadingEl.classList.add('loading');
    loadingEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">' +
        '<circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(156.816 50 50)">' +
        '<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.6578947368421053s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>' +
        '</circle>' +
        '</svg>';
    el.appendChild(loadingEl);
};

// 移除所有loading
function removeLoading() {
    var loadingEl = document.querySelectorAll('.loading');
    for (var i = 0; i < loadingEl.length; i++) {
        if (isIE) {
            loadingEl[i].removeNode(true);
        } else {
            loadingEl[i].remove();
        }
    }
};

// 计算预览图层的大小和位置
function calcImg(obj) {
    var param = obj || objFrame;
    elImg.style.left = Math.floor(param.start.x / (param.width / param.domWidth)) + 'px';
    elImg.style.top = Math.floor(param.start.y / (param.height / param.domHeight)) + 'px';
    elImg.style.width = Math.ceil((param.end.x - param.start.x) / (param.width / param.domWidth)) + 1 + 'px';
    elImg.style.height = Math.ceil((param.end.y - param.start.y) / (param.height / param.domHeight)) + 1 + 'px';
};

// 计算旋转
function calcRotate(that) {
    var type = (that && that.constructor === HTMLSelectElement) ? that.value : document.getElementsByName('img-rotate')[0].value;
    if (type == 1 || type == 2) {
        elImgFrame.style.transform = type == 1 ? 'rotate(-90deg)' : 'rotate(90deg)';
        var center = [objFrame.width / 2, objFrame.height / 2];
        var origin = [center[0] - center[1], center[1] - center[0]];
        var obj = {
            start: type == 1 ? { x: origin[0] + objFrame.start.y, y: origin[1] + objFrame.width - objFrame.end.x } : { x: origin[0] + objFrame.height - objFrame.end.y, y: origin[1] + objFrame.start.x },
            end: type == 1 ? { x: origin[0] + objFrame.end.y, y: origin[1] + objFrame.width - objFrame.start.x } : { x: origin[0] + objFrame.height - objFrame.start.y, y: origin[1] + objFrame.end.x },
            width: popupData.size[1],
            height: popupData.size[0],
            domWidth: objFrame.domHeight,
            domHeight: objFrame.domWidth
        };
        calcImg(obj);
    }
    else {
        elImgFrame.style.transform = 'rotate(0)';
        calcImg();
    };
};

/* ------------------------------------ 上传事件 ------------------------------------ */

// 头部上传按钮点击事件
document.querySelector('.upload').onclick = function () {
    inputFile.click();
};

// 选择文件
var inputFile = document.querySelector('.choose-file');
inputFile.onchange = function () {
    if (inputFile.value) {
        var file = inputFile.files[0];
        var exportName = file.name.split('.')[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            var domList = document.querySelectorAll('.preview-img');
            for (var i = 0; i < domList.length; i++) {
                domList[i].style.backgroundImage = 'url(' + reader.result + ')';
                objImg.el.src = reader.result;
            };
        };
    };
};

// 弹窗上传按钮点击事件
document.querySelector('.choose-file-btn').onclick = function () {
    inputFilePop.click();
};

// 选择文件
var inputFilePop = document.querySelector('.choose-file-input');
inputFilePop.onchange = function () {
    if (inputFilePop.value) {
        var file = inputFilePop.files[0];
        var exportName = file.name.split('.')[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            elImg.style.backgroundImage = 'url(' + reader.result + ')';
            objImg.el.src = reader.result;
        };
    };
};

//  选择图片大小
var radio = document.getElementsByName('img-size');
for (var i = 0; i < radio.length; i++) {
    radio[i].onclick = function () {
        elImg.style.backgroundSize = this.dataset.val;
    };
};

//  选择图片旋转
document.getElementsByName('img-rotate')[0].onchange = calcRotate;

//  选择设备颜色
selectElColor.onchange = function () {
    elImgFrame.src = './static/devices/' + popupData.url + '/' + this.value + '.png';
};

//  选择图片X轴对齐
var radio = document.getElementsByName('img-position-x');
for (var i = 0; i < radio.length; i++) {
    radio[i].onclick = function () {
        elImg.style.backgroundPositionX = this.dataset.val;
    };
};

//  选择图片Y轴对齐
var radio = document.getElementsByName('img-position-y');
for (var i = 0; i < radio.length; i++) {
    radio[i].onclick = function () {
        elImg.style.backgroundPositionY = this.dataset.val;
    };
};

// 更改背景色
document.querySelector('.img-color-outer').oninput = function () {
    document.querySelector('.preview-box').style.backgroundColor = document.querySelector('.color-block-outer').style.backgroundColor = colorReg.test(this.value) ? this.value : 'transparent';
};

// 默认填充色
var elColorInner = document.querySelector('.img-color-inner');
elColorInner.value = document.querySelector('.color-block-inner').style.backgroundColor = elImg.style.backgroundColor = '#141D21';

// 更改填充色
elColorInner.oninput = function () {
    elImg.style.backgroundColor = document.querySelector('.color-block-inner').style.backgroundColor = colorReg.test(this.value) ? this.value : 'transparent';
};

// 宽度监听
var oldWidth = window.innerWidth;
window.onresize = function () {
    var neWidth = window.innerWidth;
    if ((oldWidth > 1024 && neWidth <= 1024) || (oldWidth <= 1024 && neWidth > 1024)) { loadModel(); oldWidth = neWidth };
};

/* ------------------------------------ 绘制下载图片 ------------------------------------ */

document.querySelector('.save').onclick = function () {
    objFrame.el = new Image();
    objFrame.el.src = elImgFrame.src;
    objFrame.el.onload = function () {
        var canvas = document.createElement('canvas');
        var exportName = 'export';
        var isRotate = document.getElementsByName('img-rotate')[0].value;

        // 设置画布宽高
        switch (isRotate) {
            case '0':
                canvas.width = objFrame.width + 80;
                canvas.height = objFrame.height + 80;
                break;
            case '1':
            case '2':
                canvas.width = objFrame.height + 80;
                canvas.height = objFrame.width + 80;
                break;
        }

        // 开始画图
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 背景色
        var colorOuter = document.querySelector('.img-color-outer').value;
        if (colorReg.test(colorOuter)) {
            ctx.fillStyle = colorOuter;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.stroke();
        }

        // 边距
        ctx.translate(40, 40);

        // 坐标参数
        var drawParams = objFrame;

        // 翻转后屏幕区域计算
        if (isRotate == 1) {
            drawParams = JSON.parse(JSON.stringify(objFrame));
            drawParams.start = { x: objFrame.start.y, y: objFrame.width - objFrame.end.x };
            drawParams.end = { x: objFrame.end.y, y: objFrame.width - objFrame.start.x };
        }
        else if (isRotate == 2) {
            drawParams = JSON.parse(JSON.stringify(objFrame));
            drawParams.start = { x: objFrame.height - objFrame.end.y, y: objFrame.start.x };
            drawParams.end = { x: objFrame.height - objFrame.start.y, y: objFrame.end.x };
        };
        var width = drawParams.end.x - drawParams.start.x;
        var height = drawParams.end.y - drawParams.start.y;

        // 填充色
        var colorInner = document.querySelector('.img-color-inner').value;
        if (colorReg.test(colorInner)) {
            ctx.fillStyle = colorInner;
            ctx.fillRect(drawParams.start.x, drawParams.start.y, width, height);
            ctx.stroke();
        };

        // 用户上传图
        switch (getRadioValue('img-size')) {

            // 宽100%
            case '100% auto':
                // 计算绘制高度
                var drawHeight = (objImg.width / width) * height;
                // 对齐
                var offset = { 'center': objImg.height / 2 - drawHeight / 2, 'bottom': objImg.height - drawHeight }[getRadioValue('img-position-y')] || 0;
                ctx.drawImage(objImg.el, 0, offset, objImg.width, drawHeight, drawParams.start.x, drawParams.start.y, width, height);
                break;

            // 高100%
            case 'auto 100%':
                // 计算绘制宽度
                var drawWidth = (objImg.height / height) * width;
                // 对齐
                var offset = { 'center': objImg.width / 2 - drawWidth / 2, 'right': objImg.width - drawWidth }[getRadioValue('img-position-x')] || 0;
                ctx.drawImage(objImg.el, offset, 0, drawWidth, objImg.height, drawParams.start.x, drawParams.start.y, width, height);
                break;

            // 宽高100%
            case '100% 100%':
                ctx.drawImage(objImg.el, 0, 0, objImg.width, objImg.height, drawParams.start.x, drawParams.start.y, width, height);
                break;

            // 原大小
            default:
                // 判断图片大于屏幕
                var isOverWidth = objImg.width > width;
                var isOverHeight = objImg.height > height;
                // 计算最终画图宽高度
                var drawWidth = isOverWidth ? width : objImg.width;
                var drawHeight = isOverHeight ? height : objImg.height;
                // 横竖轴对齐 [图片开始裁剪位置, 图片放置xy起始点]
                var offsetX = {
                    'center': isOverWidth ? [objImg.width / 2 - drawWidth / 2, 0] : [0, width / 2 - drawWidth / 2],
                    'right': isOverWidth ? [objImg.width - drawWidth, 0] : [0, width - drawWidth]
                }[getRadioValue('img-position-x')] || [0, 0];
                var offsetY = {
                    'center': isOverHeight ? [objImg.height / 2 - drawHeight / 2, 0] : [0, height / 2 - drawHeight / 2],
                    'bottom': isOverHeight ? [objImg.height - drawHeight, 0] : [0, height - drawHeight]
                }[getRadioValue('img-position-y')] || [0, 0];
                // 配置对象
                var set = {
                    img: objImg.el,

                    sx: offsetX[0],
                    sy: offsetY[0],
                    swidth: drawWidth,
                    sheight: drawHeight,

                    x: offsetX[1] + drawParams.start.x,
                    y: offsetY[1] + drawParams.start.y,
                    width: drawWidth,
                    height: drawHeight
                };
                ctx.drawImage(set.img, set.sx, set.sy, set.swidth, set.sheight, set.x, set.y, set.width, set.height);
                break;
        }


        // 翻转绘制设备图
        switch (isRotate) {
            case '1':
                ctx.translate(0, canvas.height - 80);
                ctx.rotate(-90 * Math.PI / 180);
                break;
            case '2':
                ctx.translate(canvas.width - 80, 0);
                ctx.rotate(90 * Math.PI / 180);
                break;
        }
        ctx.drawImage(objFrame.el, 0, 0);

        var img = canvas.toDataURL();
        // 设置下载用的a标签
        var link = document.createElement('a');
        link.href = img;
        link.setAttribute('download', exportName + '.png');
        link.click();

        // document.body.append(canvas);
    }

};


/* ------------------------------------ 辅助函数 ------------------------------------ */

// 获取单选框的值
function getRadioValue(name) {
    var el = document.getElementsByName(name);
    for (var i = 0; i < el.length; i++) {
        if (el[i].checked) return el[i].dataset.val;
    };
    return '';
};


// 寻找嵌套对象中的某个对象
function findObjKey(key, obj, path) {
    if (!path) path = [];
    for (var i in obj) {
        if (i == key) {
            return { target: obj, path: path };
        }
        else if (obj[i].constructor === Object) {
            path.push(i);
            return findObjKey(key, obj[i], path);
        };
    };
};

// IE
var isIE = (function () {
    return (!!window.ActiveXobject || "ActiveXObject" in window) || (/Trident\/7\./).test(navigator.userAgent);
})()

// 统计代码
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?d0252ded9c06de49e49681a659808653";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();