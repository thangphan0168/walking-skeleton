let count = $state(0);

const useCountState = () => {
  return {
    get count() {
      return count;
    },
    increment: () => count++,
  };
};

export { useCountState };
