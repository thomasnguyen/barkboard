export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

const sounds = {
  door: [
    {
      label: "doorbell",
      audioFile: "/mp3s/doorbell1.mp3",
    },
    {
      label: "doorknock",
      audioFile: "/mp3s/doorknock.mp3",
    },
  ],
};

export default ({ query: { categoryId } }, res) => {
  console.log("re", sounds[categoryId]);
  res.status(200).json(sounds[categoryId]);
};
