const getSounds = (categoryId) => {
  const sounds = {
    door: [
      {
        label: "doorbell",
        audioFile: "",
      },
    ],
  };

  return new Promise((resolve, reject) => {
    resolve([
      {
        icon:
          "https://user-images.githubusercontent.com/14298038/110393480-75956a80-801f-11eb-8247-6743055bd67a.png",
        label: "door",
      },
      {
        icon:
          "https://user-images.githubusercontent.com/14298038/110393478-75956a80-801f-11eb-9bd0-7f1e9f96da41.png",
        label: "dogs",
      },
      {
        icon:
          "https://user-images.githubusercontent.com/14298038/110393476-74fcd400-801f-11eb-82a7-290e76d5adbf.png",
        label: "cars",
      },
    ]);
  });
};
