const questionsDisplay = document.querySelector("#questions")
const answersDisplay = document.querySelector("#answers")

const questions = [
    {
        id: 0,
        text: 'Pick a vacation destination:',
        answers: [
            {
                text: 'New York',
                // image: 'https://unsplash.com/photos/UExx0KnnkjY',
                image: 'https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=997&q=80',
                alt: 'Photo of the Empire State',
                credit: 'Colton Duke'
            },
            {
                text: 'Los Angeles',
                image: 'https://images.unsplash.com/photo-1597982087634-9884f03198ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80',
                alt: 'Photo of Los Angeles',
                credit: 'Venti Views'
            },
            {
                text: 'Miami',
                image: 'https://images.unsplash.com/photo-1589083130544-0d6a2926e519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                alt: 'Photo of Miami Beaches',
                credit: 'Antonio Cuellar'
            },
            {
                text: 'Santa Monica',
                image: 'https://images.unsplash.com/photo-1498196645145-687fd3bfe912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                alt: 'Photo of Santa Monica Beach',
                credit: 'Scott Trento'
            },
        ]
    },
    {
        id: 1,
        text: 'Pick some food:',
        answers: [
            {
                text: 'Pizza',
                image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
                alt: 'Photo of a Juicy Pizza',
                credit: 'Pablo Pacheco'
            },
            {
                text: 'Hamburguer',
                image: 'https://images.unsplash.com/photo-1565060299509-453c4f3bc905?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
                alt: 'Photo of a Hamburguer',
                credit: 'Leo Roza'
            },
            {
                text: 'Hotdog',
                image: 'https://images.unsplash.com/photo-1537790698196-aad88bf9bb27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80',
                alt: 'Photo of a Hotdog',
                credit: 'Victoria Shes'
            },
            {
                text: 'Fried Chicken',
                image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                alt: 'Photo of a Fried Chicken',
                credit: 'Lucas Andrate'
            },
        ]
    },
]