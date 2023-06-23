import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { openModal1, openModal2 } from "./redux/modules/modalReducer";
import { styled } from "styled-components";
import { changeName, changePrice } from "./redux/modules/inputReducer";
import {
  changeContent1,
  changeContent2,
  openSelect1,
  openSelect2,
} from "./redux/modules/selectReducer";

const Select1 = () => {
  const dispatch = useDispatch();

  const State = useSelector((state) => {
    return state.selectReducer;
  });

  // const handleSelect1Content1 = () => {
  //   dispatch(changeContent1("리액트"));
  //   dispatch(openSelect1(!State.select1));
  // };

  // const handleSelect1Content2 = () => {
  //   dispatch(changeContent1("자바"));
  //   dispatch(openSelect1(!State.select1));
  // };

  // const handleSelect1Content3 = () => {
  //   dispatch(changeContent1("스프링"));
  //   dispatch(openSelect1(!State.select1));
  // };

  // const handleSelect1Content4 = () => {
  //   dispatch(changeContent1("리액트네이티브"));
  //   dispatch(openSelect1(!State.select1));
  // };

  const test = (content) => {
    dispatch(changeContent1(content));
    dispatch(openSelect1(!State.select1));
  };
  const contentArray = ["리액트", "자바", "스프링", "리액트네이티브"];
  return (
    <div>
      {contentArray.map((item) => {
        return (
          <p
            key={item}
            onClick={() => {
              test(item);
            }}
          >
            {item}
          </p>
        );
      })}
      {/* <p
        onClick={() => {
          test("리액트");
        }}
      >
        리액트
      </p>
      <p
        onClick={() => {
          test("자바");
        }}
      >
        자바
      </p>
      <p
        onClick={() => {
          test("스프링");
        }}
      >
        스프링
      </p>
      <p
        onClick={() => {
          test("리액트네이티브");
        }}
      >
        리액트네이티브
      </p> */}
    </div>
  );
};

const Select2 = () => {
  const dispatch = useDispatch();
  const State = useSelector((state) => {
    return state.selectReducer;
  });

  const handleSelect2Content1 = () => {
    dispatch(changeContent2("리액트"));
    dispatch(openSelect2(!State.select2));
  };

  const handleSelect2Content2 = () => {
    dispatch(changeContent2("자바"));
    dispatch(openSelect2(!State.select2));
  };

  const handleSelect2Content3 = () => {
    dispatch(changeContent2("스프링"));
    dispatch(openSelect2(!State.select2));
  };

  const handleSelect2Content4 = () => {
    dispatch(changeContent2("리액트네이티브"));
    dispatch(openSelect2(!State.select2));
  };

  return (
    <div>
      <p onClick={handleSelect2Content1}>리액트</p>
      <p onClick={handleSelect2Content2}>자바</p>
      <p onClick={handleSelect2Content3}>스프링</p>
      <p onClick={handleSelect2Content4}>리액트네이티브</p>
    </div>
  );
};

const Modal1 = () => {
  const State = useSelector((state) => {
    return state.modalReducer;
  });
  const dispatch = useDispatch();

  return (
    <St.ModalDiv>
      <St.Modal>
        <p>
          닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        </p>
        <button onClick={() => dispatch(openModal1(!State.modal1))}>
          닫기
        </button>
        <button>확인</button>
      </St.Modal>
    </St.ModalDiv>
  );
};

const Modal2 = () => {
  const State = useSelector((state) => {
    return state.modalReducer;
  });
  const dispatch = useDispatch();

  return (
    <St.ModalDiv onClick={() => dispatch(openModal2(!State.modal2))}>
      <St.Modal>
        <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요. </p>
        <button onClick={() => dispatch(openModal2(!State.modal2))}>X</button>
      </St.Modal>
    </St.ModalDiv>
  );
};

const App = () => {
  const { modalReducer, inputReducer, selectReducer } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputReducer).replaceAll('"', " "));
    // alert(`{name: ${inputReducer.name} price: ${inputReducer.price}}`);
    console.log(inputReducer.name);
  };

  const handleChange = (event) => {
    // dispatch(changePrice(event.target.value.replace(/[^0-9]/g, "")));
    if (event.target.value.length === 0) {
      dispatch(changePrice(0));
    } else {
      dispatch(changePrice(event.target.value));
    }
    // .replace(/[^0-9]/g, "")
    // if(event.target.value.length>1){실행...}else (event.target.value.length===0)(초기값..)
  };
  console.log(inputReducer.price);
  return (
    <div>
      <div>
        <h2>Button</h2>
        <button onClick={() => alert("버튼을 만들어보세요")}>
          Large Primary Button
        </button>
        <button>Midium</button>
        <button>Small</button>
      </div>
      <div>
        <button onClick={() => prompt("어렵나요?")}>
          Large Negative Button
        </button>
        <button>Midium</button>
        <button>Small</button>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Input</h2>
        이름:{" "}
        <input
          type="text"
          value={inputReducer.name}
          onChange={(e) => {
            dispatch(changeName(e.target.value));
          }}
        />
        가격:{" "}
        <input
          value={inputReducer.price}
          // .toString()
          // .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          onChange={handleChange}
        />
        <button>저장</button>
      </form>

      <div>
        <h2>Modal</h2>
        <button onClick={() => dispatch(openModal1(!modalReducer.modal1))}>
          open modal
        </button>
        {
          modalReducer.modal1 == true ? <Modal1 /> : null //기계역할
        }
        <button onClick={() => dispatch(openModal2(!modalReducer.modal2))}>
          open modal
        </button>
        {
          modalReducer.modal2 == true ? <Modal2 /> : null //기계역할
        }
      </div>
      <div>
        <h2>Select</h2>
        <div>
          <button onClick={() => dispatch(openSelect1(!selectReducer.select1))}>
            <span>{selectReducer.content1}</span>
            <span>▼</span>
          </button>
          {selectReducer.select1 == true ? <Select1 /> : null}
        </div>
        <div>
          <button onClick={() => dispatch(openSelect2(!selectReducer.select2))}>
            <span>{selectReducer.content2}</span>
            <span>▼</span>
          </button>
          {selectReducer.select2 == true ? <Select2 /> : null}
        </div>
      </div>
    </div>
  );
};
export default App;

const St = {
  ModalDiv: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.6);

    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Modal: styled.div`
    width: 500px;
    height: 300px;
    margin: 0 auto;
    border-radius: 0.5rem;
    background-color: #fff;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show 0.3s;
    overflow: hidden;
    padding: 20px;
  `,
};
