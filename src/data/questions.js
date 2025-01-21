export const topics = [
  'Arrays',
  'Strings',
  'Objects',
  'Functions',
  'Algorithms',
  'Data Structures',
  'DOM Manipulation',
  'Async Programming',
  'HTML',
  'CSS'
];

export const questions = [
  {
    id: 1,
    title: "Sum of Two Numbers",
    difficulty: "Easy",
    topics: ["Functions", "Algorithms"],
    description: "Write a function that returns the sum of two numbers.",
    starterCode: `function sum(a, b) {
  // Your code here
}`,
    solution: `function sum(a, b) {
  return a + b;
}`,
    testCases: [
      { input: [1, 2], expected: 3 },
      { input: [-1, 1], expected: 0 },
      { input: [0, 0], expected: 0 }
    ]
  },
  {
    id: 2,
    title: "Reverse a String",
    difficulty: "Easy",
    topics: ["Strings", "Algorithms"],
    description: "Write a function that reverses a string.",
    starterCode: `function reverseString(str) {
  // Your code here
}`,
    solution: `function reverseString(str) {
  return str.split('').reverse().join('');
  // Alternative solution:
  // return [...str].reverse().join('');
}`,
    testCases: [
      { input: ["hello"], expected: "olleh" },
      { input: ["world"], expected: "dlrow" },
      { input: [""], expected: "" }
    ]
  },
  {
    id: 3,
    title: "Palindrome Check",
    difficulty: "Easy",
    topics: ["Strings", "Algorithms"],
    description: "Write a function that checks if a given string is a palindrome (reads the same forwards and backwards). Ignore case and non-alphanumeric characters.",
    starterCode: `function isPalindrome(str) {
  // Your code here
}`,
    solution: `function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Compare with its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}`,
    testCases: [
      { input: ["A man, a plan, a canal: Panama"], expected: true },
      { input: ["race a car"], expected: false },
      { input: [""], expected: true }
    ]
  },
  {
    id: 4,
    title: "FizzBuzz Array",
    difficulty: "Easy",
    topics: ["Arrays", "Algorithms"],
    description: "Write a function that returns an array containing the FizzBuzz sequence up to n. For multiples of 3, use 'Fizz'. For multiples of 5, use 'Buzz'. For multiples of both, use 'FizzBuzz'.",
    starterCode: `function fizzBuzz(n) {
  // Your code here
}`,
    solution: `function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  return result;
}`,
    testCases: [
      { input: [3], expected: [1, 2, "Fizz"] },
      { input: [5], expected: [1, 2, "Fizz", 4, "Buzz"] },
      { input: [15], expected: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"] }
    ]
  },
  {
    id: 5,
    title: "Array Rotation",
    difficulty: "Medium",
    topics: ["Arrays", "Algorithms"],
    description: "Write a function that rotates an array to the right by k steps. k is non-negative.",
    starterCode: `function rotateArray(nums, k) {
  // Your code here
}`,
    solution: `function rotateArray(nums, k) {
  k = k % nums.length;
  return [...nums.slice(-k), ...nums.slice(0, -k)];
}`,
    testCases: [
      { input: [[1,2,3,4,5,6,7], 3], expected: [5,6,7,1,2,3,4] },
      { input: [[-1,-100,3,99], 2], expected: [3,99,-1,-100] },
      { input: [[1], 0], expected: [1] }
    ]
  },
  {
    id: 6,
    title: "Valid Parentheses",
    difficulty: "Medium",
    topics: ["Strings", "Data Structures"],
    description: "Write a function that determines if a string of parentheses is valid. The string can contain '(', ')', '{', '}', '[' and ']'.",
    starterCode: `function isValidParentheses(s) {
  // Your code here
}`,
    solution: `function isValidParentheses(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let i = 0; i < s.length; i++) {
    if (Object.values(map).includes(s[i])) {
      stack.push(s[i]);
    } else if (Object.keys(map).includes(s[i])) {
      if (stack.pop() !== map[s[i]]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}`,
    testCases: [
      { input: ["()"], expected: true },
      { input: ["()[]{}"], expected: true },
      { input: ["(]"], expected: false },
      { input: ["([)]"], expected: false }
    ]
  },
  {
    id: 7,
    title: "Find Missing Number",
    difficulty: "Medium",
    topics: ["Arrays", "Algorithms"],
    description: "Given an array containing n distinct numbers taken from 0 to n, find the missing number.",
    starterCode: `function findMissingNumber(nums) {
  // Your code here
}`,
    solution: `function findMissingNumber(nums) {
  const n = nums.length;
  const expectedSum = n * (n + 1) / 2;
  const actualSum = nums.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}`,
    testCases: [
      { input: [[3,0,1]], expected: 2 },
      { input: [[9,6,4,2,3,5,7,0,1]], expected: 8 },
      { input: [[0]], expected: 1 }
    ]
  },
  {
    id: 8,
    title: "Longest Common Prefix",
    difficulty: "Medium",
    topics: ["Strings", "Algorithms"],
    description: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.",
    starterCode: `function longestCommonPrefix(strs) {
  // Your code here
}`,
    solution: `function longestCommonPrefix(strs) {
  if (!strs.length) {
    return '';
  }

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) {
        return '';
      }
    }
  }

  return prefix;
}`,
    testCases: [
      { input: [["flower","flow","flight"]], expected: "fl" },
      { input: [["dog","racecar","car"]], expected: "" },
      { input: [["interspecies","interstellar","interstate"]], expected: "inters" }
    ]
  },
  {
    id: 9,
    title: "Binary Search",
    difficulty: "Medium",
    topics: ["Arrays", "Algorithms"],
    description: "Implement binary search to find the index of a target value in a sorted array. Return -1 if target is not found.",
    starterCode: `function binarySearch(nums, target) {
  // Your code here
}`,
    solution: `function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}`,
    testCases: [
      { input: [[-1,0,3,5,9,12], 9], expected: 4 },
      { input: [[-1,0,3,5,9,12], 2], expected: -1 },
      { input: [[1], 1], expected: 0 }
    ]
  },
  {
    id: 10,
    title: "Merge Sort",
    difficulty: "Hard",
    topics: ["Arrays", "Algorithms", "Data Structures"],
    description: "Implement the merge sort algorithm to sort an array in ascending order.",
    starterCode: `function mergeSort(arr) {
  // Your code here
}`,
    solution: `function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}`,
    testCases: [
      { input: [[64, 34, 25, 12, 22, 11, 90]], expected: [11, 12, 22, 25, 34, 64, 90] },
      { input: [[5,2,3,1]], expected: [1,2,3,5] },
      { input: [[-1,5,3,4,0]], expected: [-1,0,3,4,5] }
    ]
  },
  {
    id: 11,
    title: "Debounce Function",
    difficulty: "Hard",
    topics: ["Functions", "Async Programming"],
    description: "Implement a debounce function that delays invoking a function until after wait milliseconds have elapsed since the last time it was invoked.",
    starterCode: `function debounce(func, wait) {
  // Your code here
}`,
    solution: `function debounce(func, wait) {
  let timeout;

  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}`,
    testCases: [
      {
        input: [
          function(x) { return x * 2; },
          1000
        ],
        expected: "function"
      }
    ]
  },
  {
    id: 12,
    title: "Deep Clone",
    difficulty: "Hard",
    topics: ["Objects", "Algorithms", "Data Structures"],
    description: "Implement a deep clone function that creates a deep copy of a nested object or array, handling circular references.",
    starterCode: `function deepClone(obj) {
  // Your code here
}`,
    solution: `function deepClone(obj, hash = new WeakMap()) {
  if (Object(obj) !== obj) {
    return obj;
  }

  if (hash.has(obj)) {
    return hash.get(obj);
  }

  const result = Array.isArray(obj) ? [] : {};
  hash.set(obj, result);

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = deepClone(obj[key], hash);
    }
  }

  return result;
}`,
    testCases: [
      { input: [{ a: 1, b: { c: 2 } }], expected: { a: 1, b: { c: 2 } } },
      { input: [[1, [2, 3], { a: 4 }]], expected: [1, [2, 3], { a: 4 }] },
      { input: [{ x: { y: 3 }, z: [1, 2] }], expected: { x: { y: 3 }, z: [1, 2] } }
    ]
  },
  {
    id: 13,
    title: "DOM Event Delegation",
    difficulty: "Medium",
    topics: ["DOM Manipulation", "Functions"],
    description: "Implement a function that adds event delegation to a parent element. The function should handle clicks on child elements matching a specific selector.",
    starterCode: `function delegateEvent(parent, childSelector, eventType, handler) {
  // Your code here
}`,
    solution: `function delegateEvent(parent, childSelector, eventType, handler) {
  parent.addEventListener(eventType, function(event) {
    const target = event.target;
    if (target.matches(childSelector)) {
      handler(event);
    }
  });
}`,
    testCases: [
      {
        input: [document.body, "button", "click", (e) => e.target.textContent],
        expected: "function"
      }
    ]
  },
  {
    id: 14,
    title: "Promise.all Implementation",
    difficulty: "Hard",
    topics: ["Async Programming", "Functions"],
    description: "Implement your own version of Promise.all that takes an array of promises and returns a promise that resolves when all input promises resolve.",
    starterCode: `function promiseAll(promises) {
  // Your code here
}`,
    solution: `function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;

    for (let i = 0; i < promises.length; i++) {
      promises[i].then((result) => {
        results[i] = result;
        count++;

        if (count === promises.length) {
          resolve(results);
        }
      }).catch((error) => {
        reject(error);
      });
    }
  });
}`,
    testCases: [
      {
        input: [[Promise.resolve(1), Promise.resolve(2)]],
        expected: [1, 2]
      }
    ]
  },
  {
    id: 15,
    title: "Memoization Function",
    difficulty: "Medium",
    topics: ["Functions", "Objects"],
    description: "Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again.",
    starterCode: `function memoize(fn) {
  // Your code here
}`,
    solution: `function memoize(fn) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}`,
    testCases: [
      {
        input: [(a, b) => a + b, 1, 2],
        expected: 3
      }
    ]
  },
  {
    id: 16,
    title: "Implement Queue using Stacks",
    difficulty: "Medium",
    topics: ["Data Structures", "Algorithms"],
    description: "Implement a Queue using two Stacks. The queue should support standard operations: enqueue, dequeue, peek, and isEmpty.",
    starterCode: `class Queue {
  constructor() {
    // Initialize your data structure here
  }
  
  enqueue(x) {
    // Your code here
  }
  
  dequeue() {
    // Your code here
  }
  
  peek() {
    // Your code here
  }
  
  isEmpty() {
    // Your code here
  }
}`,
    solution: `class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(x) {
    this.stack1.push(x);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }

  peek() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2[this.stack2.length - 1];
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}`,
    testCases: [
      {
        input: [["enqueue", "enqueue", "peek", "dequeue"], [1, 2]],
        expected: [null, null, 1, 1]
      }
    ]
  },
  {
    id: 17,
    title: "Virtual DOM Differ",
    difficulty: "Hard",
    topics: ["DOM Manipulation", "Algorithms", "Objects"],
    description: "Implement a function that finds the differences between two virtual DOM trees and returns a list of necessary DOM operations.",
    starterCode: `function diffVirtualDOM(oldTree, newTree) {
  // Your code here
  // Return array of operations: { type: 'update'|'add'|'remove', path: [...], value? }
}`,
    solution: `function diffVirtualDOM(oldTree, newTree) {
  const patches = [];

  function diffNodes(oldNode, newNode, path = []) {
    // Node was removed
    if (!newNode) {
      patches.push({ type: 'remove', path });
      return;
    }

    // Node was added
    if (!oldNode) {
      patches.push({ type: 'add', path, value: newNode });
      return;
    }

    // Node was updated
    if (oldNode.type !== newNode.type) {
      patches.push({ type: 'update', path, value: newNode });
      return;
    }

    // Diff children
    const maxLength = Math.max(
      (oldNode.children || []).length,
      (newNode.children || []).length
    );

    for (let i = 0; i < maxLength; i++) {
      diffNodes(
        oldNode.children?.[i],
        newNode.children?.[i],
        [...path, i]
      );
    }
  }

  diffNodes(oldTree, newTree);
  return patches;
}`,
    testCases: [
      {
        input: [
          { type: 'div', children: [] },
          { type: 'div', children: [{ type: 'span' }] }
        ],
        expected: [{ type: 'add', path: [0], value: { type: 'span' } }]
      }
    ]
  },
  {
    id: 18,
    title: "Async Retry with Backoff",
    difficulty: "Hard",
    topics: ["Async Programming", "Functions"],
    description: "Implement a function that retries an async operation with exponential backoff until it succeeds or reaches max retries.",
    starterCode: `async function retryWithBackoff(operation, maxRetries, baseDelay) {
  // Your code here
}`,
    solution: `async function retryWithBackoff(operation, maxRetries, baseDelay) {
  let retries = 0;
  let delay = baseDelay;

  while (retries <= maxRetries) {
    try {
      return await operation();
    } catch (error) {
      retries++;
      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= 2;
    }
  }

  throw new Error('Max retries exceeded');
}`,
    testCases: [
      {
        input: [async () => true, 3, 1000],
        expected: true
      }
    ]
  },
  {
    id: 19,
    title: "Observable Implementation",
    difficulty: "Hard",
    topics: ["Async Programming", "Objects"],
    description: "Implement a basic Observable class with subscribe, unsubscribe, and notify methods.",
    starterCode: `class Observable {
  constructor() {
    // Your code here
  }

  subscribe(observer) {
    // Your code here
  }

  unsubscribe(observer) {
    // Your code here
  }

  notify(data) {
    // Your code here
  }
}`,
    solution: `class Observable {
  constructor() {
    this.observers = new Set();
  }

  subscribe(observer) {
    this.observers.add(observer);
    return () => this.unsubscribe(observer);
  }

  unsubscribe(observer) {
    this.observers.delete(observer);
  }

  notify(data) {
    this.observers.forEach((observer) => {
      if (typeof observer === 'function') {
        observer(data);
      } else if (observer.next) {
        observer.next(data);
      }
    });
  }
}`,
    testCases: [
      {
        input: ["subscribe", { next: data => data }],
        expected: "function"
      }
    ]
  },
  {
    id: 20,
    title: "Virtual DOM Reconciliation",
    difficulty: "Hard",
    topics: ["React", "Algorithms"],
    description: "Implement a simple virtual DOM reconciliation algorithm that finds the minimum number of operations needed to transform one tree into another.",
    starterCode: `function reconcile(oldTree, newTree) {
  // Your code here
  // Return array of operations: { type: 'add'|'remove'|'update', path: [...] }
}`,
    solution: `function reconcile(oldTree, newTree) {
  const ops = [];
  
  function walk(oldNode, newNode, path = []) {
    // Node was removed
    if (!newNode) {
      ops.push({ type: 'remove', path });
      return;
    }
    
    // Node was added
    if (!oldNode) {
      ops.push({ type: 'add', path });
      return;
    }
    
    // Node was updated
    if (oldNode.type !== newNode.type || oldNode.props?.value !== newNode.props?.value) {
      ops.push({ type: 'update', path });
    }
    
    // Recursively walk children
    const maxLength = Math.max(
      (oldNode.children || []).length,
      (newNode.children || []).length
    );
    
    for (let i = 0; i < maxLength; i++) {
      walk(
        oldNode.children?.[i],
        newNode.children?.[i],
        [...path, i]
      );
    }
  }
  
  walk(oldTree, newTree);
  return ops;
}`,
    testCases: [
      {
        input: [
          { type: 'div', children: [{ type: 'span' }] },
          { type: 'div', children: [{ type: 'p' }] }
        ],
        expected: [{ type: 'update', path: [0] }]
      }
    ]
  },
  {
    id: 21,
    title: "Implement Throttle Function",
    difficulty: "Medium",
    topics: ["Functions", "Async Programming"],
    description: "Implement a throttle function that ensures a function is called at most once in a specified time period. This is commonly used for performance optimization in scroll/resize events.",
    starterCode: `function throttle(func, limit) {
  // Your code here
}`,
    solution: `function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}`,
    testCases: [
      {
        input: ["function() { return true; }", 1000],
        expected: "function"
      }
    ]
  },
  {
    id: 22,
    title: "Implement Promise.race",
    difficulty: "Hard",
    topics: ["Async Programming", "Promises"],
    description: "Implement Promise.race which takes an array of promises and returns a promise that resolves/rejects with the value/error of the first resolved/rejected promise.",
    starterCode: `function promiseRace(promises) {
  // Your code here
}`,
    solution: `function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}`,
    testCases: [
      {
        input: [[Promise.resolve(1), new Promise(resolve => setTimeout(() => resolve(2), 100))]],
        expected: 1
      }
    ]
  },
  {
    id: 23,
    title: "Implement React useState",
    difficulty: "Hard",
    topics: ["React", "State Management"],
    description: "Implement a simplified version of React's useState hook that supports dispatching actions and subscribing to state changes.",
    starterCode: `function useState(initialValue) {
  // Your code here
}`,
    solution: `let state;
function useState(initialValue) {
  state = state || initialValue;
  
  const setState = (newValue) => {
    state = typeof newValue === 'function' 
      ? newValue(state) 
      : newValue;
    // In real React, this would trigger a re-render
  };
  
  return [state, setState];
}`,
    testCases: [
      {
        input: [0],
        expected: [0, "function"]
      }
    ]
  },
  {
    id: 24,
    title: "Flatten Deep Object",
    difficulty: "Medium",
    topics: ["Objects", "Recursion"],
    description: "Create a function that flattens a deeply nested object into a single level object with dot notation for nested keys.",
    starterCode: `function flattenObject(obj, prefix = '') {
  // Your code here
}`,
    solution: `function flattenObject(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, key) => {
    const pre = prefix.length ? prefix + '.' : '';
    
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      Object.assign(acc, flattenObject(obj[key], pre + key));
    } else {
      acc[pre + key] = obj[key];
    }
    
    return acc;
  }, {});
}`,
    testCases: [
      {
        input: [{ a: { b: { c: 1 } }, d: 2 }],
        expected: { "a.b.c": 1, "d": 2 }
      },
      {
        input: [{ x: { y: 2 } }, { z: 3 }],
        expected: { "x.y": 2, "z": 3 }
      }
    ]
  },
  {
    id: 25,
    title: "Virtual DOM Reconciliation",
    difficulty: "Hard",
    topics: ["React", "Algorithms"],
    description: "Implement a simple virtual DOM reconciliation algorithm that finds the minimum number of operations needed to transform one tree into another.",
    starterCode: `function reconcile(oldTree, newTree) {
  // Your code here
  // Return array of operations: { type: 'add'|'remove'|'update', path: [...] }
}`,
    solution: `function reconcile(oldTree, newTree) {
  const ops = [];
  
  function walk(oldNode, newNode, path = []) {
    // Node was removed
    if (!newNode) {
      ops.push({ type: 'remove', path });
      return;
    }
    
    // Node was added
    if (!oldNode) {
      ops.push({ type: 'add', path });
      return;
    }
    
    // Node was updated
    if (oldNode.type !== newNode.type || oldNode.props?.value !== newNode.props?.value) {
      ops.push({ type: 'update', path });
    }
    
    // Recursively walk children
    const maxLength = Math.max(
      (oldNode.children || []).length,
      (newNode.children || []).length
    );
    
    for (let i = 0; i < maxLength; i++) {
      walk(
        oldNode.children?.[i],
        newNode.children?.[i],
        [...path, i]
      );
    }
  }
  
  walk(oldTree, newTree);
  return ops;
}`,
    testCases: [
      {
        input: [
          { type: 'div', children: [{ type: 'span' }] },
          { type: 'div', children: [{ type: 'p' }] }
        ],
        expected: [{ type: 'update', path: [0] }]
      }
    ]
  },
  {
    id: 26,
    title: "Implement Redux createStore",
    difficulty: "Hard",
    topics: ["State Management", "Functions"],
    description: "Implement a simplified version of Redux's createStore function that supports dispatching actions and subscribing to state changes.",
    starterCode: `function createStore(reducer, initialState) {
  // Your code here
}`,
    solution: `function createStore(reducer, initialState) {
  let state = initialState;
  let listeners = [];
  
  return {
    getState() {
      return state;
    },
    
    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
      return action;
    },
    
    subscribe(listener) {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    }
  };
}`,
    testCases: [
      {
        input: [(state = 0, action) => action.type === 'INCREMENT' ? state + 1 : state, 0],
        expected: "object"
      }
    ]
  },
  {
    id: 27,
    title: "Implement Event Emitter",
    difficulty: "Medium",
    topics: ["Design Patterns", "Events"],
    description: "Implement an EventEmitter class that supports subscribing to events, emitting events, and unsubscribing from events.",
    starterCode: `class EventEmitter {
  constructor() {
    // Your code here
  }
  
  on(event, callback) {
    // Your code here
  }
  
  emit(event, data) {
    // Your code here
  }
  
  off(event, callback) {
    // Your code here
  }
}`,
    solution: `class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    return () => this.off(event, callback);
  }
  
  emit(event, data) {
    if (!this.events[event]) return;
    this.events[event].forEach(callback => callback(data));
  }
  
  off(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }
}`,
    testCases: [
      {
        input: ["test", (data) => data],
        expected: "function"
      }
    ]
  },
  {
    id: 28,
    title: "Implement React useEffect",
    difficulty: "Hard",
    topics: ["React", "Hooks"],
    description: "Implement a simplified version of React's useEffect hook that supports cleanup and dependency array.",
    starterCode: `function useEffect(callback, deps) {
  // Your code here
}`,
    solution: `let currentDeps = null;
let cleanup = null;

function useEffect(callback, deps) {
  const hasNoDeps = !deps;
  const hasChangedDeps = currentDeps 
    ? !deps.every((dep, i) => dep === currentDeps[i])
    : true;
    
  if (hasNoDeps || hasChangedDeps) {
    // Clean up previous effect
    if (cleanup) {
      cleanup();
    }
    
    // Run effect and store cleanup
    cleanup = callback();
    currentDeps = deps;
  }
}`,
    testCases: [
      {
        input: [() => () => console.log('cleanup'), [1]],
        expected: undefined
      }
    ]
  },
  {
    id: 29,
    title: "Implement GraphQL Query Parser",
    difficulty: "Hard",
    topics: ["Parsing", "GraphQL"],
    description: "Create a simple GraphQL query parser that converts a GraphQL query string into a structured object representation.",
    starterCode: `function parseGraphQLQuery(query) {
  // Your code here
}`,
    solution: `function parseGraphQLQuery(query) {
  // Remove whitespace and newlines
  query = query.replace(/\\s+/g, ' ').trim();
  
  // Basic validation
  if (!query.startsWith('{') || !query.endsWith('}')) {
    throw new Error('Invalid query format');
  }
  
  // Remove outer braces
  query = query.slice(1, -1).trim();
  
  // Parse fields
  const result = {};
  let currentField = '';
  let depth = 0;
  let inString = false;
  
  for (let char of query) {
    if (char === '"') {
      inString = !inString;
    }
    
    if (!inString) {
      if (char === '{') depth++;
      if (char === '}') depth--;
    }
    
    currentField += char;
    
    if (depth === 0 && char === '}' || (depth === 0 && char === ' ' && currentField.trim())) {
      const field = currentField.trim();
      if (field.includes('{')) {
        const [name, ...rest] = field.split('{');
        result[name.trim()] = parseGraphQLQuery('{' + rest.join('{'));
      } else {
        result[field] = true;
      }
      currentField = '';
    }
  }
  
  return result;
}`,
    testCases: [
      {
        input: ["{ user { name email } posts { title } }"],
        expected: {
          user: { name: true, email: true },
          posts: { title: true }
        }
      },
      {
        input: ["{ user { name email } }"],
        expected: {
          user: { name: true, email: true }
        }
      }
    ]
  },
  {
    id: 30,
    title: "Implement React useMemo",
    difficulty: "Hard",
    topics: ["React", "Performance"],
    description: "Implement a simplified version of React's useMemo hook that memoizes a value and only recomputes it when dependencies change.",
    starterCode: `function useMemo(factory, deps) {
  // Your code here
}`,
    solution: `let memoizedValue = null;
let memoizedDeps = null;

function useMemo(factory, deps) {
  if (!memoizedDeps || !deps.every((dep, i) => dep === memoizedDeps[i])) {
    memoizedValue = factory();
    memoizedDeps = deps;
  }
  return memoizedValue;
}`,
    testCases: [
      {
        input: [() => ({ value: 42 }), [1]],
        expected: { value: 42 }
      }
    ]
  },
  {
    id: 31,
    title: "Array Sum",
    difficulty: "Easy",
    topics: ["Arrays", "Math"],
    description: "Write a function that calculates the sum of all numbers in an array.",
    starterCode: `function arraySum(arr) {
  // Your code here
}`,
    solution: `function arraySum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}`,
    testCases: [
      {
        input: [[1, 2, 3, 4, 5]],
        expected: 15
      },
      {
        input: [[-1, -2, 0, 1]],
        expected: -2
      }
    ]
  },
  {
    id: 32,
    title: "Find Maximum",
    difficulty: "Easy",
    topics: ["Arrays", "Math"],
    description: "Write a function that finds the maximum number in an array without using Math.max.",
    starterCode: `function findMax(arr) {
  // Your code here
}`,
    solution: `function findMax(arr) {
  return arr.reduce((max, num) => num > max ? num : max, arr[0]);
}`,
    testCases: [
      {
        input: [[1, 5, 3, 9, 2]],
        expected: 9
      },
      {
        input: [[-1, -5, -2]],
        expected: -1
      }
    ]
  },
  {
    id: 33,
    title: "Count Vowels",
    difficulty: "Easy",
    topics: ["Strings", "Logic"],
    description: "Write a function that counts the number of vowels in a string.",
    starterCode: `function countVowels(str) {
  // Your code here
}`,
    solution: `function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').filter(char => vowels.includes(char)).length;
}`,
    testCases: [
      {
        input: ["hello world"],
        expected: 3
      },
      {
        input: ["AEIOU"],
        expected: 5
      }
    ]
  },
  {
    id: 34,
    title: "Reverse Array",
    difficulty: "Easy",
    topics: ["Arrays"],
    description: "Write a function that reverses an array without using the built-in reverse method.",
    starterCode: `function reverseArray(arr) {
  // Your code here
}`,
    solution: `function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}`,
    testCases: [
      {
        input: [[1, 2, 3, 4, 5]],
        expected: [5, 4, 3, 2, 1]
      },
      {
        input: [["a", "b", "c"]],
        expected: ["c", "b", "a"]
      }
    ]
  },
  {
    id: 35,
    title: "Object Keys to Array",
    difficulty: "Easy",
    topics: ["Objects", "Arrays"],
    description: "Write a function that converts all keys of an object into an array.",
    starterCode: `function getKeys(obj) {
  // Your code here
}`,
    solution: `function getKeys(obj) {
  return Object.keys(obj);
}`,
    testCases: [
      {
        input: [{ name: "John", age: 30 }],
        expected: ["name", "age"]
      },
      {
        input: [{ x: 1, y: 2, z: 3 }],
        expected: ["x", "y", "z"]
      }
    ]
  },
  {
    id: 36,
    title: "Count Occurrences",
    difficulty: "Easy",
    topics: ["Arrays", "Objects"],
    description: "Write a function that counts the occurrences of each element in an array.",
    starterCode: `function countOccurrences(arr) {
  // Your code here
}`,
    solution: `function countOccurrences(arr) {
  return arr.reduce((count, item) => {
    count[item] = (count[item] || 0) + 1;
    return count;
  }, {});
}`,
    testCases: [
      {
        input: [[1, 2, 2, 3, 3, 3]],
        expected: { "1": 1, "2": 2, "3": 3 }
      },
      {
        input: [["a", "b", "a"]],
        expected: { "a": 2, "b": 1 }
      }
    ]
  },
  {
    id: 37,
    title: "Filter Even Numbers",
    difficulty: "Easy",
    topics: ["Arrays", "Logic"],
    description: "Write a function that filters out all odd numbers from an array and returns only the even numbers.",
    starterCode: `function filterEven(arr) {
  // Your code here
}`,
    solution: `function filterEven(arr) {
  return arr.filter(num => num % 2 === 0);
}`,
    testCases: [
      {
        input: [[1, 2, 3, 4, 5, 6]],
        expected: [2, 4, 6]
      },
      {
        input: [[11, 13, 15]],
        expected: []
      }
    ]
  },
  {
    id: 38,
    title: "Merge Objects",
    difficulty: "Easy",
    topics: ["Objects"],
    description: "Write a function that merges two objects into one.",
    starterCode: `function mergeObjects(obj1, obj2) {
  // Your code here
}`,
    solution: `function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}`,
    testCases: [
      {
        input: [{ a: 1, b: 2 }, { c: 3, d: 4 }],
        expected: { a: 1, b: 2, c: 3, d: 4 }
      },
      {
        input: [{ x: 1 }, { x: 2 }],
        expected: { x: 2 }
      }
    ]
  },
  {
    id: 39,
    title: "Array Average",
    difficulty: "Easy",
    topics: ["Arrays", "Math"],
    description: "Write a function that calculates the average of numbers in an array.",
    starterCode: `function arrayAverage(arr) {
  // Your code here
}`,
    solution: `function arrayAverage(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}`,
    testCases: [
      {
        input: [[1, 2, 3, 4, 5]],
        expected: 3
      },
      {
        input: [[10, 20]],
        expected: 15
      }
    ]
  },
  {
    id: 40,
    title: "Capitalize Words",
    difficulty: "Easy",
    topics: ["Strings", "Arrays"],
    description: "Write a function that capitalizes the first letter of each word in a sentence.",
    starterCode: `function capitalizeWords(str) {
  // Your code here
}`,
    solution: `function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}`,
    testCases: [
      {
        input: ["hello world"],
        expected: "Hello World"
      },
      {
        input: ["javascript is awesome"],
        expected: "Javascript Is Awesome"
      }
    ]
  },
  {
    id: 41,
    title: "Remove Duplicates",
    difficulty: "Easy",
    topics: ["Arrays", "Sets"],
    description: "Write a function that removes duplicate elements from an array.",
    starterCode: `function removeDuplicates(arr) {
  // Your code here
}`,
    solution: `function removeDuplicates(arr) {
  return [...new Set(arr)];
}`,
    testCases: [
      {
        input: [[1, 2, 2, 3, 3, 3]],
        expected: [1, 2, 3]
      },
      {
        input: [["a", "b", "a", "c"]],
        expected: ["a", "b", "c"]
      }
    ]
  },
  {
    id: 42,
    title: "Check Palindrome",
    difficulty: "Easy",
    topics: ["Strings", "Logic"],
    description: "Write a function that checks if a string is a palindrome (reads the same forwards and backwards).",
    starterCode: `function isPalindrome(str) {
  // Your code here
}`,
    solution: `function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanStr === cleanStr.split('').reverse().join('');
}`,
    testCases: [
      {
        input: ["racecar"],
        expected: true
      },
      {
        input: ["hello"],
        expected: false
      }
    ]
  },
  {
    id: 43,
    title: "Find Missing Number",
    difficulty: "Easy",
    topics: ["Arrays", "Math"],
    description: "Write a function that finds the missing number in an array of consecutive numbers.",
    starterCode: `function findMissingNumber(arr) {
  // Your code here
}`,
    solution: `function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}`,
    testCases: [
      {
        input: [[1, 2, 4, 5]],
        expected: 3
      },
      {
        input: [[1, 3, 4, 5]],
        expected: 2
      }
    ]
  },
  {
    id: 44,
    title: "Object Values Sum",
    difficulty: "Easy",
    topics: ["Objects", "Arrays"],
    description: "Write a function that sums all numeric values in an object.",
    starterCode: `function sumObjectValues(obj) {
  // Your code here
}`,
    solution: `function sumObjectValues(obj) {
  return Object.values(obj)
    .filter(value => typeof value === 'number')
    .reduce((sum, num) => sum + num, 0);
}`,
    testCases: [
      {
        input: [{ a: 1, b: 2, c: 3 }],
        expected: 6
      },
      {
        input: [{ x: 1, y: "2", z: 3 }],
        expected: 4
      }
    ]
  },
  {
    id: 45,
    title: "Array Intersection",
    difficulty: "Easy",
    topics: ["Arrays", "Sets"],
    description: "Write a function that finds the intersection of two arrays (common elements).",
    starterCode: `function findIntersection(arr1, arr2) {
  // Your code here
}`,
    solution: `function findIntersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1)].filter(item => set2.has(item));
}`,
    testCases: [
      {
        input: [[1, 2, 3], [2, 3, 4]],
        expected: [2, 3]
      },
      {
        input: [[1, 1, 2], [2, 2]],
        expected: [2]
      }
    ]
  },
  {
    id: 46,
    title: "Array Rotation",
    difficulty: "Easy",
    topics: ["Arrays"],
    description: "Write a function that rotates an array to the right by k steps.",
    starterCode: `function rotateArray(arr, k) {
  // Your code here
}`,
    solution: `function rotateArray(arr, k) {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}`,
    testCases: [
      {
        input: [[1, 2, 3, 4, 5], 2],
        expected: [4, 5, 1, 2, 3]
      },
      {
        input: [[1, 2, 3], 1],
        expected: [3, 1, 2]
      }
    ]
  },
  {
    id: 47,
    title: "Find Unique Elements",
    difficulty: "Easy",
    topics: ["Arrays", "Sets"],
    description: "Write a function that returns only the unique elements that appear in exactly one of the two input arrays.",
    starterCode: `function findUnique(arr1, arr2) {
  // Your code here
}`,
    solution: `function findUnique(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return [...arr1, ...arr2].filter(item => 
    (set1.has(item) && !set2.has(item)) || (!set1.has(item) && set2.has(item))
  );
}`,
    testCases: [
      {
        input: [[1, 2, 3], [3, 4, 5]],
        expected: [1, 2, 4, 5]
      },
      {
        input: [[1, 1, 2], [2, 3, 3]],
        expected: [1, 3]
      }
    ]
  },
  {
    id: 48,
    title: "Object Deep Equal",
    difficulty: "Easy",
    topics: ["Objects", "Recursion"],
    description: "Write a function that checks if two objects are deeply equal (have the same properties and values).",
    starterCode: `function deepEqual(obj1, obj2) {
  // Your code here
}`,
    solution: `function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
  if (obj1 === null || obj2 === null) return false;
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  return keys1.every(key => 
    keys2.includes(key) && deepEqual(obj1[key], obj2[key])
  );
}`,
    testCases: [
      {
        input: [{ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }],
        expected: true
      },
      {
        input: [{ a: 1, b: 2 }, { a: 1, b: 3 }],
        expected: false
      }
    ]
  },
  {
    id: 49,
    title: "String Compression",
    difficulty: "Easy",
    topics: ["Strings"],
    description: "Write a function that performs basic string compression using counts of repeated characters.",
    starterCode: `function compressString(str) {
  // Your code here
}`,
    solution: `function compressString(str) {
  let compressed = '';
  let count = 1;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + (count > 1 ? count : '');
      count = 1;
    }
  }
  
  return compressed.length < str.length ? compressed : str;
}`,
    testCases: [
      {
        input: ["aabbbcccc"],
        expected: "a2b3c4"
      },
      {
        input: ["abc"],
        expected: "abc"
      }
    ]
  },
  {
    id: 50,
    title: "Array Chunking",
    difficulty: "Easy",
    topics: ["Arrays"],
    description: "Write a function that splits an array into chunks of specified size.",
    starterCode: `function chunkArray(arr, size) {
  // Your code here
}`,
    solution: `function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}`,
    testCases: [
      {
        input: [[1, 2, 3, 4, 5], 2],
        expected: [[1, 2], [3, 4], [5]]
      },
      {
        input: [[1, 2, 3], 1],
        expected: [[1], [2], [3]]
      }
    ]
  },
  {
    id: 51,
    title: "Frequency Sort",
    difficulty: "Easy",
    topics: ["Arrays", "Objects", "Sorting"],
    description: "Write a function that sorts an array by frequency of elements. If frequencies are equal, sort by natural order.",
    starterCode: `function frequencySort(arr) {
  // Your code here
}`,
    solution: `function frequencySort(arr) {
  const freq = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  
  return arr.slice().sort((a, b) => {
    const freqDiff = freq[b] - freq[a];
    return freqDiff !== 0 ? freqDiff : a - b;
  });
}`,
    testCases: [
      {
        input: [[2, 3, 2, 4, 5, 3]],
        expected: [2, 2, 3, 3, 4, 5]
      },
      {
        input: [[1, 1, 2, 2]],
        expected: [1, 1, 2, 2]
      }
    ]
  },
  {
    id: 52,
    title: "Matrix Diagonal Sum",
    difficulty: "Easy",
    topics: ["Arrays", "Matrix"],
    description: "Write a function that calculates the sum of the main diagonal and secondary diagonal of a square matrix.",
    starterCode: `function diagonalSum(matrix) {
  // Your code here
}`,
    solution: `function diagonalSum(matrix) {
  let sum = 0;
  const n = matrix.length;
  
  for (let i = 0; i < n; i++) {
    sum += matrix[i][i]; // Main diagonal
    if (i !== n - 1 - i) { // Avoid counting center twice in odd-sized matrix
      sum += matrix[i][n - 1 - i]; // Secondary diagonal
    }
  }
  
  return sum;
}`,
    testCases: [
      {
        input: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
        expected: 25
      },
      {
        input: [[[1, 1], [1, 1]]],
        expected: 4
      }
    ]
  },
  {
    id: 53,
    title: "Anagram Check",
    difficulty: "Easy",
    topics: ["Strings", "Objects"],
    description: "Write a function that determines if two strings are anagrams of each other (contain the same characters with the same frequencies).",
    starterCode: `function areAnagrams(str1, str2) {
  // Your code here
}`,
    solution: `function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  
  const charCount = {};
  
  for (let char of str1.toLowerCase()) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  for (let char of str2.toLowerCase()) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }
  
  return Object.values(charCount).every(count => count === 0);
}`,
    testCases: [
      {
        input: ["listen", "silent"],
        expected: true
      },
      {
        input: ["hello", "world"],
        expected: false
      }
    ]
  },
  {
    id: 54,
    title: "Pascal's Triangle",
    difficulty: "Easy",
    topics: ["Arrays", "Math"],
    description: "Write a function that generates the nth row of Pascal's triangle.",
    starterCode: `function pascalRow(n) {
  // Your code here
}`,
    solution: `function pascalRow(n) {
  const row = [1];
  
  for (let k = 0; k < n; k++) {
    row[k + 1] = row[k] * (n - k) / (k + 1);
  }
  
  return row;
}`,
    testCases: [
      {
        input: [3],
        expected: [1, 3, 3, 1]
      },
      {
        input: [0],
        expected: [1]
      }
    ]
  },
  {
    id: 55,
    title: "Find Pairs",
    difficulty: "Easy",
    topics: ["Arrays", "Hash Tables"],
    description: "Write a function that finds all pairs of numbers in an array that sum to a target value.",
    starterCode: `function findPairs(arr, target) {
  // Your code here
}`,
    solution: `function findPairs(arr, target) {
  const pairs = [];
  const seen = new Set();
  
  for (const num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }
  
  return pairs;
}`,
    testCases: [
      {
        input: [[1, 2, 3, 4, 5], 7],
        expected: [[2, 5], [3, 4]]
      },
      {
        input: [[1, 1, 2, 2], 3],
        expected: [[1, 2], [1, 2]]
      }
    ]
  },
  {
    id: 56,
    title: "Matrix Transpose",
    difficulty: "Easy",
    topics: ["Arrays", "Matrix"],
    description: "Write a function that transposes a matrix (converts rows to columns and vice versa).",
    starterCode: `function transposeMatrix(matrix) {
  // Your code here
}`,
    solution: `function transposeMatrix(matrix) {
  return matrix[0].map((_, colIndex) => 
    matrix.map(row => row[colIndex])
  );
}`,
    testCases: [
      {
        input: [[[1, 2], [3, 4]]],
        expected: [[1, 3], [2, 4]]
      },
      {
        input: [[[1, 2, 3], [4, 5, 6]]],
        expected: [[1, 4], [2, 5], [3, 6]]
      }
    ]
  },
  {
    id: 57,
    title: "Object Path Finder",
    difficulty: "Easy",
    topics: ["Objects", "Strings"],
    description: "Write a function that finds a value in a nested object using a dot-notation path string.",
    starterCode: `function getValueByPath(obj, path) {
  // Your code here
}`,
    solution: `function getValueByPath(obj, path) {
  return path.split('.').reduce((current, key) => 
    current ? current[key] : undefined, obj
  );
}`,
    testCases: [
      {
        input: [{ a: { b: { c: 1 } } }, "a.b.c"],
        expected: 1
      },
      {
        input: [{ x: { y: 2 } }, "x.z"],
        expected: undefined
      }
    ]
  },
  {
    id: 58,
    title: "Array Intersection with Duplicates",
    difficulty: "Easy",
    topics: ["Arrays", "Objects"],
    description: "Write a function that finds the intersection of two arrays, keeping duplicates.",
    starterCode: `function intersectWithDuplicates(arr1, arr2) {
  // Your code here
}`,
    solution: `function intersectWithDuplicates(arr1, arr2) {
  const count1 = arr1.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  
  return arr2.filter(num => {
    if (count1[num] > 0) {
      count1[num]--;
      return true;
    }
    return false;
  });
}`,
    testCases: [
      {
        input: [[1, 2, 2, 3], [2, 2, 3, 4]],
        expected: [2, 2, 3]
      },
      {
        input: [[1, 1, 1], [1, 1]],
        expected: [1, 1]
      }
    ]
  },
  {
    id: 59,
    title: "String Pattern Match",
    difficulty: "Easy",
    topics: ["Strings", "Objects"],
    description: "Write a function that checks if a string follows a pattern (like 'abba' matches 'dog cat cat dog').",
    starterCode: `function matchesPattern(str, pattern) {
  // Your code here
}`,
    solution: `function matchesPattern(str, pattern) {
  const words = str.split(' ');
  if (words.length !== pattern.length) return false;
  
  const patternToWord = new Map();
  const wordToPattern = new Map();
  
  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const w = words[i];
    
    if (!patternToWord.has(p) && !wordToPattern.has(w)) {
      patternToWord.set(p, w);
      wordToPattern.set(w, p);
    } else if (patternToWord.get(p) !== w || wordToPattern.get(w) !== p) {
      return false;
    }
  }
  
  return true;
}`,
    testCases: [
      {
        input: ["dog cat cat dog", "abba"],
        expected: true
      },
      {
        input: ["dog cat dog cat", "abba"],
        expected: false
      }
    ]
  },
  {
    id: 60,
    title: "Binary Search",
    difficulty: "Easy",
    topics: ["Arrays", "Search"],
    description: "Write a function that performs binary search on a sorted array.",
    starterCode: `function binarySearch(arr, target) {
  // Your code here
  // Return index of target or -1 if not found
}`,
    solution: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}`,
    testCases: [
      {
        input: [[1, 2, 3, 4, 5], 3],
        expected: 2
      },
      {
        input: [[1, 2, 3, 4, 5], 6],
        expected: -1
      }
    ]
  },
  {
    id: 61,
    title: "Power Set",
    difficulty: "Easy",
    topics: ["Arrays", "Combinations"],
    description: "Write a function that returns all possible subsets of an array (power set).",
    starterCode: `function powerSet(arr) {
  // Your code here
}`,
    solution: `function powerSet(arr) {
  return arr.reduce((subsets, value) => 
    subsets.concat(subsets.map(set => [...set, value])),
    [[]]
  );
}`,
    testCases: [
      {
        input: [[1, 2]],
        expected: [[], [1], [2], [1, 2]]
      },
      {
        input: [[1, 2, 3]],
        expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
      }
    ]
  },
  {
    id: 62,
    title: "Longest Common Prefix",
    difficulty: "Easy",
    topics: ["Strings", "Arrays"],
    description: "Write a function that finds the longest common prefix string amongst an array of strings.",
    starterCode: `function longestCommonPrefix(strs) {
  // Your code here
}`,
    solution: `function longestCommonPrefix(strs) {
  if (!strs.length) return '';
  
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return '';
    }
  }
  
  return prefix;
}`,
    testCases: [
      {
        input: [["flower", "flow", "flight"]],
        expected: "fl"
      },
      {
        input: [["dog", "racecar", "car"]],
        expected: ""
      }
    ]
  },
  {
    id: 63,
    title: "Valid Parentheses",
    difficulty: "Easy",
    topics: ["Strings", "Stack"],
    description: "Write a function that determines if a string of parentheses is valid.",
    starterCode: `function isValidParentheses(str) {
  // Your code here
}`,
    solution: `function isValidParentheses(str) {
  const stack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  
  for (let char of str) {
    if (pairs[char]) {
      stack.push(char);
    } else {
      if (pairs[stack.pop()] !== char) return false;
    }
  }
  
  return stack.length === 0;
}`,
    testCases: [
      {
        input: ["()[]{}"],
        expected: true
      },
      {
        input: ["([)]"],
        expected: false
      }
    ]
  },
  {
    id: 64,
    title: "Majority Element",
    difficulty: "Easy",
    topics: ["Arrays", "Counting"],
    description: "Write a function that finds the majority element (appears more than n/2 times) in an array.",
    starterCode: `function majorityElement(arr) {
  // Your code here
}`,
    solution: `function majorityElement(arr) {
  let count = 0;
  let candidate = null;
  
  for (const num of arr) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }
  
  return candidate;
}`,
    testCases: [
      {
        input: [[2, 2, 1, 1, 1, 2, 2]],
        expected: 2
      },
      {
        input: [[3, 3, 4]],
        expected: 3
      }
    ]
  },
  {
    id: 65,
    title: "Move Zeros",
    difficulty: "Easy",
    topics: ["Arrays", "Two Pointers"],
    description: "Write a function that moves all zeros to the end of an array while maintaining the relative order of non-zero elements.",
    starterCode: `function moveZeros(arr) {
  // Your code here
}`,
    solution: `function moveZeros(arr) {
  let insertPos = 0;
  
  // Move non-zero elements to front
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertPos] = arr[i];
      insertPos++;
    }
  }
  
  // Fill remaining positions with zeros
  while (insertPos < arr.length) {
    arr[insertPos] = 0;
    insertPos++;
  }
  
  return arr;
}`,
    testCases: [
      {
        input: [[0, 1, 0, 3, 12]],
        expected: [1, 3, 12, 0, 0]
      },
      {
        input: [[0]],
        expected: [0]
      }
    ]
  },
  {
    id: 66,
    title: "First Non-Repeating Character",
    difficulty: "Easy",
    topics: ["Strings", "Hash Tables"],
    description: "Write a function that finds the first non-repeating character in a string and returns its index.",
    starterCode: `function firstUniqueChar(str) {
  // Your code here
}`,
    solution: `function firstUniqueChar(str) {
  const charCount = {};
  
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      return i;
    }
  }
  
  return -1;
}`,
    testCases: [
      {
        input: ["leetcode"],
        expected: 0
      },
      {
        input: ["loveleetcode"],
        expected: 2
      }
    ]
  },
  {
    id: 67,
    title: "Array Product Except Self",
    difficulty: "Easy",
    topics: ["Arrays", "Math"],
    description: "Write a function that returns an array where each element is the product of all numbers in the array except itself.",
    starterCode: `function productExceptSelf(nums) {
  // Your code here
}`,
    solution: `function productExceptSelf(nums) {
  const result = new Array(nums.length).fill(1);
  let leftProduct = 1;
  let rightProduct = 1;
  
  for (let i = 0; i < nums.length; i++) {
    result[i] *= leftProduct;
    leftProduct *= nums[i];
  }
  
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  
  return result;
}`,
    testCases: [
      {
        input: [[1, 2, 3, 4]],
        expected: [24, 12, 8, 6]
      },
      {
        input: [[2, 3, 4]],
        expected: [12, 8, 6]
      }
    ]
  },
  {
    id: 68,
    title: "Rotate String",
    difficulty: "Easy",
    topics: ["Strings"],
    description: "Write a function that checks if one string can be obtained by rotating another string.",
    starterCode: `function isRotatedString(str1, str2) {
  // Your code here
}`,
    solution: `function isRotatedString(str1, str2) {
  if (str1.length !== str2.length) return false;
  return (str1 + str1).includes(str2);
}`,
    testCases: [
      {
        input: ["abcde", "cdeab"],
        expected: true
      },
      {
        input: ["abcde", "abced"],
        expected: false
      }
    ]
  },
  {
    id: 69,
    title: "Missing Numbers",
    difficulty: "Easy",
    topics: ["Arrays", "Math"],
    description: "Write a function that finds all numbers missing from an array of numbers in range 1 to n.",
    starterCode: `function findMissingNumbers(nums) {
  // Your code here
}`,
    solution: `function findMissingNumbers(nums) {
  const result = [];
  const n = nums.length;
  const present = new Set(nums);
  
  for (let i = 1; i <= n; i++) {
    if (!present.has(i)) {
      result.push(i);
    }
  }
  
  return result;
}`,
    testCases: [
      {
        input: [[4, 3, 2, 7, 8, 2, 3, 1]],
        expected: [5, 6]
      },
      {
        input: [[1, 1]],
        expected: [2]
      }
    ]
  },
  {
    id: 70,
    title: "Group Anagrams",
    difficulty: "Easy",
    topics: ["Strings", "Hash Tables"],
    description: "Write a function that groups strings that are anagrams of each other.",
    starterCode: `function groupAnagrams(strs) {
  // Your code here
}`,
    solution: `function groupAnagrams(strs) {
  const groups = {};
  
  for (const str of strs) {
    const key = str.split('').sort().join('');
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(str);
  }
  
  return Object.values(groups);
}`,
    testCases: [
      {
        input: [["eat", "tea", "tan", "ate", "nat", "bat"]],
        expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
      },
      {
        input: [[""]],
        expected: [[""]]
      }
    ]
  },
  {
    id: 71,
    title: "Climbing Stairs",
    difficulty: "Easy",
    topics: ["Dynamic Programming"],
    description: "Write a function that calculates the number of ways to climb n stairs, taking either 1 or 2 steps at a time.",
    starterCode: `function climbStairs(n) {
  // Your code here
}`,
    solution: `function climbStairs(n) {
  if (n <= 2) return n;
  
  let prev = 1;
  let curr = 2;
  
  for (let i = 3; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  
  return curr;
}`,
    testCases: [
      {
        input: [3],
        expected: 3
      },
      {
        input: [4],
        expected: 5
      }
    ]
  },
  {
    id: 72,
    title: "Implement Queue using Stacks",
    difficulty: "Easy",
    topics: ["Data Structures", "Stack"],
    description: "Implement a queue using only stack operations (push and pop).",
    starterCode: `class MyQueue {
  constructor() {
    // Your code here
  }
  
  push(x) {
    // Your code here
  }
  
  pop() {
    // Your code here
  }
  
  peek() {
    // Your code here
  }
  
  empty() {
    // Your code here
  }
}`,
    solution: `class MyQueue {
  constructor() {
    this.stack1 = []; // for push
    this.stack2 = []; // for pop
  }
  
  push(x) {
    this.stack1.push(x);
  }
  
  pop() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
  
  peek() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }
  
  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}`,
    testCases: [
      {
        input: ["MyQueue", "push", "push", "peek", "pop", "empty"],
        expected: [null, null, null, 1, 1, false]
      }
    ]
  },
  {
    id: 73,
    title: "Min Stack",
    difficulty: "Easy",
    topics: ["Data Structures", "Stack"],
    description: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
    starterCode: `class MinStack {
  constructor() {
    // Your code here
  }
  
  push(val) {
    // Your code here
  }
  
  pop() {
    // Your code here
  }
  
  top() {
    // Your code here
  }
  
  getMin() {
    // Your code here
  }
}`,
    solution: `class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  
  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  }
  
  pop() {
    if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }
  
  top() {
    return this.stack[this.stack.length - 1];
  }
  
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}`,
    testCases: [
      {
        input: ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"],
        expected: [null, null, null, null, -3, null, 0, -2]
      }
    ]
  },
  {
    id: 74,
    title: "Implement Stack using Queues",
    difficulty: "Easy",
    topics: ["Data Structures", "Queue"],
    description: "Implement a stack using only queue operations (enqueue and dequeue).",
    starterCode: `class MyStack {
  constructor() {
    // Your code here
  }
  
  push(x) {
    // Your code here
  }
  
  pop() {
    // Your code here
  }
  
  top() {
    // Your code here
  }
  
  empty() {
    // Your code here
  }
}`,
    solution: `class MyStack {
  constructor() {
    this.queue = [];
  }
  
  push(x) {
    this.queue.push(x);
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift());
    }
  }
  
  pop() {
    return this.queue.shift();
  }
  
  top() {
    return this.queue[0];
  }
  
  empty() {
    return this.queue.length === 0;
  }
}`,
    testCases: [
      {
        input: ["MyStack", "push", "push", "top", "pop", "empty"],
        expected: [null, null, null, 2, 2, false]
      }
    ]
  },
  {
    id: 75,
    title: "Happy Number",
    difficulty: "Easy",
    topics: ["Math", "Hash Set"],
    description: "Write a function to determine if a number is happy (sum of squares of digits eventually equals 1).",
    starterCode: `function isHappy(n) {
  // Your code here
}`,
    solution: `function isHappy(n) {
  const seen = new Set();
  
  while (n !== 1) {
    if (seen.has(n)) return false;
    seen.add(n);
    n = String(n)
      .split('')
      .reduce((sum, digit) => sum + Math.pow(Number(digit), 2), 0);
  }
  
  return true;
}`,
    testCases: [
      {
        input: [19],
        expected: true
      },
      {
        input: [2],
        expected: false
      }
    ]
  },
  {
    id: 76,
    title: "Fibonacci Number",
    difficulty: "Easy",
    topics: ["Dynamic Programming", "Math"],
    description: "Write a function that returns the nth Fibonacci number.",
    starterCode: `function fibonacci(n) {
  // Your code here
}`,
    solution: `function fibonacci(n) {
  if (n <= 1) return n;
  
  let prev = 0;
  let curr = 1;
  
  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  
  return curr;
}`,
    testCases: [
      {
        input: [4],
        expected: 3
      },
      {
        input: [6],
        expected: 8
      }
    ]
  },
  {
    id: 77,
    title: "Word Pattern",
    difficulty: "Easy",
    topics: ["Strings", "Hash Tables"],
    description: "Write a function that checks if a pattern and a string follow the same pattern.",
    starterCode: `function wordPattern(pattern, str) {
  // Your code here
}`,
    solution: `function wordPattern(pattern, str) {
  const words = str.split(' ');
  if (pattern.length !== words.length) return false;
  
  const patternToWord = new Map();
  const wordToPattern = new Map();
  
  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const w = words[i];
    
    if (!patternToWord.has(p) && !wordToPattern.has(w)) {
      patternToWord.set(p, w);
      wordToPattern.set(w, p);
    } else if (patternToWord.get(p) !== w || wordToPattern.get(w) !== p) {
      return false;
    }
  }
  
  return true;
}`,
    testCases: [
      {
        input: ["abba", "dog cat cat dog"],
        expected: true
      },
      {
        input: ["abba", "dog cat dog cat"],
        expected: false
      }
    ]
  },
  {
    id: 78,
    title: "Pascal's Triangle II",
    difficulty: "Easy",
    topics: ["Arrays", "Dynamic Programming"],
    description: "Write a function that returns the kth row of Pascal's triangle.",
    starterCode: `function getRow(rowIndex) {
  // Your code here
}`,
    solution: `function getRow(rowIndex) {
  const row = [1];
  
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i - 1; j > 0; j--) {
      row[j] = row[j] + row[j - 1];
    }
    row.push(1);
  }
  
  return row;
}`,
    testCases: [
      {
        input: [3],
        expected: [1, 3, 3, 1]
      },
      {
        input: [0],
        expected: [1]
      }
    ]
  },
  {
    id: 79,
    title: "Add Binary",
    difficulty: "Easy",
    topics: ["Strings", "Math"],
    description: "Write a function that adds two binary strings and returns their sum as a binary string.",
    starterCode: `function addBinary(a, b) {
  // Your code here
}`,
    solution: `function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = '';
  
  while (i >= 0 || j >= 0 || carry > 0) {
    const sum = (i >= 0 ? parseInt(a[i]) : 0) + 
                (j >= 0 ? parseInt(b[j]) : 0) + 
                carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
    i--;
    j--;
  }
  
  return result;
}`,
    testCases: [
      {
        input: ["11", "1"],
        expected: "100"
      },
      {
        input: ["1010", "1011"],
        expected: "10101"
      }
    ]
  },
  {
    id: 80,
    title: "Count Primes",
    difficulty: "Easy",
    topics: ["Math", "Arrays"],
    description: "Write a function that counts the number of prime numbers less than n.",
    starterCode: `function countPrimes(n) {
  // Your code here
}`,
    solution: `function countPrimes(n) {
  if (n <= 2) return 0;
  
  const isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;
  
  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  
  return isPrime.filter(Boolean).length;
}`,
    testCases: [
      {
        input: [10],
        expected: 4
      },
      {
        input: [0],
        expected: 0
      }
    ]
  },
  {
    id: 81,
    title: "Find Pivot Index",
    difficulty: "Easy",
    topics: ["Arrays", "Prefix Sum"],
    description: "Write a function that finds the pivot index where the sum of all numbers to the left equals the sum of all numbers to the right.",
    starterCode: `function pivotIndex(nums) {
  // Your code here
}`,
    solution: `function pivotIndex(nums) {
  const total = nums.reduce((sum, num) => sum + num, 0);
  let leftSum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === total - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  
  return -1;
}`,
    testCases: [
      {
        input: [[1, 7, 3, 6, 5, 6]],
        expected: 3
      },
      {
        input: [[1, 2, 3]],
        expected: -1
      }
    ]
  },
  {
    id: 82,
    title: "Longest Continuous Increasing Subsequence",
    difficulty: "Easy",
    topics: ["Arrays", "Two Pointers"],
    description: "Write a function that finds the length of the longest continuous increasing subsequence.",
    starterCode: `function findLengthOfLCIS(nums) {
  // Your code here
}`,
    solution: `function findLengthOfLCIS(nums) {
  if (nums.length === 0) return 0;
  
  let maxLength = 1;
  let currentLength = 1;
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 1;
    }
  }
  
  return maxLength;
}`,
    testCases: [
      {
        input: [[1, 3, 5, 4, 7]],
        expected: 3
      },
      {
        input: [[2, 2, 2, 2]],
        expected: 1
      }
    ]
  },
  {
    id: 83,
    title: "Degree of an Array",
    difficulty: "Easy",
    topics: ["Arrays", "Hash Tables"],
    description: "Write a function that finds the smallest possible length of a contiguous subarray with the same degree as the input array.",
    starterCode: `function findShortestSubArray(nums) {
  // Your code here
}`,
    solution: `function findShortestSubArray(nums) {
  const count = {};
  const firstIndex = {};
  const lastIndex = {};
  let maxFreq = 0;
  
  nums.forEach((num, i) => {
    if (!(num in firstIndex)) firstIndex[num] = i;
    lastIndex[num] = i;
    count[num] = (count[num] || 0) + 1;
    maxFreq = Math.max(maxFreq, count[num]);
  });
  
  let minLen = nums.length;
  for (const num in count) {
    if (count[num] === maxFreq) {
      minLen = Math.min(minLen, lastIndex[num] - firstIndex[num] + 1);
    }
  }
  
  return minLen;
}`,
    testCases: [
      {
        input: [[1, 2, 2, 3, 1]],
        expected: 2
      },
      {
        input: [[1, 2, 2, 3, 1, 4, 2]],
        expected: 6
      }
    ]
  },
  {
    id: 84,
    title: "Longest Palindrome",
    difficulty: "Easy",
    topics: ["Strings", "Hash Tables"],
    description: "Write a function that finds the length of the longest palindrome that can be built with the given letters.",
    starterCode: `function longestPalindrome(s) {
  // Your code here
}`,
    solution: `function longestPalindrome(s) {
  const charCount = new Set();
  let length = 0;
  
  for (const char of s) {
    if (charCount.has(char)) {
      length += 2;
      charCount.delete(char);
    } else {
      charCount.add(char);
    }
  }
  
  return length + (charCount.size > 0 ? 1 : 0);
}`,
    testCases: [
      {
        input: ["abccccdd"],
        expected: 7
      },
      {
        input: ["a"],
        expected: 1
      }
    ]
  },
  {
    id: 85,
    title: "Monotonic Array",
    difficulty: "Easy",
    topics: ["Arrays"],
    description: "Write a function that determines if an array is monotonic (either monotone increasing or monotone decreasing).",
    starterCode: `function isMonotonic(nums) {
  // Your code here
}`,
    solution: `function isMonotonic(nums) {
  let increasing = true;
  let decreasing = true;
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      decreasing = false;
    }
    if (nums[i] < nums[i - 1]) {
      increasing = false;
    }
  }
  
  return increasing || decreasing;
}`,
    testCases: [
      {
        input: [[1, 2, 2, 3]],
        expected: true
      },
      {
        input: [[1, 3, 2]],
        expected: false
      }
    ]
  },
  {
    id: 86,
    title: "Number of Segments in a String",
    difficulty: "Easy",
    topics: ["Strings"],
    description: "Write a function that counts the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.",
    starterCode: `function countSegments(s) {
  // Your code here
}`,
    solution: `function countSegments(s) {
  return s.split(' ').filter(segment => segment.length > 0).length;
}`,
    testCases: [
      {
        input: ["Hello, my name is John"],
        expected: 5
      },
      {
        input: [""],
        expected: 0
      }
    ]
  },
  {
    id: 87,
    title: "Repeated Substring Pattern",
    difficulty: "Easy",
    topics: ["Strings"],
    description: "Write a function that determines if a string can be constructed by taking a substring and repeating it.",
    starterCode: `function repeatedSubstringPattern(s) {
  // Your code here
}`,
    solution: `function repeatedSubstringPattern(s) {
  const doubled = s + s;
  const inner = doubled.slice(1, -1);
  return inner.includes(s);
}`,
    testCases: [
      {
        input: ["abab"],
        expected: true
      },
      {
        input: ["aba"],
        expected: false
      }
    ]
  },
  {
    id: 88,
    title: "Detect Capital",
    difficulty: "Easy",
    topics: ["Strings"],
    description: "Write a function that determines if the usage of capitals in a word is correct.",
    starterCode: `function detectCapitalUse(word) {
  // Your code here
}`,
    solution: `function detectCapitalUse(word) {
  if (word === word.toUpperCase()) return true;
  if (word === word.toLowerCase()) return true;
  if (word[0] === word[0].toUpperCase() && 
      word.slice(1) === word.slice(1).toLowerCase()) return true;
  return false;
}`,
    testCases: [
      {
        input: ["USA"],
        expected: true
      },
      {
        input: ["FlaG"],
        expected: false
      }
    ]
  },
  {
    id: 89,
    title: "License Key Formatting",
    difficulty: "Easy",
    topics: ["Strings"],
    description: "Write a function that reformats a license key string such that each group contains exactly K characters, except for the first group.",
    starterCode: `function licenseKeyFormatting(s, k) {
  // Your code here
}`,
    solution: `function licenseKeyFormatting(s, k) {
  s = s.replace(/-/g, '').toUpperCase();
  let result = '';
  let count = 0;
  
  for (let i = s.length - 1; i >= 0; i--) {
    if (count === k) {
      result = '-' + result;
      count = 0;
    }
    result = s[i] + result;
    count++;
  }
  
  return result;
}`,
    testCases: [
      {
        input: ["5F3Z-2e-9-w", 4],
        expected: "5F3Z-2E9W"
      },
      {
        input: ["2-5g-3-J", 2],
        expected: "2-5G-3J"
      }
    ]
  },
  {
    id: 90,
    title: "Number Complement",
    difficulty: "Easy",
    topics: ["Bit Manipulation"],
    description: "Write a function that finds the complement of a number (flip all bits).",
    starterCode: `function findComplement(num) {
  // Your code here
}`,
    solution: `function findComplement(num) {
  let mask = num;
  mask |= mask >> 1;
  mask |= mask >> 2;
  mask |= mask >> 4;
  mask |= mask >> 8;
  mask |= mask >> 16;
  return num ^ mask;
}`,
    testCases: [
      {
        input: [5],
        expected: 2
      },
      {
        input: [1],
        expected: 0
      }
    ]
  },
  {
    id: 91,
    title: "Keyboard Row",
    difficulty: "Easy",
    topics: ["Strings", "Hash Tables"],
    description: "Write a function that returns the words that can be typed using letters of the alphabet on only one row of an American keyboard.",
    starterCode: `function findWords(words) {
  // Your code here
}`,
    solution: `function findWords(words) {
  const rows = [
    new Set('qwertyuiop'),
    new Set('asdfghjkl'),
    new Set('zxcvbnm')
  ];
  
  return words.filter(word => {
    const letters = word.toLowerCase().split('');
    return rows.some(row => letters.every(letter => row.has(letter)));
  });
}`,
    testCases: [
      {
        input: [["Hello", "Alaska", "Dad", "Peace"]],
        expected: ["Alaska", "Dad"]
      },
      {
        input: [["omk"]],
        expected: []
      }
    ]
  },
  {
    id: 92,
    title: "Base 7",
    difficulty: "Easy",
    topics: ["Math"],
    description: "Write a function that converts an integer to a base-7 string.",
    starterCode: `function convertToBase7(num) {
  // Your code here
}`,
    solution: `function convertToBase7(num) {
  if (num === 0) return "0";
  
  let isNegative = num < 0;
  num = Math.abs(num);
  let result = "";
  
  while (num > 0) {
    result = (num % 7) + result;
    num = Math.floor(num / 7);
  }
  
  return isNegative ? "-" + result : result;
}`,
    testCases: [
      {
        input: [100],
        expected: "202"
      },
      {
        input: [-7],
        expected: "-10"
      }
    ]
  },
  {
    id: 93,
    title: "Perfect Number",
    difficulty: "Easy",
    topics: ["Math"],
    description: "Write a function that determines if a number is perfect (sum of its positive divisors equals the number itself).",
    starterCode: `function checkPerfectNumber(num) {
  // Your code here
}`,
    solution: `function checkPerfectNumber(num) {
  if (num <= 1) return false;
  
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i * i !== num) {
        sum += num / i;
      }
    }
  }
  
  return sum === num;
}`,
    testCases: [
      {
        input: [28],
        expected: true
      },
      {
        input: [7],
        expected: false
      }
    ]
  },
  {
    id: 94,
    title: "Array Partition",
    difficulty: "Easy",
    topics: ["Arrays", "Sorting"],
    description: "Write a function that partitions an array of 2n integers into n pairs and maximizes the sum of all minimum values in each pair.",
    starterCode: `function arrayPairSum(nums) {
  // Your code here
}`,
    solution: `function arrayPairSum(nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }
  
  return sum;
}`,
    testCases: [
      {
        input: [[1, 4, 3, 2]],
        expected: 4
      },
      {
        input: [[6, 2, 6, 5, 1, 2]],
        expected: 9
      }
    ]
  },
  {
    id: 95,
    title: "Distribute Candies",
    difficulty: "Easy",
    topics: ["Arrays", "Hash Set"],
    description: "Write a function that determines the maximum number of different types of candies that can be eaten.",
    starterCode: `function distributeCandies(candyType) {
  // Your code here
}`,
    solution: `function distributeCandies(candyType) {
  const uniqueTypes = new Set(candyType);
  return Math.min(uniqueTypes.size, candyType.length / 2);
}`,
    testCases: [
      {
        input: [[1, 1, 2, 2, 3, 3]],
        expected: 3
      },
      {
        input: [[1, 1, 2, 3]],
        expected: 2
      }
    ]
  },
  {
    id: 96,
    title: "Hamming Distance",
    difficulty: "Easy",
    topics: ["Bit Manipulation"],
    description: "Write a function that calculates the Hamming distance between two integers (number of positions at which corresponding bits are different).",
    starterCode: `function hammingDistance(x, y) {
  // Your code here
}`,
    solution: `function hammingDistance(x, y) {
  let xor = x ^ y;
  let distance = 0;
  
  while (xor) {
    distance += xor & 1;
    xor >>= 1;
  }
  
  return distance;
}`,
    testCases: [
      {
        input: [1, 4],
        expected: 2
      },
      {
        input: [3, 1],
        expected: 1
      }
    ]
  },
  {
    id: 97,
    title: "Island Perimeter",
    difficulty: "Easy",
    topics: ["Arrays", "Matrix"],
    description: "Write a function that calculates the perimeter of an island in a grid where 1 represents land and 0 represents water.",
    starterCode: `function islandPerimeter(grid) {
  // Your code here
}`,
    solution: `function islandPerimeter(grid) {
  let perimeter = 0;
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        perimeter += 4;
        if (i > 0 && grid[i-1][j] === 1) perimeter -= 2;
        if (j > 0 && grid[i][j-1] === 1) perimeter -= 2;
      }
    }
  }
  
  return perimeter;
}`,
    testCases: [
      {
        input: [[[0,1,0,0], [1,1,1,0], [0,1,0,0], [1,1,0,0]]],
        expected: 16
      },
      {
        input: [[[1]]],
        expected: 4
      }
    ]
  },
  {
    id: 98,
    title: "Next Greater Element I",
    difficulty: "Easy",
    topics: ["Arrays", "Stack", "Hash Table"],
    description: "Write a function that finds the next greater element for each element in nums1 within nums2.",
    starterCode: `function nextGreaterElement(nums1, nums2) {
  // Your code here
}`,
    solution: `function nextGreaterElement(nums1, nums2) {
  const stack = [];
  const map = new Map();
  
  for (const num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }
  
  return nums1.map(num => map.get(num) || -1);
}`,
    testCases: [
      {
        input: [[4,1,2], [1,3,4,2]],
        expected: [-1,3,-1]
      },
      {
        input: [[2,4], [1,2,3,4]],
        expected: [3,-1]
      }
    ]
  },
  {
    id: 99,
    title: "Construct Rectangle",
    difficulty: "Easy",
    topics: ["Math"],
    description: "Write a function that constructs a rectangle with a given area, ensuring the length is greater than or equal to the width and the difference between length and width is minimized.",
    starterCode: `function constructRectangle(area) {
  // Your code here
}`,
    solution: `function constructRectangle(area) {
  let width = Math.floor(Math.sqrt(area));
  
  while (area % width !== 0) {
    width--;
  }
  
  return [area / width, width];
}`,
    testCases: [
      {
        input: [4],
        expected: [2,2]
      },
      {
        input: [37],
        expected: [37,1]
      }
    ]
  },
  {
    id: 100,
    title: "Max Consecutive Ones",
    difficulty: "Easy",
    topics: ["Arrays"],
    description: "Write a function that finds the maximum number of consecutive 1's in a binary array.",
    starterCode: `function findMaxConsecutiveOnes(nums) {
  // Your code here
}`,
    solution: `function findMaxConsecutiveOnes(nums) {
  let maxCount = 0;
  let currentCount = 0;
  
  for (const num of nums) {
    if (num === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }
  
  return maxCount;
}`,
    testCases: [
      {
        input: [[1,1,0,1,1,1]],
        expected: 3
      },
      {
        input: [[1,0,1,1,0,1]],
        expected: 2
      }
    ]
  },
  {
    id: 101,
    title: "Teemo Attacking",
    difficulty: "Easy",
    topics: ["Arrays", "Simulation"],
    description: "Write a function that calculates the total time units a target is poisoned given attack timestamps and duration.",
    starterCode: `function findPoisonedDuration(timeSeries, duration) {
  // Your code here
}`,
    solution: `function findPoisonedDuration(timeSeries, duration) {
  if (!timeSeries.length) return 0;
  
  let totalTime = 0;
  
  for (let i = 0; i < timeSeries.length - 1; i++) {
    totalTime += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
  }
  
  return totalTime + duration;
}`,
    testCases: [
      {
        input: [[1,4], 2],
        expected: 4
      },
      {
        input: [[1,2], 2],
        expected: 3
      }
    ]
  },
  {
    id: 102,
    title: "Relative Ranks",
    difficulty: "Easy",
    topics: ["Arrays", "Sorting"],
    description: "Write a function that assigns medals ('Gold', 'Silver', 'Bronze') to the top three scores and ranks for the rest.",
    starterCode: `function findRelativeRanks(score) {
  // Your code here
}`,
    solution: `function findRelativeRanks(score) {
  const sorted = [...score].sort((a, b) => b - a);
  const ranks = new Map(sorted.map((s, i) => [s, i + 1]));
  
  return score.map(s => {
    const rank = ranks.get(s);
    if (rank === 1) return "Gold Medal";
    if (rank === 2) return "Silver Medal";
    if (rank === 3) return "Bronze Medal";
    return rank.toString();
  });
}`,
    testCases: [
      {
        input: [[5,4,3,2,1]],
        expected: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
      },
      {
        input: [[10,3,8,9,4]],
        expected: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
      }
    ]
  },
  {
    id: 103,
    title: "Student Attendance Record I",
    difficulty: "Easy",
    topics: ["Strings"],
    description: "Write a function that determines if a student is eligible for an attendance award based on their attendance record.",
    starterCode: `function checkRecord(s) {
  // Your code here
}`,
    solution: `function checkRecord(s) {
  let absences = 0;
  let consecutiveLate = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      absences++;
      if (absences > 1) return false;
      consecutiveLate = 0;
    } else if (s[i] === 'L') {
      consecutiveLate++;
      if (consecutiveLate > 2) return false;
    } else {
      consecutiveLate = 0;
    }
  }
  
  return true;
}`,
    testCases: [
      {
        input: ["PPALLP"],
        expected: true
      },
      {
        input: ["PPALLL"],
        expected: false
      }
    ]
  },
  {
    id: 104,
    title: "Reverse Words III",
    difficulty: "Easy",
    topics: ["Strings"],
    description: "Write a function that reverses the characters in each word of a string while preserving whitespace and word order.",
    starterCode: `function reverseWords(s) {
  // Your code here
}`,
    solution: `function reverseWords(s) {
  return s.split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}`,
    testCases: [
      {
        input: ["Let's take LeetCode contest"],
        expected: "s'teL ekat edoCteeL tsetnoc"
      },
      {
        input: ["God Ding"],
        expected: "doG gniD"
      }
    ]
  },
  {
    id: 105,
    title: "Binary Tree Tilt",
    difficulty: "Easy",
    topics: ["Tree", "DFS"],
    description: "Write a function that calculates the tilt of a binary tree. The tilt of a tree node is the absolute difference between the sum of all left subtree node values and right subtree node values.",
    starterCode: `function findTilt(root) {
  // Your code here
}`,
    solution: `function findTilt(root) {
  let totalTilt = 0;
  
  function dfs(node) {
    if (!node) return 0;
    
    const leftSum = dfs(node.left);
    const rightSum = dfs(node.right);
    
    totalTilt += Math.abs(leftSum - rightSum);
    
    return leftSum + rightSum + node.val;
  }
  
  dfs(root);
  return totalTilt;
}`,
    testCases: [
      {
        input: [{val: 1, left: {val: 2}, right: {val: 3}}],
        expected: 1
      },
      {
        input: [{val: 4, left: {val: 2, left: {val: 3}, right: {val: 5}}, right: {val: 9, right: {val: 7}}}],
        expected: 15
      }
    ]
  },
  {
    id: 106,
    title: "Array Partition II",
    difficulty: "Easy",
    topics: ["Arrays", "Two Pointers"],
    description: "Write a function that checks if an array can be partitioned into three parts with equal sums.",
    starterCode: `function canThreePartsEqualSum(arr) {
  // Your code here
}`,
    solution: `function canThreePartsEqualSum(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  if (sum % 3 !== 0) return false;
  
  const target = sum / 3;
  let count = 0;
  let currentSum = 0;
  
  for (const num of arr) {
    currentSum += num;
    if (currentSum === target) {
      count++;
      currentSum = 0;
    }
  }
  
  return count >= 3;
}`,
    testCases: [
      {
        input: [[0,2,1,-6,6,-7,9,1,2,0,1]],
        expected: true
      },
      {
        input: [[1,2,2,3]],
        expected: false
      }
    ]
  },
  {
    id: 107,
    title: "Longest Uncommon Subsequence I",
    difficulty: "Easy",
    topics: ["Strings"],
    description: "Write a function that finds the length of the longest uncommon subsequence between two strings.",
    starterCode: `function findLUSlength(a, b) {
  // Your code here
}`,
    solution: `function findLUSlength(a, b) {
  return a === b ? -1 : Math.max(a.length, b.length);
}`,
    testCases: [
      {
        input: ["aba", "cdc"],
        expected: 3
      },
      {
        input: ["aaa", "aaa"],
        expected: -1
      }
    ]
  },
  {
    id: 108,
    title: "Minimum Index Sum of Two Lists",
    difficulty: "Easy",
    topics: ["Arrays", "Hash Table"],
    description: "Write a function that finds the common strings between two arrays with the least index sum.",
    starterCode: `function findRestaurant(list1, list2) {
  // Your code here
}`,
    solution: `function findRestaurant(list1, list2) {
  const map = new Map();
  let minSum = Infinity;
  let result = [];
  
  list1.forEach((item, i) => map.set(item, i));
  
  list2.forEach((item, i) => {
    if (map.has(item)) {
      const sum = i + map.get(item);
      if (sum < minSum) {
        minSum = sum;
        result = [item];
      } else if (sum === minSum) {
        result.push(item);
      }
    }
  });
  
  return result;
}`,
    testCases: [
      {
        input: [["Shogun","Tapioca Express","Burger King","KFC"], 
                ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]],
        expected: ["Shogun"]
      },
      {
        input: [["happy","sad"], ["sad","happy"]],
        expected: ["happy","sad"]
      }
    ]
  },
  {
    id: 109,
    title: "Can Place Flowers",
    difficulty: "Easy",
    topics: ["Arrays", "Greedy"],
    description: "Write a function that determines if n new flowers can be planted in a flowerbed without violating the no-adjacent-flowers rule.",
    starterCode: `function canPlaceFlowers(flowerbed, n) {
  // Your code here
}`,
    solution: `function canPlaceFlowers(flowerbed, n) {
  let count = 0;
  const bed = [0, ...flowerbed, 0];
  
  for (let i = 1; i < bed.length - 1; i++) {
    if (bed[i] === 0 && bed[i-1] === 0 && bed[i+1] === 0) {
      bed[i] = 1;
      count++;
    }
  }
  
  return count >= n;
}`,
    testCases: [
      {
        input: [[1,0,0,0,1], 1],
        expected: true
      },
      {
        input: [[1,0,0,0,1], 2],
        expected: false
      }
    ]
  },
  {
    id: 110,
    title: "Maximum Product of Three Numbers",
    difficulty: "Easy",
    topics: ["Arrays", "Math"],
    description: "Write a function that finds the maximum product of three numbers in an array.",
    starterCode: `function maximumProduct(nums) {
  // Your code here
}`,
    solution: `function maximumProduct(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  
  return Math.max(
    nums[n-1] * nums[n-2] * nums[n-3],
    nums[0] * nums[1] * nums[n-1]
  );
}`,
    testCases: [
      {
        input: [[1,2,3]],
        expected: 6
      },
      {
        input: [[-1,-2,-3,-4]],
        expected: -6
      }
    ]
  },
  {
    id: 111,
    title: "Average of Levels in Binary Tree",
    difficulty: "Easy",
    topics: ["Tree", "BFS"],
    description: "Write a function that returns the average value of nodes at each level in a binary tree.",
    starterCode: `function averageOfLevels(root) {
  // Your code here
}`,
    solution: `function averageOfLevels(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length) {
    const levelSize = queue.length;
    let levelSum = 0;
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelSum += node.val;
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    result.push(levelSum / levelSize);
  }
  
  return result;
}`,
    testCases: [
      {
        input: [{val: 3, left: {val: 9}, right: {val: 20, left: {val: 15}, right: {val: 7}}}],
        expected: [3, 14.5, 11]
      },
      {
        input: [{val: 3, left: {val: 9}, right: {val: 20}}],
        expected: [3, 14.5]
      }
    ]
  },
  {
    id: 112,
    title: "Set Mismatch",
    difficulty: "Easy",
    topics: ["Arrays", "Hash Table"],
    description: "Write a function that finds the number that appears twice and the missing number in an array of n integers where each integer is in the range [1, n].",
    starterCode: `function findErrorNums(nums) {
  // Your code here
}`,
    solution: `function findErrorNums(nums) {
  const n = nums.length;
  const count = new Array(n + 1).fill(0);
  let duplicate, missing;
  
  for (const num of nums) {
    count[num]++;
  }
  
  for (let i = 1; i <= n; i++) {
    if (count[i] === 2) duplicate = i;
    if (count[i] === 0) missing = i;
  }
  
  return [duplicate, missing];
}`,
    testCases: [
      {
        input: [[1,2,2,4]],
        expected: [2,3]
      },
      {
        input: [[1,1]],
        expected: [1,2]
      }
    ]
  },
  {
    id: 113,
    title: "Robot Return to Origin",
    difficulty: "Easy",
    topics: ["Strings", "Simulation"],
    description: "Write a function that determines if a robot returns to its starting position after a sequence of moves.",
    starterCode: `function judgeCircle(moves) {
  // Your code here
}`,
    solution: `function judgeCircle(moves) {
  let x = 0, y = 0;
  
  for (const move of moves) {
    switch (move) {
      case 'U': y++; break;
      case 'D': y--; break;
      case 'L': x--; break;
      case 'R': x++; break;
    }
  }
  
  return x === 0 && y === 0;
}`,
    testCases: [
      {
        input: ["UD"],
        expected: true
      },
      {
        input: ["LL"],
        expected: false
      }
    ]
  },
  {
    id: 114,
    title: "Image Smoother",
    difficulty: "Easy",
    topics: ["Arrays", "Matrix"],
    description: "Write a function that returns the smooth image where each cell's value is the average of itself and its eight surrounding cells.",
    starterCode: `function imageSmoother(img) {
  // Your code here
}`,
    solution: `function imageSmoother(img) {
  const m = img.length;
  const n = img[0].length;
  const result = Array(m).fill().map(() => Array(n).fill(0));
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;
      let count = 0;
      
      for (let r = i-1; r <= i+1; r++) {
        for (let c = j-1; c <= j+1; c++) {
          if (r >= 0 && r < m && c >= 0 && c < n) {
            sum += img[r][c];
            count++;
          }
        }
      }
      
      result[i][j] = Math.floor(sum / count);
    }
  }
  
  return result;
}`,
    testCases: [
      {
        input: [[[1,1,1],[1,0,1],[1,1,1]]],
        expected: [[0,0,0],[0,0,0],[0,0,0]]
      },
      {
        input: [[[100,200,100],[200,50,200],[100,200,100]]],
        expected: [[137,141,137],[141,138,141],[137,141,137]]
      }
    ]
  },
  {
    id: 115,
    title: "Baseball Game",
    difficulty: "Easy",
    topics: ["Stack", "Arrays"],
    description: "Write a function that calculates the final score after processing a list of operations in a baseball game.",
    starterCode: `function calPoints(ops) {
  // Your code here
}`,
    solution: `function calPoints(ops) {
  const scores = [];
  
  for (const op of ops) {
    if (op === '+') {
      scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
    } else if (op === 'D') {
      scores.push(scores[scores.length - 1] * 2);
    } else if (op === 'C') {
      scores.pop();
    } else {
      scores.push(parseInt(op));
    }
  }
  
  return scores.reduce((sum, score) => sum + score, 0);
}`,
    testCases: [
      {
        input: [["5","2","C","D","+"]],
        expected: 30
      },
      {
        input: [["5","-2","4","C","D","+","+"]],
        expected: 27
      }
    ]
  },
  {
    id: 116,
    title: "Self Dividing Numbers",
    difficulty: "Easy",
    topics: ["Math", "Numbers"],
    description: "Write a function that returns all self-dividing numbers in a range. A self-dividing number is a number that is divisible by every digit it contains.",
    starterCode: `function selfDividingNumbers(left, right) {
  // Your code here
}`,
    solution: `function selfDividingNumbers(left, right) {
  function isSelfDividing(num) {
    const str = num.toString();
    for (const digit of str) {
      if (digit === '0' || num % parseInt(digit) !== 0) {
        return false;
      }
    }
    return true;
  }
  
  const result = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      result.push(i);
    }
  }
  
  return result;
}`,
    testCases: [
      {
        input: [1, 22],
        expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
      },
      {
        input: [47, 85],
        expected: [48, 55, 66, 77]
      }
    ]
  },
  {
    id: 117,
    title: "Prime Number of Set Bits",
    difficulty: "Easy",
    topics: ["Bit Manipulation", "Math"],
    description: "Write a function that counts numbers in a range that have a prime number of set bits (1s) in their binary representation.",
    starterCode: `function countPrimeSetBits(left, right) {
  // Your code here
}`,
    solution: `function countPrimeSetBits(left, right) {
  const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  let count = 0;
  for (let i = left; i <= right; i++) {
    const setBits = i.toString(2).split('1').length - 1;
    if (isPrime(setBits)) count++;
  }
  
  return count;
}`,
    testCases: [
      {
        input: [6, 10],
        expected: 4
      },
      {
        input: [10, 15],
        expected: 5
      }
    ]
  },
  {
    id: 118,
    title: "Shortest Distance to Character",
    difficulty: "Easy",
    topics: ["Arrays", "Two Pointers"],
    description: "Write a function that returns an array of shortest distances from each character to a target character in a string.",
    starterCode: `function shortestToChar(s, c) {
  // Your code here
}`,
    solution: `function shortestToChar(s, c) {
  const n = s.length;
  const result = new Array(n).fill(n);
  let prev = -n;
  
  // Left to right
  for (let i = 0; i < n; i++) {
    if (s[i] === c) prev = i;
    result[i] = i - prev;
  }
  
  // Right to left
  prev = 2 * n;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) prev = i;
    result[i] = Math.min(result[i], prev - i);
  }
  
  return result;
}`,
    testCases: [
      {
        input: ["loveleetcode", "e"],
        expected: [3,2,1,0,1,0,0,1,2,2,1,0]
      },
      {
        input: ["aaab", "b"],
        expected: [3,2,1,0]
      }
    ]
  },
  {
    id: 119,
    title: "Unique Morse Code Words",
    difficulty: "Easy",
    topics: ["Strings", "Hash Set"],
    description: "Write a function that returns the number of different transformations among all words when converted to Morse code.",
    starterCode: `function uniqueMorseRepresentations(words) {
  // Your code here
}`,
    solution: `function uniqueMorseRepresentations(words) {
  const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  
  const transformations = new Set();
  
  for (const word of words) {
    let code = '';
    for (const char of word) {
      code += morse[char.charCodeAt(0) - 97];
    }
    transformations.add(code);
  }
  
  return transformations.size;
}`,
    testCases: [
      {
        input: [["gin", "zen", "gig", "msg"]],
        expected: 2
      },
      {
        input: [["a"]],
        expected: 1
      }
    ]
  },
  {
    id: 120,
    title: "Rotated Digits",
    difficulty: "Easy",
    topics: ["Math", "Dynamic Programming"],
    description: "Write a function that counts numbers from 1 to N that remain valid after rotating 180 degrees (0->0, 1->1, 6->9, 8->8, 9->6).",
    starterCode: `function rotatedDigits(n) {
  // Your code here
}`,
    solution: `function rotatedDigits(n) {
  const isValid = num => {
    let rotatable = false;
    const str = num.toString();
    
    for (const digit of str) {
      if (digit === '3' || digit === '4' || digit === '7') return false;
      if (digit === '2' || digit === '5' || digit === '6' || digit === '9') {
        rotatable = true;
      }
    }
    
    return rotatable;
  };
  
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (isValid(i)) count++;
  }
  
  return count;
}`,
    testCases: [
      {
        input: [10],
        expected: 4
      },
      {
        input: [20],
        expected: 9
      }
    ]
  },
  {
    id: 121,
    title: "Most Common Word",
    difficulty: "Easy",
    topics: ["Strings", "Hash Table"],
    description: "Write a function that returns the most frequent word that is not banned from a paragraph.",
    starterCode: `function mostCommonWord(paragraph, banned) {
  // Your code here
}`,
    solution: `function mostCommonWord(paragraph, banned) {
  const bannedSet = new Set(banned);
  const words = paragraph.toLowerCase()
    .replace(/[!?',;.]/g, ' ')
    .split(/\\s+/)
    .filter(word => word.length > 0);
  
  const frequency = {};
  let maxFreq = 0;
  let result = '';
  
  for (const word of words) {
    if (!bannedSet.has(word)) {
      frequency[word] = (frequency[word] || 0) + 1;
      if (frequency[word] > maxFreq) {
        maxFreq = frequency[word];
        result = word;
      }
    }
  }
  
  return result;
}`,
    testCases: [
      {
        input: ["Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]],
        expected: "ball"
      },
      {
        input: ["a.", []],
        expected: "a"
      }
    ]
  },
  {
    id: 122,
    title: "Positions of Large Groups",
    difficulty: "Easy",
    topics: ["Arrays", "Two Pointers"],
    description: "Write a function that returns the starting and ending positions of all large groups (3 or more consecutive same characters) in a string.",
    starterCode: `function largeGroupPositions(s) {
  // Your code here
}`,
    solution: `function largeGroupPositions(s) {
  const result = [];
  let start = 0;
  
  for (let i = 1; i <= s.length; i++) {
    if (i === s.length || s[i] !== s[i-1]) {
      if (i - start >= 3) {
        result.push([start, i-1]);
      }
      start = i;
    }
  }
  
  return result;
}`,
    testCases: [
      {
        input: ["abbxxxxzzy"],
        expected: [[3,6]]
      },
      {
        input: ["abc"],
        expected: []
      }
    ]
  },
  {
    id: 123,
    title: "Flipping an Image",
    difficulty: "Easy",
    topics: ["Arrays", "Matrix"],
    description: "Write a function that flips a binary matrix horizontally, then inverts it.",
    starterCode: `function flipAndInvertImage(image) {
  // Your code here
}`,
    solution: `function flipAndInvertImage(image) {
  return image.map(row => 
    row.reverse().map(pixel => pixel ^ 1)
  );
}`,
    testCases: [
      {
        input: [[[1,1,0],[1,0,1],[0,0,0]]],
        expected: [[1,0,0],[0,1,0],[1,1,1]]
      },
      {
        input: [[[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]],
        expected: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
      }
    ]
  },
  {
    id: 124,
    title: "Rectangle Overlap",
    difficulty: "Easy",
    topics: ["Math", "Geometry"],
    description: "Write a function that determines if two rectangles overlap. Each rectangle is defined by its bottom-left and top-right coordinates.",
    starterCode: `function isRectangleOverlap(rec1, rec2) {
  // Your code here
}`,
    solution: `function isRectangleOverlap(rec1, rec2) {
  return rec1[0] < rec2[2] && 
         rec2[0] < rec1[2] && 
         rec1[1] < rec2[3] && 
         rec2[1] < rec1[3];
}`,
    testCases: [
      {
        input: [[0,0,2,2], [1,1,3,3]],
        expected: true
      },
      {
        input: [[0,0,1,1], [1,0,2,1]],
        expected: false
      }
    ]
  },
  {
    id: 125,
    title: "Backspace String Compare",
    difficulty: "Easy",
    topics: ["Strings", "Stack", "Two Pointers"],
    description: "Write a function that compares two strings after processing backspace characters (#).",
    starterCode: `function backspaceCompare(s, t) {
  // Your code here
}`,
    solution: `function backspaceCompare(s, t) {
  function processString(str) {
    const stack = [];
    for (const char of str) {
      if (char === '#') {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
    return stack.join('');
  }
  
  return processString(s) === processString(t);
}`,
    testCases: [
      {
        input: ["ab#c", "ad#c"],
        expected: true
      },
      {
        input: ["ab##", "c#d#"],
        expected: true
      }
    ]
  },
  {
    id: 126,
    title: "Goat Latin",
    difficulty: "Easy",
    topics: ["Strings", "Array Methods"],
    description: "Write a function that converts a sentence into Goat Latin. Follow these rules: 1) If a word begins with a vowel, append 'ma' to it. 2) If a word begins with a consonant, remove it and append it to the end, then add 'ma'. 3) Add one letter 'a' to the end of each word per its word index (1-based).",
    starterCode: `function toGoatLatin(sentence) {
  // Your code here
}`,
    solution: `function toGoatLatin(sentence) {
  const words = sentence.split(' ');
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  
  return words.map((word, index) => {
    let newWord = word;
    if (!vowels.has(word[0])) {
      newWord = word.slice(1) + word[0];
    }
    return newWord + 'ma' + 'a'.repeat(index + 1);
  }).join(' ');
}`,
    testCases: [
      {
        input: ["I speak Goat Latin"],
        expected: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
      },
      {
        input: ["The quick brown fox"],
        expected: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa"
      }
    ]
  },
  {
    id: 127,
    title: "Uncommon Words",
    difficulty: "Easy",
    topics: ["Hash Table", "Strings"],
    description: "Write a function that returns an array of uncommon words between two sentences. A word is uncommon if it appears exactly once in total across both sentences.",
    starterCode: `function uncommonWords(s1, s2) {
  // Your code here
}`,
    solution: `function uncommonWords(s1, s2) {
  const count = new Map();
  const words = [...s1.split(' '), ...s2.split(' ')];
  
  for (const word of words) {
    count.set(word, (count.get(word) || 0) + 1);
  }
  
  return words.filter(word => count.get(word) === 1);
}`,
    testCases: [
      {
        input: ["this apple is sweet", "this apple is sour"],
        expected: ["sweet", "sour"]
      },
      {
        input: ["apple apple", "banana"],
        expected: ["banana"]
      }
    ]
  },
  {
    id: 128,
    title: "Sort Array By Parity",
    difficulty: "Easy",
    topics: ["Arrays", "Two Pointers"],
    description: "Write a function that returns an array where all even integers appear before all odd integers while maintaining their relative order.",
    starterCode: `function sortArrayByParity(nums) {
  // Your code here
}`,
    solution: `function sortArrayByParity(nums) {
  return [...nums.filter(n => n % 2 === 0), ...nums.filter(n => n % 2 === 1)];
}`,
    testCases: [
      {
        input: [[3,1,2,4]],
        expected: [2,4,3,1]
      },
      {
        input: [[0]],
        expected: [0]
      }
    ]
  },
  {
    id: 129,
    title: "X of a Kind",
    difficulty: "Easy",
    topics: ["Hash Table", "Math"],
    description: "Write a function that determines if it's possible to divide an array of integers into groups of size X where all numbers in each group are the same.",
    starterCode: `function hasGroupsSizeX(deck) {
  // Your code here
}`,
    solution: `function hasGroupsSizeX(deck) {
  const count = new Map();
  for (const card of deck) {
    count.set(card, (count.get(card) || 0) + 1);
  }
  
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const counts = Array.from(count.values());
  
  return counts.reduce(gcd) >= 2;
}`,
    testCases: [
      {
        input: [[1,2,3,4,4,3,2,1]],
        expected: true
      },
      {
        input: [[1,1,1,2,2,2,3,3]],
        expected: false
      }
    ]
  },
  {
    id: 130,
    title: "Range Sum of BST",
    difficulty: "Easy",
    topics: ["Tree", "DFS"],
    description: "Write a function that returns the sum of values of all nodes with a value in the inclusive range [low, high] in a binary search tree.",
    starterCode: `function rangeSumBST(root, low, high) {
  // Your code here
}`,
    solution: `function rangeSumBST(root, low, high) {
  if (!root) return 0;
  
  let sum = 0;
  if (root.val >= low && root.val <= high) {
    sum += root.val;
  }
  
  if (root.val > low) {
    sum += rangeSumBST(root.left, low, high);
  }
  if (root.val < high) {
    sum += rangeSumBST(root.right, low, high);
  }
  
  return sum;
}`,
    testCases: [
      {
        input: [{ val: 10, left: { val: 5, left: { val: 3 }, right: { val: 7 } }, right: { val: 15, right: { val: 18 } } }, 7, 15],
        expected: 32
      },
      {
        input: [{ val: 10, left: { val: 5 }, right: { val: 15 } }, 5, 15],
        expected: 30
      }
    ]
  },
  {
    id: 131,
    title: "Valid Mountain Array",
    difficulty: "Easy",
    topics: ["Arrays"],
    description: "Write a function that determines if an array represents a valid mountain array. A mountain array has elements that strictly increase until a peak, then strictly decrease.",
    starterCode: `function validMountainArray(arr) {
  // Your code here
}`,
    solution: `function validMountainArray(arr) {
  const n = arr.length;
  let i = 0;
  
  // Walk up
  while (i + 1 < n && arr[i] < arr[i + 1]) {
    i++;
  }
  
  // Peak can't be first or last
  if (i === 0 || i === n - 1) {
    return false;
  }
  
  // Walk down
  while (i + 1 < n && arr[i] > arr[i + 1]) {
    i++;
  }
  
  return i === n - 1;
}`,
    testCases: [
      {
        input: [[2,1]],
        expected: false
      },
      {
        input: [[0,3,2,1]],
        expected: true
      }
    ]
  },
  {
    id: 132,
    title: "DI String Match",
    difficulty: "Easy",
    topics: ["Arrays", "Math", "Two Pointers"],
    description: "Given a string s containing only 'I' (increase) or 'D' (decrease), construct an array that satisfies the conditions: if s[i] == 'I', then perm[i] < perm[i + 1], if s[i] == 'D', then perm[i] > perm[i + 1].",
    starterCode: `function diStringMatch(s) {
  // Your code here
}`,
    solution: `function diStringMatch(s) {
  const n = s.length;
  const result = [];
  let low = 0, high = n;
  
  for (let i = 0; i <= n; i++) {
    result.push(s[i] === 'I' ? low++ : high--);
  }
  
  return result;
}`,
    testCases: [
      {
        input: ["IDID"],
        expected: [0,4,1,3,2]
      },
      {
        input: ["III"],
        expected: [0,1,2,3]
      }
    ]
  },
  {
    id: 133,
    title: "Delete Columns",
    difficulty: "Easy",
    topics: ["Arrays", "Strings"],
    description: "Write a function that returns the number of columns to delete so that each remaining column is sorted in non-decreasing order.",
    starterCode: `function minDeletionSize(strs) {
  // Your code here
}`,
    solution: `function minDeletionSize(strs) {
  if (!strs.length) return 0;
  
  let deleteCount = 0;
  const n = strs[0].length;
  
  for (let col = 0; col < n; col++) {
    for (let row = 1; row < strs.length; row++) {
      if (strs[row][col] < strs[row-1][col]) {
        deleteCount++;
        break;
      }
    }
  }
  
  return deleteCount;
}`,
    testCases: [
      {
        input: [["cba","daf","ghi"]],
        expected: 1
      },
      {
        input: [["a","b"]],
        expected: 0
      }
    ]
  },
  {
    id: 134,
    title: "Largest Time",
    difficulty: "Easy",
    topics: ["String", "Backtracking"],
    description: "Write a function that returns the largest possible time that can be made using four digits. The time should be in 'HH:MM' format.",
    starterCode: `function largestTimeFromDigits(arr) {
  // Your code here
}`,
    solution: `function largestTimeFromDigits(arr) {
  let maxTime = -1;
  
  // Try all permutations
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (j === i) continue;
      for (let k = 0; k < 4; k++) {
        if (k === i || k === j) continue;
        let l = 6 - i - j - k;
        
        // Calculate hours and minutes
        let hours = arr[i] * 10 + arr[j];
        let mins = arr[k] * 10 + arr[l];
        
        if (hours < 24 && mins < 60) {
          maxTime = Math.max(maxTime, hours * 60 + mins);
        }
      }
    }
  }
  
  if (maxTime === -1) return "";
  
  let hours = Math.floor(maxTime / 60);
  let mins = maxTime % 60;
  return \`\${hours.toString().padStart(2, '0')}:\${mins.toString().padStart(2, '0')}\`;
}`,
    testCases: [
      {
        input: [[1,2,3,4]],
        expected: "23:41"
      },
      {
        input: [[5,5,5,5]],
        expected: ""
      }
    ]
  },
  {
    id: 135,
    title: "Repeated N Times",
    difficulty: "Easy",
    topics: ["Arrays", "Hash Table"],
    description: "Write a function that finds the element that appears N times in an array of size 2N. The array contains N+1 unique integers.",
    starterCode: `function repeatedNTimes(nums) {
  // Your code here
}`,
    solution: `function repeatedNTimes(nums) {
  const count = new Map();
  const n = nums.length / 2;
  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
    if (count.get(num) === n) {
      return num;
    }
  }
}`,
    testCases: [
      {
        input: [[1,2,3,3]],
        expected: 3
      },
      {
        input: [[2,1,2,5,3,2]],
        expected: 2
      }
    ]
  },
  {
    id: 30,
    title: "Semantic HTML Structure",
    difficulty: "Easy",
    topics: ["HTML"],
    description: "Create a semantic HTML structure for a blog post page that includes a header with navigation, main content area with an article, and a footer. Use appropriate HTML5 semantic elements.",
    starterCode: `<!-- Your HTML code here -->`,
    solution: `<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Blog Post Title</h1>
    <section>
      <h2>Introduction</h2>
      <p>Blog post content goes here...</p>
    </section>
    <section>
      <h2>Main Content</h2>
      <p>More content here...</p>
    </section>
  </article>
  <aside>
    <h3>Related Posts</h3>
    <ul>
      <li>Related post 1</li>
      <li>Related post 2</li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2025 My Blog. All rights reserved.</p>
</footer>`,
    testCases: [
      {
        input: [],
        expected: "Structure should include header, nav, main, article, section, aside, and footer elements"
      }
    ]
  },
  {
    id: 31,
    title: "Responsive Grid Layout",
    difficulty: "Medium",
    topics: ["CSS"],
    description: "Create a responsive grid layout that displays 4 columns on desktop, 2 columns on tablet, and 1 column on mobile. Use CSS Grid with appropriate media queries.",
    starterCode: `/* Your CSS code here */`,
    solution: `.grid-container {
  display: grid;
  gap: 20px;
  padding: 20px;
  
  /* Mobile first approach */
  grid-template-columns: 1fr;
  
  /* Tablet (768px and up) */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* Desktop (1024px and up) */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.grid-item {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
}`,
    testCases: [
      {
        input: [],
        expected: "Should use grid-template-columns with media queries for responsive layout"
      }
    ]
  },
  {
    id: 32,
    title: "CSS Flexbox Navigation",
    difficulty: "Easy",
    topics: ["CSS"],
    description: "Create a responsive navigation bar using Flexbox that stays centered on desktop and becomes a hamburger menu on mobile.",
    starterCode: `/* Your CSS code here */`,
    solution: `.nav-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #333;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-item a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

/* Mobile styles */
@media (max-width: 768px) {
  .nav-container {
    justify-content: flex-start;
  }
  
  .hamburger {
    display: block;
  }
  
  .nav-list {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #333;
  }
  
  .nav-list.active {
    display: flex;
  }
}`,
    testCases: [
      {
        input: [],
        expected: "Should use flexbox properties and media queries for responsive navigation"
      }
    ]
  },
  {
    id: 33,
    title: "HTML Form Validation",
    difficulty: "Medium",
    topics: ["HTML"],
    description: "Create a registration form with HTML5 validation that includes email, password (with requirements), and phone number fields. Use appropriate input types and validation attributes.",
    starterCode: `<!-- Your HTML code here -->`,
    solution: `<form id="registration-form" novalidate>
  <div class="form-group">
    <label for="email">Email:</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      required
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
    >
  </div>
  
  <div class="form-group">
    <label for="password">Password:</label>
    <input 
      type="password" 
      id="password" 
      name="password" 
      required
      minlength="8"
      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
      title="Must contain at least one number, one uppercase and lowercase letter, one special character, and at least 8 characters"
    >
  </div>
  
  <div class="form-group">
    <label for="phone">Phone Number:</label>
    <input 
      type="tel" 
      id="phone" 
      name="phone" 
      required
      pattern="[0-9]{10}"
      title="Please enter a valid 10-digit phone number"
    >
  </div>
  
  <button type="submit">Register</button>
</form>`,
    testCases: [
      {
        input: [],
        expected: "Should include proper input types, patterns, and validation attributes"
      }
    ]
  },
  {
    id: 34,
    title: "CSS Animation",
    difficulty: "Hard",
    topics: ["CSS"],
    description: "Create a loading spinner animation using CSS. The spinner should rotate continuously and have a pulsing effect.",
    starterCode: `/* Your CSS code here */`,
    solution: `.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  position: relative;
  animation: spin 1s linear infinite, pulse 2s ease-in-out infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.2) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
}

/* Optional wrapper for centering */
.spinner-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`,
    testCases: [
      {
        input: [],
        expected: "Should use @keyframes for rotation and scaling animations"
      }
    ]
  }
]