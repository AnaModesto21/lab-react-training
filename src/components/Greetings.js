export const Greetings = ({ lang, children }) => {
  let greeting;
  switch (lang) {
    case 'en':
      greeting = 'Hello';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'Hello';
  }
  return (
    <div>
      {greeting} {children}
    </div>
  );
};

export default Greetings;
