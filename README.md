#N64-asm.js

git clone --recursive https://github.com/johnoneil/mupen64plus-web.git

node 14.17.3  
Python 2.7.18  
emscripten-1.36.13  

<br><br><br>

emsdk list --old  
emsdk install fastcomp-clang-e1.36.13-64bit  
emsdk activate fastcomp-clang-e1.36.13-64bit  

emsdk install emscripten-1.36.13  
emsdk activate emscripten-1.36.13  

make config=release  


<br><br><br><br><br><br>

 https://github.com/johnoneil/mupen64plus-web.git