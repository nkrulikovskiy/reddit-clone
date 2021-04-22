export const PostTypeColor: PostColorProps = {
  portfolio: "#Ed71AA",
  codeReview: "#F9D658",
  helpWanted: "#D72E33",
  discussion: "#48A4A4",
};

export const mockPost: PostType[] = [
  {
    title: "Hello Members of r/React",
    passedTime: "3 months",
    poster: "u/GennaroIsGod",
    postCategory: { title: "Portfolio", postType: "portfolio" },
    voteCnt: 20,
  },
  {
    title: "I just finished my React-based Civil War era wargame!",
    externalLink: "georgenagel.github.io/ThatRob..",
    passedTime: "9 hours",
    poster: "u/jean_rouch",
    postCategory: { title: "Portfolio", postType: "portfolio" },
    voteCnt: 10,
  },
  {
    title: "Travel(Location sharing) app using React and Node.js",
    passedTime: "6 hours",
    poster: "u/nesikim",
    postCategory: { title: "Project/Code Review", postType: "codeReview" },
    voteCnt: 3,
  },
  {
    title: "useState not causing rerender",
    passedTime: "5 hours",
    poster: "u/atomicwombat00",
    postCategory: { title: "Help wanted", postType: "helpWanted" },
    voteCnt: 1,
  },
  {
    title: "React searching functionity",
    passedTime: "9 hours",
    poster: "u/Abdulrazzak_Alrazzak",
    postCategory: { title: "Help wanted", postType: "helpWanted" },
    voteCnt: 2,
  },
  {
    title:
      "We're making a social networking app in React Native! Please fill out our survery if interested! Details inside!",
    passedTime: "19 hours",
    poster: "u/tifapp",
    postCategory: { title: "Project/code Review", postType: "codeReview" },
    voteCnt: 20,
  },

  {
    title: "Make sure Keys are Truly Unique!",
    passedTime: "19 hours",
    poster: "u/iamaperson3133",
    postCategory: { title: "General Discussion", postType: "discussion" },
    voteCnt: 13,
  },

  {
    title: "New to react from vanilla js, how do i interact with the dom?",
    passedTime: "19 hours",
    poster: "u/hiamtorak",
    postCategory: { title: "help Wanted", postType: "helpWanted" },
    voteCnt: 13,
  },
];
