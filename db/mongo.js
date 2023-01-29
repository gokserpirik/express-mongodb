const User = require('./User');



async function createUser({nameof, completed, age, hobbies, password, balance}){
   /* const user = await User.create({name: nameof, completed: completed, age: age}); */
   try{
    const user = new User({
        name: nameof,
        completed: completed,
        age: age,
        hobbies: hobbies,
        adress: {
            street: '123 Main St',
            city: 'New York'
        },
        password: password,
        balance: balance

    });
    const result = await user.save();

   } catch(e){
         console.log(e);
    }

}

async function getUsers(){
    const users = await User.find();
    console.log(users);
}


async function getUserById({id}){
    try{
        const user = await User.findById(id);
        console.log(user || 'User not found');

    }catch(e){
        console.log(e);
    }
}

async function getUserByName({name}){
    try{

        const user = await User.find().byName(name); 
      /*   const user = await User.where().byName(name); */
        /* const user = await User.findOneByName(name); */
        console.log(user || 'User not found');

    }catch(e){
        console.log(e);
    }
}
async function getUserByFullName({name}){
    try{
        const user = await User.findOne({name:name});

        console.log(user.fullName);


    }catch(e){
        console.log(e);
    }
}




async function doesUserExists({name}){
    try{
        const user = await User.exists({name: name});
        console.log(user || 'User not found');
    }catch(e){
        console.log(e);
    }
}

async function addBestFriend({name, bestFriend}){
    try{
        const user = await User.findOne({name: name});
        const newuser = user.bestFriend = bestFriend;
        const update = await user.save()

        user.myBestFriend() /* gets bestFriend name */

    }catch(e){
        console.log(e);
    }
}

async function getBestFriend({name}){
    try{
        const user = await User.findOne({name: name}).populate('bestFriend');
        console.log(user.bestFriend);

    }catch(e){
        console.log(e);
    }
}

async function addBalance({name, balance}){
    try{
        const user = await User.findOne({name: name});
        user.balance = balance;
        const update = await user.save();
        console.log(user.balance);
    }
    catch(e){
        console.log(e);
    }
}


/* export */
module.exports = {
    createUser,
    addBalance
}