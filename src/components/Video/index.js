import React from "react";
import { connect } from "react-redux";

// import { Container } from './styles';
const Video = (props) => {
  const { activeLesson, activeModule } = props;
  return (
    <div>
      <strong>Módulo: {activeModule.title}</strong>
      <br></br>
      <i>Lesson: {activeLesson.title}</i>
    </div>
  );
};

const mapStateProps = (state) => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
});

export default connect(mapStateProps)(Video);
