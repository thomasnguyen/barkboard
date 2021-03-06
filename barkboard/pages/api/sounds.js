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

export default (req, res) => {
  const { categoryId } = req.query;
  res.status(200).json(sounds[categoryId]);
};
