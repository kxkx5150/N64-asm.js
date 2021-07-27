Module.fetchFile = function () {};
window.addEventListener("load",function(){
  document.getElementById("file_input").addEventListener("change", function (e) {
    let url = URL.createObjectURL(e.target.files[0]);
    let path = "/roms";
    let filename = "m64p_test_rom.v64";

    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("test/pain; charset=x-user-defined");
    xhr.onreadystatechange = function (e) {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          FS.createDataFile(path, filename, xhr.response, true, true);
          var startCore = Module.cwrap("startEmulator", "number", ["number"]);
          startCore(0);
        }
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  });
})

