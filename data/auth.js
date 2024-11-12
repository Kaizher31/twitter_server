let users = [
    {
        id: '1',
        username: 'apple',
        password: '1111',
        name: '김사과',
        email: 'apple@apple.com',
        url: 'https://developer.apple.com/wwdc24/images/motion/axiju/endframe-small_2x.jpg'
    },
    {
        id: '2',
        username: 'banana',
        password: '2222',
        name: '반하나',
        email: 'banana@banana.com',
        url: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/6372/202ebeef-6657-44ec-8fff-28352e1f5999.jpg'
    },
    {
        id: '3',
        username: 'orange',
        password: '3',
        name: '오렌지',
        email: 'orange@orange.com',
        url: 'https://developer.apple.com/wwdc24/images/motion/axiju/endframe-small_2x.jpg'
    }
]

// sign up
export async function createUser(username, password, name, email) {
    const user= {
        id: '4',
        username: username,
        name: name,
        password: password,
        email: email,
        url: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/6372/202ebeef-6657-44ec-8fff-28352e1f5999.jpg'
    }
    users = [user, ...users]
    return user
}

// login
export async function login(username) {
    const user = users.find((user) => user.username === username)
    return user
}