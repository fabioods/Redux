import React from "react";
import { connect } from "react-redux";
import * as CourseActions from "../../store/actions/course";
import { bindActionCreators } from "redux";
// import { Container } from './styles';

function Sidebar(props) {
  const { modules, toggleLesson } = props;
  return (
    <aside>
      {modules.map((module) => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.id}>
                {lesson.title}
                <button
                  style={{ marginLeft: 10 }}
                  onClick={() => toggleLesson(module, lesson)}
                >
                  Selecionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

const mapStateToProps = (state) => ({
  modules: state.course.modules,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CourseActions, dispatch);

// const mapDispatchToProps = (dispatch) => ({
//   toggleLesson: (module, lesson) =>
//     dispatch(CourseActions.toggleLesson(module, lesson)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
