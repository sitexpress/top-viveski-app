module.exports = {
    apps: [
      {
        name: "Ensysta",
        script: "yarn preview",
        // args: " serve dist/ --single -p 6001", // Correct argument format for serving an SPA on port 3000
        env: {
          PORT: 6001,
        },
      },
    ],
  };