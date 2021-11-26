/////контролируемые формы////////
// import { Component } from "react";

// class Form extends Component {
//   state = {
//     name: "",
//     age: "",
//   };

//   showMessage = () => {
//     const { name, age } = this.state;
//     alert(`${name}: ${age}`);
//     this.setState({ name: "", age: "" });
//   };
//   onChange = (e) => {
//     this.setState({ [e.currentTarget.name]: e.currentTarget.value });
//   };
//   render() {
//     return (
//       <form>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.onChange}
//           ></input>
//         </label>
//         <label>
//           Age:
//           <input
//             type="text"
//             name="age"
//             value={this.state.age}
//             onChange={this.onChange}
//           ></input>
//         </label>
//         <button type="button" onClick={this.showMessage}>
//           Show message
//         </button>
//       </form>
//     );
//   }
// }

// export default Form;

////// 2 вариант //////////
/////не контролируемые формы////////

// import React from "react";

// class Form extends React.Component {
//   nameRef = React.createRef();
//   ageRef = React.createRef();

//   showMessage = () => {
//     alert(`${this.nameRef.current.value}: ${this.ageRef.current.value}`);
//   };

//   render() {
//     return (
//       <form>
//         <label>
//           Name:
//           <input type="text" name="name" ref={this.nameRef}></input>
//         </label>
//         <label>
//           Age:
//           <input type="text" name="age" ref={this.ageRef}></input>
//         </label>
//         <button type="button" onClick={this.showMessage}>
//           Show message
//         </button>
//       </form>
//     );
//   }
// }
// export default Form;

///// 3 вариант ////

// import { useRef } from "react";

// const Form = () => {
//   const nameRef = useRef(null);
//   const ageRef = useRef(null);

//   const showMessage = () => {
//     alert(`${nameRef.current.value}: ${ageRef.current.value}`);
//   };

//   return (
//     <form>
//       <label>
//         Name:
//         <input type="text" name="name" ref={nameRef}></input>
//       </label>
//       <label>
//         Age:
//         <input type="text" name="age" ref={ageRef}></input>
//       </label>
//       <button type="button" onClick={showMessage}>
//         Show message
//       </button>
//     </form>
//   );
// };
// export default Form;

//// Новый компоненет /////
import { useState, useEffect, useLayoutEffect } from "react";

const Span = () => {
  const [number, setNumber] = useState(0);
  useLayoutEffect(() => {
    if (number === 0) {
      setNumber(Math.random());
    }
  }, [number]);

  console.log(number);
  return (
    <p
      onClick={() => {
        setNumber(0);
      }}
    >
      {number}
    </p>
  );
};
export default Span;
