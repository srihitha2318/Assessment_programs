
if (true) {
  let x = 10;
  var y = 20;
}

console.log(y);   

try {
  console.log(x);   
} catch (err) {
  console.log("x is not defined (block scoped)");
}



const profile = {
  user: {
    details: {
      email: "test@mail.com",
    },
  },
};

console.log(profile?.user?.details?.email); 
console.log(profile?.user?.details?.phone);

const book = {
  title: "JavaScript Guide",
};


console.log(book.author?.name);
