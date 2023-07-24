import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ listData, deleteQ, updateQ }) {
  function handleDeleteData(data) {
    deleteQ(data);
  }

  function handleUpdate(data) {
    updateQ(data);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {listData.map((item) => {
          return (
            <QuestionItem
              key={item.id}
              question={item}
              passQ={handleDeleteData}
              answerData={handleUpdate}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
