import { styles } from '../styles';

const Breathingex = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-400">
      <h1 className="text-white text-4xl font-bold mb-8">Breathing Excercises</h1>
      <div className="flex justify-center space-x-4 bg-blue-400">
        <div className="bg-blue-400 p-2">
          <iframe
            width="400"
            height="300"
            src="https://www.youtube.com/embed/j-1n3KJR1I8"
            title="YouTube video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="bg-blue-400 p-2">
          <iframe
            width="400"
            height="300"
            src="https://www.youtube.com/embed/w2Mi0a5dDhc"
            title="YouTube video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="bg-blue-400 p-2">
          <iframe
            width="400"
            height="300"
            src="https://www.youtube.com/embed/FJJazKtH_9I"
            title="YouTube video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Breathingex;
