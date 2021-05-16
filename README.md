source code: https://github.com/andrewjmead/node-course-v3-code

# Section 3: Node.js Module System

```
# initialized npm inside the project
npm init

npm init -y
```

# Section 6: HTTP

- https://weatherstack.com/quickstart

```
request( {url: url}, (error, response) => {
    console.log(response)
    const data = JSON.parse(response.body)
    console.log(data.current)
})
```
