const quotes = [
    {
        quote: "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다",
        author: "오손 웰스"
    },
    {
        quote: "이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라",
        author: "탈무드 "
    },
    {
        quote: "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다",
        author: "동아프리카속담"
    },
    {
        quote: "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다",
        author: "괴테 "
    },
    {
        quote: "진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다",
        author: "아인슈타인 "
    },    
    {
        quote: "행복한 삶을 살기위해 필요한 것은 거의 없다",
        author: "르쿠스 아우렐리우스 안토니우스"
    },
    {
        quote: "인생에서 원하는 것을 얻기 위한 첫 번째 단계는 내가 무엇을 원하는지 결정하는 것이다",
        author: "벤 스타인"
    },
    {
        quote: "지나간 일로 미래를 설계할 수는 없다",
        author: "애드먼드 버크"
    }  
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
