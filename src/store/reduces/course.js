const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando com react",
      lessons: [
        { id: 1, title: "Primeira aula" },
        { id: 2, title: "Segunda aula" },
        { id: 3, title: "Terceira aula" },
      ],
    },
    {
      id: 2,
      title: "Iniciando com redux",
      lessons: [
        { id: 1, title: "Primeira aula" },
        { id: 2, title: "Segunda aula" },
        { id: 3, title: "Terceira aula" },
      ],
    },
  ],
};

const course = (state = INITIAL_STATE, action) => {
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }
  return state;
};

export default course;
