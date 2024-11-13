let tweets = [
    {
        id: '1',
        userId: '1',
        text: '안녕하세요',
        createdAt: Date.now().toString()
    },
    {
        id: '2',
        userId: '2',
        text: 'Hello 트윗 여러분',
        createdAt: Date.now().toString()
    },
    {
        id: '3',
        userId: '1',
        text: '첫 트윗',
        createdAt: Date.now().toString()
    },
    {
        id: '4',
        userId: '4',
        text: '회사 차리자',
        createdAt: Date.now().toString()
    }
]

// 모든 트윗을 리턴
export async function getAll() {
    return tweets
}


// 아이디에 대한 트윗을 리턴
export async function getAllByUsername(username) {
    return tweets.filter((tweet) => tweet.username == username)
}


// 글 번호에 대한 트윗을 리턴
export async function getById(id) {
    return tweets.find((tweet) => tweet.id === id)
}

// 트윗을 작성
export async function create(username, name, text) {
    const now = new Date();  

    const formattedDate = now.getFullYear() + '-' +
        String(now.getMonth() + 1).padStart(2, '0') + '-' +  
        String(now.getDate()).padStart(2, '0') + ' ' +     
        String(now.getHours()).padStart(2, '0') + ':' +    
        String(now.getMinutes()).padStart(2, '0') + ':' +  
        String(now.getSeconds()).padStart(2, '0');         

    const tweet = {
        id: '5',
        username: username,
        name: name,
        text: text,
        createdAt: formattedDate  
    }
    // const tweet = {
    //     id:'5',
    //     username: username,
    //     name: name,
    //     text: text,
    //     createdAt: Date.now().toString()
    // }
    tweets = [tweet, ...tweets]
    return tweet
}

// 트윗을 변경
export async function update(id, text) {
    const tweet = tweets.find((tweet) => tweet.id === id)
    if(tweet){
        tweet.text = text
    }
    return tweet
}

// 트윗을 삭제
export async function remove(id) {
    tweets = tweets.filter((tweet) => tweet.id !== id)
}