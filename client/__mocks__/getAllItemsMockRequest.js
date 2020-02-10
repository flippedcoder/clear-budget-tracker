const items = {
    43: {name: 'pencil'},
    57: {name: 'burger'},
};

const mockRequest = () => {
    return new Promise((resolve) => {
      process.nextTick(() =>
        resolve(items)
      );
    });
  }

export default mockRequest;