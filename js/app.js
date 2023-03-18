let points = 499;

if (points >= 1000) 
{
    console.log(`This is a nice message`);
} else if (points >= 500)
{
console.log(`This is a different nice message`);
} else {
    console.log(`Keep going!`);
}

let player = {
    name: `Isael`,
    is_premium: true,
    friends: [`John`, `Jane`, `Doe`]
}

let first_friend = player.friends[0];

let random_numbers = [1, 3, 5, 6, 2];

random_numbers.push(9);

let i = 0;
while(i < random_numbers.length) 
{
    console.log(random_numbers[i]);
    i++;
}