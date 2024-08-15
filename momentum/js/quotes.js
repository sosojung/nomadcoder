const quotes = [
    {
        quote: "열심히 공부 안하면 더울 때 더운데서 일하고 추울 때 추운데서 일한다.",
        author: "박명수",
    },
    {
        quote: "늦었다고 생각할 때는 이미 늦었다. 당장 시작해라.",
        author: "박명수",
    },
    {
        quote: "날을 잡아라. 그날을 철저히 즐겨라. 그 날이 오는 대로. 사람들을 만나게 되는 대로. 나는 과거가 있기에 현재에 감사할 수 있다 생각한다. 공연히 미래를 걱정해서 현재를 조금이라도 망치고 싶지 않다.",
        author: "오드리 햅번",
    },
    {
        quote: "행복은 우리 자신에게 달려있다. ",
        author: "아리스토텔레스",
    },
    {
        quote: "모든 사람은 경탄할만한 잠재력을 가지고 있다. 자신의 힘과 젊음을 믿어라. ‘모든 것이 내가 하기 나름이다’고 끊임없이 자신에게 말하는 법을 배우라.",
        author: "앙드레 지드",
    },
    {
        quote: "가지고 있는 어떤 재주든 사용하라. 노래를 가장 잘하는 새들만 지저귀면 숲은 너무도 적막할 것이다.",
        author: "헨리 반 다이크",
    },
    {
        quote: "스스로를 존경하면 다른 사람도 당신을 존경할 것이다.",
        author: "공자",
    },
    {
        quote: "만족은 결과가 아니라 과정에서 온다.",
        author: "제임스 딘",
    },
    {
        quote: "쉬운 일을 어려운 일처럼, 어려운 일을 쉬운 일처럼 대하라. 전자는 자신감이 잠들지 않게, 후자는 자신감을 잃지 않기 위함이다.",
        author: "발타사르 그라시안",
    },
    {
        quote: "당신이 어떤 일을 해낼 수 있는지 누군가가 물어보면 대답해라. ‘물론이죠!’ 그 다음 어떻게 그 일을 해낼 수 있을지 부지런히 고민하라. ",
        author: "시어도어 루스벨트",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author= document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;