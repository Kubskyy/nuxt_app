export default defineEventHandler((event) => {
    return {
      users: [
        {id:1, name:"Lindsay", surname:"Matt",  title:"Front-end Dev", email:"email@email.com", role:"member"},
        {id:2, name:"Matt", surname:"Kidney", title:"Back-end Dev", email:"email@email.com", role:"member"},
        {id:3, name:"Adam", surname:"Sandler",  title:"Front-end Dev", email:"email@email.com", role:"member"}]
    }
  })