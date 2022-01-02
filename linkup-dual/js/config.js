var config = (function(){


    var row = 8;
    var col = 6;
    var objectCount = 48;
    var repeatCount = row * col / objectCount;

    var time = 300;

    var imgIDs = [
        20100, 10242, 20003, 10113, 20006, 10118,
        20007, 10236, 20116, 10230, 20010, 10238,
        20073, 10232, 20013, 10130, 20019, 10094,
        20101, 10233, 20024, 10235, 20025, 10243,
        20028, 10246, 20034, 10229, 20087, 10231,
        20035, 10239, 20039, 10241, 20099, 10234,
        20044, 10228, 20056, 10240, 20080, 10245,
        20046, 10237, 20051, 10244, 20055, 10247,
    ];
    var imgUrl = "./img/zp_";
    var imgExtension = ".jpg";
    var imgByName = function (name) {
        var src = imgUrl + imgIDs[name] + imgExtension;
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
