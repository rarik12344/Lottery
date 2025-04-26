exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      type: "frame",
      title: "Neon Lottery",
      image: "https://i.ibb.co/NdV9qyFh/NEONLOTTERY.jpg",
      buttons: [
        { 
          label: "🎫 Participate", 
          action: "post_redirect",
          target: "https://neonlottery.netlify.app/"
        },
        { 
          label: "🏆 Winners", 
          action: "link", 
          target: "https://neonlottery.netlify.app/#winners" 
        }
      ]
    }),
    headers: { 
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  };
};
