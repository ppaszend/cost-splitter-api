const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());


const GroupType = {
    GROUP: 'group',
    FRIEND: 'friend'
}

const exampleParticipants = [
    { id: 0, name: 'Paweł Nowak' },
    { id: 1, name: 'Adam Kowalski' },
    { id: 2, name: 'Jan Brzechwa' },
]

app.get('/groups', (req, res) => {
    res.json({
        groups: [
            {
                id: 0,
                title: 'Karpacz Trip \'25',
                expenses: [
                    {
                        id: 0,
                        date: +(new Date('2025-04-21T00:00:00+0000')),
                        title: 'Airbnb',
                        paidBy: exampleParticipants[0],
                        total: 1149.99,
                        usedBy: exampleParticipants.map((participant) => ({ participant, amount: 383.33 })),
                        settlement: [],
                        currency: "PLN"
                    }
                ],
                participants: exampleParticipants,
                backgroundGradientColors: [
                    { red: 163/255, green: 115/255, blue: 219/255 },
                    { red: 107/255, green: 215/255, blue: 190/255 }
                ],
                type: GroupType.GROUP
            },
            {
                id: 1,
                title: 'Zakopane Trip \'25',
                expenses: [
                    {
                        id: 0,
                        date: +(new Date('2025-04-21T00:00:00+0000')),
                        title: 'Airbnb',
                        paidBy: exampleParticipants[0],
                        total: 1149.99,
                        usedBy: exampleParticipants.map((participant) => ({ participant, amount: 383.33 })),
                        settlement: [],
                        currency: "PLN"
                    }
                ],
                participants: exampleParticipants,
                backgroundGradientColors: [
                    { red: 163/255, green: 115/255, blue: 219/255 },
                    { red: 107/255, green: 215/255, blue: 190/255 }
                ],
                type: GroupType.GROUP
            },
            {
                id: 2,
                title: 'Trondheim Trip \'25',
                expenses: [
                    {
                        id: 0,
                        date: +(new Date('2025-04-21T00:00:00+0000')),
                        title: 'Airbnb',
                        paidBy: exampleParticipants[0],
                        total: 1149.99,
                        usedBy: exampleParticipants.map((participant) => ({ participant, amount: 383.33 })),
                        settlement: [],
                        currency: "PLN"
                    },
                    {
                        id: 1,
                        date: +(new Date('2025-04-21T00:00:00+0000')),
                        title: 'Flight tickets',
                        paidBy: exampleParticipants[0],
                        total: 900,
                        usedBy: exampleParticipants.map((participant) => ({ participant, amount: 300 })),
                        settlement: [],
                        currency: "PLN"
                    },
                    {
                        id: 2,
                        date: +(new Date('2025-04-21T00:00:00+0000')),
                        title: 'Pizza',
                        paidBy: exampleParticipants[0],
                        total: 200,
                        usedBy: [
                            { participant: exampleParticipants[0], amount: 120 },
                            { participant: exampleParticipants[1], amount: 80 },
                        ],
                        settlement: [],
                        currency: "PLN"
                    },
                ],
                participants: exampleParticipants,
                backgroundGradientColors: [
                    { red: 163/255, green: 115/255, blue: 219/255 },
                    { red: 107/255, green: 215/255, blue: 190/255 }
                ],
                type: GroupType.GROUP
            }
        ]
    })
})

app.get('/account', (req, res) => {
  res.json({
    id: 0,
    name: "Paweł Nowak",
    friends: exampleParticipants,
  })
})


const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
