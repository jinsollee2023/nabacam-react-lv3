import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { openModal1, openModal2 } from "./redux/modal1Reducer";
import { styled } from "styled-components";

const Modal1 = () => {
  const State = useSelector((state) => {
    return state.modal1Reducer;
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
    return state.modal1Reducer;
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
  const State = useSelector((state) => {
    return state.modal1Reducer;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>Button</h2>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div>
        <h2>Input</h2>
        이름: <input />
        가격: <input />
        <button></button>
      </div>
      <div>
        <h2>Modal</h2>
        <button onClick={() => dispatch(openModal1(!State.modal1))}>
          modal1
        </button>
        {
          State.modal1 == true ? <Modal1 /> : null //기계역할
        }
        <button onClick={() => dispatch(openModal2(!State.modal2))}>
          modal2
        </button>
        {
          State.modal2 == true ? <Modal2 /> : null //기계역할
        }
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
