// Put your application scripts here
$(function(){
    var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers : true,
        mode : "ocaml"
    });
    $(".compile-btn").bind("click", function(){
        var code = editor.getValue();
        $(".status").removeClass("alert-error alert-success").text("compiling");
        $.post("/compile",
               { 'code' : code },
              function(response){
                  $(".result").text(response.output);
                  if(response.status == "ok") {
                      $(".status").addClass("alert-success").text("Build success");
                  }else{
                      $(".status").addClass("alert-error").text("Build error");
                  }
              },
              "json");
    });
});
