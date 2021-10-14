let sv = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
let index = -1;
// 用jQuery写的
$(function () {
   
    $(document).click(function (event) {
        let x = event.pageX;
        let y = event.pageY;
        index++;
        reaIdx = index % 12;
        let newSpan = $("<span/>").text(sv[reaIdx]);
        $("body").append(newSpan);
        newSpan.css({
            "z-index": 99999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-size": "16px",
            "font-weight": "bold",
            "color": "#13710B"

        })
        newSpan.animate({
            "top": y - 120,
            "left": x,
        }, 1500, function () {
            $(this).remove();
        })
    })
});
