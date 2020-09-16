# Simple sample using WebXR 

This is a skeleton, based on some of the Babylon examples, of a small project that initializes WebXR.

# Development Environment

The sample has already been set up with a complete project for Typescript development.

To work with this sample and prepare your submission, you should have Node (and in particular, npm and npx) installed, which you can retrieve from [nodejs.org](http://nodejs.org).   

In addition to node, you should make sure a recent (e.g., version 3.9 or later) version of Typescript is installed, as described at [www.typescriptlang.org](http://www.typescriptlang.org).

Finally, we will use the node `npx` command to both build the project (with webpack) and run a local http webserver on your machine.  The ```package.json``` is set up to run this server 

## Running 

You set up the initial project by pulling the dependencies from npm with 
```
npm install
```

After that, you can compile and run a server with:
```
npm run start
```

You do not have to run ```tsc``` to build the .js files from the .ts files;  ```npx``` builds them on the fly as part of running webpack.

You can run the sample by pointing your web browser at ```https://localhost:8080/index.html```

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Material for 3D User Interfaces Fall 2020</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.blairmacintyre.me/3dui-class-f20" property="cc:attributionName" rel="cc:attributionURL">Blair MacIntyre</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

The intent of choosing (CC BY-NC-SA 4.0) is to allow individuals and instructors at non-profit entities to use this content.  This includes not-for-profit schools (K-12 and post-secondary). For-profit entities (or people creating courses for those sites) may not use this content without permission (this includes, but is not limited to, for-profit schools and universities and commercial education sites such as Corsera, Udacity, LinkedIn Learning, and other similar sites).   