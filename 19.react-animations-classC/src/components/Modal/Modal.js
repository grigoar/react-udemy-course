import React from 'react';
// import Transition from 'react-transition-group/cjs/Transition';
import CSSTransition from 'react-transition-group/cjs/CSSTransition';

import './Modal.css';

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  console.log(props.show);
  const cssClasses = [
    'Modal',
    props.show === 'entering'
      ? 'ModalOpen'
      : props.show === 'exiting'
      ? 'ModalClosed'
      : null,
  ];
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames="fade-slide"
      //   classNames={{
      //     enter: '',
      //     enterActive: 'ModalOpen',
      //     exit: '',
      //     exitActive: 'ModalClose',
      //   }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};
//   return (
//     <Transition
//       in={props.show}
//       timeout={animationTiming}
//       mountOnEnter
//       unmountOnExit
//     >
//       {(state) => {
//         const cssClasses = [
//           'Modal',
//           state === 'entering'
//             ? 'ModalOpen'
//             : state === 'exiting'
//             ? 'ModalClosed'
//             : null,
//         ];
//         return (
//           <div className={cssClasses.join(' ')}>
//             <h1>A Modal</h1>
//             <button className="Button" onClick={props.closed}>
//               Dismiss
//             </button>
//           </div>
//         );
//       }}
//     </Transition>
//   );
// };

export default modal;
