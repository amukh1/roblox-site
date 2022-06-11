console.log(decodeURI(window.location.href.split("#")[1]))
// send fetch request and log result
let json = decodeURI(window.location.href.split("#")[1]);

let obj = JSON.parse(json);

console.log(obj)

document.getElementById('nam').innerHTML = `Name: ${obj.username} (#${obj.discriminator})`;
document.getElementById('email').innerHTML = `Email: ${obj.email}`;

document.getElementById('hire').addEventListener('click', () => {
console.log('hire')
// send a message using a discord webhook
fetch('https://discord.com/api/webhooks/985303600974680146/85oF6nP5uWvqiBvgvMX4LXe3yXUE7BCkbqf-jFoqkOP3NNemo6nd8UJBfDgHhO0KT82p', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "username": "New Job Request!",
        "content": `${obj.username} (#${obj.discriminator}) has sent a job. Message: ${document.getElementById('mes').value}`,
        // set the avatar to the user's avatar
        "avatar_url": `https://cdn.discordapp.com/avatars/${obj.id}/${obj.avatar}.png`
    })
}).then(res => res.json())
.then(json => console.log(json))
.catch(err => console.log(err))


fetch('https://discord.com/api/webhooks/985303600974680146/85oF6nP5uWvqiBvgvMX4LXe3yXUE7BCkbqf-jFoqkOP3NNemo6nd8UJBfDgHhO0KT82p', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "username": "New Job Request!",
        "content": `Email: ${obj.email}`,
        // set the avatar to the user's avatar
        "avatar_url": `https://cdn.discordapp.com/avatars/${obj.id}/${obj.avatar}.png`
    })
}).then(res => res.json())
.then(json => console.log(json))
.catch(err => console.log(err))

})

