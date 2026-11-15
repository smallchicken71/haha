// This file contains two independent JavaScript features.
// Feature 1: add/remove study tasks and calculate the weekly total.
// Feature 2: check quiz answers and display a score.

// getElementById finds an element in the HTML page.
const studyForm = document.getElementById("study-form");

// This code only runs on study.html, where study-form exists.
if (studyForm) {
  const courseInput = document.getElementById("course-name");
  const hoursInput = document.getElementById("study-hours");
  const studyList = document.getElementById("study-list");
  const totalElement = document.getElementById("total-hours");
  const adviceElement = document.getElementById("study-advice");
  const messageElement = document.getElementById("study-message");
  let totalHours = 0;

  // Update the number and advice whenever the list changes.
  function updateStudyTotal() {
    totalElement.textContent = totalHours + " 小時";
    if (totalHours === 0) {
      adviceElement.textContent = "加入課程後，這裡會顯示時間安排提醒。";
    } else if (totalHours <= 10) {
      adviceElement.textContent = "目前安排比較輕鬆，可以留下彈性時間。";
    } else if (totalHours <= 20) {
      adviceElement.textContent = "記得把讀書時間分散到一週不同天。";
    } else {
      adviceElement.textContent = "這週安排較多，記得確認是否也留了休息時間。";
    }
  }

  studyForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Do not reload the page when the form is submitted.
    const course = courseInput.value.trim();
    const hours = Number(hoursInput.value);
    if (course === "" || !Number.isInteger(hours) || hours < 1 || hours > 30) {
      messageElement.textContent = "請輸入課程名稱，以及 1 到 30 的整數時數。";
      return;
    }

    document.getElementById("empty-study")?.remove();
    const li = document.createElement("li");
    const name = document.createElement("strong");
    const time = document.createElement("span");
    const removeButton = document.createElement("button");

    name.textContent = course;
    time.textContent = hours + " 小時";
    time.className = "time-label";
    removeButton.type = "button";
    removeButton.textContent = "刪除";
    removeButton.className = "remove-btn";
    removeButton.setAttribute("aria-label", "刪除" + course);

    // Clicking remove decreases the total and deletes only this item.
    removeButton.addEventListener("click", function () {
      totalHours -= hours;
      li.remove();
      updateStudyTotal();
      if (studyList.children.length === 0) {
        const empty = document.createElement("li");
        empty.id = "empty-study";
        empty.className = "empty-tip";
        empty.textContent = "還沒有課程，先加入第一門吧！";
        studyList.appendChild(empty);
      }
    });

    li.appendChild(name);
    li.appendChild(time);
    li.appendChild(removeButton);
    studyList.appendChild(li);
    totalHours += hours;
    updateStudyTotal();
    messageElement.textContent = "已加入「" + course + "」。";
    courseInput.value = "";
    hoursInput.value = "";
    courseInput.focus();
  });
}

const quizForm = document.getElementById("quiz-form");

// This code only runs on quiz.html, where quiz-form exists.
if (quizForm) {
  const quizResult = document.getElementById("quiz-result");
  // Correct choices: question 1=b, 2=a, 3=c, 4=b.
  const correctAnswers = { q1: "b", q2: "a", q3: "c", q4: "b" };

  quizForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(quizForm);
    let correctCount = 0;

    for (const question in correctAnswers) {
      const selected = formData.get(question);
      if (selected === null) {
        quizResult.textContent = "還有題目沒回答喔！請先完成四題。";
        quizResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
        return;
      }
      if (selected === correctAnswers[question]) {
        correctCount++;
      }
    }

    const score = correctCount * 25;
    let feedback = "繼續加油，再看看網站的生活建議！";
    if (score === 100) {
      feedback = "太棒了！你已經掌握這些校園生活基本觀念。";
    } else if (score >= 50) {
      feedback = "做得不錯！再複習一下其他題目的觀念。";
    }
    quizResult.textContent = "你的分數：" + score + " / 100（答對 " + correctCount + " 題）。" + feedback;
    quizResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  document.getElementById("quiz-reset").addEventListener("click", function () {
    quizResult.textContent = "完成四題後按下「送出答案」，這裡就會顯示結果。";
  });
}
