# 📚 Day 11 - 21 Days DSA Challenge

## ✅ Problem Statement:
Write a function to return all **odd numbers** from a given array using **recursion**.  
The goal is to practice using **helper recursive functions** for cleaner, modular recursive logic.

---

## 💻 Solution Overview:

We use a **helper function** inside the main function `isOdd()` to:
- Check if the array is empty (base case)
- If not, check if the first element is odd
- If it is, push it to the result array
- Recurse on the rest of the array using `slice(1)`

---

## 🔁 Code (JavaScript)

```javascript
// Helper Recursive Function
function isOdd(array){
    let result = [];

    function helperfunc(inputarr){
        if(inputarr.length === 0){
            return "array is empty";
        }
        if(inputarr[0] % 2 !== 0){
            result.push(inputarr[0]);
        }
        helperfunc(inputarr.slice(1));
    }

    helperfunc(array);
    return result;
};

let res = isOdd([1,2,3,4,5,6,7,8,9]);
console.log(res); // Output: [1, 3, 5, 7, 9]


---

🔍 Concepts Covered

Recursive functions

Base case & breaking recursion

Array slicing

Helper method inside recursion

Filtering values conditionally



---

📅 Challenge Progress

✅ Day 1-10: [Check other progress here if you're tracking]

🚀 Day 11: Completed!

🔜 Day 12: Coming up next...



---

🏷️ Tags

#Recursion #DSA #JavaScript #HelperFunction #CodingChallenge #21DayDSA #WebDev


---

🤝 Connect with Me

Feel free to connect with me on LinkedIn to follow the rest of my DSA journey!
