

$("#button").on("click", function () {
    let escape = $("#textarea").val()
    .replace(/[\\]/g, '\\\\')
    .replace(/[\/]/g, '\\/')
    .replace(/[\b]/g, '\\b')
    .replace(/[\f]/g, '\\f')
    .replace(/[\n]/g, '\\n')
    .replace(/[\r]/g, '\\r')
    .replace(/[\t]/g, '\\t')
    .replace(/[\"]/g, '\\"')
    .replace(/\\'/g, "\\'"); 
    $("#textarea2").val(escape)
})




$("#button2").on("click", function () {
    const unescape = $("#textarea").val()
    .replace(/\\\\/g, '[\\]')
    .replace(/\\/g, '[\/]')
    .replace(/\\b/g, '[\b]')
    .replace(/\\f/g, '[\f]')
    .replace(/\\n/g, '[\n]')
    .replace(/\\r/g, '[\r]')
    .replace(/\\t/g, '[\t]')
    .replace(/\\"/g, '[\"]')
    .replace(/\\'/g, "\\'"); 
    $("#textarea2").val(unescape)
})



