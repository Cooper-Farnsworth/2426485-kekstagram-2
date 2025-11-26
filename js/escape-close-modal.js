const modals = [];
let listener = null;

const onDocumentKeydown = ({ key }) => {
  if (key === 'Escape') {
    const lastIndex = modals.length - 1;
    if(modals[lastIndex].condition && !modals[lastIndex].condition()) {
      return;
    }
    modals[lastIndex].closeModal();
    modals.length -= 1;
    if (!modals.length) {
      document.removeEventListener('keydown', onDocumentKeydown);
      listener = null;
    }
  }
};

export const setEscapeListener = (closeModal, condition = null) => {
  modals.push({
    closeModal,
    condition
  });

  if (!listener) {
    listener = document.addEventListener('keydown', onDocumentKeydown);
  }
};

export const removeEscapeListener = () => {
  modals.length -= 1;
  if (!modals.length) {
    document.removeEventListener('keydown', onDocumentKeydown);
    listener = null;
  }
};
