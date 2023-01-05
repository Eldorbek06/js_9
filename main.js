// let arr = [
//     {
//         completed: false
//     },
//     {
//         completed: false
//     },
//     {
//         completed: false
//     },
//     {
//         completed: true
//     },
//     {
//         completed: false
//     },
//     {
//         completed: false
//     },
//     {
//         completed: false
//     },
//     {
//         completed: true
//     },
//     {
//         completed: false
//     },
//     {
//         completed: true
//     },
// ]

// let a = {
//     count: 0,
//     arr: []
// }

// let b = {
//     count: 0,
//     arr: []
// }

// arr.filter(item => {
//     if (item.completed === false) {
//         a.arr.push(item)
//     } else {
//         b.arr.push(item)
//     }

//     a.count = a.arr.length
//     b.count = b.arr.length
// })

// console.log(a);
// console.log(b);




// let users = [
//     {
//         email: "Sincere@april.biz"
//     },
//     {
//         email: "Shanna@melissa.tv"
//     },
//     {
//         email: "Nathan@yesenia.net"
//     },
//     {
//         email: "Julianne.OConner@kory.org"
//     },
//     {
//         email: "Lucio_Hettinger@annie.ca"
//     },
//     {
//         email: "Karley_Dach@jasper.info"
//     },
//     {
//         email: "Telly.Hoeger@billy.biz"
//     },
//     {
//         email: "Sherwood@rosamond.me"
//     },
//     {
//         email: "Chaim_McDermott@dana.io"
//     },
//     {
//         email: "Rey.Padberg@karina.biz"
//     }
// ]
// let emails = {
//     org: [],
//     net: [],
//     info: []
// }
// let other = []

// users.filter(item => {
//     let eMailEnding = item.email.slice(item.email.search('@'))

//     if(eMailEnding.includes('org')){
//         emails.org.push(item)
//     }
//     if(eMailEnding.includes('net')){
//         emails.net.push(item)
//     }
//     if(eMailEnding.includes('info')){
//         emails.info.push(item)
//     } else{
//         other.push(item)
//     }
// })

// console.log(other);
// console.log(emails);