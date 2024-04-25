let games = [
    {id: '1', title: 'hello', platform: ['Switch']}, 
    {id: '2', title: 'hello2', platform: ['Switch']}, 
    {id: '3', title: 'hello3', platform: ['Switch', 'PS5']}, 
    {id: '4', title: 'hello4', platform: ['PS5', 'XBOX']}, 
    {id: '5', title: 'hello5', platform: ['PC', 'XBOX']}
]

let authors = [
    {id: '1', name:'AP', verified: true}, 
    {id: '2', name:'DP', verified: true}, 
    {id: '3', name:'CP', verified: false}
]

let reviews = [
    {id: '1', rating: 9, content:"good evening", author_id: '1', game_id: '2'},
    {id: '2', rating: 10, content:"good evening", author_id: '2', game_id: '1'},
    {id: '3', rating: 7, content:"good evening", author_id: '3', game_id: '3'},
    {id: '4', rating: 6, content:"good evening", author_id: '2', game_id: '4'},
    {id: '5', rating: 7, content:"good evening", author_id: '2', game_id: '5'},
    {id: '6', rating: 5, content:"good evening", author_id: '1', game_id: '2'},
    {id: '7', rating: 9, content:"good evening", author_id: '3', game_id: '1'}
]

export default {games, reviews, authors};