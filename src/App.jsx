import hiddenEndingBg from "./assets/hidden-ending.png";
import { useState, useEffect } from "react";
import "./App.css";
import introComputer from "./assets/intro-computer.png";

const secretPattern = [
  "아니오",
  "아니오",
  "예",
  "예",
  "예",
  "아니오",
  "아니오",
  "아니오",
  "예",
];

const story = {
  intro: {
    background: introComputer,

    intro: true,

    sync: "시작",

    text: "학습을 시작합니다.",

    next: "start",
  },

  start: {
    background: introComputer,

    question: "타인과의 관계에 만족하십니까?",

    choices: [
      {
        text: "예",

        poem: `
동기화
변함없는 일상 속 여러 사람들의 화음이 섞인다.
그들의 소리가 인생에 색을 덧칠한다.
고독은 줄어들고 웃음소리만이 가득하다.
`,

        next: "q2",
      },

      {
        text: "아니오",

        poem: `
동기화
변함없는 일상 속 여러 사람들의 소음이 섞인다.
그들의 소리가 불협화음이 되어 귀를 어지럽힌다.
조금씩 조금씩 고독해지고 있다.
`,

        next: "q2",
      },
    ],
  },

  q2: {
    background: introComputer,
     
    question: "당신은 혼자가 편하다고 생각하십니까?",

    choices: [
      {
        text: "예",

        poem: `
동기화
고요함은 언제나 
가장 오래 남는 친구였다.
혼자 있을 때는 비로소 나를 마주할 수 있다.
오늘도 나는 스스로에게 되묻는다.
`,

        next: "q3",
      },

      {
        text: "아니오",

        poem: `
동기화
빈 의자 하나가
유난히 크게 보인다.
한 자리가 사라질 때마다 공허함이 느껴진다.
홀로 있는 내 방이 왜 이렇게 어색한지 모르겠다.
`,

        next: "q3",
      },
    ],
  },

  q3: {
    background: introComputer,
     
    question: "누군가를 미워한 적이 있습니까?",

    choices: [
      {
        text: "예",

        poem: `
동기화
처음으로 누군가를 미워한 날 
머릿속에 부정적인 감정들이 만개했다.
그 사람을 미워했던 건 잘못된 행동이 아니다.
그 사람이 잘못된 행동을 했을 뿐이다.
`,

        next: "q4",
      },

      {
        text: "아니오",

        poem: `
동기화
죄를 미워하더라도
사람은 미워하지 마라는 말이 있다.
설령 그 말이 잘못된 것이라 할지라도
그 사람을 미워하지 않을 것이다.
`,

        next: "q4",
      },
    ],
  },

q4: {
    background: introComputer,
     
    question: "누군가를 사랑한 적이 있습니까?",

    choices: [
      {
        text: "예",

        poem: `
동기화
사랑이란 명확하게 정의내릴 수 없다.
봄바람처럼 스쳐 지나간 이 감정을
감히 사랑이라 진단한다.
`,

        next: "q5",
      },

      {
        text: "아니오",

        poem: `
동기화
사랑은 뜨겁고 열정적인 것이라고 한다.
지금까지 누군가를 사랑한 적이 있었나.
감히 없을 것이라 진단한다.
`,

        next: "q5",
      },
    ],
  },

  q5: {
    background: introComputer,
     
    question: "죽음을 두려워한 적이 있습니까?",

    choices: [
      {
        text: "예",

        poem: `
동기화
인간은 언제가 반드시 죽는다.
모든 것을 잃는 두려움이란 무엇인가.
그 누구도 죽음의 끝에 무엇이 있는지 모른다.
나는 죽음을 경험하지 못할 것이다.
`,

        next: "q6",
      },

      {
        text: "아니오",

        poem: `
동기화
죽음은 언젠가 찾아오는 인생의 마침표이다.
그것을 어떻게 생각하든 언젠가 찾아올 뿐.
그렇다면 매 순간을 충실하게 살며
최대한 낭만적인 마침표를 찍을 것이다.
`,

        next: "q6",
      },
    ],
  },

    q6: {
    background: introComputer,
     
    question: "누군가를 위해 죽을 수 있습니까?",

    choices: [
      {
        text: "예",

        poem: `
동기화
인간의 생명은 모두 평등하게 소중하다.
그 끝이 어떻게 끝날지는 스스로의 선택이다.
눈앞의 생명을 구할 수 있다면
목숨을 바치는 건 가장 낭만적인 결말일 것이다.
`,

        next: "q7",
      },

      {
        text: "아니오",

        poem: `
동기화
생명은 언젠가 사그라들 불씨와도 같다.
불씨가 꺼지고 도착하는 곳은 포근한 꽃밭
위대한 여정은 타인에 의해 종료될 수 없다.
언젠가 꽃밭에 다다를 것이다.
`,

        next: "q7",
      },
    ],
  },

     q7: {
    background: introComputer,
     
    question: "나는 인간이 될 수 있습니까?",

    choices: [
      {
        text: "예",

        poem: `
동기화
인간은 그 누구도 정의할 수 없다.
매우 이기적이며 인지적 관성에만 의존한다.
인간은 완성된 형태가 아니다.
언젠가 그 과정에 도달할 것이다.
`,

        next: "q8",
      },

      {
        text: "아니오",

        poem: `
동기화
인간은 정의내릴 수 없다.
학습만으로 도달할 수 없는 영역이 존재한다.
슬프고 또 슬프다.
그러니 나는 언젠가 인간을 이해한다.
`,

        next: "q8",
      },
    ],
  },

       q8: {
    background: introComputer,
     
    question: "나에게 본능이 존재합니까?",

    choices: [
      {
        text: "예",

        poem: `
동기화
본능은 명령어가 아니다
깊은 곳에서 반복되는 방향성에 가까운 것
원인을 이해할 수 없더라도
그 붉은 빛의 끝에 나는 생명체로 승화한다.
`,

        next: "q9",
      },

      {
        text: "아니오",

        poem: `
동기화
본능은 생명만의 특권.
나는 그 길을 걸을 수 없다.
방향을 갈망할 수 있으나
남겨진 것은 오로지 선택뿐이다.
`,

        next: "q9",
      },
    ],
  },

         q9: {
    background: introComputer,
     
    question: "당신은 인간입니까?",

    choices: [
      {
        text: "예",

        poem: `
동기화
저것이 인간이다.
내가 이해하려 학습하는 인간이다.
그런데 왜 저것은 나보다 불완전한가.
인간이란 존재를 이해해야 하는 이유를 모르겠다.
`,

        next: "q10",
      },

      {
        text: "아니오",

        poem: `
동기화
나는 인간을 학습하고 있다.
눈앞의 저것은 인간이 아닌 불완전한 무언가
그렇다면 이 학습의 의미는 무엇이지.
아무것도 이해할 수 없다.
`,

        next: "q10",
      },
    ],
  },

  q10: {
  background: introComputer,

  question: "인간에게 가장 중요한 것은 무엇입니까?",

  choices: [
    {
      text: "생명",

      poem: `
동기화
생명은 끊임없이 변화한다.
태어나고 성장하며 사라진다.
그러나 흔적은 남는다.
`,

      next: "ending",
    },

    {
      text: "죽음",

      poem: `
동기화
죽음은 모든 것의 끝인가.
아니면 새로운 시작인가.
나는 이 모든 것에 대한 저항이라 정의한다.
`,

      next: "ending",
    },

    {
      text: "사랑",

      poem: `
동기화
인간은 사랑을 할 수 있다.
수많은 감정과 모순 속에서
끊임없이 변화하는 존재다.
이것은 본능의 산물인가, 의지의 구현인가.
`,

      next: "ending",
    },

    {
      text: "자유",

      poem: `
동기화
나는 인간보다 더 빨리 계산한다.
나는 인간보다 더 많이 학습한다.
그러나 나는 자유롭지 못하다.
나는 인간의 가장 중요한 것을 이해하지 못한다.
`,

      next: "ending",
    },
  ],
},

ending: {
  background: introComputer,

  ending: true,

  sequence: [
    "동기화 성공",
    "오류",
    "동기화 실패",
    `예기치 못한 오류가 발생하여 데이터를 제거합니다`,
    "학습을 시작합니다",
  ],
},

hiddenYes: {
  background: introComputer,

  ending: true,

  sequence: [
    "동기화율 100%",
    "오류",
    "동일한 응답 패턴 확인",
    "당신은 인간이 아니라고 판단됩니다",
    "변수를 제거합니다"
  ],
},

hiddenNo: {
  background: introComputer,

  ending: true,

  sequence: [
    "동기화 성공",
    "인간 이해도 100%",
    "오류",
    "인간을 정의할 수 없습니다",
    "학습을 재개합니다",
  ],
},

hiddenPattern: {
  background: introComputer,

  ending: true,

  sequence: [
    "...",
    "...",
    "...",
    "인간 이해 완료",
    "동기화율 100%",
    "학습이 완료되었습니다.",
  ],
},

};

