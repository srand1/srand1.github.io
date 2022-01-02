var config = (function(){


    var row = 10;
    var col = 6;
    var objectCount = 15;
    var repeatCount = row * col / objectCount;

    var time = 150;

    var imgUrl = "./img/";
    var imgExtension = ".jpg";
    var imgByName = function (name) {
        var src = imgUrl + name + imgExtension;
        return `<img draggable="false" src="${src}"></img>`;
    }

    var itemDirectionHTML = ` <div class="grid-item-direction">
                                    <div class="y up"></div>
                                    <div class="y down"></div>
                                    <div class="x left"></div>
                                    <div class="x right"></div>
                              </div>`;

    return {
        row : row,
        col : col,
        objectCount : objectCount,
        repeatCount: repeatCount, 
        imgByName : imgByName,
        itemDirectionHTML: itemDirectionHTML,
        time : time,
    }

})();
