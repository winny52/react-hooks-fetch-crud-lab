import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestion(data));
  }, []);

  function newQuestion(data) {
    setQuestion([...questions, data]);
  }

  function deleteBtn(data) {
    const updatedData = questions.filter((item) => {
      return item.id !== data.id;
    });
    setQuestion(updatedData);
  }

  function handleAnswerUpdate(data) {
    const updatedData = questions.map((item) => {
      if (item.id === data.id) {
        return data;
      } else {
        return item;
      }
    });
    setQuestion(updatedData);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddItem={newQuestion} />
      ) : (
        <QuestionList
          updateQ={handleAnswerUpdate}
          deleteQ={deleteBtn}
          listData={questions}
        />
      )}
    </main>
  );
}

export default App;
