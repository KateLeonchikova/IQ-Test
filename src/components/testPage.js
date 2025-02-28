import { el } from "redom";
import questions from "../assets/questions.json";
import loaderImg from "../assets/images/loader.svg";

export function renderTestPage() {
  let currentQuestionIndex = 0;

  const testPage = el(
    "main",
    { className: "test" },
    el(
      "div",
      { className: "container" },
      el(
        "div",
        { className: "test__container" },
        el(
          "div",
          { className: "test__progress" },
          el("progress", {
            className: "test__progress-bar",
            value: 0,
            max: questions.length + 1,
          })
        ),
        el(
          "div",
          { className: "test__wrapper" },
          el("div", { className: "test__question" }),
          el("div", { className: "test__answers" })
        ),
        el(
          "button",
          {
            className: "test__button",
            onclick: nextQuestion,
            disabled: true,
          },
          "Далее"
        )
      )
    )
  );

  function updateButtonState() {
    const selectedAnswers = testPage.querySelectorAll(
      ".test__answer_input-radio:checked, .test__answer_input-color:checked, .test__answer_input-block:checked"
    );

    const button = testPage.querySelector(".test__button");

    if (selectedAnswers.length > 0) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }

  function displayQuestion() {
    const questionContainer = testPage.querySelector(".test__question");
    const answersContainer = testPage.querySelector(".test__answers");

    questionContainer.innerHTML = "";
    answersContainer.innerHTML = "";

    const question = questions[currentQuestionIndex];

    questionContainer.appendChild(
      el("p", { className: "test__question_text" }, question.question)
    );

    if (question.image) {
      questionContainer.appendChild(
        el("img", {
          className: "test__question_image",
          src: question.image,
          alt: "Вопрос",
        })
      );
    }

    question.answers.forEach((answer, index) => {
      if (question.type === "text") {
        answersContainer.classList.add("test__answers-radio");
      } else {
        answersContainer.classList.remove("test__answers-radio");
      }

      if (question.type === "color") {
        answersContainer.classList.add("test__answers-color");
      } else {
        answersContainer.classList.remove("test__answers-color");
      }

      if (question.type === "image-block") {
        answersContainer.classList.add("test__answers-block");
      } else {
        answersContainer.classList.remove("test__answers-block");
      }

      const answerWrapper = el("div", {
        className: `${
          question.type === "text"
            ? "test__answer_wrapper-radio"
            : question.type === "color"
            ? "test__answer_wrapper-color"
            : "test__answer_wrapper-block"
        }`,
      });

      const radio = el("input", {
        type: "radio",
        name: `question-${currentQuestionIndex}`,
        value: answer,
        id: `answer-${currentQuestionIndex}-${index}`,
        className: `${
          question.type === "text"
            ? "test__answer_input-radio"
            : question.type === "color"
            ? "test__answer_input-color"
            : "test__answer_input-block"
        }`,
        onchange: updateButtonState,
      });

      const label = el(
        "label",
        {
          for: `answer-${currentQuestionIndex}-${index}`,
          className: `${
            question.type === "text"
              ? "test__answer_label-radio"
              : question.type === "color"
              ? "test__answer_label-color"
              : "test__answer_label-block"
          }`,
          style:
            question.type === "color" ? `background-color: ${answer};` : "",
        },
        question.type !== "color" ? answer : ""
      );

      answerWrapper.appendChild(radio);
      answerWrapper.appendChild(label);

      answersContainer.appendChild(answerWrapper);
    });

    const progressBar = testPage.querySelector(".test__progress-bar");
    progressBar.value = currentQuestionIndex + 1;

    updateButtonState();
  }

  function handleAnswer() {
    const selectedAnswers = Array.from(
      testPage.querySelectorAll(
        ".test__answer_input-radio:checked, .test__answer_input-color:checked, .test__answer_input-block:checked"
      )
    ).map((checkbox) => checkbox.value);

    console.log(`Вы выбрали: ${selectedAnswers.join(", ")}`);
  }

  function nextQuestion() {
    handleAnswer();
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      showLoadingIndicator();
    }
  }

  function showLoadingIndicator() {
    const container = testPage.querySelector(".test__container");
    const wrapper = testPage.querySelector(".test__wrapper");
    const button = testPage.querySelector(".test__button");
    const progressBar = testPage.querySelector(".test__progress-bar");

    container.classList.add("test__container_loading");
    progressBar.value = currentQuestionIndex + 1;
    button.remove();

    wrapper.innerHTML = "";

    const loader = el(
      "div",
      { className: "loading" },
      el("h2", { className: "loading__title" }, "Обработка результатов"),
      el("img", {
        src: loaderImg,
        className: "loading__img",
      })
    );

    const loadingText = el(
      "p",
      { className: "loading__text" },
      "Определение стиля мышления "
    );

    loader.appendChild(loadingText);
    wrapper.appendChild(loader);

    let loadingTextContent = "Определение стиля мышления ";

    const addDot = () => {
      const dot = el("span", { className: "loading__text_dot" }, ".");
      loadingText.appendChild(dot);
    };

    setInterval(() => {
      addDot();
    }, 100);

    setTimeout(() => {
      window.location.href = "/results";
    }, 3000);
  }

  setTimeout(displayQuestion, 0);

  return testPage;
}
