# Quiz App!

Quiz app that says wow when you get a right answer

- What's the freezing point in fahreinheit (32)
- What is the fastest aquatic animal? Sailfish
- What planet is closest to the sun ? Mercury
- What does Francis means when he says toaster? Means medium understanding

# Data Structures

## Question

```jsx
const question = {
  id: 1,
  question: "",
  answer: "",
};
```

## Questions

```jsx
const questions = [question, question];
```

## Wow (API)

```jsx
[
  {
    movie: "Hall Pass",
    year: 2011,
    release_date: "2011-02-25",
    director: "Peter Farrelly and Bobby Farrelly",
    character: "Rick Mills",
    movie_duration: "01:51:35",
    timestamp: "01:26:28",
    full_line: "Wow.",
    current_wow_in_movie: 6,
    total_wows_in_movie: 6,
    poster:
      "https://images.ctfassets.net/bs8ntwkklfua/6jFEUPmYiKifaTuC2cugm8/22087834d091445fc9393cdd9163a901/Hall_Pass_Poster.jpg",
    video: {
      "1080p":
        "https://videos.ctfassets.net/bs8ntwkklfua/V9JGQ3qgfufm4vUkzyJYI/6182dce642b9f31ab698d7ab448688bd/Hall_Pass_Wow_6_1080p.mp4",
      "720p":
        "https://videos.ctfassets.net/bs8ntwkklfua/3RkKyI4NFfakkYzUEO83hG/21d29c6b7695d1b072084a92e05b6283/Hall_Pass_Wow_6_720p.mp4",
      "480p":
        "https://videos.ctfassets.net/bs8ntwkklfua/54Zd2b5BQrQi4hvZ8IAg8j/9a719307cdf6525257e0dba0afa9ceee/Hall_Pass_Wow_6_480p.mp4",
      "360p":
        "https://videos.ctfassets.net/bs8ntwkklfua/7Jo3JA6zl3vzAiIkriLLOR/5f488e12cdc1c7792484f098732b790d/Hall_Pass_Wow_6_360p.mp4",
    },
    audio:
      "https://assets.ctfassets.net/bs8ntwkklfua/7mZxDvl1IsR95NAg8mKj0t/43a0b44fd325c1de3f86cf6cec3a80d5/Hall_Pass_Wow_6.mp3",
  },
];
```

# Mock Data

```jsx
const questions = [
  { question: "What's the freezing point in fahreinheit", answer: "32" },
  { question: "What is the fastest aquatic animal?", answer: " Sailfish" },
  { question: "What planet is closest to the sun ?", answer: " Mercury" },
  {
    question: "What does Francis means when he says toaster?",
    answer: "Means medium understanding",
  },
];
```

# HTML Structure

- body
  - header
    - h1
  - form
    - p question
    - input answer
    - p answer
    - button

# Component Structure

- App
  - Header
  - QuestionForm (state: questions)

# Data map
