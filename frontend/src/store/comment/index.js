export const comment = {
    state() {
        return {
            user: [
                {
                    id: 1,
                    name: 'Sam',
                    content: '微風吹拂過臉頰，大自然带给我們寧靜和平和的感受',
                    like: '23',
                    time: '11',
                    Comment: [
                        {
                            id:3,
                            name: 'Alice',
                            content: '👍🏼👍🏼👍🏼',
                        },
                        {
                            id:5,
                            name: 'David',
                            content: 'good',
                        }

                    ],
                    star: '6',
                },
                {
                    id: 2,
                    name: 'John',
                    content: '藍天白雲下，大自然展現著它的神奇魅力，讓人心曠神怡',
                    like: '10',
                    time: '8',
                    Comment: [{
                        id: 3,
                        name: 'Alice',
                        content: '❤️超美的啦!!',
                    }]
                    ,
                    star: '3',
                },
                {
                    id: 3,
                    name: 'Alice',
                    content: '站在海岸的岩石上，俯瞰著壯麗的風景，大自然的壯觀景色令人驚嘆不已',
                    like: '5',
                    time: '4',
                    Comment: [{
                        id: 1,
                        name: 'Sam',
                        content: '好好享受大自然~~😊',
                    }],
                    star: '2',
                },
                {
                    id: 4,
                    name: 'Sarah',
                    content: '漫步在郊野的小徑上，呼吸著新鲜空氣，感受大自然的恩賜',
                    like: '50',
                    time: '9',
                    Comment: [
                        {
                        id:5,
                        name: 'David',
                        content: 'I love it!',
                    },
                    {   
                        id:5,
                        name: 'David',
                        content: 'good',
                    }, 
                    {   
                        id:3,
                        name: 'Alice',
                        content: 'Nice😍',
                    }
                ],
                    star: '8',
                },
                {
                    id: 5,
                    name: 'David',
                    content: '在海邊，我找到了平静與放鬆，遠離了喧囂與壓力。海洋的浩瀚與寬闊讓我感受到生命的無限可能，也讓我更加珍惜眼前的一切。',
                    like: '15',
                    time: '6',
                    Comment: [{
                        id:6,
                        name: 'Emmaa',
                        content: '😍😍😍',
                    }],
                    star: '4',
                },
                {
                    id: 6,
                    name: 'Emma',
                    content: '聽著鳥兒的歌唱，感受著陽光的溫暖，大自然的聲音和光芒给予我们無盡的能量和喜悅',
                    like: '2',
                    time: '22',
                    Comment: [{
                        id:3,
                        name: 'Alice',
                        content: '有機會一起去!!',
                    },
                    {
                        id:1,
                        name: 'Sam',
                        content: 'GOOD!!',
                    }],
                    star: '1',
                }
            ],
        };
    },
    mutations: {
        // 新增評論
        createComment(){
            alert('okkkk')
        }


    },
    actions: {},
};