const toggleLesson = (module, lesson) => {
  return {
    type: "TOGGLE_LESSON",
    module,
    lesson,
  };
};

export { toggleLesson };