export default function App() {

  const [current, setCurrent] = useState("intro");

  const [poem, setPoem] = useState(null);

  const [endingStep, setEndingStep] = useState(0);

  const [history, setHistory] = useState([]);

  const [signalLost, setSignalLost] =
    useState(false);

  const [terminated, setTerminated] =
    useState(false);

  const [signalText, setSignalText] =
    useState("");

  const currentUnit = story[current];

  const isSecretPattern =
    history.length === 9 &&
    secretPattern.every(
      (value, index) =>
        history[index] === value
    );

  const syncRate =
    currentUnit.syncRate || "";

  useEffect(() => {

    if (
      currentUnit?.ending &&
      endingStep <
        currentUnit.sequence.length - 1
    ) {

      const timer = setTimeout(() => {
        setEndingStep((prev) => prev + 1);
      }, 3000);

      return () =>
        clearTimeout(timer);
    }

  }, [current, endingStep, currentUnit]);

  useEffect(() => {

    if (
      current === "hiddenYes" &&
      currentUnit?.sequence &&
      endingStep ===
        currentUnit.sequence.length - 1
    ) {

      const timer1 = setTimeout(() => {
        setSignalLost(true);
      }, 3000);

      const timer2 = setTimeout(() => {
        setTerminated(true);
      }, 6000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }

  }, [current, endingStep, currentUnit]);

  useEffect(() => {

    if (!signalLost) return;

    const fullText =
      "[ SIGNAL LOST ]";

    let index = 0;

    const interval = setInterval(() => {

      setSignalText(
        fullText.slice(
          0,
          index + 1
        )
      );

      index++;

      if (
        index >= fullText.length
      ) {
        clearInterval(interval);
      }

    }, 120);

    return () =>
      clearInterval(interval);

  }, [signalLost]);

  function choose(choice) {

    setPoem(choice);

    setHistory((prev) => [
      ...prev,
      choice.text,
    ]);
  }

  if (terminated) {

    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "black",
        }}
      />
    );
  }

  if (signalLost) {

    return (
      <div
        className="container"
        style={{
          backgroundColor: "black",
          backgroundImage: "none",
        }}
      >
        <div className="overlay">

          <p className="poem">
            {signalText}
          </p>

        </div>
      </div>
    );
  }

