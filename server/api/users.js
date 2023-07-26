export default defineEventHandler((event) => {
    return {
      users: [
        {id:1, name:"Lindsay Matt", title:"Front-end Dev", email:"email@email.com", role:"member"},
        {id:2, name:"Matt Kidney", title:"Back-end Dev", email:"email@email.com", role:"member"},
        {id:3, name:"Adam Sandler", title:"Front-end Dev", email:"email@email.com", role:"member"}]
    }
  })