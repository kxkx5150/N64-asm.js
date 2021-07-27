Module.fetchFile = function () {};
var request = indexedDB.deleteDatabase('/roms');
request.onsuccess = function(event){
  console.log('Clear Rom Database'); 
}
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
          resizeCanvas();
        }
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  });
  window.addEventListener(
    "resize",
    (e) => {
      resizeCanvas();
    },
    true
  );
})

const resizeCanvas = () => {
  setTimeout(() => {
    let canvas = document.getElementById("canvas");
    const wh = window.innerHeight;
    const ww = window.innerWidth;
    const nw = 640;
    const nh = 480;
    const waspct = ww / wh;
    const naspct = nw / nh;

    if (waspct > naspct) {
      var val = wh / nh;
    } else {
      var val = ww / nw;
    }
    let ctrldiv = document.querySelector(".ctrl_div");
    canvas.style.height = 480 * val - ctrldiv.offsetHeight - 18 + "px";
    canvas.style.width = 640 * val - 24 + "px";
  }, 1200);
};

