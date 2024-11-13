let users = [
    {
        id: '1',
        username: 'apple',
        password: '$2b$10$ZP1P3pI52NOdxPcA5BbT4.xGIxlMqFb5FxBncQdN4iTt1tfkPuQS2',
        name: '김사과',
        email: 'apple@apple.com',
        url: 'https://developer.apple.com/wwdc24/images/motion/axiju/endframe-small_2x.jpg'
    },
    {
        id: '2',
        username: 'banana',
        password: '$2b$10$DU4URCVrGw..8m7m0xqMEetCUHuRik6memXdctDiX0V8684llwzn2',
        name: '반하나',
        email: 'banana@banana.com',
        url: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/6372/202ebeef-6657-44ec-8fff-28352e1f5999.jpg'
    },
    {
        id: '3',
        username: 'orange',
        password: '$2b$10$5j9e8ouQpYmWTP7ijIrAPuPIs8J2/kIoTGtB72EAdI2s9pMQE3aje',
        name: '오렌지',
        email: 'orange@orange.com',
        url: 'https://developer.apple.com/wwdc24/images/motion/axiju/endframe-small_2x.jpg'
    }
]

// sign up
export async function createUser(username, password, name, email) {
    const user= {
        id: '4',
        username,
        name,
        password,
        email,
        url: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/6372/202ebeef-6657-44ec-8fff-28352e1f5999.jpg'
    }
    users = [user, ...users]
    return user
}

// login
export async function findByUsername(username) {
    const user = users.find((user) => user.username === username)
    return user
}

export async function findById(id) {
    return users.find((user) => user.id === id)
}