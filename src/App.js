import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

// function App() {
//to return a single element
// return (
//     <h1>Hello from the app component</h1>
// )

//to return mulitple elements we used something called
//fragments denoted by <></>
//we can also use a div but that will put an extra
//unnecessary div outside
//     <>
//         <h1>Hello from the app component</h1>
//         <p>Along with a paragraph</p>
//     </>
// )

// return (
//     <div className="container">
//         <h1>{title}</h1>
//         <p>{body}</p>

//         <div className="Comments">
//             <h3>Comments ({comments.length})</h3>
//             <ul>
//                 {comments.map((comment, index) => (
//                     <li key={index}>{comment.text}</li>
//                 ))}
//             </ul>
//         </div>
//     </div>
// )

//To return dynamic values
// const loading = false;
// const showComments = true;

// const title = "Blog Post"
// const body = "This is my blog Post"
// const comments  = [
//     {id : 1, text : "Comment One"},
//     {id : 2, text : "Comment Two"},
//     {id : 3, text : "Comment Three"},
// ]

// const commentBlock = (
//     <div className="Comments">
//             <h3>Comments ({comments.length})</h3>
//             <ul>
//                 {comments.map((comment, index) => (
//                     <li key={index}>{comment.text}</li>
//                 ))}
//             </ul>
//         </div>
// )

// if(loading)
//     return <h1>Loading...</h1>

//  return (
//     <div className="container">
//         <h1>{title}</h1>
//         <p>{body}</p>

//         {showComments && commentBlock}

//     </div>
// )

//Using Props -attributes/arguements passed
//Match with 1 in Header.jsx
//   return (
//     <>
//       <Header text="Hello World" />
//       <div className="Container">
//         <h1>My App</h1>
//       </div>
//   );
//     </>
// }

//   return (
//     <>
//       <Header />
//       <div className="container">
//         <h1>My App</h1>
//       </div>
//     </>
//   );
// }

function App() {

  //previously delete feedback was here before using context

  //previously add feedback was here before using context

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
