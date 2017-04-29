# node-react-webpack-docker-starterkit

A simple Nodejs and React started kit that can be used to bootstrap your new React application easily.

### Features and Modules
1. React
2. Webpack2
3. Babel
4. Docker file
5. pm2
6. Enzyme
7. Chai
8. React Semantic-UI
9. Pug Template engine
10. Node 6

### Upcoming Fetaures
1. Session management using Redis
2. Asynchronous Logging mechanism
3. React state management using Redux
4. Yarn support
5. npm Shrinkwrap and yarn lock
6. Single Docker Compose
7. Webpack production configurations

***
#### Usage

##### 1. Run the application locally

Clone the repository and the run 

```
npm install
```

and then the run the application

```
npm start
```

##### 2. Build and Run as a docker container

```
docker build -t <some_name> .
```

```
docker run -p 9400:9400 -d <image_id>
```

***

### License - MIT License

Copyright 2017 sundarsy

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
