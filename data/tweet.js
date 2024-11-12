let tweets = [
    {
        id: '1',
        name: '설윤',
        username: 'NMixx',
        text: '안녕하세요',
        createdAt: Date.now().toString(),
        url: 'https://sungyesa.com/new/data/file/free/2950632301_YpCvzx1S_23ffsdsdfsdfsdf.jpg'
    },
    {
        id: '2',
        name: '카리나',
        username: 'Karina',
        text: 'Hello 트윗 여러분',
        createdAt: Date.now().toString(),
        url: 'https://i.namu.wiki/i/pKp6bM6ovVkqzTlwj5lkWjCfyLCITAU3bP5chwJc7TcsgEh9dJxNGbAUfnTTlFsjAzmIG586bMk56Oa5OgHEZw.webp'
    },
    {
        id: '3',
        name: '장원영',
        username: 'IVE',
        text: '첫 트윗',
        createdAt: Date.now().toString(),
        url: 'https://www.cosinkorea.com/data/photos/20240414/art_17120529936565_2a8f34.jpg'
    },
    {
        id: '4',
        name: '미연',
        username: 'I-DLE',
        text: '회사 차리자',
        createdAt: Date.now().toString(),
        url: 'https://pimg.mk.co.kr/news/cms/202411/08/news-p.v1.20241108.2222bad919ff477a9691265e943ce110_P1.png'
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