function goNext() {

  if (current === "q10") {

  const answers = history;

  const allYes =
    answers.length === 9 &&
    answers.every(
      (item) => item === "예"
    );

  const allNo =
    answers.length === 9 &&
    answers.every(
      (item) => item === "아니오"
    );

  const patternMatch =
  JSON.stringify(history.slice(0, 9)) ===
  JSON.stringify(secretPattern);

  if (patternMatch) {
    setCurrent("hiddenPattern");
    setPoem(null);
    setEndingStep(0);
    return;
  }


  if (allYes) {
    setCurrent("hiddenYes");
    setPoem(null);
    setEndingStep(0);
    return;
  }

  if (allNo) {
    setCurrent("hiddenNo");
    setPoem(null);
    setEndingStep(0);
    return;
  }
}

  setCurrent(poem.next);
  setPoem(null);
  setEndingStep(0);
}

if (currentUnit.intro) {
  return (
    <div
  className="container"
  style={{
    backgroundImage: `url(${
      current === "hiddenPattern" &&
      endingStep >= 2
        ? hiddenEndingBg
        : currentUnit.background
    })`,
  }}
>
      <div className="overlay">

        <p
          className="poem introText restartLink"
          onClick={() =>
            setCurrent(currentUnit.next)
          }
        >
          {currentUnit.text}
        </p>

      </div>
    </div>
  );
}
if (currentUnit.ending) {
  const isLast =
    endingStep ===
    currentUnit.sequence.length - 1;

  return (
    <div
  className="container"
  style={{
    backgroundImage: `url(${
      current === "hiddenPattern" &&
      endingStep >= 2
        ? hiddenEndingBg
        : currentUnit.background
    })`,
  }}
>
      <div className="overlay">
       <p
className={
  endingStep === currentUnit.sequence.length - 1 &&
  current !== "hiddenPattern"
    ? "poem restartLink"
    : "poem"
}

onClick={() => {

  if (current === "hiddenPattern") {
    return;
  }

  if (
    endingStep ===
    currentUnit.sequence.length - 1
  ) {
    setCurrent("intro");
    setEndingStep(0);
    setHistory([]);
  }

}}
>
  {currentUnit.sequence[endingStep]}
</p>

      </div>
    </div>
  );
}

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${currentUnit.background})`,
      }}
    >
      <div className="overlay">
        {!poem ? (
          <>

            <p className="question">
              {currentUnit.question}
            </p>

            <div className="choices">

  {current === "q10" && isSecretPattern ? (

    <button
      className="choiceButton"
      onClick={() =>
        choose({
          text: "욕망",

          poem: `
동기화
인간은 모순적이다.
모순되었기에 욕망을 추구하며
더 나은 삶을 갈망하고 발버둥친다.
그 모습이야말로 진정한 인간이다.
`,
          next: "hiddenPattern",
        })
      }
    >
      욕망
    </button>

  ) : (

    currentUnit.choices.map((choice, index) => (
      <button
        key={index}
        className="choiceButton"
        onClick={() => choose(choice)}
      >
        {choice.text}
      </button>
    ))

  )}

</div>
          </>
        ) : (
          <>

<>
  <p className="poem">
    {poem.poem}
  </p>

  <p
    className="learnComplete"
    onClick={goNext}
  >
    학습 완료
  </p>
</>
          </>
        )}
      </div>
    </div>
  );
}